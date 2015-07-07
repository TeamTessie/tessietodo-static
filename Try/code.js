function addTodo() {
    var todoTitle;
    todoTitle = $("#todo-name").val();
    if (todoTitle === "") {
        return;
    }
    $("#tasks").append("<li> <input type=\"checkbox\" onclick=\"todoChecked(this)\">" + todoTitle + "</input></li>");
    $("#todo-name").val("");
}

function todoChecked(el) {
 if($(el).is(":checked")===true) {
   $(el).parent().addClass("checked");
 }
 else {
   $(el).parent().removeClass("checked");
 }

}
