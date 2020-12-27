//Variable neue Aufgabe Eingabefeld
var Task = document.getElementById("NewTask");
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
    main.className = "inhalt";
    var myText = document.createElement("text");
    myText.className = "text";
    myText.innerHTML = Task.value;
    var myCheckbox = document.createElement("checkbox");
    myCheckbox.className = "myCheckbox";
    myCheckbox.type = "checkbox";
    var mytrashButton = document.createElement("trash");
    mytrashButton.className = "fas fa-trash-alt";
    var form = document.getElementById("form");
    main.appendChild(myCheckbox);
    main.appendChild(myText);
    main.appendChild(mytrashButton);
    form.appendChild(main);
    mytrashButton.addEventListener("click", function () {
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
//# sourceMappingURL=script9.js.map