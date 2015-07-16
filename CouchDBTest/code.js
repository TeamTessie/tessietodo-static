$.ajax({
  url: "http://localhost:5984/tessieapp",
  success: function(data) {
      console.log(data);
  },
  failure: function() {
      console.log("Awwwww");
  }
});
