showNotes();

//add note to local storage when user adds new note
let addBtn = document.getElementById("addNote");

addBtn.addEventListener("click", function(e){
	let addText = document.getElementById("add-note");
	let notes = localStorage.getItem("notes");
	
	if (notes == null) notesObj = []
	else notesObj = JSON.parse(notes);
	
	if(addText.value == "") {
		alert ("Note cannot be empty");
	} else {
		notesObj.push(addText.value)
	localStorage.setItem("notes", JSON.stringify(notesObj));
	addText.value = "";
	alert("Note added successfully, click all notes to view your notes")
	}
	showNotes();
	
})

// function to show all user notes 
function showNotes(){
	let notes = localStorage.getItem("notes");
	
	if(notes == null) notesObj = []
	else notesObj = JSON.parse(notes);
	
	let html="";
	
	notesObj.forEach(function(element, index) {
		html += `<div class="noteCard my-2 mx-2 card">
					<div class="card-body">
						<h5 class="card-title">
							Note ${index + 1}
						</h5>
						<p class="card-text">
							${element}
						</p>
	
						<div class="d-flex justify-content-center">
										<button id="${index}" onclick=
											"deleteNote(this.id)"
											class="btn btn-primary delete-btn">
											Delete Note
										</button>
											</div>
				</div>
			</div>`;
	});
	
	let notesElm = document.getElementById("notes");
	
	if (notesObj.length != 0) notesElm.innerHTML = html;
	else
		notesElm.innerHTML = "No added notes. Click add note to create a new note ...";

	
}

//delete notes 
function deleteNote(index) {
	let notes = localStorage.getItem("notes");

	if (notes == null) notesObj = [];
	else notesObj = JSON.parse(notes);

	notesObj.splice(index, 1);

	localStorage.setItem("notes",
		JSON.stringify(notesObj));

	showNotes();
}
