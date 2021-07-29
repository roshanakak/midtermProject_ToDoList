$(document).ready(function() {

  $(".register-button").on("click", function() {
    $(".register-modal-root").css({
      "background-color" : "rgba(0,0,0,0.2)",
      "position" : "absolute",
      "top" : "0",
      "left" : "0",
      "right" : "0",
      "bottom" : "0",
      "z-index" : "1"
    })

    $("#register-modal").css({"visibility" : "visible"});
  })


  $("#register-modal-close").on("click", function() {
    $(".register-modal-root").css({"z-index" : "-1"})
  })


})
