$(function() {
  // $("*").fadeIn;

  // wechat qr code
  if (window.innerWidth > 829) {
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