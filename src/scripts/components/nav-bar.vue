<template>

  <nav class="nav">
    <a href="javascript:void(0)" class="nav-item" @click="tocn">中</a>
    <span>/</span>
    <a href="javascript:void(0)" class="nav-item" @click="toen">ENG</a>
    <span class="hide-phone hide-tablet">/</span>
    <a href="" class="nav-item hide-phone hide-tablet">Word</a>
    <span class="hide-phone hide-tablet">/</span>
    <a href="" class="nav-item hide-phone hide-tablet">PDF</a>
  </nav>

</template>


<style lang="scss">
  nav.nav {
    position: absolute;
    right: 0;
    font-size: 1.6rem;
  }
</style>


<script>
  export default{
    methods: {
      tocn(){
        this.$store.commit("changeLang", "cn");
      },
      toen(){
        this.$store.commit("changeLang", "en");
      }
    }
  }

</script>
