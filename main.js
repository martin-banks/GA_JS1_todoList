document.getElementById('new-thing').focus();

var tasksDone = 0;

var newThingBtn = document.getElementById('new-thing-button')
	newThingBtn.addEventListener('click', buttonClicked)

var startList = function(){
	var listItems = document.getElementById('my-list');
	return listItems.children.length
}

function addListId(){
	for(var i=0; i<startList(); i++){
		var liID = 'doThis'+i;
		document.querySelectorAll('li')[i].id = liID;
		document.getElementById(liID).addEventListener('click', markDone);
	}
};
addListId();




function buttonClicked(event) {
	event.preventDefault();
	var checkInput = document.getElementById('new-thing').value;
	if (!!checkInput) {
		var newItem = document.createElement('li');
		var newText = document.createTextNode(checkInput);
			newItem.appendChild(newText);
		document.getElementById('my-list').appendChild(newItem)
	} else {
		alert("Nothing to do?");
	}
	document.getElementById('new-thing').value = '';
	addListId();
	document.getElementById('new-thing').focus();
}




function markDone(){
	addListId();
	var doneItem = this.id;

	if(tasksDone===0){
		// apend new h2 if this is the first done item
		var doneList = document.createElement('ul');
			doneList.id = 'myDoneList';
		var doneHeader = document.createElement('h2');
			doneHeader.textContent = "Archive";
		document.body.appendChild(doneHeader);	
		document.body.appendChild(doneList);
	}

	var doneListText = document.createTextNode(this.textContent);
	var doneListItem = document.createElement('li');
	var doneListSpan = document.createElement('span');
		doneListSpan.style.backgroundColor = 'lightgreen';
		doneListSpan.style.textDecoration = 'line-through'
		doneListSpan.textContent = this.textContent;
		doneListItem.appendChild(doneListSpan);
	document.getElementById('myDoneList').appendChild(doneListItem);
	this.remove();
	tasksDone++;
	// add focus back to input field
	document.getElementById('new-thing').focus();
}









/*
function addToList(list, text) {

}
*/