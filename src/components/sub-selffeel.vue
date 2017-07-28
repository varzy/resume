<template>
  <section class="container">
    <h2>SELF FEEL</h2>

    <div class="content">
      <p v-for="selffeel in selffeels">{{ selffeel }}</p>
    </div>
  </section>
</template>


<script>
  export default {
    name: 'SubSelffell',
    data () {
      return {
        selffeels: window.words.subSelffeel
      }
    }
  }
</script>
