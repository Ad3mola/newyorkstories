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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/http.js":
/*!*********************!*\
  !*** ./src/http.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar eHTTP =\n/*#__PURE__*/\nfunction () {\n  function eHTTP() {\n    _classCallCheck(this, eHTTP);\n  }\n\n  _createClass(eHTTP, [{\n    key: \"get\",\n    value: function get(url) {\n      return new Promise(function (resolve, reject) {\n        fetch(url).then(function (response) {\n          return response.json();\n        }).then(function (data) {\n          return resolve(data);\n        })[\"catch\"](function (err) {\n          return reject(err);\n        });\n      });\n    }\n  }]);\n\n  return eHTTP;\n}();\n\nmodule.exports = eHTTP;\n\n//# sourceURL=webpack:///./src/http.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var eHTTP = __webpack_require__(/*! ./http.js */ \"./src/http.js\");\n\nvar http = new eHTTP();\nvar news = document.getElementById(\"news\");\nvar button = document.getElementById(\"button\");\nbutton.addEventListener(\"click\", function () {\n  var output = \"\";\n  http.get(\"//api.nytimes.com/svc/topstories/v2/science.json?api-key=hQqyeLk1pAzFyy4eqdZWsVGpQ1W53vZl\").then(function (data) {\n    data.results.forEach(function (dat) {\n      output += \"<li class=\\\"container\\\"><h3 style=\\\"font-weight: bold;\\\">\".concat(dat.title, \"</h3> <h6 style=\\\"font-weight: bold;\\\">READ FULL ARTICLE &nbsp<a href=\\\"\").concat(dat.url, \"\\\">HERE</a></h6> <h5>\").concat(dat[\"abstract\"], \"</h5><p style=\\\"bold\\\">\").concat(dat.byline, \"</p>  <img class=\\\"card-image\\\" height=\\\"275px\\\" width=\\\"275px\\\" src=\\\"\").concat(dat.multimedia[2].url, \"\\\"></li>\");\n      news.innerHTML = output;\n    });\n  })[\"catch\"](function (err) {\n    return console.log(err);\n  });\n  http.get(\"//api.nytimes.com/svc/topstories/v2/books.json?api-key=hQqyeLk1pAzFyy4eqdZWsVGpQ1W53vZl\").then(function (data) {\n    data.results.forEach(function (dat) {\n      output += \"<li class=\\\"container\\\"><h3 style=\\\"font-weight: bold;\\\">\".concat(dat.title, \"</h3> <h6 style=\\\"font-weight: bold;\\\">READ FULL ARTICLE &nbsp<a href=\\\"\").concat(dat.url, \"\\\">HERE</a></h6> <h5>\").concat(dat[\"abstract\"], \"</h5><p style=\\\"bold\\\">\").concat(dat.byline, \"</p> <img class=\\\"card-image\\\" height=\\\"275px\\\" width=\\\"275px\\\" src=\\\"\").concat(dat.multimedia[3].url, \"\\\"></li>\");\n      news.innerHTML = output;\n    });\n  })[\"catch\"](function (err) {\n    return console.log(err);\n  });\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ 0:
/*!******************************************!*\
  !*** multi ./src/http.js ./src/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./src/http.js */\"./src/http.js\");\nmodule.exports = __webpack_require__(/*! ./src/index.js */\"./src/index.js\");\n\n\n//# sourceURL=webpack:///multi_./src/http.js_./src/index.js?");

/***/ })

/******/ });