/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("// import createCalcLayout from \"./components/createCalcLayout\";\n\n// const app = document.querySelector(\".app\");\n// app.appendChild(createCalcLayout());\n\n// // get elements from returned layout\n// let number = [];\n\n// const calcDisplay = document.querySelector(\".calcDisplay\");\n// const calcButtons = document.querySelector(\".calcButtons\");\n// const calcButton = document.querySelectorAll(\".calc-button\");\n\n// // get buttons value\n// calcButton.forEach((button) => {\n//   console.log(button);\n//   button.addEventListener(\"click\", () => {\n//     console.log(button.textContent);\n//     let buttonValue = button.textContent;\n//     isNumber(buttonValue);\n//     return buttonValue;\n//   });\n// });\n\n// // calculate numbers\n// const isNumber = (buttonValue) => {\n//   switch (buttonValue) {\n//     case \"AC\":\n//       number = [];\n//       calcDisplay.textContent = \"0\";\n//       break;\n//     case \"DEL\":\n//       number.pop();\n//       calcDisplay.textContent = number.join(\"\");\n//       break;\n//     case \"%\":\n//       number.push(\"%\");\n//       calcDisplay.textContent = number.join(\"\");\n//       break;\n//     case \"/\":\n//       number.push(\"/\");\n//       calcDisplay.textContent = number.join(\"\");\n//       break;\n//     case \"x\":\n//       number.push(\"*\");\n//       calcDisplay.textContent = number.join(\"\");\n//       break;\n//     case \"-\":\n//       number.push(\"-\");\n//       calcDisplay.textContent = number.join(\"\");\n//       break;\n//     case \"+\":\n//       number.push(\"+\");\n//       calcDisplay.textContent = number.join(\"\");\n//       break;\n//     case \"=\":\n//       let result = eval(number.join(\"\"));\n//       calcDisplay.textContent = result;\n//       number = [];\n//       break;\n//     case \"π\":\n//       number.push(Math.PI);\n//       calcDisplay.textContent = number.join(\"\");\n//       break;\n\n//     default:\n//       number.push(buttonValue);\n//       calcDisplay.textContent = number.join(\"\");\n//       break;\n//   }\n// };\n\nconst text = document.createElement(\"p\");\ntext.textContent = \"Hello World\";\ndocument.body.appendChild(text);\n\n\n//# sourceURL=webpack://calculator/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;