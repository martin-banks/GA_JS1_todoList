document.getElementById('new-thing').focus();


var newThingBtn = document.getElementById('new-thing-button')
	newThingBtn.addEventListener('click', buttonClicked)

var startList = function(){
	var listItems = document.getElementById('my-list');
	return listItems.children.length
}

// Add ids to help with moving elements to archive
/*
function addListId(){
	for(var i=0; i<startList(); i++){
		var liID = 'doThis'+i;
		document.querySelectorAll('li')[i].id = liID;
		document.getElementById(liID).addEventListener('click', markDone);
	}
};
addListId();
*/

for(var i=0; i<startList(); i++){
	document.querySelectorAll('li')[i].addEventListener('click', markDone);
}

function buttonClicked(event) {
	event.preventDefault();
	var checkInput = document.getElementById('new-thing').value;
	if (!!checkInput) {
		var newItem = document.createElement('li');
		var newText = document.createTextNode(checkInput);
			newItem.appendChild(newText);
			newItem.addEventListener('click', markDone);
		document.getElementById('my-list').appendChild(newItem)
	} else {
		alert("Nothing to do?");
	}
	document.getElementById('new-thing').value = '';
	document.getElementById('new-thing').focus();
}




function markDone(){
	if( !document.querySelector('h2#archiveHeader') ){
		// apend new h2 if this is the first done item
		var doneList = document.createElement('ul');
			doneList.id = 'myDoneList';
		var doneHeader = document.createElement('h2');
			doneHeader.id = 'archiveHeader';
			doneHeader.textContent = "Archive";
		document.body.appendChild(doneHeader);	
		document.body.appendChild(doneList);
	}
	// get text of list item to move to archive
	var thisText = this.textContent;
	// how many todo items are there?
	var listLength = document.querySelectorAll('#my-list li').length;
	// loop through list items to find right one
	for(var i=0; i<listLength; i++){
		if(document.querySelectorAll('#my-list li')[i].textContent === thisText){
			var doneListText = document.createTextNode(this.textContent);
			var doneListItem = document.createElement('li');
			// span to control size of background colour
			var doneListSpan = document.createElement('span');
			// for practice. Would do this with css 
				doneListSpan.style.backgroundColor = 'lightgreen';
				doneListSpan.style.textDecoration = 'line-through';
				doneListSpan.textContent = this.textContent;
				doneListItem.appendChild(doneListSpan);
			document.getElementById('myDoneList').appendChild(doneListItem);
		}
	}
	// remove from to do list
	this.remove();
	// add focus back to input field
	document.getElementById('new-thing').focus();
}









/*
function addToList(list, text) {

}
*/