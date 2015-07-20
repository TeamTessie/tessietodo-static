// This is not a function, so this is run as soon as the program is loaded.
$.ajax({
// This displays all the docs inside the specified database
  url: "http://localhost:5984/tessieapp/my_id",
  method: "PUT",
  contentType: "application/json",
  data: JSON.stringify({"task": "Upload new task"}),
  success: function(data) {
      console.log(data);
  },
  failure: function() {
      console.log("Awwwww");
  }
});

// THIS ONE IS FOR GETTING. (it's not forgetting.)
$.ajax({
  url: "http://localhost:5984/tessieapp/my_id",
  success: function(data) {
      console.log(data);
  },
  failure: function() {
      console.log("Awwwww");
  }
});
