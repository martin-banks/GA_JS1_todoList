document.getElementById('new-thing').focus();


var newThingBtn = document.getElementById('new-thing-button')
	newThingBtn.addEventListener('click', buttonClicked)

var startList = function(){
	var listItems = document.getElementById('my-list');
	return listItems.children.length
}

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
	// create new text node from todo text content
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
		
	
	// remove from to do list
	this.remove();
	// add focus back to input field
	document.getElementById('new-thing').focus();
}
