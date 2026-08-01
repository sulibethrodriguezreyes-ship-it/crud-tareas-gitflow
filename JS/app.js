function addTask() {
    const input = document.getElementById("taskInput");
    const text = input.value.trim();

    if (text === "") return;

    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = text;

    const doneButton = document.createElement("button");
    doneButton.textContent = "Completar";
    doneButton.classList.add("done-btn");

    doneButton.addEventListener("click", function () {
        li.classList.toggle("completed");
    });

    li.appendChild(span);
    li.appendChild(doneButton);

    document.getElementById("taskList").appendChild(li);

    input.value = "";
}
