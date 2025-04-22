/*
    this script is used in tmachines.html to handle the transitions when the user clicks on the buttons
 */

//declare the variables for the machine and statement containers
var machineContainer = document.getElementById("machine")
var statementContainer = document.getElementById("statement")
var navTitle = document.getElementById("nav-title")

// hide the machine introduction
function hideMachine() {
    machineContainer.style.display = "none";
    statementContainer.style.display = "block";
}

// show the machine introduction
function showMachine() {
    machineContainer.style.display = "block";
    statementContainer.style.display = "none";
    navTitle.innerHTML = "Our Machine";
}

// hide the statement introduction
function hideStatement() {
    statementContainer.style.display = "none";
    machineContainer.style.display = "block";
}

// show the statement introduction
function showStatement() {
    statementContainer.style.display = "block";
    machineContainer.style.display = "none";
    navTitle.innerHTML = "Project Statement";
}

// initial page load, set the machine to be shown and the statement to be hidden
hideMachine()
showStatement()

//every navigation button will be calling a pair of functions to hide and show the correct containers