// application container
var App = {};

// template container
App.Templates = {};

// our todo list item
App.Templates.todo = function(todo) {
  return "\
    <li class='todo'>" + todo.name + "</li> \
  "
}

// todo 'model'
App.Todo = function (name) {
  this.name = name;
}

// this handles the todos in the UI
App.TodoUI = {
  add: function ($container, todo) {
    $container.prepend(App.Templates.todo(todo))
  }
}

// a nice wrapper around localStorage
App.TodoStore = {
  todoKey: "todos",

  all: function() {
    var todos = this.get(this.todoKey);
    if (todos.length) {
      var todoObjs = []
      for(var i = 0, l = todos.length; i < l; i++) {
        todoObjs.push(new App.Todo(todos[i]))
      }
      return todoObjs;
    }
    return [];
  },

  add: function(todo) {
    var todos = this.get("todos");
    todos.push(todo.name)
    this.set(todos)
  },

  set: function(value) {
    localStorage.setItem(this.todoKey, JSON.stringify(value))
  },

  get: function() {
    var raw = localStorage.getItem(this.todoKey)
    if (raw) {
      return JSON.parse(raw)
    }
    return []
  }
}

// Initialize the world
$(function() {
  // initialize listeners in the UI
  function setupUI() {
    $container = $(".todos")
    $addButton = $("[ref='addTodoButton']")
    $input = $("[ref='todoNameInput']")
    $addButton.on("click", function(e) {
      var todo = new App.Todo($input.val())
      App.TodoUI.add($container, todo);
      App.TodoStore.add(todo)
      $input.val("");
    });
  }

  // show saved todos on the page
  function loadTodos() {
    var todos = App.TodoStore.all()
    $container = $(".todos")
    $.each(todos, function(i, todo) {
      App.TodoUI.add($container, todo);
    });
  }

  setupUI();
  loadTodos();
});
