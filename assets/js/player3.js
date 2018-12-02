// Build table when players are chosen

var cards = document.querySelectorAll(".card");

// The key work "this" inside of an event listener 
//  refers to the item or the
// element that the event was triggered on !!!!!
for(var i=0; i < cards.length; i++) {
    cards[i].addEventListener("mouseover", function() {
        this.style.backgroundColor = "lightgrey";
    });
    cards[i].addEventListener("mouseout", function() {
        this.style.backgroundColor = "white";
    });

    cards[i].addEventListener("click", function() {
        this.classList.toggle("chosen");
    });
}




  // EXTRA CODE
/*
  var button2 = document.querySelectorAll(".player");

button2[0].addEventListener("click", function(){
    alert("Clicked Also");
});  

var button = document.querySelector("button");
var playerName = document.querySelector("h5");
button.addEventListener("click", function(){
    alert("Clicked");
    // Function to change the content of playerChoices table in HTML
    function modifyText() {
        var p1 = document.getElementById("p1");
        if (p1.firstChild.nodeValue == "Open") {
        p1.firstChild.nodeValue = playerName.textContent;
        } else {
        p1.firstChild.nodeValue = "three";
        }
    }
    modifyText(playerName);
    // add event listener to table
    // var el = document.getElementById("playerChoices");
    // el.addEventListener("click", modifyText, false);
});

*/