$(function() {

  // wechat qr code
  if (window.innerWidth > 829) {
    $(".wechatqr-link").click(function() {
      $("#wechatqr").show();
      $("#bg-grey").show();
      $("#btn-close").show();
    })

    $("#btn-close").click(function() {
      $("#wechatqr").hide();
      $("#bg-grey").hide();
      $("#btn-close").hide();
    })

  }









});