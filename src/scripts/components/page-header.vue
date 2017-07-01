<template>

  <header class="full-screen">
    <div class="page-header text-center">
      <!-- ! TODO: replace to true avatar -->
      <img :src="avatar" alt="avatar" class="avatar">
      <h1>{{ headerInfo.myName }}</h1>
      <em>{{ headerInfo.simpleIntro }}</em>
    </div>
  </header>

</template>


<style lang="scss">
  header {
    display: flex;
    justify-content: center;
    align-items: center;
    .page-header {
      .avatar {
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        -o-border-radius: 50%;
        -ms-border-radius: 50%;
        border-radius: 50%;
        border: .5rem solid #fff;
        width: 20rem;
      }
    }
  }
</style>


<script>
  export default{
    data(){
      return {
        headerInfo: this.getHeaderInfo(),
        avatar: require("../../images/avatar_zy.png")
      }
    },
    methods: {
      getHeaderInfo(){
        let lang = require("../../lang/" + this.$store.state.currentLang +
          ".json");
        return lang.header;
      }
    }

  }
</script>