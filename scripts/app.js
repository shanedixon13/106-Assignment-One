let important = false;
function toggleImportant() {
	console.log("clicked");
	if (important === false) {
		$("#iImportant").removeClass("far").addClass("fas");
		important = true;
	} else {
		$("#iImportant").removeClass("fas").addClass("far");
		important = false;
	}
}

let hidden = true;
function toggleForm() {
	if (hidden === true) {
		$("form").slideDown(750);
		$("#btnAdd").text("Hide Form");
		hidden = false;
	} else {
		$("form").slideUp(750);
		$("#btnAdd").text("Add Task");
		hidden = true;
	}
}

function save() {
	console.log("Saving Task");
	//get info from the inputs
	let title = $("#txtTitle").val();
	let date = $("#selDate").val();
	let location = $("#txtLocation").val();
	let priority = $("#selPriority").val();
	let color = $("#selColor").val();
	let collaborator = $("#txtCollaborator").val();
	let description = $("#txtDescription").val();
	//create a new Task object
	let task = new Task(
		title,
		important,
		date,
		location,
		priority,
		color,
		collaborator,
		description
	);
	console.log(task);
	displayTask(task);
	clearForm();
	toggleForm();
}

function displayTask(task) {
	//display the obj info
	if (!task.important) {
		syntax = `
    <div>
        <h4>${task.title}</h4>
		<p>${task.date}</p>
		<p>${task.location}</p>
		<p>${task.collaborator}</p>
		<p>${task.description}</p>
    </div>`;
	} else {
		syntax = `
    <div class="important">
		<i class="far fa-star"></i>
        <h4>${task.title}</h4>
		<p>${task.date}</p>
		<p>${task.location}</p>
		<p>${task.collaborator}</p>
		<p>${task.description}</p>
    </div>`;
	}
	$(".pending-tasks").append(syntax);
}
function clearForm() {
	$("#txtTitle").val("");
	$("#iImportant").removeClass("fas").addClass("far");
	$("#selDate").val("");
	$("#txtLocation").val("");
	$("#selPriority").val("");
	$("#selColor").val("#000000");
	$("#txtCollaborator").val("");
	$("#txtDescription").val("");
}
function init() {
	console.log("Calendar System");
	$("form").hide();
	//hook event
	$("#iImportant").click(toggleImportant);
	$("#btnAdd").click(toggleForm);
	$("#btnSave").click(save);
	//keypress
}
window.onload = init;
