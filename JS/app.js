function addTask() {

    const input = document.getElementById("taskInput");
    const text = input.value.trim();

    if (text === "") return;

    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = text;


    // Botón para completar la tarea
    const doneButton = document.createElement("button");

    doneButton.textContent = "Completar";
    doneButton.classList.add("done-btn");

    doneButton.addEventListener("click", function () {
        li.classList.toggle("completed");
    });


    // Botón para eliminar la tarea
    const deleteButton = document.createElement("button");

    deleteButton.textContent = "Eliminar";
    deleteButton.classList.add("delete-btn");

    deleteButton.addEventListener("click", function () {
        li.remove();
    });


    // Agregar los elementos a la tarea
    li.appendChild(span);
    li.appendChild(doneButton);
    li.appendChild(deleteButton);

    // Agregar la tarea a la lista
    document.getElementById("taskList").appendChild(li);

    // Limpiar el campo
    input.value = "";
}