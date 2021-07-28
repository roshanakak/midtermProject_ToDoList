$(document).ready(function() {

  let completedTask = $(".task-checkbox");


  const completeTask = function () {

    $(".fas.fa-check").css({"visibility" : "visible"})

  }


  for (let i = 0; i < completedTask.length; i++) {
    completedTask[i].addEventListener('click', completeTask);
  }

});
