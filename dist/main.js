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

/***/ "./src/api.js":
/*!********************!*\
  !*** ./src/api.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"api\": () => (/* binding */ api)\n/* harmony export */ });\nconst api = (() => {\n\n  //Puts the required data into an object\n  function transformData(data) {\n    console.log(data)\n    const objData = {\n      cityName: data.name,\n      temp: data.main.temp,\n      feelsLike: data.main.feels_like,\n      humidity: data.main.humidity,\n      tempMax: data.main.temp_max,\n      tempMin: data.main.temp_min,\n      country: data.sys.country,\n      weather: data.weather[0].main,\n      windSpeed: data.wind.speed,\n    };\n    return { objData }\n  }\n\n  async function getData(city) {\n    try {\n      const response = await fetch(\n        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=c235920f685fe6f408c45380821c79b2`,\n        { mode: \"cors\" }\n      );\n      const data = transformData(await response.json());\n      if (!response.ok) {\n        throw new Error(\"No matching location found!\");\n      }\n      return data\n    } catch (err) {\n      alert(err);\n      return null\n    }\n  }\n\n  return { getData };\n})();\n\n\n\n\n//# sourceURL=webpack://weather-app/./src/api.js?");

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"dom\": () => (/* binding */ dom)\n/* harmony export */ });\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ \"./src/api.js\");\n\n\nconst dom = (() => {\n  const headingContainer = document.querySelector('.heading-container');\n  const tempContainer = document.querySelector('.temp-container');\n  const tempContent = document.querySelector('.temp-content');\n  const searchLocation = document.querySelector(\".search-location\");\n  const submit = document.querySelector(\"#submitBtn\");\n\n  (function eventHandlers(){\n    submit.addEventListener(\"click\", (e) => {\n      e.preventDefault();\n      resetDisplay();\n      submitCity();\n    });\n    \n    //When the user presses enter, clicks the submit button\n    searchLocation.addEventListener(\"keypress\", (e) => {\n      if (e.key === \"Enter\") {\n        e.preventDefault();\n        submit.click();\n      }\n    });\n  })();\n  \n  // Validates text input\n  function validateInput() {\n    if (searchLocation.value != \"\") {\n      return true;\n    } else {\n      return false;\n    }\n  }\n\n  // Submit form\n  async function submitCity() {\n    if (validateInput() == true) {\n      const weatherData = await _api__WEBPACK_IMPORTED_MODULE_0__.api.getData(searchLocation.value);\n      displayWeather(weatherData);\n      console.log(weatherData);\n    } else if (validateInput() == false){\n      searchLocation.reportValidity();\n    }\n  }\n\n  // Display weather conditions\n  function displayWeather(weatherData){\n\n    const location = document.createElement('h2');\n    location.textContent = weatherData.objData.cityName;\n    headingContainer.appendChild(location);\n\n    const condition = document.createElement('h3');\n    condition.textContent = weatherData.objData.weather;\n    headingContainer.appendChild(condition);\n\n    const temperature = document.createElement('p');\n    temperature.classList.add('temp');\n    temperature.textContent = weatherData.objData.temp;\n    tempContent.appendChild(temperature);\n\n    const celsius = document.createElement('p');\n    celsius.classList.add('celsius');\n    celsius.textContent = `ºC  `;\n    tempContent.appendChild(celsius);\n\n    tempContainer.classList.remove('hidden');\n  }\n\n  function resetDisplay(){\n    headingContainer.innerHTML = '';\n    tempContent.innerHTML = '';\n    tempContainer.classList.add('hidden');\n  }\n\n  // Fetch a chosen data on first access\n  (async function displayFirst() {\n    const firstData = await _api__WEBPACK_IMPORTED_MODULE_0__.api.getData(\"São Paulo\");\n    displayWeather(firstData);\n  })();\n\n  return {submitCity}\n})();\n\n\n\n\n\n\n//# sourceURL=webpack://weather-app/./src/dom.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ \"./src/api.js\");\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

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