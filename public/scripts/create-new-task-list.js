$(document).ready(function () {


  // Cross-Site Scripting - this function ensures we aren't evaluating the text that is coming from the form submission
  // (e.g. some one could maliciously input code that wipes our database clean)
  const escape = function(str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };


  let listItems = [];

  const createNewListItem = function(listItem) {

    //html code for how the new list items should look
    let html =

    `<ul class="entered-list-item">
      <li>${escape(listItem)}</li>
    </ul>`

    return html;
  }


  const renderNewList = function (listItems) {
    //empties out the new-items section - so pre-existing items don't get prepended to it - starts with a clean slate
    const newItemsSection = $('.new-items').empty();


    listItems.forEach(item => {
      $item = createNewListItem(item);
      newItemsSection.append($item)
    })

  }


  const loadListItem = function(listItems) {
    $.ajax({
      url:"http://localhost:8080/",
      method: "GET",
    })
      .then(() => {
        renderNewList(listItems);
      });
  };




  $(".fas.fa-plus").on("click", function () {

    const value = $('#task-content').val();

    listItems.push(value)

    $("#task-content").value = '';
    loadListItem(listItems);

  })


})


//on submit - must clear current listItems array
