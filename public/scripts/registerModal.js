$(document).ready(function() {
  $("#error-msg").hide();

  $(".register-button").on("click", function() {

    $("#register-modal").css({"visibility" : "visible"});

  });


  $("#register-modal-close").on("click", function() {
    
    $("#register-modal").css({"visibility" : "hidden"});

  });


  $("#register-submit-button").on('click', () => {
    let regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    let username = $("#register-username").val();
    let email = $("#register-email").val();
    let password = $("#register-password").val();

    if (!username) {
      event.preventDefault();
      $("#error-msg").show();
      $("#error-msg").text('You have not provided a username!');
    } else if (!email) {
      event.preventDefault();
      $("#error-msg").show();
      $("#error-msg").text('You have not provided an email!');
    } else if (!password) {
      event.preventDefault();
      $("#error-msg").show();
      $("#error-msg").text('You have not provided a password!');
    } else if (!regex.test(email)) {
      event.preventDefault();
      $("#error-msg").show();
      $("#error-msg").text('You should insert a valid email!');
    }

  });


});
