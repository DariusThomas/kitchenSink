/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./KitchenSink.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./KitchenSink.ts":
/*!************************!*\
  !*** ./KitchenSink.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar fullName = \"Darius Thomas\";\r\nvar ageReq = 21;\r\nvar numOfStates = 50;\r\nconsole.log(sayHello());\r\nconsole.log(checkAge('Charles', 21));\r\nconsole.log(checkAge('Abby', 27));\r\nconsole.log(checkAge('James', 18));\r\nconsole.log(checkAge('John', 17));\r\nvar favVegs = ['Carrots', 'Tomatoes', 'Potatoes'];\r\nfor (var i = 0; i < favVegs.length; i++) {\r\n    console.log(favVegs[i]);\r\n}\r\nvar arr = [{ name: 'Mark', age: 25 }, { name: 'Li', age: 20 }, { name: 'Jessica', age: 34 }, { name: 'James', age: 18 }, { name: 'Rebbeca', age: 21 }];\r\nfor (var i = 0; i < arr.length; i++) {\r\n    console.log(checkAge(arr[i].name, arr[i].age));\r\n}\r\nvar numOfLetters = getLength('Hello World');\r\nif (numOfLetters % 2 == 0) {\r\n    console.log('The world is nice and even');\r\n}\r\nelse {\r\n    console.log('The world is an odd place!');\r\n}\r\n;\r\nfunction getLength(str) {\r\n    return str.split(\"\").length;\r\n}\r\nfunction sayHello() {\r\n    return \"Hello World!\";\r\n}\r\n;\r\nfunction checkAge(name, age) {\r\n    if (age < ageReq) {\r\n        return \"Sorry \" + name + \", you aren't old enough to view this page!\";\r\n    }\r\n    else {\r\n        // added else statement to remove undefined in console\r\n        return \"Hey \" + name + \", Welcome!\";\r\n    }\r\n}\r\n;\r\n\n\n//# sourceURL=webpack:///./KitchenSink.ts?");

/***/ })

/******/ });