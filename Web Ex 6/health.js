// Change the style of wellness card

function changeStyle() {

    let card = document.getElementById("wellnessCard");

    card.style.backgroundColor = "#164b3e";

    card.style.color = "#a5d66d";

    card.style.border = "2px solid #a5d66d";

}


// Show and hide wellness details

function toggleDetails() {

    let details = document.getElementById("details");

    if (details.style.display === "none") {

        details.style.display = "block";

    } else {

        details.style.display = "none";

    }

}


// Display current time

function displayTime() {

    let now = new Date();

    document.getElementById("time").innerHTML =
      now.getHours() + ":" +
      String(now.getMinutes()).padStart(2, "0") + ":" +
      String(now.getSeconds()).padStart(2, "0");

}

setInterval(displayTime, 1000);

displayTime();


// Start and stop animation

let position = 0;

let timer = null;


function startAnimation() {

    if (timer !== null) return;

    let icon = document.getElementById("movingIcon");

    let road = document.getElementById("road");

    timer = setInterval(function() {

      position++;

      if (position > road.clientWidth - icon.offsetWidth) {

          position = 0;

      }

      icon.style.left = position + "px";

    }, 20);

}


function stopAnimation() {

    clearInterval(timer);

    timer = null;

}
