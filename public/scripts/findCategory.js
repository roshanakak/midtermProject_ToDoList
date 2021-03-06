$(document).ready(function() {
  document.cookie = "cat=0";
  

  document.querySelector("#find-category").addEventListener("click", (e) => {
    
    document.cookie = "cat=1";
    
    let taskTitle = document.getElementById("task-title-new").value;
    $.get(`/cat/find/${taskTitle}`, function(data) {
      let obj = JSON.parse(JSON.stringify(data));
      $("#selectedCategory").text(obj.result);
      console.log(data);
    });
    
  });

  document.querySelector("#task-title-new").addEventListener("keyup", (e) => {
    
    document.cookie = "cat=0";
    
  });
 
 
  const catItemClick = function() {
    
    document.cookie = "cat=1";

    $("#selectedCategoryInput").val($("#selectedCategory").text());

    const menu = $('#category-contents-create-task');
    menu.toggle(200);
    $("#caret-up-create-task").css({"visibility" : "hidden", "order" : "2"});
    $("#caret-down-create-task").css({"visibility" : "visible", "order" : "1"});
  
  };
 
  const catItemEditClick = function() {
    
    document.cookie = "cat=1";

    $("#selectedCategoryEditInput").val($("#selectedCategoryEdit").text());

    const menu = $('#category-contents-edit-task');
    menu.toggle(200);
    $("#caret-up-edit-task").css({"visibility" : "hidden", "order" : "2"});
    $("#caret-down-edit-task").css({"visibility" : "visible", "order" : "1"});
  
  };

  document.querySelector("#cat-item-Films").addEventListener("click", (e) => {
    $("#selectedCategory").text('Movies');
    catItemClick();
    console.log($("#selectedCategoryInput").text)
  });
  
  document.querySelector("#cat-item-Restaurants").addEventListener("click", (e) => {
    $("#selectedCategory").text('Restaurants');
    catItemClick();
  });

  document.querySelector("#cat-item-Books").addEventListener("click", (e) => {
    $("#selectedCategory").text('Books');
    catItemClick();
  });
  
  document.querySelector("#cat-item-Products").addEventListener("click", (e) => {
    $("#selectedCategory").text('Products');
    catItemClick();
  });


  
  document.querySelector("#cat-item-edit-Films").addEventListener("click", (e) => {
    $("#selectedCategoryEdit").text('Movies');
    catItemEditClick();
  });
  
  document.querySelector("#cat-item-edit-Restaurants").addEventListener("click", (e) => {
    $("#selectedCategoryEdit").text('Restaurants');
    catItemEditClick();
  });

  document.querySelector("#cat-item-edit-Books").addEventListener("click", (e) => {
    $("#selectedCategoryEdit").text('Books');
    catItemEditClick();
  });
  
  document.querySelector("#cat-item-edit-Products").addEventListener("click", (e) => {
    $("#selectedCategoryEdit").text('Products');
    catItemEditClick();
  });


});
