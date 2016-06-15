/* DOM Manipulation: Independent Practice

To complete this excercise, you must meet the following requirements:

- When the user clicks the "#new-thing-button" button, add whatever is in the input box to the "#my-list" list.
- Only add an item if the input box is not blank.
- Clear the input box when the user clicks the button.

Here are some bonus tasks to push your DOM knowledge!
- Bonus tasks:
  - When a list item is archived, change its background colour to "green"
  - Add a link to each item to delete it completely
  - Instead of deleting it completely, move it to a second list called "Archive"

*/


document.getElementById('new-thing').focus();

var newThingBtn = document.getElementById('new-thing-button')
	newThingBtn.addEventListener('click', buttonClicked)


var listItems = document.getElementById('my-list')
	//listItems.addEventListener('click', markDone);


var startList = function(){
	return listItems.children.length
}


for(var i=0; i<startList(); i++){
	var liID = 'blah'+i
	document.querySelectorAll('li')[i].id = liID
	document.getElementById(liID).addEventListener('click', markDone)
}



function buttonClicked(event) {
	event.preventDefault();
	startList();
	var checkInput = document.getElementById('new-thing').value;
	if (!!checkInput) {
		var newItem = document.createElement('li');
		var newText = document.createTextNode(checkInput);
			newItem.appendChild(newText);
		document.getElementById('my-list').appendChild(newItem)
	}
	document.getElementById('new-thing').value = ''
}



function addToList(list, text) {

}


function markDone(){
	console.log('done', this.id);
	var doneItem = this.id;

	document.getElementById(doneItem).style.backgroundColor = 'lightgreen'

}