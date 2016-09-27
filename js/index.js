$(function() {
  // $("*").fadeIn;

  // wechat qr code
  if (window.innerWidth > 767) {
    $(".wechatqr-link").click(function() {
      $("#wechatqr").fadeToggle();
      $("#bg-grey").fadeToggle();
      $("#btn-close").fadeToggle();
    })

    $("#btn-close").click(function() {
      $("#wechatqr").fadeToggle();
      $("#bg-grey").fadeToggle();
      $("#btn-close").fadeToggle();
    })

  }









});