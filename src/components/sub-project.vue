<template>
  <section class="container">
    <h1>PROJECT</h1>
    <div class="cards">
      <div class="card" v-for="project in projects">
        <h5 class="card-header">{{ project.name }}</h5>
        <p class="card-body">{{ project.intro }}</p>
        <div
          class="card-footer center text-center"><p>{{ project.linkName }}</p>
        </div>
      </div>
    </div>
  </section>
</template>


<script>
  export default{
    name: 'SubProject',
    data () {
      return {
        projects: this.getProjects()
      }
    },
    methods: {
      getProjects () {
        let lang = require('../lang/cn_old.json')
        return lang.main.projects
      }
    }
  }
</script>
