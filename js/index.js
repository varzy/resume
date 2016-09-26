$(function() {

  // wechat qr code
  if (window.innerWidth > 829) {
    $(".wechatqr-link").click(function() {
      $("#wechatqr").fadeIn();
      $("#bg-grey").fadeIn();
      $("#btn-close").fadeIn();
    })

    $("#btn-close").click(function() {
      $("#wechatqr").fadeOut();
      $("#bg-grey").fadeOut();
      $("#btn-close").fadeOut();
    })

  }









});