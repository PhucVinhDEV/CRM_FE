"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/react-i18next";
exports.ids = ["vendor-chunks/react-i18next"];
exports.modules = {

/***/ "(rsc)/./node_modules/react-i18next/dist/es/defaults.js":
/*!********************************************************!*\
  !*** ./node_modules/react-i18next/dist/es/defaults.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getDefaults: () => (/* binding */ getDefaults),\n/* harmony export */   setDefaults: () => (/* binding */ setDefaults)\n/* harmony export */ });\n/* harmony import */ var _unescape_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./unescape.js */ \"(rsc)/./node_modules/react-i18next/dist/es/unescape.js\");\n\nlet defaultOptions = {\n  bindI18n: 'languageChanged',\n  bindI18nStore: '',\n  transEmptyNodeValue: '',\n  transSupportBasicHtmlNodes: true,\n  transWrapTextNodes: '',\n  transKeepBasicHtmlNodesFor: ['br', 'strong', 'i', 'p'],\n  useSuspense: true,\n  unescape: _unescape_js__WEBPACK_IMPORTED_MODULE_0__.unescape\n};\nconst setDefaults = function () {\n  let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n  defaultOptions = {\n    ...defaultOptions,\n    ...options\n  };\n};\nconst getDefaults = () => defaultOptions;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvcmVhY3QtaTE4bmV4dC9kaXN0L2VzL2RlZmF1bHRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUF5QztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTyIsInNvdXJjZXMiOlsid2VicGFjazovL2NybS1mZS8uL25vZGVfbW9kdWxlcy9yZWFjdC1pMThuZXh0L2Rpc3QvZXMvZGVmYXVsdHMuanM/ODk5YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1bmVzY2FwZSB9IGZyb20gJy4vdW5lc2NhcGUuanMnO1xubGV0IGRlZmF1bHRPcHRpb25zID0ge1xuICBiaW5kSTE4bjogJ2xhbmd1YWdlQ2hhbmdlZCcsXG4gIGJpbmRJMThuU3RvcmU6ICcnLFxuICB0cmFuc0VtcHR5Tm9kZVZhbHVlOiAnJyxcbiAgdHJhbnNTdXBwb3J0QmFzaWNIdG1sTm9kZXM6IHRydWUsXG4gIHRyYW5zV3JhcFRleHROb2RlczogJycsXG4gIHRyYW5zS2VlcEJhc2ljSHRtbE5vZGVzRm9yOiBbJ2JyJywgJ3N0cm9uZycsICdpJywgJ3AnXSxcbiAgdXNlU3VzcGVuc2U6IHRydWUsXG4gIHVuZXNjYXBlXG59O1xuZXhwb3J0IGNvbnN0IHNldERlZmF1bHRzID0gZnVuY3Rpb24gKCkge1xuICBsZXQgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG4gIGRlZmF1bHRPcHRpb25zID0ge1xuICAgIC4uLmRlZmF1bHRPcHRpb25zLFxuICAgIC4uLm9wdGlvbnNcbiAgfTtcbn07XG5leHBvcnQgY29uc3QgZ2V0RGVmYXVsdHMgPSAoKSA9PiBkZWZhdWx0T3B0aW9uczsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/react-i18next/dist/es/defaults.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/react-i18next/dist/es/i18nInstance.js":
/*!************************************************************!*\
  !*** ./node_modules/react-i18next/dist/es/i18nInstance.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getI18n: () => (/* binding */ getI18n),\n/* harmony export */   setI18n: () => (/* binding */ setI18n)\n/* harmony export */ });\nlet i18nInstance;\nconst setI18n = instance => {\n  i18nInstance = instance;\n};\nconst getI18n = () => i18nInstance;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvcmVhY3QtaTE4bmV4dC9kaXN0L2VzL2kxOG5JbnN0YW5jZS5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ087QUFDUDtBQUNBO0FBQ08iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jcm0tZmUvLi9ub2RlX21vZHVsZXMvcmVhY3QtaTE4bmV4dC9kaXN0L2VzL2kxOG5JbnN0YW5jZS5qcz9mNzQ0Il0sInNvdXJjZXNDb250ZW50IjpbImxldCBpMThuSW5zdGFuY2U7XG5leHBvcnQgY29uc3Qgc2V0STE4biA9IGluc3RhbmNlID0+IHtcbiAgaTE4bkluc3RhbmNlID0gaW5zdGFuY2U7XG59O1xuZXhwb3J0IGNvbnN0IGdldEkxOG4gPSAoKSA9PiBpMThuSW5zdGFuY2U7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/react-i18next/dist/es/i18nInstance.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/react-i18next/dist/es/initReactI18next.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-i18next/dist/es/initReactI18next.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initReactI18next: () => (/* binding */ initReactI18next)\n/* harmony export */ });\n/* harmony import */ var _defaults_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defaults.js */ \"(rsc)/./node_modules/react-i18next/dist/es/defaults.js\");\n/* harmony import */ var _i18nInstance_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./i18nInstance.js */ \"(rsc)/./node_modules/react-i18next/dist/es/i18nInstance.js\");\n\n\nconst initReactI18next = {\n  type: '3rdParty',\n  init(instance) {\n    (0,_defaults_js__WEBPACK_IMPORTED_MODULE_0__.setDefaults)(instance.options.react);\n    (0,_i18nInstance_js__WEBPACK_IMPORTED_MODULE_1__.setI18n)(instance);\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvcmVhY3QtaTE4bmV4dC9kaXN0L2VzL2luaXRSZWFjdEkxOG5leHQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTRDO0FBQ0E7QUFDckM7QUFDUDtBQUNBO0FBQ0EsSUFBSSx5REFBVztBQUNmLElBQUkseURBQU87QUFDWDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY3JtLWZlLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWkxOG5leHQvZGlzdC9lcy9pbml0UmVhY3RJMThuZXh0LmpzPzNkNzAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc2V0RGVmYXVsdHMgfSBmcm9tICcuL2RlZmF1bHRzLmpzJztcbmltcG9ydCB7IHNldEkxOG4gfSBmcm9tICcuL2kxOG5JbnN0YW5jZS5qcyc7XG5leHBvcnQgY29uc3QgaW5pdFJlYWN0STE4bmV4dCA9IHtcbiAgdHlwZTogJzNyZFBhcnR5JyxcbiAgaW5pdChpbnN0YW5jZSkge1xuICAgIHNldERlZmF1bHRzKGluc3RhbmNlLm9wdGlvbnMucmVhY3QpO1xuICAgIHNldEkxOG4oaW5zdGFuY2UpO1xuICB9XG59OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/react-i18next/dist/es/initReactI18next.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/react-i18next/dist/es/unescape.js":
