$.ajax({
  url: "http://localhost:5984/_all_dbs",
  success: function(data) {
      console.log(data);
  },
  failure: function() {
      console.log("Awwwww");
  }
});
