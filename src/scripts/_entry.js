/**
 * scss && css part
 */
// require("normalize.css");
// wingcss's npm module has not `.card` classes, so include it by self
require("../libs/wing.css");
require("../styles/preset.scss");
require("../styles/style.scss");

/**
 * js part
 */
import Vue from 'vue';
import Vuex from 'vuex';
require("./main");

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    currentLang: "cn"
  },
  mutations: {
    changeLang(state, newLang){
      state.currentLang = newLang;
      alert(state.currentLang);
    }
  }
});

Vue.component("nav-bar", require("./components/nav-bar.vue"));
Vue.component("page-header", require("./components/page-header.vue"));
Vue.component("sub-info", require("./components/sub-info.vue"));
Vue.component("sub-skill", require("./components/sub-skill.vue"));

const app = new Vue({
  el: "#app",
  store
});
