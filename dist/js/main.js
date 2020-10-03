/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/js/main.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _layouts_header_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %layouts%/header/header */ \"./src/views/layouts/header/header.js\");\n/* harmony import */ var _layouts_header_header__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_layouts_header_header__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_scroll_up_scroll_up__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %components%/scroll-up/scroll-up */ \"./src/views/components/scroll-up/scroll-up.js\");\n/* harmony import */ var _components_scroll_up_scroll_up__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_scroll_up_scroll_up__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_form_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! %components%/form/form */ \"./src/views/components/form/form.js\");\n/* harmony import */ var focus_visible__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! focus-visible */ \"./node_modules/focus-visible/dist/focus-visible.js\");\n/* harmony import */ var focus_visible__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(focus_visible__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_stable_array_for_each__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/stable/array/for-each */ \"./node_modules/core-js/stable/array/for-each.js\");\n/* harmony import */ var core_js_stable_array_for_each__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_stable_array_for_each__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var core_js_stable_array_includes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/stable/array/includes */ \"./node_modules/core-js/stable/array/includes.js\");\n/* harmony import */ var core_js_stable_array_includes__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_stable_array_includes__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var core_js_stable_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/stable/dom-collections/for-each */ \"./node_modules/core-js/stable/dom-collections/for-each.js\");\n/* harmony import */ var core_js_stable_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_stable_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var svg4everybody__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! svg4everybody */ \"./node_modules/svg4everybody/dist/svg4everybody.js\");\n/* harmony import */ var svg4everybody__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(svg4everybody__WEBPACK_IMPORTED_MODULE_7__);\n\n\n // import './import/blocks';\n// import './import/components';\n//полифил для :focus-visible\n\n // полифилы для IE svg\n\n\n\n\n\n$(function () {\n  svg4everybody__WEBPACK_IMPORTED_MODULE_7___default()();\n  $('svg').attr('focusable', 'false');\n});\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\")))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qcz85MjkxIl0sIm5hbWVzIjpbIiQiLCJzdmc0ZXZlcnlib2R5IiwiYXR0ciJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0NBR0E7QUFDQTtBQUVBOztDQUdBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0FBLENBQUMsQ0FBQyxZQUFZO0FBQ1pDLHNEQUFhO0FBQ2JELEdBQUMsQ0FBQyxLQUFELENBQUQsQ0FBU0UsSUFBVCxDQUFjLFdBQWQsRUFBMkIsT0FBM0I7QUFDRCxDQUhBLENBQUQsQyIsImZpbGUiOiIuL3NyYy9qcy9tYWluLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICclbGF5b3V0cyUvaGVhZGVyL2hlYWRlcic7XG5pbXBvcnQgJyVjb21wb25lbnRzJS9zY3JvbGwtdXAvc2Nyb2xsLXVwJztcbmltcG9ydCAnJWNvbXBvbmVudHMlL2Zvcm0vZm9ybSc7XG5cbi8vIGltcG9ydCAnLi9pbXBvcnQvYmxvY2tzJztcbi8vIGltcG9ydCAnLi9pbXBvcnQvY29tcG9uZW50cyc7XG5cbi8v0L/QvtC70LjRhNC40Lsg0LTQu9GPIDpmb2N1cy12aXNpYmxlXG5pbXBvcnQgJ2ZvY3VzLXZpc2libGUnO1xuXG4vLyDQv9C+0LvQuNGE0LjQu9GLINC00LvRjyBJRSBzdmdcbmltcG9ydCAnY29yZS1qcy9zdGFibGUvYXJyYXkvZm9yLWVhY2gnO1xuaW1wb3J0ICdjb3JlLWpzL3N0YWJsZS9hcnJheS9pbmNsdWRlcyc7XG5pbXBvcnQgJ2NvcmUtanMvc3RhYmxlL2RvbS1jb2xsZWN0aW9ucy9mb3ItZWFjaCc7XG5pbXBvcnQgc3ZnNGV2ZXJ5Ym9keSBmcm9tICdzdmc0ZXZlcnlib2R5JztcbiQoZnVuY3Rpb24gKCkge1xuICBzdmc0ZXZlcnlib2R5KCk7XG4gICQoJ3N2ZycpLmF0dHIoJ2ZvY3VzYWJsZScsICdmYWxzZScpO1xufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/main.js\n");

