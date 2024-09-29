let todoList = [];
let filteringText = "";

// 入力されたtodoの値を取得しオブジェクト化し配列に挿入
const registerNewTodo = () => {
  const newTodoName = document.getElementById("new-todo-name");
  const newPerson = document.getElementById("new-person");
  const newDeadline = document.getElementById("new-deadline");
  const newId = Date.now();

  if (newTodoName.value === "" || newPerson.value === "") {
    window.alert("未入力の項目があります");
  } else {
    todoList.push({
      todoName: newTodoName.value,
      person: newPerson.value,
      deadline: newDeadline.value,
      id: newId,
    });
  }
};

// Todoリストの表示を一旦すべて消去
const removeTodoListElem = () => {
  const tbodyElem = document.getElementById("todo-list");
  tbodyElem.replaceChildren();
};

// todoList配列から任意のTodoを削除
const removeTodoById = (todoId) => {
  todoList = todoList.filter((todo) => todo.id !== todoId);
};

// todoList配列の中身をすべて表示
const appendTodoListElem = () => {
  removeTodoListElem();

  const filterElem = document.getElementById("filter");
  filteringText = filterElem.value;

  const filteredTodoList = todoList.filter((todo) => {
    return (
      todo.todoName.includes(filteringText) ||
      todo.person.includes(filteringText)
    );
  });

  filteredTodoList.forEach((todo) => {
    const todoNameTdElem = document.createElement("td");
    todoNameTdElem.textContent = todo.todoName;

    const personTdElem = document.createElement("td");
    personTdElem.textContent = todo.person;

    const deadlineTdElem = document.createElement("td");
    deadlineTdElem.textContent = todo.deadline;

    const idTdElem = document.createElement("td");
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "削除";
    idTdElem.appendChild(deleteBtn);

    deleteBtn.addEventListener("click", () => {
      const todoId = todo.id;
      removeTodoById(todoId);
      appendTodoListElem();
    });

    const trElem = document.createElement("tr");
    trElem.appendChild(todoNameTdElem);
    trElem.appendChild(personTdElem);
    trElem.appendChild(deadlineTdElem);
    trElem.appendChild(idTdElem);

    const tbodyElem = document.getElementById("todo-list");
    tbodyElem.appendChild(trElem);
  });
};

// インプットタグの中身を削除
const deleteInput = () => {
  const newTodoName = document.getElementById("new-todo-name");
  const newPerson = document.getElementById("new-person");
  const newDeadline = document.getElementById("new-deadline");

  newTodoName.value = "";
  newPerson.value = "";
  newDeadline.value = "";
};

// 並べ替えための関数
const sortTodoList = (isAscending) => {
  if (isAscending) {
    todoList.sort((a, b) => new Date(a.deadline) - new Date(b.deadline)); // 期限が近いもの順に並べ替える
  } else {
    todoList.sort((a, b) => new Date(b.deadline) - new Date(a.deadline)); // 期限が遠いもの順に並べ替える
  }

  appendTodoListElem();
};

document.addEventListener("DOMContentLoaded", () => {
  const registerBtnElem = document.getElementById("register");
  const filterElem = document.getElementById("filter");
  const sortBtn = document.getElementById("sort");
  let isAscending = true; // sortのための変数

  // 登録ボタンを押した際の動作
  registerBtnElem.addEventListener("click", () => {
    registerNewTodo();

    appendTodoListElem();

    deleteInput();
  });

  // 絞り込みに入力した際の動作
  filterElem.addEventListener("input", () => {
    appendTodoListElem();
  });

  // 並べ替えのための動作

  sortBtn.addEventListener("click", () => {
    sortTodoList(isAscending);
    isAscending = !isAscending;
  });
});
