<template>
  <div class="container">
    <video class="input_video"></video>
    <canvas class="output_canvas" width="1280px" height="720px"></canvas>
  </div>
</template>

<script>
  import { Camera } from '@mediapipe/camera_utils'
  import {
    ControlPanel,
    FPS,
    StaticText,
    Toggle,
    Slider
    } from "@mediapipe/control_utils";
  import {
    FACEMESH_LIPS,
    POSE_LANDMARKS,
    FACEMESH_FACE_OVAL,
    FACEMESH_LEFT_EYEBROW,
    FACEMESH_LEFT_EYE,
    FACEMESH_TESSELATION,
    FACEMESH_RIGHT_EYE,
    FACEMESH_RIGHT_EYEBROW,
    drawConnectors,
    drawLandmarks,
    POSE_CONNECTIONS,
    HAND_CONNECTIONS,
    lerp
    } from "@mediapipe/drawing_utils";
  import { FaceDetection } from '@mediapipe/face_detection'

  export default {
    name: 'FaceDetection',

    mounted() {
      const videoElement = document.getElementsByClassName('input_video')[0];
      const canvasElement = document.getElementsByClassName('output_canvas')[0];
      const canvasCtx = canvasElement.getContext('2d');

      function onResults(results) {
        // Draw the overlays.
        canvasCtx.save();
        canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
        canvasCtx.drawImage(
            results.image, 0, 0, canvasElement.width, canvasElement.height);
        if (results.detections.length > 0) {
          drawingUtils.drawRectangle(
              canvasCtx, results.detections[0].boundingBox,
              {color: 'blue', lineWidth: 4, fillColor: '#00000000'});
          drawingUtils.drawLandmarks(canvasCtx, results.detections[0].landmarks, {
            color: 'red',
            radius: 5,
          });
        }
        canvasCtx.restore();
      }

      const faceDetection = new FaceDetection({locateFile: (file) => {
        return `https://cdn.jsdelivr.net/npm/@mediapipe/face_detection@0.0/${file}`;
      }});

      faceDetection.setOptions({
        modelSelection: 0,
        minDetectionConfidence: 0.5
      });

      faceDetection.onResults(onResults);

      const camera = new Camera(videoElement, {
        onFrame: async () => {
          await faceDetection.send({image: videoElement});
        },
        width: 1280,
        height: 720
      });

      camera.start();
    },
  }
</script>

<style lang="scss" scoped>
</style>