/***/ }),

/***/ "./src/views/components/form/form.js":
/*!*******************************************!*\
  !*** ./src/views/components/form/form.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var inputmask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! inputmask */ \"./node_modules/inputmask/index.js\");\n/* harmony import */ var inputmask__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(inputmask__WEBPACK_IMPORTED_MODULE_0__);\n\n$(function () {\n  var im = new inputmask__WEBPACK_IMPORTED_MODULE_0___default.a('+7(999)999-99-99');\n  im.mask('.form input[data-tel]');\n});\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\")))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvY29tcG9uZW50cy9mb3JtL2Zvcm0uanM/ZjY0NSJdLCJuYW1lcyI6WyIkIiwiaW0iLCJJbnB1dG1hc2siLCJtYXNrIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBQSxDQUFDLENBQUMsWUFBWTtBQUNaLE1BQUlDLEVBQUUsR0FBRyxJQUFJQyxnREFBSixDQUFjLGtCQUFkLENBQVQ7QUFDQUQsSUFBRSxDQUFDRSxJQUFILENBQVEsdUJBQVI7QUFDRCxDQUhBLENBQUQsQyIsImZpbGUiOiIuL3NyYy92aWV3cy9jb21wb25lbnRzL2Zvcm0vZm9ybS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbnB1dG1hc2sgZnJvbSAnaW5wdXRtYXNrJztcclxuXHJcbiQoZnVuY3Rpb24gKCkge1xyXG4gIHZhciBpbSA9IG5ldyBJbnB1dG1hc2soJys3KDk5OSk5OTktOTktOTknKTtcclxuICBpbS5tYXNrKCcuZm9ybSBpbnB1dFtkYXRhLXRlbF0nKTtcclxufSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/views/components/form/form.js\n");

/***/ }),

