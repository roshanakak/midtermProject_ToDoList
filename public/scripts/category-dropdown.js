$(document).ready(function () {

  $('.fas.fa-caret-down').on("click", function () {

    const menu = $('.category-contents');
    menu.toggle(200)

    $(".fas.fa-caret-down").css({"visibility" : "hidden", "order" : "2"})
    $(".fas.fa-caret-up").css({"visibility" : "visible", "order" : "1"})
  })

  $('.fas.fa-caret-up').on("click", function () {

    const menu = $('.category-contents');
    menu.toggle(200)

    $(".fas.fa-caret-up").css({"visibility" : "hidden", "order" : "2"})
    $(".fas.fa-caret-down").css({"visibility" : "visible", "order" : "1"})

  })

})
