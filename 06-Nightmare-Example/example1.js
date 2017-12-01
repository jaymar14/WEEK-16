var NM = require("nightmare");

var nm = NM({ show: true });


  nm.goto("https://espn.com")
  .type("#search_form_input_homepage", "github nightmare")
  .click("#search_button_homepage")
  .wait("#links a")
  .evaluate(function() {
    return document.querySelector("#links a").href;
  })
  .end()
  .then(function(result) {
    console.log(result);
  })
  .catch(function(error) {
    console.error("Search failed:", error);
  });
nm.goto('http://espn.com')
.then(function(){
  console.log("Done");
})