/*!********************************************************!*\
  !*** ./node_modules/react-i18next/dist/es/unescape.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   unescape: () => (/* binding */ unescape)\n/* harmony export */ });\nconst matchHtmlEntity = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g;\nconst htmlEntities = {\n  '&amp;': '&',\n  '&#38;': '&',\n  '&lt;': '<',\n  '&#60;': '<',\n  '&gt;': '>',\n  '&#62;': '>',\n  '&apos;': \"'\",\n  '&#39;': \"'\",\n  '&quot;': '\"',\n  '&#34;': '\"',\n  '&nbsp;': ' ',\n  '&#160;': ' ',\n  '&copy;': '©',\n  '&#169;': '©',\n  '&reg;': '®',\n  '&#174;': '®',\n  '&hellip;': '…',\n  '&#8230;': '…',\n  '&#x2F;': '/',\n  '&#47;': '/'\n};\nconst unescapeHtmlEntity = m => htmlEntities[m];\nconst unescape = text => text.replace(matchHtmlEntity, unescapeHtmlEntity);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvcmVhY3QtaTE4bmV4dC9kaXN0L2VzL3VuZXNjYXBlLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSx5SEFBeUg7QUFDekg7QUFDQSxRQUFRO0FBQ1IsUUFBUTtBQUNSLE9BQU87QUFDUCxRQUFRO0FBQ1IsT0FBTztBQUNQLFFBQVE7QUFDUixTQUFTO0FBQ1QsUUFBUTtBQUNSLFNBQVM7QUFDVCxRQUFRO0FBQ1IsU0FBUztBQUNULFNBQVM7QUFDVCxTQUFTO0FBQ1QsU0FBUztBQUNULFFBQVE7QUFDUixTQUFTO0FBQ1QsV0FBVztBQUNYLFVBQVU7QUFDVixTQUFTO0FBQ1QsUUFBUTtBQUNSO0FBQ0E7QUFDTyIsInNvdXJjZXMiOlsid2VicGFjazovL2NybS1mZS8uL25vZGVfbW9kdWxlcy9yZWFjdC1pMThuZXh0L2Rpc3QvZXMvdW5lc2NhcGUuanM/ODQwNiJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBtYXRjaEh0bWxFbnRpdHkgPSAvJig/OmFtcHwjMzh8bHR8IzYwfGd0fCM2MnxhcG9zfCMzOXxxdW90fCMzNHxuYnNwfCMxNjB8Y29weXwjMTY5fHJlZ3wjMTc0fGhlbGxpcHwjODIzMHwjeDJGfCM0Nyk7L2c7XG5jb25zdCBodG1sRW50aXRpZXMgPSB7XG4gICcmYW1wOyc6ICcmJyxcbiAgJyYjMzg7JzogJyYnLFxuICAnJmx0Oyc6ICc8JyxcbiAgJyYjNjA7JzogJzwnLFxuICAnJmd0Oyc6ICc+JyxcbiAgJyYjNjI7JzogJz4nLFxuICAnJmFwb3M7JzogXCInXCIsXG4gICcmIzM5Oyc6IFwiJ1wiLFxuICAnJnF1b3Q7JzogJ1wiJyxcbiAgJyYjMzQ7JzogJ1wiJyxcbiAgJyZuYnNwOyc6ICcgJyxcbiAgJyYjMTYwOyc6ICcgJyxcbiAgJyZjb3B5Oyc6ICfCqScsXG4gICcmIzE2OTsnOiAnwqknLFxuICAnJnJlZzsnOiAnwq4nLFxuICAnJiMxNzQ7JzogJ8KuJyxcbiAgJyZoZWxsaXA7JzogJ+KApicsXG4gICcmIzgyMzA7JzogJ+KApicsXG4gICcmI3gyRjsnOiAnLycsXG4gICcmIzQ3Oyc6ICcvJ1xufTtcbmNvbnN0IHVuZXNjYXBlSHRtbEVudGl0eSA9IG0gPT4gaHRtbEVudGl0aWVzW21dO1xuZXhwb3J0IGNvbnN0IHVuZXNjYXBlID0gdGV4dCA9PiB0ZXh0LnJlcGxhY2UobWF0Y2hIdG1sRW50aXR5LCB1bmVzY2FwZUh0bWxFbnRpdHkpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/react-i18next/dist/es/unescape.js\n");

/***/ })

};
;