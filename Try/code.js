var todoArray = [];
var todoKey = "todos";

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
    if ($(el).is(":checked")===true){
        $(el).addClass(".checked");
    }

    else {
        $(el).removeClass(".checked");
    }
}

function update_storage(todos) {
    localStorage.setItem(todoKey, JSON.stringify(todos));
}
