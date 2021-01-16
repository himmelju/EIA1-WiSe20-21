//Varibalen deklarieren
//statt 2 Arrays soll 1 Array und ToDo Objekte genutzt werden (#10)
var task = [{
    todosText: "Lorem",
    todosChecked: true
}, {
    todosText: "Ipsum",
    todosChecked: false
}, {
    todosText: "Dolor",
    todosChecked: false
}];

//Variablen deklarieren (für #10 nichts geändert)
//Variablen für done und opern deklarieren (#11)
var inputDOMElement: HTMLInputElement;
var addButtonDOMElement: HTMLElement;
var todosDOMElement: HTMLElement;
var counterDOMElement: HTMLElement;
var doneDOMElement: HTMLElement;
var openDOMElement: HTMLElement;

//für #10 nichts ändern
//#11 done und open Elemente der Funktion hinzufügen
window.addEventListener("load", function() {

    inputDOMElement = document.querySelector("#inputTodo");
    addButtonDOMElement = document.querySelector("#addButton");
    todosDOMElement = document.querySelector("#todos");
    counterDOMElement = document.querySelector("#counter");
    doneDOMElement = document.querySelector("#done");
    openDOMElement = document.querySelector("#open");

    addButtonDOMElement.addEventListener("click", addTodo);
    drawListToDOM();
});

//Funktion Liste der Tasks, Trahs Button und Checkbox
//#10 ändern damit die neue ToDo oben in die Liste einsortiert wird (var schleife function)
function drawListToDOM() {
    todosDOMElement.innerHTML = "";

    var schleife = function(index) {

        var todo: HTMLElement = document.createElement("div");
        todo.classList.add("todo");

        todo.innerHTML =  "<span class='check " + task[index] .todosChecked + "'><i class='fas fa-check'></i></span>"
                            + task[index] .todosText +
                            "<span class='trash fas fa-trash-alt'></span>";

        todo.querySelector(".check").addEventListener("click", function() {
            toggleCheckState(index);
        });

        todo.querySelector(".trash").addEventListener("click", function() {
            deleteTodo(index);
        });

        todosDOMElement.appendChild(todo);
    }

    for (var index = 0; index < task.length; index++) {
        schleife(index);
    }

    updateCounter();
}

//Counter 
//Aufagbe #11 done und open task counter hinzufügen 
function updateCounter() {
    counterDOMElement.innerHTML = task.length + " in total";

    var countDoneElements = 0;
    var countOpenElements = 0;

    for (var index = 0; index < task.length; index++) {
        if (task[index] .todosChecked == false) {
            countOpenElements++;
        }
        else {
            countDoneElements++;
        }

        openDOMElement.innerHTML = countOpenElements + " open";
        doneDOMElement.innerHTML = countDoneElements + " done"; 
    }
}

//Task erstellen
function addTodo() {
    if (inputDOMElement.value != "") {
        task.unshift({
            todosText: inputDOMElement.value,
            todosChecked:false
     });
        inputDOMElement.value = "";
        drawListToDOM();
    }
}

//Checkbox
function toggleCheckState(index) {
    task[index] .todosChecked = !task[index] .todosChecked;
    drawListToDOM();
}

//Task löschen
function deleteTodo(index) {

    task.splice(index, 1);
    drawListToDOM();
}

//Artyom (Spracheingabe) Funktion - Tipps auf https://sdkcarlos.github.io/sites/artyom.html

window.addEventListener("load", function () {
    var artyom = new artyom();
    artyom.addCommands ({
        indexes: ["Meine neue Task ist *"],
        smart: true,
        action: function(i, wildcard) {
            task.unshift({
                todosText: wildcard,
                todosChecked: false
            });
            drawListToDOM();
        }
    });

//Buttons start und stop der Spracheingabe

    document.getElementById("startCommand") .addEventListener("click", function() {
    startmyArtyom(); 
    artyom.say("Sage Meine neue Task ist und deine Task die du hinzufügen willst");
    });

    document.getElementById("endCommand") .addEventListener("click", function() {
    endmyArtyom();
    });

//Funktionen für die Buttons Start und Ende der Spracheingabe

function startmyArtyom() {
   artyom.initialize( {
        lang: "de-DE",
        continious:true,
        listen:true, 
        interimResults: true,
        debug:true,
    });
}

function endmyArtyom() {
    artyom.fatality();
}

});

//sourceMappingURL=script10.js.map