var notedOverallHours = document.getElementById("overallHours").value * 60;
var courseNumberTotal = document.getElementById("courseAmount").value;
var counter = 0;

function createInput() {
	var newForm = document.getElementById("hourForm");
	document.getElementById("initialForm").style.display = "none";
	document.getElementById("hourForm").style.display = "block";


	for (i = 0; i <= courseNumberTotal; i++) {
		newForm.innerHTML = "<label>Course #" + (counter + 1) + "</label>" + "<input type='number' name='courseHours' class='newInputs' min='1' max='9' step='1' value='1'/>";
		counter++;
	}
	newForm.innerHTML = "<input type='submit' value='submit'/>";

}



