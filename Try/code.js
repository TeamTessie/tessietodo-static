function addTodo() {
    var todoTitle;
    todoTitle = $("#todo-name").val();
    $("#tasks").append("<li>" + todoTitle + "</li>");
} 