/***/ "./src/views/components/scroll-up/scroll-up.js":
/*!*****************************************************!*\
  !*** ./src/views/components/scroll-up/scroll-up.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function($) {$(function () {\n  var btn = $('.footer .scroll-up');\n  $(window).on('scroll', function () {\n    var scroll = $(window).scrollTop() + window.innerHeight;\n    var footerOffset = $('.footer').offset().top;\n    var windowWidth = window.innerWidth; //появление кнопки при скролле вниз после половины экрана\n\n    if ($(window).scrollTop() > window.innerHeight / 2) {\n      btn.addClass('show');\n    } else {\n      btn.removeClass('show');\n    } //Если скролл ниже высоты окна - то кнопка появится\n\n\n    if (windowWidth >= 768 && $(window).scrollTop() > window.innerHeight) {\n      // фиксация если скролл дошел до футера для больших экранов\n      if (scroll > footerOffset) {\n        btn.addClass('absolute');\n      } else {\n        btn.removeClass('absolute');\n      }\n    } else {\n      // фиксация если скролл дошел до footer для маленьких экранов, высота кнопки + отступ кнопки и оступ от высоты   footer\n      if (scroll - 75 > footerOffset && $(window).scrollTop() > window.innerHeight) {\n        btn.addClass('absolute');\n      } else {\n        btn.removeClass('absolute');\n      }\n    }\n  }); //Сдвиг вверх\n\n  btn.on('click', function () {\n    $('html, body').animate({\n      scrollTop: 0\n    }, {\n      duration: 400,\n      easing: 'swing'\n    });\n  });\n});\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\")))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvY29tcG9uZW50cy9zY3JvbGwtdXAvc2Nyb2xsLXVwLmpzPzNkN2UiXSwibmFtZXMiOlsiJCIsImJ0biIsIndpbmRvdyIsIm9uIiwic2Nyb2xsIiwic2Nyb2xsVG9wIiwiaW5uZXJIZWlnaHQiLCJmb290ZXJPZmZzZXQiLCJvZmZzZXQiLCJ0b3AiLCJ3aW5kb3dXaWR0aCIsImlubmVyV2lkdGgiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwiYW5pbWF0ZSIsImR1cmF0aW9uIiwiZWFzaW5nIl0sIm1hcHBpbmdzIjoiQUFBQUEsMENBQUMsQ0FBQyxZQUFZO0FBQ1osTUFBSUMsR0FBRyxHQUFHRCxDQUFDLENBQUMsb0JBQUQsQ0FBWDtBQUVBQSxHQUFDLENBQUNFLE1BQUQsQ0FBRCxDQUFVQyxFQUFWLENBQWEsUUFBYixFQUF1QixZQUFZO0FBQ2pDLFFBQUlDLE1BQU0sR0FBR0osQ0FBQyxDQUFDRSxNQUFELENBQUQsQ0FBVUcsU0FBVixLQUF3QkgsTUFBTSxDQUFDSSxXQUE1QztBQUNBLFFBQUlDLFlBQVksR0FBR1AsQ0FBQyxDQUFDLFNBQUQsQ0FBRCxDQUFhUSxNQUFiLEdBQXNCQyxHQUF6QztBQUNBLFFBQUlDLFdBQVcsR0FBR1IsTUFBTSxDQUFDUyxVQUF6QixDQUhpQyxDQUlqQzs7QUFDQSxRQUFJWCxDQUFDLENBQUNFLE1BQUQsQ0FBRCxDQUFVRyxTQUFWLEtBQXdCSCxNQUFNLENBQUNJLFdBQVAsR0FBcUIsQ0FBakQsRUFBb0Q7QUFDbERMLFNBQUcsQ0FBQ1csUUFBSixDQUFhLE1BQWI7QUFDRCxLQUZELE1BRU87QUFDTFgsU0FBRyxDQUFDWSxXQUFKLENBQWdCLE1BQWhCO0FBQ0QsS0FUZ0MsQ0FXakM7OztBQUNBLFFBQUlILFdBQVcsSUFBSSxHQUFmLElBQXNCVixDQUFDLENBQUNFLE1BQUQsQ0FBRCxDQUFVRyxTQUFWLEtBQXdCSCxNQUFNLENBQUNJLFdBQXpELEVBQXNFO0FBQ3BFO0FBQ0EsVUFBSUYsTUFBTSxHQUFHRyxZQUFiLEVBQTJCO0FBQ3pCTixXQUFHLENBQUNXLFFBQUosQ0FBYSxVQUFiO0FBQ0QsT0FGRCxNQUVPO0FBQ0xYLFdBQUcsQ0FBQ1ksV0FBSixDQUFnQixVQUFoQjtBQUNEO0FBQ0YsS0FQRCxNQU9PO0FBQ0w7QUFDQSxVQUNFVCxNQUFNLEdBQUcsRUFBVCxHQUFjRyxZQUFkLElBQ0FQLENBQUMsQ0FBQ0UsTUFBRCxDQUFELENBQVVHLFNBQVYsS0FBd0JILE1BQU0sQ0FBQ0ksV0FGakMsRUFHRTtBQUNBTCxXQUFHLENBQUNXLFFBQUosQ0FBYSxVQUFiO0FBQ0QsT0FMRCxNQUtPO0FBQ0xYLFdBQUcsQ0FBQ1ksV0FBSixDQUFnQixVQUFoQjtBQUNEO0FBQ0Y7QUFDRixHQTlCRCxFQUhZLENBbUNaOztBQUNBWixLQUFHLENBQUNFLEVBQUosQ0FBTyxPQUFQLEVBQWdCLFlBQVk7QUFDMUJILEtBQUMsQ0FBQyxZQUFELENBQUQsQ0FBZ0JjLE9BQWhCLENBQ0U7QUFBRVQsZUFBUyxFQUFFO0FBQWIsS0FERixFQUVFO0FBQ0VVLGNBQVEsRUFBRSxHQURaO0FBRUVDLFlBQU0sRUFBRTtBQUZWLEtBRkY7QUFPRCxHQVJEO0FBU0QsQ0E3Q0EsQ0FBRCxDIiwiZmlsZSI6Ii4vc3JjL3ZpZXdzL2NvbXBvbmVudHMvc2Nyb2xsLXVwL3Njcm9sbC11cC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiQoZnVuY3Rpb24gKCkge1xyXG4gIHZhciBidG4gPSAkKCcuZm9vdGVyIC5zY3JvbGwtdXAnKTtcclxuXHJcbiAgJCh3aW5kb3cpLm9uKCdzY3JvbGwnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgc2Nyb2xsID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpICsgd2luZG93LmlubmVySGVpZ2h0O1xyXG4gICAgdmFyIGZvb3Rlck9mZnNldCA9ICQoJy5mb290ZXInKS5vZmZzZXQoKS50b3A7XHJcbiAgICB2YXIgd2luZG93V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuICAgIC8v0L/QvtGP0LLQu9C10L3QuNC1INC60L3QvtC/0LrQuCDQv9GA0Lgg0YHQutGA0L7Qu9C70LUg0LLQvdC40Lcg0L/QvtGB0LvQtSDQv9C+0LvQvtCy0LjQvdGLINGN0LrRgNCw0L3QsFxyXG4gICAgaWYgKCQod2luZG93KS5zY3JvbGxUb3AoKSA+IHdpbmRvdy5pbm5lckhlaWdodCAvIDIpIHtcclxuICAgICAgYnRuLmFkZENsYXNzKCdzaG93Jyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBidG4ucmVtb3ZlQ2xhc3MoJ3Nob3cnKTtcclxuICAgIH1cclxuXHJcbiAgICAvL9CV0YHQu9C4INGB0LrRgNC+0LvQuyDQvdC40LbQtSDQstGL0YHQvtGC0Ysg0L7QutC90LAgLSDRgtC+INC60L3QvtC/0LrQsCDQv9C+0Y/QstC40YLRgdGPXHJcbiAgICBpZiAod2luZG93V2lkdGggPj0gNzY4ICYmICQod2luZG93KS5zY3JvbGxUb3AoKSA+IHdpbmRvdy5pbm5lckhlaWdodCkge1xyXG4gICAgICAvLyDRhNC40LrRgdCw0YbQuNGPINC10YHQu9C4INGB0LrRgNC+0LvQuyDQtNC+0YjQtdC7INC00L4g0YTRg9GC0LXRgNCwINC00LvRjyDQsdC+0LvRjNGI0LjRhSDRjdC60YDQsNC90L7QslxyXG4gICAgICBpZiAoc2Nyb2xsID4gZm9vdGVyT2Zmc2V0KSB7XHJcbiAgICAgICAgYnRuLmFkZENsYXNzKCdhYnNvbHV0ZScpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGJ0bi5yZW1vdmVDbGFzcygnYWJzb2x1dGUnKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8g0YTQuNC60YHQsNGG0LjRjyDQtdGB0LvQuCDRgdC60YDQvtC70Lsg0LTQvtGI0LXQuyDQtNC+IGZvb3RlciDQtNC70Y8g0LzQsNC70LXQvdGM0LrQuNGFINGN0LrRgNCw0L3QvtCyLCDQstGL0YHQvtGC0LAg0LrQvdC+0L/QutC4ICsg0L7RgtGB0YLRg9C/INC60L3QvtC/0LrQuCDQuCDQvtGB0YLRg9C/INC+0YIg0LLRi9GB0L7RgtGLICAgZm9vdGVyXHJcbiAgICAgIGlmIChcclxuICAgICAgICBzY3JvbGwgLSA3NSA+IGZvb3Rlck9mZnNldCAmJlxyXG4gICAgICAgICQod2luZG93KS5zY3JvbGxUb3AoKSA+IHdpbmRvdy5pbm5lckhlaWdodFxyXG4gICAgICApIHtcclxuICAgICAgICBidG4uYWRkQ2xhc3MoJ2Fic29sdXRlJyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYnRuLnJlbW92ZUNsYXNzKCdhYnNvbHV0ZScpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIC8v0KHQtNCy0LjQsyDQstCy0LXRgNGFXHJcbiAgYnRuLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKFxyXG4gICAgICB7IHNjcm9sbFRvcDogMCB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgZHVyYXRpb246IDQwMCxcclxuICAgICAgICBlYXNpbmc6ICdzd2luZycsXHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgfSk7XHJcbn0pO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/views/components/scroll-up/scroll-up.js\n");

/***/ }),

