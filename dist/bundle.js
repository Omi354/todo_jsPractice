/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/todo.js":
/*!************************!*\
  !*** ./src/js/todo.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   appendTodoListElem: function() { return /* binding */ _appendTodoListElem; },
/* harmony export */   deleteInput: function() { return /* binding */ deleteInput; },
/* harmony export */   registerNewTodo: function() { return /* binding */ registerNewTodo; },
/* harmony export */   sortTodoList: function() { return /* binding */ sortTodoList; }
/* harmony export */ });
var data = {
  todoList: [],
  filteringText: ""
};

// 入力されたtodoの値を取得しオブジェクト化し配列に挿入
var registerNewTodo = function registerNewTodo() {
  var newTodoName = document.getElementById("new-todo-name");
  var newPerson = document.getElementById("new-person");
  var newDeadline = document.getElementById("new-deadline");
  var newId = Date.now();
  if (newTodoName.value === "" || newPerson.value === "") {
    window.alert("未入力の項目があります");
  } else {
    data.todoList.push({
      todoName: newTodoName.value,
      person: newPerson.value,
      deadline: newDeadline.value,
      id: newId
    });
  }
};

// Todoリストの表示を一旦すべて消去
var removeTodoListElem = function removeTodoListElem() {
  var tbodyElem = document.getElementById("todo-list");
  tbodyElem.replaceChildren();
};

// todoList配列から任意のTodoを削除
var removeTodoById = function removeTodoById(todoId) {
  data.todoList = data.todoList.filter(function (todo) {
    return todo.id !== todoId;
  });
};

// todoList配列の中身をすべて表示
var _appendTodoListElem = function appendTodoListElem() {
  removeTodoListElem();
  var filterElem = document.getElementById("filter");
  data.filteringText = filterElem.value;
  var filteredTodoList = data.todoList.filter(function (todo) {
    return todo.todoName.includes(data.filteringText) || todo.person.includes(data.filteringText);
  });
  filteredTodoList.forEach(function (todo) {
    var todoNameTdElem = document.createElement("td");
    todoNameTdElem.textContent = todo.todoName;
    var personTdElem = document.createElement("td");
    personTdElem.textContent = todo.person;
    var deadlineTdElem = document.createElement("td");
    deadlineTdElem.textContent = todo.deadline;
    var handlerTdElem = document.createElement("td");
    var todoId = todo.id; // 削除と編集の対象を取得するためのid

    // 削除機能の実装
    var deleteBtn = document.createElement("button");
    deleteBtn.textContent = "削除";
    handlerTdElem.appendChild(deleteBtn); // 削除ボタンを操作カラムに追加

    deleteBtn.addEventListener("click", function () {
      removeTodoById(todoId);
      _appendTodoListElem(); // 削除した配列todoListを再表示
    });

    // 編集機能の実装
    var editBtn = document.createElement("button");
    var updateBtn = document.createElement("button");
    editBtn.textContent = "編集";
    updateBtn.textContent = "更新";
    updateBtn.style.display = "none";
    handlerTdElem.appendChild(editBtn);
    handlerTdElem.appendChild(updateBtn);
    editBtn.addEventListener("click", function () {
      // 各セルの情報を持ったインプットタグを生成
      var todoNameInputElem = document.createElement("input");
      todoNameInputElem.type = "text";
      todoNameInputElem.value = todo.todoName;
      var personInputElem = document.createElement("input");
      personInputElem.type = "text";
      personInputElem.value = todo.person;
      var deadlineInputElem = document.createElement("input");
      deadlineInputElem.type = "date";
      deadlineInputElem.value = todo.deadline;

      //tdのvalueを削除
      todoNameTdElem.textContent = "";
      personTdElem.textContent = "";
      deadlineTdElem.textContent = "";

      // インプットタグを各td内に配置
      todoNameTdElem.appendChild(todoNameInputElem);
      personTdElem.appendChild(personInputElem);
      deadlineTdElem.appendChild(deadlineInputElem);

      // 更新ボタンを表示し、編集ボタンを非表示にする
      editBtn.style.display = "none";
      updateBtn.style.display = "inline";

      // 更新ボタンの動作を定義
      updateBtn.addEventListener("click", function () {
        // 編集後の値を取得
        var updatedTodoName = todoNameInputElem.value;
        var updatedPerson = personInputElem.value;
        var updatedDeadline = deadlineInputElem.value;

        // 編集したいインスタンスのidを取得
        var updatedIndex = data.todoList.findIndex(function (_todo) {
          return _todo.id === todo.id;
        });

        // 配列の書き換えの処理
        data.todoList[updatedIndex].todoName = updatedTodoName;
        data.todoList[updatedIndex].person = updatedPerson;
        data.todoList[updatedIndex].deadline = updatedDeadline;

        // 再表示
        _appendTodoListElem();
      });
    });
    var trElem = document.createElement("tr");
    trElem.appendChild(todoNameTdElem);
    trElem.appendChild(personTdElem);
    trElem.appendChild(deadlineTdElem);
    trElem.appendChild(handlerTdElem);
    var tbodyElem = document.getElementById("todo-list");
    tbodyElem.appendChild(trElem);
  });
};

// インプットタグの中身を削除

var deleteInput = function deleteInput() {
  var newTodoName = document.getElementById("new-todo-name");
  var newPerson = document.getElementById("new-person");
  var newDeadline = document.getElementById("new-deadline");
  newTodoName.value = "";
  newPerson.value = "";
  newDeadline.value = "";
};

// 並べ替えための関数
var sortTodoList = function sortTodoList(isAscending) {
  if (isAscending) {
    data.todoList.sort(function (a, b) {
      return new Date(a.deadline) - new Date(b.deadline);
    }); // 期限が近いもの順に並べ替える
  } else {
    data.todoList.sort(function (a, b) {
      return new Date(b.deadline) - new Date(a.deadline);
    }); // 期限が遠いもの順に並べ替える
  }
  _appendTodoListElem();
};

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ "./src/js/todo.js");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/style.css */ "./src/css/style.css");


document.addEventListener("DOMContentLoaded", function () {
  var registerBtnElem = document.getElementById("register");
  var filterElem = document.getElementById("filter");
  var sortBtn = document.getElementById("sort");
  var isAscending = true; // sortのための変数

  // 登録ボタンを押した際の動作
  registerBtnElem.addEventListener("click", function () {
    (0,_todo__WEBPACK_IMPORTED_MODULE_0__.registerNewTodo)();
    (0,_todo__WEBPACK_IMPORTED_MODULE_0__.appendTodoListElem)();
    (0,_todo__WEBPACK_IMPORTED_MODULE_0__.deleteInput)();
  });

  // 絞り込みに入力した際の動作
  filterElem.addEventListener("input", function () {
    (0,_todo__WEBPACK_IMPORTED_MODULE_0__.appendTodoListElem)();
  });

  // 並べ替えのための動作
  sortBtn.addEventListener("click", function () {
    (0,_todo__WEBPACK_IMPORTED_MODULE_0__.sortTodoList)(isAscending);
    isAscending = !isAscending;
  });
});
}();
/******/ })()
;
//# sourceMappingURL=bundle.js.map