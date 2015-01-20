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
      var child = document.createElement('li');
      child.innerHTML = "<label>Course #" + (i) + "</label>" + "<input type='number' name='courseHours-"+ i+"' class='newInputs' min='1' max='9' step='1' value='1'/>";
      newForm.appendChild(child);
    }

    // Add our button
    var button = document.createElement('li');
    button.innerHTML = "<input type='submit' value='submit'/>";
    newForm.appendChild(button);
  }

  // Below is the functionality to add the hours from each course (Does not work in here, but does work in isolated environment)
  var query = function(sel, el) {
    return [].slice.call((el || document).querySelectorAll(sel))
  }

  document.getElementById("hourForm").addEventListener('submit', function (e) {
    e.preventDefault();
    var inputs = query('#hourForm input[type="number"]')
    var result = query('#result')[0]
    var button = query('#hourForm submit')[0]
    result.textContent = inputs
    .map(function(x){return Number(x.value)})
    .reduce(function(x, y){return x + y}, 0)
  });

};
