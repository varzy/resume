<template>
  <header class="full-screen">
    <div class="text-center">
      <img :src="myAvatar" alt="my avatar" class="avatar">
      <h1>{{ headerInfo.myName }}</h1>
      <em>{{ headerInfo.simpleIntro }}</em>
    </div>
  </header>
</template>


<style scoped lang="scss">
  header {
    display: flex;
    justify-content: center;
    align-items: center;
    .avatar {
      -webkit-border-radius: 50%;
      -moz-border-radius: 50%;
      border-radius: 50%;
      border: .5rem solid #fff;
      width: 20rem;
    }
  }
</style>


<script>
  export default{
    name: 'page-header',
    data () {
      return {
        myAvatar: require('../assets/myAvatar.png'),
        headerInfo: this.getHeaderInfo()
      }
    },
    methods: {
      getHeaderInfo () {
        // ! TODO: fix the require method
        let lang = require('../lang/cn.json')
        return lang.pageHeader
      }
    }
  }
</script>
