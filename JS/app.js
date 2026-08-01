function addTask() {
  const input = document.getElementById("taskInput");
  const text = input.value.trim();

  // Validación
  if (text === "") return;

  // Crear elemento li
  const li = document.createElement("li");

  // Insertar texto
  li.textContent = text;

  // Agregar a la lista
  document.getElementById("taskList").appendChild(li);

  // Limpiar input
  input.value = "";
}