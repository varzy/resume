<template>
  <div>

    <div v-for="skill in skills">
      <div class="progress">
        <div class="inner" :style="{ width: skill.progressWidth + '%' }">
          <em class="skill-name">{{ skill.skillName }}</em>
        </div>
      </div>
      <ul class="words">
        <li v-for="word in skill.words">{{ word }}</li>
      </ul>
    </div>

  </div>
</template>


<style lang="scss">
  .progress {
    width: 100%;
    height: 3.2rem;
    background-color: #e1e1e1;
    .inner {
      color: #fafafa;
      height: 3.2rem;
      line-height: 3.2rem;
      background-color: #444;
      .skill-name {
        font-size: 2rem;
        padding-left: 3.2rem;
      }
    }
  }

  .words {
    padding-top: 1.2rem;
    padding-left: 1.2rem;
    li {
      margin-bottom: 0.2rem;
    }

  }
</style>


<script>
  let cn = require("../../lang/cn.json");
  let skillsObj = cn.main.skill;
  export default{
    data(){
      return {
        skills: skillsObj
      }
    }

  }
</script>
