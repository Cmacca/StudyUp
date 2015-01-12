window.onload = function () {

	document.getElementById("initialForm").addEventListener('submit', function (e) {
    	e.preventDefault();
    	createInput();
	});

	function createInput() {
  	var notedOverallHours = document.getElementById("overallHours").value * 60; 
  	var courseNumberTotal = document.getElementById("courseAmount").value;
  	var newForm = document.getElementById("hourForm");
  
  	document.getElementById("initialForm").style.display = "none";
		document.getElementById("hourForm").style.display = "block";
    
  	// Add our elements
  	for (i = 1; i <= courseNumberTotal; i++) {
			var child = document.createElement('span');
			child.innerHTML = "<label>Course #" + (i) + "</label>" + "<input type='number' name='courseHours-"+ i+"' class='newInputs' min='1' max='9' step='1' value='1'/>";
			newForm.appendChild(child);
 	 }

  	// Add our button
  	var button = document.createElement('span');
  	button.innerHTML = "<input type='submit' value='submit'/>";
  	newForm.appendChild(button);
	}

};
