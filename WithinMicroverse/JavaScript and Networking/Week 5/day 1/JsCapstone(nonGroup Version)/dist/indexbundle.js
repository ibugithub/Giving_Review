"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunktodo_list"] = self["webpackChunktodo_list"] || []).push([["index"],{

/***/ "./src/gameApi.js":
/*!************************!*\
  !*** ./src/gameApi.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass SendAndReciveData {\n  constructor() {\n    this.url = 'https://api.tvmaze.com/schedule';\n  }\n\n    gettingData = async () => {\n      const response = await fetch(this.url);\n      const jsonData = await response.json();\n      return jsonData;\n    }\n\n    sendScore = async (name, userScore) => {\n      const data = { user: name, score: userScore };\n      await fetch(this.url, {\n        method: 'POST',\n        mode: 'cors',\n        cache: 'no-cache',\n        credentials: 'same-origin',\n        headers: {\n          'Content-Type': 'application/json',\n        },\n        redirect: 'follow',\n        referrerPolicy: 'no-referrer',\n        body: JSON.stringify(data),\n      });\n    };\n}\n\nconst tvShowApi = new SendAndReciveData();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tvShowApi);\n\n//# sourceURL=webpack://todo_list/./src/gameApi.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _gameApi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameApi.js */ \"./src/gameApi.js\");\n\n\nconst mainElement = document.querySelector('#main_section');\n\nconst getData = async () => {\n  const data = await _gameApi_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].gettingData();\n  data.forEach((element) => {\n    try {\n      if (element.show.image.original !== null) {\n        const image = document.createElement('img');\n        image.src = element.show.image.original;\n        image.classList.add('show_image');\n        mainElement.appendChild(image);\n        console.log(element.show.image.original);\n      }\n    } catch (error) {\n      console.log(error);\n    }\n  });\n};\n\ngetData();\n\n//# sourceURL=webpack://todo_list/./src/index.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);