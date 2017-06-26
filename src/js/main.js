// include libs
const $ = require("jquery");

// main part
$(function () {
  let cnLang = require("../lang/cn.json");
  let enLang = require("../lang/en.json");
  loadLang(cnLang);

  $("#to_cn").click(function () {
    loadLang(cnLang);
  });

  $("#to_en").click(function () {
    loadLang(enLang);
  });

  function loadLang(langData) {
    $(langData.header).each(function (index, value) {
      $("#name").html(value.name);
      $("#intro").html(value.intro);
    });
  }


});
