<template>

  <section>
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
        let lang = require('../lang/cn.json')
        return lang.main.infos
      }
    }
  }
</script>


<!--<div class="row infos">-->

<!--<div class="col">-->
<!--<table>-->
<!--<tr v-for="info in infos.left">-->
<!--<td class="text-right tab-left">{{ info.key }}</td>-->
<!--<td class="text-left tab-right">{{ info.val }}</td>-->
<!--</tr>-->
<!--</table>-->
<!--</div>-->
<!--<div class="col">-->
<!--<table>-->
<!--<tr v-for="info in infos.right">-->
<!--<td class="text-right tab-left">{{ info.key }}</td>-->
<!--<td class="text-left tab-right">{{ info.val }}</td>-->
<!--</tr>-->
<!--</table>-->
<!--</div>-->

<!--</div>-->


<!--<style lang="scss">-->
<!--.infos {-->
<!--table tr {-->
<!--height: 2.8rem;-->
<!--line-height: 2.8rem;-->
<!--}-->
<!--.tab-left {-->
<!--width: 33.33333333%;-->
<!--}-->
<!--.tab-right {-->
<!--padding-left: 3.2rem;-->
<!--width: 66%;-->
<!--}-->
<!--}-->
<!--</style>-->


<!--<script>-->


<!--</script>-->
