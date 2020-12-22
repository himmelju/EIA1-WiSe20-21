//Variable neue Aufgabe Eingabefeld
var NewTask = document.getElementById("NewTask");
//Variable Aufgaben zu erledigen übrig
var number = 0;
//Funktion der Entertaste
document.querySelector("NewTask").addEventListener("keypress", function (event) {
    if (event.key == "Enter") {
        addNewTask();
        NewTask.value = "";
    }
});
//Funktion neue Aufgabe hinzufügen und Variablen deklarieren
function addNewTask(task) {
    var mybox = document.createElement("mybox");
    mybox.className = "mybox";
    var checkbox = document.createElement("checkbox");
    checkbox.className = "checkClick";
    checkbox.type = "checkbox";
    var text = document.createElement("Text");
    text.className = "NewTaskText";
    text.innerHTML = NewTask.value;
    var trash = document.createElement("trash");
    trash.className = "fas fa-trash-alt";
    //Funktion Mülleimer Klicken
    trash.addEventListener("click", function () {
        removeTask(mybox);
    });
    document.getElementById("NewTask").appendChild(mybox);
    mybox.appendChild(checkbox);
    mybox.appendChild(text);
    mybox.appendChild(trash);
    checkbox.addEventListener("click", function () {
        if (checkbox.classList.contains("done")) {
            checkbox.classList.remove("done");
            text.classList.remove("line-through");
        }
        else {
            checkbox.classList.add("done");
            text.classList.add("crossedout");
        }
    });
    number++;
    updateNumber();
}
//Funktion Menge der Aufagben die noch zu erledigen sind anzuzeigen
function updateNumber() {
    document.getElementById("TasksLeft").innerHTML = number + "Aufgaben übrig";
}
//delete All Button Funktion
function deleteAll() {
    this.parentElement.remove();
    updateNumber();
}
//# sourceMappingURL=TypeScript.js.map
//# sourceMappingURL=script9.js.map