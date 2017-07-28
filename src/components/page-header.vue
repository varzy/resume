<template>
  <header class="full-screen container">
    <div class="text-center">
      <img :src="myAvatar" alt="my avatar" class="avatar">
      <h1>{{ headerInfo.title }}</h1>
      <em>{{ headerInfo.intro }}</em>
    </div>
  </header>
</template>


<style scoped lang="scss">
  @media screen and (min-width: 46rem) {
    .avatar{
      width: 20rem;
    }
  }

  @media screen and (max-width: 46rem) {
    .avatar{
      width: 16rem;
    }
  }

  header {
    display: flex;
    justify-content: center;
    align-items: center;
    .avatar {
      -webkit-border-radius: 50%;
      -moz-border-radius: 50%;
      border-radius: 50%;
      border: .5rem solid #fff;
    }
  }
</style>


<script>
  export default{
    name: 'PageHeader',
    data () {
      return {
        myAvatar: require('../assets/my_avatar.png'),
        headerInfo: this.getHeaderInfo()
      }
    },
    methods: {
      getHeaderInfo () {
        return window.words.pageHeader
      }
    }
  }
</script>
