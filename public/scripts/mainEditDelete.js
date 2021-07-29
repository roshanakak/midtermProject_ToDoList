$(document).ready(function() {

  $("#edit-modal-close").on("click", function () {
    $(".edit-modal-root").css({"z-index" : "-1"})

    $("#caret-up-edit-task").css({"visibility" : "hidden"})
    $("#caret-down-edit-task").css({"visibility" : "hidden"})
  })

  $("#delete-modal-close").on("click", function () {
    $(".delete-modal-root").css({"z-index" : "-1"})
  })

  $("#cancel-deletion-button").on("click", function () {
    $(".delete-modal-root").css({"z-index" : "-1"})
  })

});
