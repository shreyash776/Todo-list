let todosArr = [];
let id = 0;

// create todo
function createTodo() {
  let input = document.getElementById("input");
  if (input.value !== "") {
    id++;
    todosArr.push({
      id:id,
      value: input.value,
    });
    input.value = "";
    displayTodo();
  }
}


// read array. (display todo)
const displayTodo = () => {
  const todosListDiv = document.getElementById("todosList");
  todosListDiv.innerHTML = ``;

  todosArr.forEach((todo) => {
    todosListDiv.innerHTML += `
    <div class="d-flex justify-content-between align-items-center">
    <div class="d-flex align-items-center">
      <div class="unChecked"></div>
      <p>${todo.value}</p>
    </div>
    <div>
      <button onclick='updateTodo(${todo.id})'>Edit</button>
      <button onclick='deleteTodo(${todo.id})'>Delete</button>
    </div>
  </div>
  
    `;
  });
};


// delete todo
const deleteTodo = (index) => {
  9
  todosArr = todosArr.filter((todo) => {
    return todo.id != index;
  });
  displayTodo();
};



// Update todo
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
    displayTodo();
  }
};

// const todos=[
//   {
//     id:1,
//     value:'loer'
//   },
//   {
//     id:2,
//     value:'lorem'
//   }
// ]