/***/ "./src/views/layouts/header/header.js":
/*!********************************************!*\
  !*** ./src/views/layouts/header/header.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function($) {$(function () {\n  //Плавный переход\n  $('.navbar').on('click', 'a', function (e) {\n    e.preventDefault();\n    var sc = $(this).attr('href');\n    var dn = $(sc).offset().top;\n    $('html, body').animate({\n      scrollTop: dn\n    }, {\n      duration: 400,\n      easing: 'swing'\n    });\n  });\n});\n/****** Мобилка ******/\n\n/*   $('.header__burger').on('click', function () {\r\n    $(this).toggleClass('active');\r\n  }); */\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\")))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvbGF5b3V0cy9oZWFkZXIvaGVhZGVyLmpzPzA4ZTIiXSwibmFtZXMiOlsiJCIsIm9uIiwiZSIsInByZXZlbnREZWZhdWx0Iiwic2MiLCJhdHRyIiwiZG4iLCJvZmZzZXQiLCJ0b3AiLCJhbmltYXRlIiwic2Nyb2xsVG9wIiwiZHVyYXRpb24iLCJlYXNpbmciXSwibWFwcGluZ3MiOiJBQUFBQSwwQ0FBQyxDQUFDLFlBQU07QUFDTjtBQUNBQSxHQUFDLENBQUMsU0FBRCxDQUFELENBQWFDLEVBQWIsQ0FBZ0IsT0FBaEIsRUFBeUIsR0FBekIsRUFBOEIsVUFBVUMsQ0FBVixFQUFhO0FBQ3pDQSxLQUFDLENBQUNDLGNBQUY7QUFDQSxRQUFJQyxFQUFFLEdBQUdKLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUUssSUFBUixDQUFhLE1BQWIsQ0FBVDtBQUNBLFFBQUlDLEVBQUUsR0FBR04sQ0FBQyxDQUFDSSxFQUFELENBQUQsQ0FBTUcsTUFBTixHQUFlQyxHQUF4QjtBQUNBUixLQUFDLENBQUMsWUFBRCxDQUFELENBQWdCUyxPQUFoQixDQUNFO0FBQUVDLGVBQVMsRUFBRUo7QUFBYixLQURGLEVBRUU7QUFDRUssY0FBUSxFQUFFLEdBRFo7QUFFRUMsWUFBTSxFQUFFO0FBRlYsS0FGRjtBQU9ELEdBWEQ7QUFZRCxDQWRBLENBQUQ7QUFlQTs7QUFDQSIsImZpbGUiOiIuL3NyYy92aWV3cy9sYXlvdXRzL2hlYWRlci9oZWFkZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIkKCgpID0+IHtcclxuICAvL9Cf0LvQsNCy0L3Ri9C5INC/0LXRgNC10YXQvtC0XHJcbiAgJCgnLm5hdmJhcicpLm9uKCdjbGljaycsICdhJywgZnVuY3Rpb24gKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHZhciBzYyA9ICQodGhpcykuYXR0cignaHJlZicpO1xyXG4gICAgdmFyIGRuID0gJChzYykub2Zmc2V0KCkudG9wO1xyXG4gICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoXHJcbiAgICAgIHsgc2Nyb2xsVG9wOiBkbiB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgZHVyYXRpb246IDQwMCxcclxuICAgICAgICBlYXNpbmc6ICdzd2luZycsXHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgfSk7XHJcbn0pO1xyXG4vKioqKioqINCc0L7QsdC40LvQutCwICoqKioqKi9cclxuLyogICAkKCcuaGVhZGVyX19idXJnZXInKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcclxuICB9KTsgKi9cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/views/layouts/header/header.js\n");

/***/ })

/******/ });