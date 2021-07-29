const completeTask = function() {
  $(".fas.fa-check").css({"visibility" : "visible"});
};

const getCookie = function(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
};

const editTask = function(event) {
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

  document.cookie = `taskid=${event.target.getAttribute('taskid')}`;
  $("#task-title-edit").val(event.target.getAttribute('taskTitle'));
  $("#selectedCategoryEdit").html(event.target.getAttribute('taskCat'));
  $("#selectedCategoryEditInput").val($("#selectedCategoryEdit").text());

};


const deleteTask = function(event) {
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
  
  document.cookie = `taskid=${event.target.getAttribute('taskid')}`;
};


$(document).ready(() => {

  //fill the tasks list at first load
  
  const categoryCookie = getCookie('category');
  if (categoryCookie === '') {
    document.getElementById('list-title').innerHTML = 'All Tasks';
    document.cookie = "category=all";
    $.get(`/tasks/cats/all`, function(data) {
      if (data) {
        renderTasks(Object.values(data.taskList));
      }
    });
  } else {
    document.getElementById('list-title').innerHTML = categoryCookie;
    if (categoryCookie === 'all') {
      document.getElementById('list-title').innerHTML = 'All Tasks';
    }
    $.get(`/tasks/cats/${categoryCookie}`, function(data) {
      if (data) {
        renderTasks(Object.values(data.taskList));
      }
    });
  }
 

  const createTaskElement = function(taskData) {
    const $tasks = $(`
    <article class="task">

    <div class="checkbox-and-title">
      <div class="task-checkbox"><i class="fas fa-check"></i></div>
      <p>${taskData.title}</p>

    </div>

    <div class="delete-and-edit-icons">
      <i class="fas fa-edit" id="icon-edit" taskId="${taskData.id}" taskTitle="${taskData.title}" taskCat="${taskData.cattitle}"></i>
      <i class="far fa-trash-alt" id="icon-trash" taskId="${taskData.id}" ></i>
    </div>

    </article>`);

    return $tasks;
  };


  const renderTasks = function(tasks) {
    const tasksElements = tasks.map(task => createTaskElement(task));
    const $list = $("#tasks-list");
    $list.children().not(":first-child").remove();
    $list.append(tasksElements);
    while ($("#tasks-list").firstChild) {
      $("#tasks-list").removeChild($("#tasks-list").firstChild);
    }

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


  $('#all-tasks-link').click(function(event) {
    event.preventDefault();
    document.getElementById('list-title').innerHTML = 'All Tasks';
    document.cookie = "category=all";
    
    $.get(`/tasks/cats/all`, function(data) {
      if (data) {
        renderTasks(Object.values(data.taskList));
      }
    });

    return false;
  });

  $('#Films-tasks-link').click(function(event) {
    event.preventDefault();
    document.getElementById('list-title').innerHTML = 'Films/Series';
    document.cookie = "category=Films/Series";
    
    $.get(`/tasks/cats/Films`, function(data) {
      renderTasks(Object.values(data.taskList));
    });
    
    return false;
  });

  $('#Restaurants-tasks-link').click(function(event) {
    event.preventDefault();
    document.getElementById('list-title').innerHTML = 'Restaurants';
    document.cookie = "category=Restaurants";
    
    $.get(`/tasks/cats/Restaurants`, function(data) {
      renderTasks(Object.values(data.taskList));
    });
    
    return false;
  });

  $('#Books-tasks-link').click(function(event) {
    event.preventDefault();
    document.getElementById('list-title').innerHTML = 'Books';
    document.cookie = "category=Books";
    
    $.get(`/tasks/cats/Books`, function(data) {
      renderTasks(Object.values(data.taskList));
    });
    
    return false;
  });

  $('#Products-tasks-link').click(function(event) {
    event.preventDefault();
    document.getElementById('list-title').innerHTML = 'Products';
    document.cookie = "category=Products";
    
    $.get(`/tasks/cats/Products`, function(data) {
      renderTasks(Object.values(data.taskList));
    });
    
    return false;
  });


});
