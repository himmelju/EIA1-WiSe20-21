//Variable neue Aufgabe Eingabefeld
var Task = document.getElementById("NewTask");

//Variable Aufgaben zu erledigen übrig
var number = 0;

//Funktion der Entertaste

Task.addEventListener("keypress", function (e) {
    if (e.key == "Enter") {
        addTask();
        deleteAll();
        Task.value = "";
    
    }
});


//Funktion neue Aufgabe hinzufügen und Variablen deklarieren
function addTask(task) {

 


    number++;
    updateNumber();
}

//Funktion Menge der Aufagben die noch zu erledigen sind anzuzeigen
function updateNumber() {
    document.getElementById("TasksLeft").innerHTML = number + "Aufgaben übrig";
}

//delete All Button Funktion
function deleteAll() {
    this.parentElement.remove()
    updateNumber();
}


//# sourceMappingURL=TypeScript.js.map