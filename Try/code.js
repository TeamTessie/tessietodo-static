var todoArray = [];
var todoKey = "todos";

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
        $(el).addClass(".checked");
    } else {
        $(el).removeClass(".checked");
    }
}

function update_storage(todos) {
    localStorage.setItem(todoKey, JSON.stringify(todos));
}
