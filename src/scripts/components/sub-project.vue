<template>
  <div>

    <div class="cards" v-for="project in projects">
      <div class="card">
        <h5 class="card-header">{{ project.name }}</h5>
        <p class="card-body">{{ project.intro }}</p>
        <div class="card-footer center text-center">
          <p>
            <button class="outline">
              <!-- fix link -->
              <a href=""
                 target="_blank">{{ project.linkName }}</a>
            </button>
          </p>
        </div>

      </div>
    </div>
  </div>
</template>


<style lang="scss"></style>


<script>
  export default{
    data(){
      return {
        projects: this.getProjects(),
      }
    },
    methods: {
      getProjects(){
        let lang = require("../../lang/" + this.$store.state.currentLang + ".json");
        return lang.main.project;
      }
    }
  }
</script>
