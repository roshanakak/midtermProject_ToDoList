$(document).ready(function() {
  $("#error-msg").hide();

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


  $("#register-submit-button").on('click', (event) => {
    $("#error-msg").hide();
    $("#error-msg").text('');

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
    } else {
      event.preventDefault();
      $.get(`/valid/email/${email}`, function(data) {
        if (JSON.parse(JSON.stringify(data)).emailExists) {
          $("#error-msg").show();
          $("#error-msg").text('This email already exists!');
        }
      });

      $.get(`/valid/username/${username}`, function(data) {
        if (JSON.parse(JSON.stringify(data)).user) {
          $("#error-msg").show();
          $("#error-msg").text('This username already exists!');
        }

      });

    }

  });


});
