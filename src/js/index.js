import {
  appendTodoListElem,
  registerNewTodo,
  deleteInput,
  sortTodoList,
  data,
} from "./todo";
import "../css/style.css";

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
