$(document).ready(function() {

  let editElements = document.getElementsByClassName("fa-edit");
  let deleteElements = document.getElementsByClassName("fa-trash-alt");

  const editTask = function() {
    alert('edit');
  };
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
