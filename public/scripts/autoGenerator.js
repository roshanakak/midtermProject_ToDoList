$(document).ready(function() {

  function spinIcon(icon) {
    setTimeout(function () {
      icon.toggleClass("fa-spin");
    }, 0);

    setTimeout(function () {
      icon.toggleClass("fa-spin");
    }, 2000);
  }

  $(".fas.fa-redo-alt").on("click", function() {

    // $(this).toggleClass("fa-spin")

    var $icon = $(this);

    spinIcon($icon)

  })


});
