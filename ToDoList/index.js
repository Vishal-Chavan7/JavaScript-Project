
    const input = document.querySelector("#todo-input");
    const addBtn = document.querySelector("#add-btn");
    const todoList = document.querySelector("#todo-list");

    // Add functionality
    addBtn.addEventListener("click", () => {
      const task = input.value.trim();

      if (task === "") {
        alert("Please enter a task!");
        return;
      }

      const li = document.createElement("li");

      // Task text
      const taskText = document.createElement("span");
      taskText.className = "todo-text";
      taskText.textContent = task;

      // Delete button
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      deleteBtn.addEventListener("click", () => {
        todoList.removeChild(li);
      });

      // Append task text and delete button to the list item
      li.appendChild(taskText);
      li.appendChild(deleteBtn);

      // Add the new task to the to-do list
      todoList.appendChild(li);

      // Clear the input field
      input.value = "";
    });
  