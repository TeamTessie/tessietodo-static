var todoArray = [];
var todoKey = "todos";

$(document).ready(function() {
    // check whether we have todos in the localStorage
    if (localStorage.getItem(todoKey)) {
        //1. Add the todos into the todoArray
        var rawJSON = localStorage.getItem(todoKey)
        todoArray = JSON.parse(rawJSON);
        //2. Populate list with Todos
        // Go through each todo in the array
        // and add it to our html list, so it looks like
        // It's loaded
        todoArray.forEach(function(task) {
            $("#tasks").append("<li> <input type=\"checkbox\" onclick=\"todoChecked(this)\">" + task + "</input></li>");
        });
    }
});

function clearCheckedTodos() {
    // 1. Use Jquery to loop through all the checked items
    // https://api.jquery.com/each/
    $(".checked").each(function() {
        // when using the jquery each function, 'this' is holding
        // the checked item we're currently on. Let's store it on a variable
        var item = this;

        var todoToRemove;
        // get the text content (the title) of the
        // list item and trim the white spaces from
        // before and after
        todoToRemove = item.textContent.trim();
        var i = todoArray.indexOf(todoToRemove);
        if (i != -1) {
            todoArray.splice(i, 1);
        }
    });
    update_storage(todoArray);
    // remove all elements with the checked class
    $(".checked").remove();
}


function addTodo() {
    var todoTitle;
    todoTitle = $("#todo-name").val();
    if (todoTitle === "") {
        return;
    }
    todoArray.push(todoTitle);
    update_storage(todoArray);
    $("#tasks").append("<li> <input type=\"checkbox\" onclick=\"todoChecked(this)\">" + todoTitle + "</input></li>");
    $("#todo-name").val("");
}

function todoChecked(el) {
    if ($(el).is(":checked") === true) {
        $(el).parent().addClass("checked");
    } else {
        $(el).parent().removeClass("checked");
    }
}

function update_storage(todos) {
    localStorage.setItem(todoKey, JSON.stringify(todos));
}
