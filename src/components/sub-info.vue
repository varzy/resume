<template>

  <section class="container">
    <h1>INFO</h1>
    <div class="row">
      <div class="col">
        <ul class="keys">
          <li v-for="info in infos.group1">{{ info.key }}
          </li>
        </ul>
        <ul class="vals">
          <li v-for="info in infos.group1">{{ info.val }}</li>
        </ul>
      </div>
      <div class="col">
        <ul class="keys">
          <li v-for="info in infos.group2">{{ info.key }}</li>
        </ul>
        <ul class="vals">
          <li v-for="info in infos.group2">{{ info.val }}</li>
        </ul>
      </div>
    </div>

  </section>
</template>


<style scoped lang="scss">
  ul {
    padding-left: 2.4rem;
    li {
      /*padding: 0.2rem 0;*/
      &:first-child {
        padding-top: 0;
      }
      &:last-child {
        padding-bottom: 0;
      }
    }
  }

  .keys, .vals {
    box-sizing: border-box;
    display: inline-block;
  }

  .vals {
    list-style: none;
  }
</style>


<script>
  export default{
    name: 'SubInfo',
    data () {
      return {
        infos: this.getInfos()
      }
    },
    methods: {
      getInfos () {
        let lang = require('../lang/cn_old.json')
        return lang.subInfo
      }
    }
  }
</script>
