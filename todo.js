"Use strict";

let Buttom = document.getElementById("addToDo");
let Container = document.getElementById("toDoContainer");
let Input = document.getElementById("inputField");
// let savedTasks = JSON.parse(localStorage.getItem("paragraph")) || []; // if there is no tasks in local storage, it will be an empty array

let input = document.querySelector(".inputHallowen");
let button = document.querySelector(".buttonHallowen");
let bodyColor = document.querySelector("body");


addToDo.addEventListener("click", function () {
    if (inputField.value === "") {
        alert('Please write something to do!');
    } else {
        var paragraph = document.createElement("p"); // Create a <p> element
        toDoContainer.appendChild(paragraph); // Append <p> to <div> with id="toDoContainer"
        paragraph.innerText = inputField.value; // Insert text
        paragraph.classList.add("paragraph-styling"); // Add a class to <p>
        inputField.value = ""; // Clear input field



      


        // savedTasks.forEach(paragraph); // add all the tasks from local storage to the UI
        paragraph.addEventListener("click", function () {
            paragraph.style.textDecoration = "line-through";
        })
        paragraph.addEventListener("dblclick", function () {
            toDoContainer.removeChild(paragraph);
            //     savedTasks = savedTasks.filter((e) => e !== txt); // Remove task from array
            //     localStorage.setItem("paragraph", JSON.stringify(savedTasks)); // Update local storage

        })
    }

    
});


input.addEventListener("click", () => {
    if (input.checked) {
        bodyColor.style.backgroundColor = "#330000";
        
        
    } else {
        bodyColor.style.backgroundColor = "#ebdbde";

    }
});




