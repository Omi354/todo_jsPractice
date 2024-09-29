let todoList = [];

// 入力されたtodoの値を取得しオブジェクト化し配列に挿入
const registerNewTodo = () => {
  const newTodoName = document.getElementById("new-todo-name");
  const newPerson = document.getElementById("new-person");
  const newDeadline = document.getElementById("new-deadline");
  todoList.push({
    todoName: newTodoName.value,
    person: newPerson.value,
    deadline: newDeadline.value,
  });
};

// Todoリストを一旦すべて削除
const removeTodoListElem = () => {
  const tbodyElem = document.getElementById("todo-list");
  tbodyElem.replaceChildren();
};

// todoList配列の中身をすべて表示
const appendTodoListElem = (_todoList) => {
  removeTodoListElem();

  _todoList.forEach((todo) => {
    const todoNameTdElem = document.createElement("td");
    todoNameTdElem.textContent = todo.todoName;

    const personTdElem = document.createElement("td");
    personTdElem.textContent = todo.person;

    const deadlineTdElem = document.createElement("td");
    deadlineTdElem.textContent = todo.deadline;

    const trElem = document.createElement("tr");
    trElem.appendChild(todoNameTdElem);
    trElem.appendChild(personTdElem);
    trElem.appendChild(deadlineTdElem);

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

// フィルタリングしたTodoListを生成
const makeFilteredTodoList = () => {};

document.addEventListener("DOMContentLoaded", () => {
  const registerBtnElem = document.getElementById("register");
  const filterElem = document.getElementById("filter");

  // 登録ボタンを押した際の動作
  registerBtnElem.addEventListener("click", () => {
    registerNewTodo();

    appendTodoListElem(todoList);

    deleteInput();
  });

  //絞り込みに入力した際の動作
  filterElem.addEventListener("input", () => {
    // filterへのインプットを取得
    const filteringText = filterElem.value;

    // 取得したインプットを元にフィルタリングし、新たな配列を生成
    const filteredTodoList = todoList.filter((todo) => {
      return (
        todo.todoName.includes(filteringText) ||
        todo.person.includes(filteringText)
      );
    });

    appendTodoListElem(filteredTodoList);
  });
});
