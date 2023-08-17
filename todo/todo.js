// Variables

const addTask = document.getElementById("add-task");
const taskContainer = document.getElementById("task-container");
const inputTask = document.getElementById("input-task");

// Event Listener for Add button

// console.log(data);
sortTask();
function sortTask() {
  let keys = Object.keys(localStorage).sort((a, b) => b - a);
  keys.map((key) => {
    console.log(key);
    taskValue = localStorage[key];
    let task = document.createElement("div");
    task.classList.add("task");

    let li = document.createElement("li");
    li.innerText = taskValue;
    task.appendChild(li);

    let checkButton = document.createElement("button");
    checkButton.innerHTML = '<i class="fa-solid fa-check"></i>';
    checkButton.classList.add("checkTask");
    task.appendChild(checkButton);
    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    deleteButton.classList.add("deleteTask");
    task.appendChild(deleteButton);
    taskContainer.appendChild(task);
    inputTask.value = "";

    checkButton.addEventListener("click", function () {
      checkButton.parentElement.classList.toggle("line-through");
    });

    deleteButton.addEventListener("click", function (e) {
      let target = e.target;
      if (target.matches("button")) {
        target.parentElement.remove();
      }
      if (target.matches("i")) {
        target.parentElement.parentElement.remove();
      }
    });
  });
}

addTask.addEventListener("click", function () {
  let task = document.createElement("div");
  task.classList.add("task");

  let li = document.createElement("li");
  li.innerText = `${inputTask.value}`;
  task.appendChild(li);
  localStorage.setItem(Date.now(), inputTask.value);

  let checkButton = document.createElement("button");
  checkButton.innerHTML = '<i class="fa-solid fa-check"></i>';
  checkButton.classList.add("checkTask");
  task.appendChild(checkButton);
  let deleteButton = document.createElement("button");
  deleteButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
  deleteButton.classList.add("deleteTask");
  task.appendChild(deleteButton);

  if (inputTask.value === "") {
    alert("Please Enter a Task");
  } else {
    taskContainer.appendChild(task);
  }

  inputTask.value = "";

  checkButton.addEventListener("click", function () {
    checkButton.parentElement.classList.toggle("line-through");
  });

  deleteButton.addEventListener("click", function (e) {
    let target = e.target;
    if (target.matches("button")) {
      target.parentElement.remove();
    }
    if (target.matches("i")) {
      target.parentElement.parentElement.remove();
    }
  });

  // Store the data to localStorage
});
