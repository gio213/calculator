/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/createCalcLayout.js":
/*!********************************************!*\
  !*** ./src/components/createCalcLayout.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// create calculator layout\nconst createCalcLayout = () => {\n  const calcLayout = document.createElement(\"div\");\n  calcLayout.classList.add(\"calc-layout\");\n  const calcDisplay = document.createElement(\"div\");\n  calcDisplay.classList.add(\"calcDisplay\");\n  calcDisplay.textContent = \"0\";\n  calcLayout.appendChild(calcDisplay);\n\n  const calcButtons = document.createElement(\"div\");\n  calcButtons.classList.add(\"calcButtons\");\n\n  calcLayout.appendChild(calcButtons);\n\n  const buttons = [\n    \"AC\",\n    \"DEL\",\n    \"%\",\n    \"/\",\n    \"7\",\n    \"8\",\n    \"9\",\n    \"x\",\n    \"4\",\n    \"5\",\n    \"6\",\n    \"-\",\n    \"1\",\n    \"2\",\n    \"3\",\n    \"+\",\n    \"0\",\n    \".\",\n    \"π\",\n    \"=\",\n  ];\n\n  buttons.forEach((button) => {\n    const calcButton = document.createElement(\"button\");\n    calcButton.classList.add(\"calc-button\");\n    calcButton.textContent = button;\n    calcButtons.appendChild(calcButton);\n  });\n\n  return calcLayout;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createCalcLayout);\n\n\n//# sourceURL=webpack://calculator/./src/components/createCalcLayout.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_createCalcLayout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/createCalcLayout */ \"./src/components/createCalcLayout.js\");\n\n\nconst app = document.querySelector(\".app\");\napp.appendChild((0,_components_createCalcLayout__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\n\n// get elements from returned layout\nlet number = [];\n\nconst calcDisplay = document.querySelector(\".calcDisplay\");\nconst calcButtons = document.querySelector(\".calcButtons\");\nconst calcButton = document.querySelectorAll(\".calc-button\");\n\n// get buttons value\ncalcButton.forEach((button) => {\n  console.log(button);\n  button.addEventListener(\"click\", () => {\n    console.log(button.textContent);\n    let buttonValue = button.textContent;\n    calculate(buttonValue);\n    return buttonValue;\n  });\n});\n\n// calculate numbers\nconst calculate = (buttonValue) => {\n  switch (buttonValue) {\n    case \"AC\":\n      number = [];\n      calcDisplay.textContent = \"0\";\n      break;\n    case \"DEL\":\n      number.pop();\n      calcDisplay.textContent = number.join(\"\");\n      break;\n    case \"%\":\n      number.push(\"%\");\n      calcDisplay.textContent = number.join(\"\");\n      break;\n    case \"/\":\n      number.push(\"/\");\n      calcDisplay.textContent = number.join(\"\");\n      break;\n    case \"x\":\n      number.push(\"*\");\n      calcDisplay.textContent = number.join(\"\");\n      break;\n    case \"-\":\n      number.push(\"-\");\n      calcDisplay.textContent = number.join(\"\");\n      break;\n    case \"+\":\n      number.push(\"+\");\n      calcDisplay.textContent = number.join(\"\");\n      break;\n    case \"=\":\n      let result = eval(number.join(\"\"));\n      calcDisplay.textContent = result;\n      number = [];\n      break;\n    case \"π\":\n      number.push(Math.PI);\n      calcDisplay.textContent = number.join(\"\");\n      break;\n\n    default:\n      number.push(buttonValue);\n      calcDisplay.textContent = number.join(\"\");\n      break;\n  }\n};\n\n\n//# sourceURL=webpack://calculator/./src/index.js?");

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
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;