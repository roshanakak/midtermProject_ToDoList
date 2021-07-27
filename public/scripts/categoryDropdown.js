$(document).ready(function () {

  // category dropdown for the edit modal box
  $('#caret-down-edit-task').on("click", function () {

    const menu = $('#category-contents-edit-task');
    menu.toggle(200)

    $("#caret-down-edit-task").css({"visibility" : "hidden", "order" : "2"})
    $("#caret-up-edit-task").css({"visibility" : "visible", "order" : "1"})
  })

  $('#caret-up-edit-task').on("click", function () {

    const menu = $('#category-contents-edit-task');
    menu.toggle(200)

    $("#caret-up-edit-task").css({"visibility" : "hidden", "order" : "2"})
    $("#caret-down-edit-task").css({"visibility" : "visible", "order" : "1"})

  })


  // category dropdown for the create-a-new-task section
  $('#caret-down-create-task').on("click", function () {

    const menu = $('#category-contents-create-task');
    menu.toggle(200)

    $("#caret-down-create-task").css({"visibility" : "hidden", "order" : "2"})
    $("#caret-up-create-task").css({"visibility" : "visible", "order" : "1"})
  })

  $('#caret-up-create-task').on("click", function () {

    const menu = $('#category-contents-create-task');
    menu.toggle(200)

    $("#caret-up-create-task").css({"visibility" : "hidden", "order" : "2"})
    $("#caret-down-create-task").css({"visibility" : "visible", "order" : "1"})

  })

})
