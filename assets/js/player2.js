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

//     ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
$(document).ready(function(){
    // jQuery methods go here...
 });

  //For the rest of this guide, we'll assume that the code we're looking at is enclosed in 
  // $(document).ready(function() { ... });
  //, and we'll leave that part out for brevity.
//     ~ ~ ~ ~ ~ ~ ~ ~ ~ ~

// Function to change the content of "playerChoices" table

var listItems = $( 'h5' );
var rawListItem = listItems[0]; // or listItems.get( 0 )
var html = rawListItem.innerHTML;
// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ 
var buttons = $(".btn")
var i;
var len = buttons.length;

var tableRows = $("tr").text()
var i;
var len = tableRows.length;

$( 'tr' ).eq(0).html( 'More HTML' );


// we'll use the variable i as our index; it starts at 0,
// and we increment it by 1 (using i++) until i is no longer
// less than the length of the array



        $(".btn").click(function() {
            if ($("#p1").text() === "Open") {
                $("#p1").text($("#bb").siblings("h5").text());
            } else if  ($("#p2").text() === "Open") {
                $("#p2").text($("#bb").siblings("h5").text());
            } else if  ($("#p3").text() === "Open") {
                $("#p3").text($("#bb").siblings("h5").text());
            } else if ($("#p4").text() === "Open") {
                    $("#p4").text($("#bb").siblings("h5").text());
            } else {
                alert ("You have made 4 choices. Delete an existing player choice, before adding any more!");
            }
        });

/*
$("#bb").click(function() {
    if ($("#p1").text() === "Open") {
        $("#p1").text($("#bb").siblings("h5").text());
    } else if  ($("#p2").text() === "Open") {
        $("#p2").text($("#bb").siblings("h5").text());
    } else if  ($("#p3").text() === "Open") {
        $("#p3").text($("#bb").siblings("h5").text());
    } else if ($("#p4").text() === "Open") {
            $("#p4").text($("#bb").siblings("h5").text());
    } else {
        alert ("You have made 4 choices. Delete an existing player choice, before adding any more!");
    }
});
*/


/*
function modifyText() {
    var p1 = document.getElementById("p1");
    console.log(p1);
    if (p1.firstChild.nodeValue == "Open") {
      p1.firstChild.nodeValue = cards[0].innertext;
    } else {
      p1.firstChild.nodeValue = "Still Open";
    }
  }
  */

  /* add event listener to table
  var el = document.getElementById("playerChoices");
  el.addEventListener("click", modifyText, false);
*/

  // check to see if click works jquery
$("#mb").click(function() {
    alert("mb clicked");
});
$("#lb").click(function() {
    alert("lb clicked");
});
