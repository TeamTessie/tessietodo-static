function addTodo() {
    var todoTitle;
    todoTitle = $("#todo-name").val();
    $("#tasks").append("<li> <input type=\"checkbox\">" + todoTitle + "</input></li>");
    $("#todo-name").val("");
}
