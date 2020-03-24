//Init variables

var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var deleteButton = document.createElement('button',);

//Delete on button press

function deleteListItem() {
	event.target.parentNode.remove();
}

//Checking value of enter key
function isEnter(event) {
	return event.keyCode === 13
	
}

//Run if textbox has input
function inputLength() {
	return input.value.length;
}

//Create new element in list
function createListElement() {
	var deleteButton = document.createElement('button',);
	deleteButton.innerHTML = 'Delete';
	deleteButton.onclick = deleteListItem;
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	li.appendChild(deleteButton);
	ul.appendChild(li);
	input.value = "";
}

//Check enter button pressed
function addListAfterClick() {
	if (inputLength() > 0) { 
		createListElement();
	}
}

//Check enter key pressed
function addListAfterKeypress(event) {
	
	if (inputLength() > 0 && isEnter(event)) {
		createListElement();
	}
}

//Main 
button.addEventListener("click", addListAfterClick);
deleteButton.addEventListener("click", deleteListItem);
input.addEventListener("keypress", addListAfterKeypress);


