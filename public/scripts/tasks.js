const exampleTasks = [{
  title: "Black Widow"
}];

const completeTask = function() {
  $(".fas.fa-check").css({"visibility" : "visible"});
};

const editTask = function() {
  $(".edit-modal-root").css({
    "background-color" : "rgba(0,0,0,0.2)",
    "position" : "absolute",
    "top" : "0",
    "left" : "0",
    "right" : "0",
    "bottom" : "0",
    "z-index" : "1"
  });

  $("#edit-modal").css({"visibility" : "visible"});
};


const deleteTask = function() {
  $(".delete-modal-root").css({
    "background-color" : "rgba(0,0,0,0.2)",
    "position" : "absolute",
    "top" : "0",
    "left" : "0",
    "right" : "0",
    "bottom" : "0",
    "z-index" : "1"
  });

  $("#delete-modal").css({"visibility" : "visible"});
};


$(document).ready(() => {
  const createTaskElement = function(taskData) {
    const $tasks = $(`
    <article class="task">

    <div class="checkbox-and-title">
      <div class="task-checkbox"><i class="fas fa-check"></i></div>
      <p>${taskData.title}</p>

    </div>

    <div class="delete-and-edit-icons">
      <i class="fas fa-edit" id="icon-edit"></i>
      <i class="far fa-trash-alt" id="icon-trash"></i>
    </div>

    </article>`);


    return $tasks;
  };


  const renderTasks = function(tasks) {
    const tasksElements = tasks.map(task => createTaskElement(task));
    const $list = $("#tasks-list");
    $list.children().not(":first-child").remove();
    $list.append(tasksElements);

    let completedTask = $(".task-checkbox");
    let editElements = $(".fas.fa-edit");
    let deleteElements = $(".far.fa-trash-alt");

    for (let i = 0; i < completedTask.length; i++) {
      completedTask[i].addEventListener('click', completeTask);
    }

    for (let i = 0; i < editElements.length; i++) {
      editElements[i].addEventListener('click', editTask, false);
    }

    for (let i = 0; i < deleteElements.length; i++) {
      deleteElements[i].addEventListener('click', deleteTask, false);
    }
  };


  renderTasks(exampleTasks);

  $("#create-task-form").submit((event) => {
    // event.preventDefault();
    // const newTitle = $("#task-title-new").val();
    // $("#task-title").val("");
    // exampleTasks.push({ title: newTitle });

    // $('#create-task-form').trigger("reset");

    // renderTasks(exampleTasks);
  });


  $('#all-tasks-link').click(function(event) {
    event.preventDefault();
    document.cookie = "category=all";
    
    $.get(`/tasks/cats/all`, function(data) {
      console.log(data)
    });

    return false;
  });

  $('#Films-tasks-link').click(function(event) {
    event.preventDefault();
    document.cookie = "category=Films/Series";
    
    $.get(`/tasks/cats/Films`, function(data) {
      console.log(data);
    });
    
    return false;
  });

  $('#Restaurants-tasks-link').click(function(event) {
    event.preventDefault();
    document.cookie = "category=Restaurants";
    
    $.get(`/tasks/cats/Restaurants`, function(data) {
      console.log(data);
    });
    
    return false;
  });

  $('#Books-tasks-link').click(function(event) {
    event.preventDefault();
    document.cookie = "category=Books";
    
    $.get(`/tasks/cats/Books`, function(data) {
      console.log(data);
    });
    
    return false;
  });

  $('#Products-tasks-link').click(function(event) {
    event.preventDefault();
    document.cookie = "category=Products";
    
    $.get(`/tasks/cats/Products`, function(data) {
      console.log(data);
    });
    
    return false;
  });





});
