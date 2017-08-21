<template>
  <header class="full-screen container">
    <div class="text-center">
      <img src="../assets/avatar_fake.png" alt="my avatar" class="avatar">
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
    font-weight: 200;
    font-family: 'Bellefair', serif;
    display: flex;
    justify-content: center;
    align-items: center;
    .avatar {
      -webkit-border-radius: 50%;
      -moz-border-radius: 50%;
      border-radius: 50%;
      border: .5rem solid #fff;
    }
    em {
      font-size: 2rem;
      word-spacing: .4rem;
      letter-spacing: .1rem;
    }
  }
</style>


<script>
  export default{
    name: 'PageHeader',
    data () {
      return {
        // myAvatar: require('../assets/avatar_true.png'),
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
