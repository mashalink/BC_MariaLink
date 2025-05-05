/* Tehtävä 6
Määrittele konstruktori `Task`, joka ottaa `title`, `description` ja `completed`.
Lisää HTML:ään painike, jota painamalla lisätään uusi `Task`-olio `tasks`-taulukkoon ja näytetään se sivulla.
*/

function Task(title, description, completed = false) {
  this.title = title;
  this.description = description;
  this.completed = completed;
}

const tasks = [];

function addTask() {
  const newTask = new Task(
    document.getElementById("title").value,
    document.getElementById("description").value
  );
  tasks.push(newTask);
  displayTasks();
}

function displayTasks() {
  const list = document.getElementById("taskList");
  list.innerHTML = "";

  tasks.forEach((task) => {
    const item = document.createElement("li");
    item.textContent = `${task.title}: ${task.description} (${
      task.completed ? "done" : "incomplete"
    })`;
    list.appendChild(item);
  });
}
