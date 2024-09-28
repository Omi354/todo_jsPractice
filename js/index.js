let todoList = [];

document.addEventListener("DOMContentLoaded", () => {
  const registerBtnElem = document.getElementById("register");
  registerBtnElem.addEventListener("click", () => {
    // 入力されたtodoの値を取得
    const newTodoName = document.getElementById("new-todo-name");
    const newPerson = document.getElementById("new-person");
    const newDeadline = document.getElementById("new-deadline");

    const newTodoObject = {
      todoName: newTodoName.value,
      person: newPerson.value,
      deadline: newDeadline.value,
    };

    todoList.push(newTodoObject);
  });

  const indexTodoElem = document.getElementById("index-todo");
  console.log(indexTodoElem);
});
