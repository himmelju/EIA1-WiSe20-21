//Variable neue Aufgabe Eingabefeld
var Task = document.getElementById("NewTask");

//Variable Aufgaben zu erledigen übrig
var number = 0;

//Funktion der Entertaste

Task.addEventListener("keypress", function (e) {
    if (Task.value !="" && e.key == "Enter"){
        addTask();
        resetInputField();
    }
});



//Funktion neue Aufgabe hinzufügen und Variablen deklarieren
function addTask() {

    var main = document.createElement("inhalt");

    var myText = document.createElement("text");
    myText.className = "inhalt";
    myText.innerHTML = Task.value;

    var myCheckbox = document.createElement("checkbox");
    myCheckbox.className = "checkClick";
    myCheckbox.type = "checkbox";

    var mytrashButton = document.createElement("trash");
    mytrashButton.className = "fas fa-trash-alt";

    document.getElementById("form") .appendChild(main);
    main.appendChild(myCheckbox);
    main.appendChild(myText);
    main.appendChild(mytrashButton);

    mytrashButton.addEventListener("click", function() {
        deleteTask(main);
    });
    number++;
    updateNumber();
}

//Eingabefeld nach drücken der Entertaste wieder leeren
function resetInputField() {
    Task.value = "";
}

//Funktion Menge der Aufagben die noch zu erledigen sind anzuzeigen
function updateNumber() {
    document.getElementById("TasksLeft").innerText = "Aufgaben übrig: " + number;
}

//delete one Task
function deleteTask(main) {
    main.remove();
    number--;
    updateNumber();
}

//# sourceMappingURL=script9.js.map