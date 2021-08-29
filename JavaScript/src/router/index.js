import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Test from '@/components/Test'
import Camera from '@/components/Camera'
import FaceDetection from '@/components/FaceDetection'
import FaceMesh from '@/components/FaceMesh'
import Hands from '@/components/Hands'
import Holistic from '@/components/Holistic'
import Objectron from '@/components/Objectron'
import Pose from '@/components/Pose'
import SelfieSegmentation from '@/components/SelfieSegmentation'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/Test',
      name: 'Test',
      component: Test
    },
    {
      path: '/Camera',
      name: 'Camera',
      component: Camera
    },
    {
      path: '/FaceDetection',
      name: 'FaceDetection',
      component: FaceDetection
    },
    {
      path: '/FaceMesh',
      name: 'FaceMesh',
      component: FaceMesh
    },
    {
      path: '/Hands',
      name: 'Hands',
      component: Hands
    },
    {
      path: '/Holistic',
      name: 'Holistic',
      component: Holistic
    },
    {
      path: '/Objectron',
      name: 'Objectron',
      component: Objectron
    },
    {
      path: '/Pose',
      name: 'Pose',
      component: Pose
    },
    {
      path: '/SelfieSegmentation',
      name: 'SelfieSegmentation',
      component: SelfieSegmentation
    },
  ]
})
