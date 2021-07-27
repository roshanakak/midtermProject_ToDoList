$(document).ready(function() {

  let editElements = $(".fa-edit");
  let deleteElements = $(".fa-trash-alt");

  const editTask = function() {
    $("#edit-modal").css({"visibility" : "visible"})
  };

  $("#edit-modal-close").on("click", function () {
    $("#edit-modal").css({"visibility" : "hidden"})

    $("#caret-up-edit-task").css({"visibility" : "hidden"})
    $("#caret-down-edit-task").css({"visibility" : "hidden"})
  })


  const deleteTask = function() {
    $("#delete-modal").css({"visibility" : "visible"})
  };

  $("#delete-modal-close").on("click", function () {
    $("#delete-modal").css({"visibility" : "hidden"})

  })

  $("#cancel-deletion-button").on("click", function () {
    $("#delete-modal").css({"visibility" : "hidden"})

  })




  for (let i = 0; i < editElements.length; i++) {
    editElements[i].addEventListener('click', editTask, false);
  }

  for (let i = 0; i < deleteElements.length; i++) {
    deleteElements[i].addEventListener('click', deleteTask, false);
  }

});
