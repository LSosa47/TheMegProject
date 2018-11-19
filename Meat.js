console.log('we are connected')
var noteBox = [];

// $(document).ready(function()) {
//   $("#myButton").click(function () {
//     $("#myTextBox").remove();
//     $(this).remove();
// });
// }

// blue print that will create the note
class Note {
  // assembly line that is resposible of buidling the note
  constructor(title, textArea, statusCode) {
    this.title = title;
    this.textArea = textArea;
    this.statusCode = statusCode;
  }
}

// function that creates the note
function makeNote() {
  // grab the details from the form and store in in variables
  var title = document.getElementById("nameTitle").value;
  var textBox = document.getElementById("textBox").value;
  var statusCode = document.getElementById("colorCode").value;
  // log out the variables for testing
  console.log(title, textBox, statusCode);
  var newNote = new Note(title, textBox, statusCode);

  noteBox.push(newNote);
  console.log(noteBox);
  showNote();
}

// function to retrieve the notes and display them with color
function showNote() {
  // clear out the selection in the note
  var clearPriorityNote = document.getElementById("priorityNote");
  var clearimportantNote = document.getElementById("importantNote");
  var clearitCanWaitNote = document.getElementById("itCanWaitNote");

  clearPriorityNote.innerHTML = " ";
  clearimportantNote.innerHTML = " ";
  clearitCanWaitNote.innerHTML = " ";
  // loop through the noteBox
  for (var i = 0; i < noteBox.length; i++) {
    // grab the properties deets and store them in a variable
    var statusCode = noteBox[i].statusCode;
    var textArea = document.createTextNode(noteBox[i].textArea);
    var title = document.createTextNode(noteBox[i].title);
    // display the total amount of notes
    document.getElementById("totalNotes").innerHTML = `You have ${
      noteBox.length
    } notes in total`;
    // create the master UL
    var ul = document.createElement("ul");
    ul.setAttribute('id', 'parent-id');
    // create the li
    var titleLi = document.createElement("li");
    var textAreaLi = document.createElement("li");
    // create button
    var remove = document.createElement("li");
    var removeButton = document.createElement("button");
    removeButton.setAttribute('onclick', 'removeButton()')
    console.log(removeButton)
    var text = document.createTextNode("Remove");
    // add the text that I grabbed to the inner html of the LI's
    titleLi.appendChild(title);
    textAreaLi.appendChild(textArea);
    // append the li's to the master UL
    ul.appendChild(titleLi);
    ul.appendChild(textAreaLi);
    //put text in button
    removeButton.appendChild(text);
    remove.appendChild(removeButton)
    ul.appendChild(remove);
    // Account for each color
    if (statusCode == "red") {
      document.getElementById("priorityNote").append(ul);
    } else if (statusCode == "yellow") {
      document.getElementById("importantNote").append(ul);
    } else {
      document.getElementById("itCanWaitNote").append(ul);
      

    }
  }
}



// create a function to sort the notes by importance
function sortNotesByDate() {
  // red = most important
  // yellow = important
  // green = it can wait
}

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

function removeButton() {
  var parentDOM = document.getElementById('parent-id');
  // var parentClasses = parentDOM.getElementsByClassName('deleteMe')[0]
  var parentClasses = document.getElementsByClassName('deleteMe');

  console.log('This is the parentClasee variable ==_', parentClasses);
  // parentClasses.removeChild(parentClasses.childNodes[0]);
  console.log(typeof(parentClasses));
  // while(parentClasses.length > 0){
  //   parentClasses[0].parentNode.removeChild(parentClasses[0])
  // }
    while(parentClasses.length > 0){
      parentClasses[0].remove();
  }
}