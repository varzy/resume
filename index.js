// (function () {
//   // bear
//   var doc_ols = document.getElementsByTagName("ol");
//   for (i = 0; i < doc_ols.length; i++) {
//     var ol_start = doc_ols[i].getAttribute("start") - 1;
//     doc_ols[i].setAttribute("style", "counter-reset:ol " + ol_start + ";");
//   }
// })();

window.onload = function () {
  // bear
  var doc_ols = document.getElementsByTagName("ol");
  for (i = 0; i < doc_ols.length; i++) {
    var ol_start = doc_ols[i].getAttribute("start") - 1;
    doc_ols[i].setAttribute("style", "counter-reset:ol " + ol_start + ";");
  }

  // custom
  if (window.console) {
    console.log('NOTICE HERE:');
    console.log('当前是使用 Bear 导出的临时方案。未来会重新开发');
  }
};
