

var newThingBtn = document.getElementById('new-thing-button');
	newThingBtn.addEventListener('click', buttonClicked);

var getMyListItems = document.querySelectorAll('#my-list li');
var getNewThing = document.getElementById('new-thing');

// add event listeners to existing todo list items
for(var i=0; i<getMyListItems.length; i++){
	getMyListItems[i].addEventListener('click', markDone);
};


// make text input field active
getNewThing.focus();
function buttonClicked(event) {
	event.preventDefault(); // prevent form/button default function (page reset)
	var checkInput = getNewThing.value;
	if (!!checkInput) { // if input has content
		var newItem = document.createElement('li');
		var newText = document.createTextNode(checkInput);
			newItem.appendChild(newText);
			newItem.addEventListener('click', markDone);
		document.getElementById('my-list').appendChild(newItem);
	} else { // else has no content
		alert("Nothing to do?");
	};
	// reset input field
	getNewThing.value = '';
	// make input field active
	getNewThing.focus();
}


function markDone(){
	if( !document.querySelector('h2#archiveHeader') ){ // if archive header doesn't exist
		// apend new h2 and ul if this is the first item to archiveHeader
		var doneList = document.createElement('ul');
			doneList.id = 'myDoneList';
		var doneHeader = document.createElement('h2');
			doneHeader.id = 'archiveHeader';
			doneHeader.textContent = "Archive";
		document.body.appendChild(doneHeader);	
		document.body.appendChild(doneList);
	};
	var doneListItem = document.createElement('li');
	// span to control size of background colour
	var doneListSpan = document.createElement('span');
		// for practice. Would do this with css 
		doneListSpan.style.backgroundColor = 'lightgreen';
		doneListSpan.style.textDecoration = 'line-through';
		doneListSpan.textContent = this.textContent;
		doneListItem.appendChild(doneListSpan);
	document.getElementById('myDoneList').appendChild(doneListItem);
	// remove from to do list
	this.remove();
	// add focus back to input field
	getNewThing.focus();
	// display message if #my-list is empty
	if (getMyListItems.length === 0){
		alert('Everything is done!');
	}
}
