<template>
  <section class="container">
    <h2>PROJECT</h2>
    <div class="cards">
      <div class="card" v-for="project in projects">
        <h5 class="card-header">{{ project.title }}</h5>
        <p class="card-body">{{ project.intro }}</p>
        <div class="card-footer center text-center">
          <a :href="getLinkAddress(project.linkAddress)"
             target="_blank">
            {{ project.linkName }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>


<script>
  export default {
    name: 'SubProject',
    data () {
      return {
        projects: window.words.subProject
      }
    },
    methods: {
      getLinkAddress (linkAddress) {
        return linkAddress
      }
    }
  }
</script>
