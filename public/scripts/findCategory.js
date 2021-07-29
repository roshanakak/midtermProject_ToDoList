$(document).ready(function() {
  

  document.querySelector("#find-category").addEventListener("click", (e) => {
    
    let taskTitle = document.getElementById("new-task-title").value;
    $.get(`/cat/find/${taskTitle}`, function(data) {
      let obj = JSON.parse(JSON.stringify(data));
      $("#selectedCategory").text(obj.result);
      console.log(data);
    });
    
  });
 

  document.querySelector("#cat-item-Films").addEventListener("click", (e) => {
    $("#selectedCategory").text('Films/Series');

    const menu = $('#category-contents-create-task');
    menu.toggle(200);
    $("#caret-up-create-task").css({"visibility" : "hidden", "order" : "2"});
    $("#caret-down-create-task").css({"visibility" : "visible", "order" : "1"});
  });
  
  document.querySelector("#cat-item-Restaurants").addEventListener("click", (e) => {
    $("#selectedCategory").text('Restaurants');

    const menu = $('#category-contents-create-task');
    menu.toggle(200);
    $("#caret-up-create-task").css({"visibility" : "hidden", "order" : "2"});
    $("#caret-down-create-task").css({"visibility" : "visible", "order" : "1"});
  });

  document.querySelector("#cat-item-Books").addEventListener("click", (e) => {
    $("#selectedCategory").text('Books');

    const menu = $('#category-contents-create-task');
    menu.toggle(200);
    $("#caret-up-create-task").css({"visibility" : "hidden", "order" : "2"});
    $("#caret-down-create-task").css({"visibility" : "visible", "order" : "1"});
  });
  
  document.querySelector("#cat-item-Products").addEventListener("click", (e) => {
    $("#selectedCategory").text('Products');

    const menu = $('#category-contents-create-task');
    menu.toggle(200);
    $("#caret-up-create-task").css({"visibility" : "hidden", "order" : "2"});
    $("#caret-down-create-task").css({"visibility" : "visible", "order" : "1"});
  });


});
