const exampleTasks = [{
  title: "Films"
}, { title: "Magic" }];

$(document).ready(() => {
  const createTaskElement = function (taskData) {
    const $tasks = $(`<article class="task">

    <div class="checkbox-and-title">
      <div class="task-checkbox"><i class="fas fa-check"></i></div>
      <p>${taskData.title}</p>

    </div>

    <div class="delete-and-edit-icons">
      <i class="fas fa-edit"></i>
      <i class="far fa-trash-alt"></i>
    </div>

  </article>`)
    return $tasks
  }


  const renderTasks = function (tasks) {
    const tasksElements = tasks.map(task => createTaskElement(task));
    const $list = $("#tasks-list");
    $list.children().not(":first-child").remove();
    $list.append(tasksElements);

  }
  renderTasks(exampleTasks);
  $("#create-task-form").submit((event) => {
    event.preventDefault();
    const newTitle = $("#task-title").val();
    console.log(newTitle);
    $("#task-title").val("");
    exampleTasks.push({ title: newTitle });
    renderTasks(exampleTasks);
  })

});
