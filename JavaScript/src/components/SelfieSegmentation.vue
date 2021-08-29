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

  export default {
    name: 'SelfieSegmentation',

    data () {
      return {
      }
    },

    methods: {
    },

    mounted() {
    },
  }
</script>

<style lang="scss" scoped>
</style>