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
	//console log the info
	console.log(
		title,
		important,
		date,
		location,
		priority,
		color,
		collaborator,
		description
	);
	displayTask(title);
	clearForm();
}

function displayTask(title) {
	syntax = `
    <div>
        <h6>${title}</h6>
    </div>`;
	$(".pending-tasks").append(syntax);
}
function clearForm() {
	$("#txtTitle").val("");
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
