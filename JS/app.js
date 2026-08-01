function addTask() {
    const input = document.getElementById("taskInput");
    const text = input.value.trim();

    // Validación
    if (text === "") return;

    // Crear elemento li
    const li = document.createElement("li");

    // Crear span para el texto
    const span = document.createElement("span");
    span.textContent = text;

    // Agregar el span al li
    li.appendChild(span);

    // Agregar el li a la lista
    document.getElementById("taskList").appendChild(li);

    // Limpiar input
    input.value = "";
}