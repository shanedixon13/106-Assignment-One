let important = false;
let serverUrl = "https://fsdiapi.azurewebsites.net/";
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

	$.ajax({
		type: "POST",
		url: serverUrl + "api/tasks",
		data: JSON.stringify(task),
		contentType: "application/json",
		success: function (res) {
			console.log("Server says", res);
			let t = JSON.parse(res);
			displayTask(t);
		},
		error: function (error) {
			console.log("Error saving task", error);
		},
	});
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
function getTask() {
	$.ajax({
		type: "GET",
		url: serverUrl + "api/tasks",
		success: function (res) {
			let t = JSON.parse(res);
			for (let i = 0; i < t.length; i++) {
				if (t[i].name === "Shane") {
					console.log(t[i]);
					displayTask(t[i]);
				}
			}
			console.log("Server says: " + t);
		},
		error: function (err) {
			console.log("Error getting tasks: ", err);
		},
	});
}
function clearForm() {
	$("#txtTitle").val("");
	$("#iImportant").removeClass("fas").addClass("far");
	important = false;
	$("#selDate").val("");
	$("#txtLocation").val("");
	$("#selPriority").val("");
	$("#selColor").val("#000000");
	$("#txtCollaborator").val("");
	$("#txtDescription").val("");
}
function clearTaskAll() {
	console.log("Clear all");
	$.ajax({
		type: "DELETE",
		url: serverUrl + "api/tasks/clear/Shane",
		success: function (res) {
			let t = JSON.parse(res);
			console.log("All of the tasks have been cleared", t);
			location.reload(true);
		},
		error: function (err) {
			console.log("Something went wrong", err);
		},
	});
}
function init() {
	console.log("Calendar System");
	$("form").hide();
	getTask();
	//hook event
	$("#iImportant").click(toggleImportant);
	$("#btnAdd").click(toggleForm);
	$("#btnSave").click(save);
	$("#btnClear").click(clearTaskAll);
	//keypress
}
window.onload = init;
