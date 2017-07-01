<template>
  <div class="row infos">

    <div class="col">
      <table>
        <tr v-for="info in infos.left">
          <td class="text-right tab-left">{{ info.key }}</td>
          <td class="text-left tab-right">{{ info.val }}</td>
        </tr>
      </table>
    </div>
    <div class="col">
      <table>
        <tr v-for="info in infos.right">
          <td class="text-right tab-left">{{ info.key }}</td>
          <td class="text-left tab-right">{{ info.val }}</td>
        </tr>
      </table>
    </div>

  </div>
</template>


<style lang="scss">
  .infos {
    table tr {
      height: 2.8rem;
      line-height: 2.8rem;
    }
    .tab-left {
      width: 33.33333333%;
    }
    .tab-right {
      padding-left: 3.2rem;
      width: 66%;
    }
  }
</style>


<script>
  export default{
    data(){
      return {
        infos: this.getInfos(),
      }
    },
    methods: {
      getInfos(){
        let lang = require("../../lang/" + this.$store.state.currentLang + ".json");
        return lang.main.info;
      }
    }
  }

</script>
