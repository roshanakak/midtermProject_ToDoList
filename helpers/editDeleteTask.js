let editElements = $(".fas.fa-edit");
  let deleteElements = $(".far.fa-trash-alt");


  const editTask = function() {
    $(".edit-modal-root").css({
      "background-color" : "rgba(0,0,0,0.2)",
      "position" : "absolute",
      "top" : "0",
      "left" : "0",
      "right" : "0",
      "bottom" : "0",
      "z-index" : "1"
    })

    $("#edit-modal").css({"visibility" : "visible"})
  };

  $("#edit-modal-close").on("click", function () {
    $(".edit-modal-root").css({"z-index" : "-1"})

    $("#caret-up-edit-task").css({"visibility" : "hidden"})
    $("#caret-down-edit-task").css({"visibility" : "hidden"})
  })


  const deleteTask = function() {
    $(".delete-modal-root").css({
      "background-color" : "rgba(0,0,0,0.2)",
      "position" : "absolute",
      "top" : "0",
      "left" : "0",
      "right" : "0",
      "bottom" : "0",
      "z-index" : "1"
    })

    $("#delete-modal").css({"visibility" : "visible"})

  };

  $("#delete-modal-close").on("click", function () {
    $(".delete-modal-root").css({"z-index" : "-1"})
  })

  $("#cancel-deletion-button").on("click", function () {
    $(".delete-modal-root").css({"z-index" : "-1"})
  })


  for (let i = 0; i < editElements.length; i++) {
    editElements[i].addEventListener('click', editTask, false);
  }

  for (let i = 0; i < deleteElements.length; i++) {
    deleteElements[i].addEventListener('click', deleteTask, false);
  }
