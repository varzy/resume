<template>
  <section class="container">
    <h2>INFO</h2>

    <div class="content">
      <div class="row">
        <ul class="col group" v-for="group in infos">
          <li class="group-info" v-for="info in group">
            <div class="group-info-key text-right">{{ info.key }}</div>
            <div class="group-info-val" v-html="info.val"></div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>


<style scoped lang="scss">
@media screen and (min-width: 46rem) {
  .group {
    &-info-key {
      min-width: 9.5rem;
    }
  }
}

@media screen and (max-width: 46rem) {
  .group {
    &-info-key {
      min-width: 8rem;
    }
  }
}

.col {
  margin: 0;
}

.group {
  &-info {
    display: flex;
    justify-content: space-between;
    padding: .2rem 0;
    &:first-child {
      padding-top: 0;
    }
    &:last-child {
      padding-bottom: 0;
    }
    &-key {
      flex: 1;
      padding-right: 2rem;
      min-width: 8rem;
    }
    &-val {
      flex: 3;
      a {
        &:link,
        &:visited {
          color: #333
        }
        &:hover {
          color: #b7472a;
        }
      }
    }
  }
}
</style>


<script>
export default {
  name: 'SubInfo',
  data () {
    return {
      infos: window.words.subInfo
    }
  }
}
</script>
