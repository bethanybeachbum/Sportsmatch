
alert("connect");

// EVENTS   -- The process"  -- "Select" an element and then add an "event listener"

// SELECT -- when the class player is clicked save
var myPlayers = document.querySelectorAll("h5");
myPlayers[0].textContent  // produces Brandon Brown
// SELECT 
var el = document.querySelectorAll(".player");

//SELECT
const buttonElement = document.getElementById('btn2');

var buttonElement2 = document.querySelector("#btn2");





buttonElement.addEventListener('click', function (event) {
    alert('Element clicked through function!');
  });
  buttonElement.addEventListener('click', function (event) {
    console.log('Element clicked through function!');
  });

  buttonElement.addEventListener('click', {
    handleEvent: function (event) {
      alert('Element clicked through handleEvent property!');
    }
  });

// MANIPULATE
document.querySelectorAll("h5").addEventListener("click", function() {
    console.log("CLICKED")
  }, false);

// MORE MANIPULATE
el.addEventListener("click", console.log("success")); 
myPlayers.addEventListener("click", alert("success"));
el.addEventListener("click", modifyText, false);
element.addEventListener(type, functionToCall);

// when an li is clicked it turns purple  -- uses an anonymous function
var li_person = document.querySelectorAll("li");
for(var i=0; i < li_person.length; i++) {
    li_person[i].addEventListener("click", function() {  // declaration of an anonymous function
        this.style.color = "purple";  // this refers to what is just outside the paretheses
        // DISPLAY NAME IN TABLE WITH CLASS NAME OF:  playerChoices
    });
}

// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ 
// add event listener to table
var el = document.getElementById("outside");
el.addEventListener("click", modifyText, false);

function addRow(tableID) {
    // Get a reference to the table
    var tableRef = document.getElementById(tableID);
  
    // Insert a row in the table at row index 0
    var newRow = tableRef.insertRow(0);
  
    // Insert a cell in the row at index 0
    var newCell = newRow.insertCell(0);
  
    // Append a text node to the cell
    var newText = document.createTextNode('New top row');
    newCell.appendChild(newText);
  }
  

  
  // Call addRow() with the ID of a table
  addRow('playerChoices');
  addRow();





// declaration of a named function
function  insertName () {  
    // ADD NAME TO TABLE; 
}

// ALL IN ONE LINE:
document.querySelector("p").textContent = "End of this lesson";

myElement.textContent

myButton.addEventListener("click", function() {
    console.log("SOMEONE CLICKED THE BUTTON") 
});
