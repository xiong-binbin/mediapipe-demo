<template>
  <div class="index">
    <div class="md-layout md-gutter">
      <div class="md-layout-item">
        <md-list>
          <md-list-item target="_blank" href="/FaceDetection">FaceDetection</md-list-item>
        </md-list>
      </div>
      <div class="md-layout-item">
        <md-list>
          <md-list-item target="_blank" href="/FaceMesh">FaceMesh</md-list-item>
        </md-list>
      </div>
      <div class="md-layout-item">
        <md-list>
          <md-list-item target="_blank" href="/Hands">Hands</md-list-item>
        </md-list>
      </div>
      <div class="md-layout-item">
        <md-list>
          <md-list-item target="_blank" href="/Holistic">Holistic</md-list-item>
        </md-list>
      </div>
      <div class="md-layout-item">
        <md-list>
          <md-list-item target="_blank" href="/Objectron">Objectron</md-list-item>
        </md-list>
      </div>
      <div class="md-layout-item">
        <md-list>
          <md-list-item target="_blank" href="/Pose">Pose</md-list-item>
        </md-list>
      </div>      
      <div class="md-layout-item">
        <md-list>
          <md-list-item target="_blank" href="/SelfieSegmentation">SelfieSegmentation</md-list-item>
        </md-list>
      </div>  
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Index',
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
h1 {
  font-size: 32px;
  padding-top: 20px;
  padding-bottom: 20px;
}

.index {
  padding: 50px 100px 50px 100px;
}

.other {
  margin-top: 160px;
}

.md-list {
  background-color: rgba(0, 0, 0, 0);
}

.md-layout-item {
  padding-left: 0px !important;
  padding-right: 0px !important;
}
</style> 