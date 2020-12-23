//Variable neue Aufgabe Eingabefeld
var Task:HTMLInputElement = (document.getElementById("NewTask") as HTMLInputElement);

//Variable Aufgaben zu erledigen übrig
var number = 0;

//Funktion der Entertaste

Task.addEventListener("keypress", function (e) {
    if (e.key == "Enter") {
      addTask();
      Task.value = "";
    }
});

//Funktion neue Aufgabe hinzufügen und Variablen deklarieren
function addTask() {

    var main = document.createElement("inhalt");

    var myText = document.createElement("text");
    myText.className = "inhalt";
    myText.innerHTML = Task.value;

    var myCheckbox:HTMLInputElement = (document.createElement("checkbox") as HTMLInputElement);
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