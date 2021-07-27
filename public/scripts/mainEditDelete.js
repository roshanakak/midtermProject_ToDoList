$(document).ready(function() {

  let editElements = $(".fa-edit");
  let deleteElements = $(".fa-trash-alt");

  const editTask = function() {
    $("#edit-modal").css({"visibility" : "visible"})
  };

  $("#edit-modal-close").on("click", function () {
    $("#edit-modal").css({"visibility" : "hidden"})
  })



  const deleteTask = function() {
    alert('delete');
  };

  for (let i = 0; i < editElements.length; i++) {
    editElements[i].addEventListener('click', editTask, false);
  }

  for (let i = 0; i < deleteElements.length; i++) {
    deleteElements[i].addEventListener('click', deleteTask, false);
  }

});
