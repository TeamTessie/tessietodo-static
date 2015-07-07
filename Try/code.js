function addTodo() {
    var todoTitle;
    todoTitle = $("#todo-name").val();
    if (todoTitle === "") {
        return;
    }
    $("#tasks").append("<li> <input type=\"checkbox\">" + todoTitle + "</input></li>");
    $("#todo-name").val("");
}
