
// Finding element by ID

var title = document.getElementById("home");


// Finding elements by tag name

var headings = document.getElementsByTagName("h3");


// Finding elements by class name

var wellness = document.getElementsByClassName("wellness-card");


// Finding elements by CSS selector

var buttons = document.querySelectorAll(".explore");


// Click event for Explore buttons

buttons.forEach(function(button) {

  button.addEventListener("click", function() {

      var category = this.getAttribute("data-category");

      document.getElementById("result").innerHTML =
        "You selected: " + category + "!";

  });

});


// Click event for Choose Wellness Plan button

document.getElementById("book").addEventListener("click", function() {

  document.getElementById("result").innerHTML =
    "Your wellness plan selection has been received!";

});
