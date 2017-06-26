/**
 * scss && css part
 */
// require("normalize.css");
// wingcss's npm module has not `.card` classes, so include it by self
require("../lib/wing.css");
require("../scss/preset.scss");
require("../scss/style.scss");

/**
 * js part
 */
const Vue = require("vue");
require("./main");

Vue.component("sub-skill", require("./components/sub-skill.vue"));

new Vue({
  el: "#app"
});
