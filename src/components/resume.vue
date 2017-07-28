<template>
  <div id="app">
    <!--<nav-bar></nav-bar>-->
    <page-header></page-header>
    <sub-info></sub-info>
    <sub-skill></sub-skill>
    <sub-project></sub-project>
    <sub-selffeel></sub-selffeel>
    <page-footer></page-footer>
  </div>
</template>


<script>
  import NavBar from './nav-bar.vue'
  import PageHeader from './page-header.vue'
  import SubInfo from './sub-info.vue'
  import SubProject from './sub-project.vue'
  import SubSkill from './sub-skill.vue'
  import SubSelffeel from './sub-selffeel.vue'
  import pageFooter from './page-footer.vue'

  export default {
    name: 'Resume',
    components: {
      'nav-bar': NavBar,
      'page-header': PageHeader,
      'sub-info': SubInfo,
      'sub-project': SubProject,
      'sub-skill': SubSkill,
      'sub-selffeel': SubSelffeel,
      'page-footer': pageFooter
    }
  }
</script>
