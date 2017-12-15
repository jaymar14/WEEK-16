var Nightmare = require("nightmare");

var nightmare = Nightmare({ show: true });

nightmare
  .goto("https://duckduckgo.com")
  .type("#search_form_input_homepage", "how to make billions")
  .click("#search_button_homepage")
  .wait("#links a")
  .evaluate(function() {
    return document.querySelector("#links a").href;
  })
  //.end()
  .then(function(result) {
    console.log(result);
  })
  .catch(function(error) {
    console.error("Search failed:", error);
  });
