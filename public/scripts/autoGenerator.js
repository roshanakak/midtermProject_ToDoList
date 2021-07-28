$(document).ready(function() {

  //"fa-spin" is a built-in class from Font Awesome - this class will spin the icon
  function spinIcon(icon) {
    setTimeout(function () {
      icon.toggleClass("fa-spin");
    }, 0);

    setTimeout(function () {
      icon.toggleClass("fa-spin");
    }, 2000);
  }

  $(".fas.fa-redo-alt").on("click", function() {

    var $icon = $(this);

    spinIcon($icon)

  })


});
