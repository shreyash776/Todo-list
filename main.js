let todosArr = [];
let id = 0;


function createTodo() {
  let input = document.getElementById("input");
  if (input.value !== "") {
    id++;
    todosArr.push({
      id: id,
      value: input.value,
      isCompleted: false,
    });
    input.value = "";
    displayTodo();
  }
}


const displayTodo = () => {
  const todosListDiv = document.getElementById("todosList");
  const completedTodosListDiv = document.getElementById("completedList");
  todosListDiv.innerHTML = ``;
  completedTodosListDiv.innerHTML = ``;

  todosArr.forEach((todo) => {
  
    if (!todo.isCompleted) {
      todosListDiv.innerHTML += `
    <div class="box1">
    <div class="text_box">
      <input type="checkbox" name="todo" id="check${todo.id}" class="checked pointer" onclick="onCheckBoxChange(${todo.id})">
     <label class=" value" for="check${todo.id}"> <p class="pointer">${todo.value}</p></label>
    </div >
    <div class="btn_box">
      <button onclick='updateTodo(${todo.id})' class="btn btn-primary">Edit</button>
      <button onclick='deleteTodo(${todo.id})'  class="btn btn-danger">Delete</button>
    </div>
  </div>
  <hr>
    `;
    } 
    else {
      completedTodosListDiv.innerHTML += `
    <div class="box1">
    <div class="text_box">
      <input type="checkbox" name="todo" id="check${todo.id}" class="checked pointer" onclick="onCheckBoxChange(${todo.id})">
     <label class=" value" for="check${todo.id}"> <p class="strike pointer">${todo.value}</p></label>
    </div >
    <div class="btn_box">
      <button onclick='deleteTodo(${todo.id})'  class="btn btn-danger">Delete</button>
    </div>
  </div>
    `;
    }
  });
};


const deleteTodo = (index) => {
  todosArr = todosArr.filter((todo) => {
    return todo.id != index;
  });
  displayTodo();
};

const onCheckBoxChange = (id) => {
  const selectedTodo = todosArr.find((todo) => todo.id === id);
  selectedTodo.isCompleted = !selectedTodo.isCompleted;
  displayTodo();

 
  
  const checkbox = document.getElementById(`check${id}`);
  if (checkbox) {
    checkbox.checked = selectedTodo.isCompleted;
  }
};


const updateTodo = (index) => {
  const updatedValue = prompt(
    "Edit todo:",
    todosArr.find((todo) => todo.id === index).value
  );

  if (updatedValue !== null) {
    todosArr = todosArr.map((todo) => {
      if (todo.id === index) {
        todo.value = updatedValue;
      }
      return todo;
    
    });
    
  }
  displayTodo();
};
