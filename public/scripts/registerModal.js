$(document).ready(function() {

  $(".register-button").on("click", function() {

    $("#register-modal").css({"visibility" : "visible"});

  })


  $("#register-modal-close").on("click", function() {
    
    $("#register-modal").css({"visibility" : "hidden"});

  })


})
