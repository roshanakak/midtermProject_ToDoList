//when trying to sign in or register, if an error pops up, I want to remove that error when the user starts typing in the form again

$(document).ready(function() {

  $("#login-form input").focus(() => {
    $('#error-message').empty();
  })

  $('.register-modal-body input').focus(() => {
    $('#error-message').empty();
  })

  $('#task-title-new').focus(() => {
    $('#error-message').empty();
  })

});
