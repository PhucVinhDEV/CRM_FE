"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/use-sync-external-store";
exports.ids = ["vendor-chunks/use-sync-external-store"];
exports.modules = {

/***/ "(ssr)/./node_modules/use-sync-external-store/cjs/use-sync-external-store-with-selector.development.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/use-sync-external-store/cjs/use-sync-external-store-with-selector.development.js ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("/**\n * @license React\n * use-sync-external-store-with-selector.development.js\n *\n * Copyright (c) Meta Platforms, Inc. and affiliates.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\n\n true &&\n  (function () {\n    function is(x, y) {\n      return (x === y && (0 !== x || 1 / x === 1 / y)) || (x !== x && y !== y);\n    }\n    \"undefined\" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&\n      \"function\" ===\n        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart &&\n      __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());\n    var React = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\"),\n      objectIs = \"function\" === typeof Object.is ? Object.is : is,\n      useSyncExternalStore = React.useSyncExternalStore,\n      useRef = React.useRef,\n      useEffect = React.useEffect,\n      useMemo = React.useMemo,\n      useDebugValue = React.useDebugValue;\n    exports.useSyncExternalStoreWithSelector = function (\n      subscribe,\n      getSnapshot,\n      getServerSnapshot,\n      selector,\n      isEqual\n    ) {\n      var instRef = useRef(null);\n      if (null === instRef.current) {\n        var inst = { hasValue: !1, value: null };\n        instRef.current = inst;\n      } else inst = instRef.current;\n      instRef = useMemo(\n        function () {\n          function memoizedSelector(nextSnapshot) {\n            if (!hasMemo) {\n              hasMemo = !0;\n              memoizedSnapshot = nextSnapshot;\n              nextSnapshot = selector(nextSnapshot);\n              if (void 0 !== isEqual && inst.hasValue) {\n                var currentSelection = inst.value;\n                if (isEqual(currentSelection, nextSnapshot))\n                  return (memoizedSelection = currentSelection);\n              }\n              return (memoizedSelection = nextSnapshot);\n            }\n            currentSelection = memoizedSelection;\n            if (objectIs(memoizedSnapshot, nextSnapshot))\n              return currentSelection;\n            var nextSelection = selector(nextSnapshot);\n            if (void 0 !== isEqual && isEqual(currentSelection, nextSelection))\n              return (memoizedSnapshot = nextSnapshot), currentSelection;\n            memoizedSnapshot = nextSnapshot;\n            return (memoizedSelection = nextSelection);\n          }\n          var hasMemo = !1,\n            memoizedSnapshot,\n            memoizedSelection,\n            maybeGetServerSnapshot =\n              void 0 === getServerSnapshot ? null : getServerSnapshot;\n          return [\n            function () {\n              return memoizedSelector(getSnapshot());\n            },\n            null === maybeGetServerSnapshot\n              ? void 0\n              : function () {\n                  return memoizedSelector(maybeGetServerSnapshot());\n                }\n          ];\n        },\n        [getSnapshot, getServerSnapshot, selector, isEqual]\n      );\n      var value = useSyncExternalStore(subscribe, instRef[0], instRef[1]);\n      useEffect(\n        function () {\n          inst.hasValue = !0;\n          inst.value = value;\n        },\n        [value]\n      );\n      useDebugValue(value);\n      return value;\n    };\n    \"undefined\" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&\n      \"function\" ===\n        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop &&\n      __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());\n  })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdXNlLXN5bmMtZXh0ZXJuYWwtc3RvcmUvY2pzL3VzZS1zeW5jLWV4dGVybmFsLXN0b3JlLXdpdGgtc2VsZWN0b3IuZGV2ZWxvcG1lbnQuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVhO0FBQ2IsS0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixtQkFBTyxDQUFDLHdHQUFPO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksd0NBQXdDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jcm0tZmUvLi9ub2RlX21vZHVsZXMvdXNlLXN5bmMtZXh0ZXJuYWwtc3RvcmUvY2pzL3VzZS1zeW5jLWV4dGVybmFsLXN0b3JlLXdpdGgtc2VsZWN0b3IuZGV2ZWxvcG1lbnQuanM/NjU3YyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlIFJlYWN0XG4gKiB1c2Utc3luYy1leHRlcm5hbC1zdG9yZS13aXRoLXNlbGVjdG9yLmRldmVsb3BtZW50LmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBNZXRhIFBsYXRmb3JtcywgSW5jLiBhbmQgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG5cInVzZSBzdHJpY3RcIjtcblwicHJvZHVjdGlvblwiICE9PSBwcm9jZXNzLmVudi5OT0RFX0VOViAmJlxuICAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIGlzKHgsIHkpIHtcbiAgICAgIHJldHVybiAoeCA9PT0geSAmJiAoMCAhPT0geCB8fCAxIC8geCA9PT0gMSAvIHkpKSB8fCAoeCAhPT0geCAmJiB5ICE9PSB5KTtcbiAgICB9XG4gICAgXCJ1bmRlZmluZWRcIiAhPT0gdHlwZW9mIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXyAmJlxuICAgICAgXCJmdW5jdGlvblwiID09PVxuICAgICAgICB0eXBlb2YgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fLnJlZ2lzdGVySW50ZXJuYWxNb2R1bGVTdGFydCAmJlxuICAgICAgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fLnJlZ2lzdGVySW50ZXJuYWxNb2R1bGVTdGFydChFcnJvcigpKTtcbiAgICB2YXIgUmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIiksXG4gICAgICBvYmplY3RJcyA9IFwiZnVuY3Rpb25cIiA9PT0gdHlwZW9mIE9iamVjdC5pcyA/IE9iamVjdC5pcyA6IGlzLFxuICAgICAgdXNlU3luY0V4dGVybmFsU3RvcmUgPSBSZWFjdC51c2VTeW5jRXh0ZXJuYWxTdG9yZSxcbiAgICAgIHVzZVJlZiA9IFJlYWN0LnVzZVJlZixcbiAgICAgIHVzZUVmZmVjdCA9IFJlYWN0LnVzZUVmZmVjdCxcbiAgICAgIHVzZU1lbW8gPSBSZWFjdC51c2VNZW1vLFxuICAgICAgdXNlRGVidWdWYWx1ZSA9IFJlYWN0LnVzZURlYnVnVmFsdWU7XG4gICAgZXhwb3J0cy51c2VTeW5jRXh0ZXJuYWxTdG9yZVdpdGhTZWxlY3RvciA9IGZ1bmN0aW9uIChcbiAgICAgIHN1YnNjcmliZSxcbiAgICAgIGdldFNuYXBzaG90LFxuICAgICAgZ2V0U2VydmVyU25hcHNob3QsXG4gICAgICBzZWxlY3RvcixcbiAgICAgIGlzRXF1YWxcbiAgICApIHtcbiAgICAgIHZhciBpbnN0UmVmID0gdXNlUmVmKG51bGwpO1xuICAgICAgaWYgKG51bGwgPT09IGluc3RSZWYuY3VycmVudCkge1xuICAgICAgICB2YXIgaW5zdCA9IHsgaGFzVmFsdWU6ICExLCB2YWx1ZTogbnVsbCB9O1xuICAgICAgICBpbnN0UmVmLmN1cnJlbnQgPSBpbnN0O1xuICAgICAgfSBlbHNlIGluc3QgPSBpbnN0UmVmLmN1cnJlbnQ7XG4gICAgICBpbnN0UmVmID0gdXNlTWVtbyhcbiAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGZ1bmN0aW9uIG1lbW9pemVkU2VsZWN0b3IobmV4dFNuYXBzaG90KSB7XG4gICAgICAgICAgICBpZiAoIWhhc01lbW8pIHtcbiAgICAgICAgICAgICAgaGFzTWVtbyA9ICEwO1xuICAgICAgICAgICAgICBtZW1vaXplZFNuYXBzaG90ID0gbmV4dFNuYXBzaG90O1xuICAgICAgICAgICAgICBuZXh0U25hcHNob3QgPSBzZWxlY3RvcihuZXh0U25hcHNob3QpO1xuICAgICAgICAgICAgICBpZiAodm9pZCAwICE9PSBpc0VxdWFsICYmIGluc3QuaGFzVmFsdWUpIHtcbiAgICAgICAgICAgICAgICB2YXIgY3VycmVudFNlbGVjdGlvbiA9IGluc3QudmFsdWU7XG4gICAgICAgICAgICAgICAgaWYgKGlzRXF1YWwoY3VycmVudFNlbGVjdGlvbiwgbmV4dFNuYXBzaG90KSlcbiAgICAgICAgICAgICAgICAgIHJldHVybiAobWVtb2l6ZWRTZWxlY3Rpb24gPSBjdXJyZW50U2VsZWN0aW9uKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm4gKG1lbW9pemVkU2VsZWN0aW9uID0gbmV4dFNuYXBzaG90KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGN1cnJlbnRTZWxlY3Rpb24gPSBtZW1vaXplZFNlbGVjdGlvbjtcbiAgICAgICAgICAgIGlmIChvYmplY3RJcyhtZW1vaXplZFNuYXBzaG90LCBuZXh0U25hcHNob3QpKVxuICAgICAgICAgICAgICByZXR1cm4gY3VycmVudFNlbGVjdGlvbjtcbiAgICAgICAgICAgIHZhciBuZXh0U2VsZWN0aW9uID0gc2VsZWN0b3IobmV4dFNuYXBzaG90KTtcbiAgICAgICAgICAgIGlmICh2b2lkIDAgIT09IGlzRXF1YWwgJiYgaXNFcXVhbChjdXJyZW50U2VsZWN0aW9uLCBuZXh0U2VsZWN0aW9uKSlcbiAgICAgICAgICAgICAgcmV0dXJuIChtZW1vaXplZFNuYXBzaG90ID0gbmV4dFNuYXBzaG90KSwgY3VycmVudFNlbGVjdGlvbjtcbiAgICAgICAgICAgIG1lbW9pemVkU25hcHNob3QgPSBuZXh0U25hcHNob3Q7XG4gICAgICAgICAgICByZXR1cm4gKG1lbW9pemVkU2VsZWN0aW9uID0gbmV4dFNlbGVjdGlvbik7XG4gICAgICAgICAgfVxuICAgICAgICAgIHZhciBoYXNNZW1vID0gITEsXG4gICAgICAgICAgICBtZW1vaXplZFNuYXBzaG90LFxuICAgICAgICAgICAgbWVtb2l6ZWRTZWxlY3Rpb24sXG4gICAgICAgICAgICBtYXliZUdldFNlcnZlclNuYXBzaG90ID1cbiAgICAgICAgICAgICAgdm9pZCAwID09PSBnZXRTZXJ2ZXJTbmFwc2hvdCA/IG51bGwgOiBnZXRTZXJ2ZXJTbmFwc2hvdDtcbiAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICByZXR1cm4gbWVtb2l6ZWRTZWxlY3RvcihnZXRTbmFwc2hvdCgpKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBudWxsID09PSBtYXliZUdldFNlcnZlclNuYXBzaG90XG4gICAgICAgICAgICAgID8gdm9pZCAwXG4gICAgICAgICAgICAgIDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIG1lbW9pemVkU2VsZWN0b3IobWF5YmVHZXRTZXJ2ZXJTbmFwc2hvdCgpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgXTtcbiAgICAgICAgfSxcbiAgICAgICAgW2dldFNuYXBzaG90LCBnZXRTZXJ2ZXJTbmFwc2hvdCwgc2VsZWN0b3IsIGlzRXF1YWxdXG4gICAgICApO1xuICAgICAgdmFyIHZhbHVlID0gdXNlU3luY0V4dGVybmFsU3RvcmUoc3Vic2NyaWJlLCBpbnN0UmVmWzBdLCBpbnN0UmVmWzFdKTtcbiAgICAgIHVzZUVmZmVjdChcbiAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGluc3QuaGFzVmFsdWUgPSAhMDtcbiAgICAgICAgICBpbnN0LnZhbHVlID0gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIFt2YWx1ZV1cbiAgICAgICk7XG4gICAgICB1c2VEZWJ1Z1ZhbHVlKHZhbHVlKTtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9O1xuICAgIFwidW5kZWZpbmVkXCIgIT09IHR5cGVvZiBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18gJiZcbiAgICAgIFwiZnVuY3Rpb25cIiA9PT1cbiAgICAgICAgdHlwZW9mIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXy5yZWdpc3RlckludGVybmFsTW9kdWxlU3RvcCAmJlxuICAgICAgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fLnJlZ2lzdGVySW50ZXJuYWxNb2R1bGVTdG9wKEVycm9yKCkpO1xuICB9KSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/use-sync-external-store/cjs/use-sync-external-store-with-selector.development.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/use-sync-external-store/with-selector.js":
/*!***************************************************************!*\
  !*** ./node_modules/use-sync-external-store/with-selector.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nif (false) {} else {\n  module.exports = __webpack_require__(/*! ./cjs/use-sync-external-store-with-selector.development.js */ \"(ssr)/./node_modules/use-sync-external-store/cjs/use-sync-external-store-with-selector.development.js\");\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdXNlLXN5bmMtZXh0ZXJuYWwtc3RvcmUvd2l0aC1zZWxlY3Rvci5qcyIsIm1hcHBpbmdzIjoiQUFBYTs7QUFFYixJQUFJLEtBQXFDLEVBQUUsRUFFMUMsQ0FBQztBQUNGLEVBQUUsK01BQXNGO0FBQ3hGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY3JtLWZlLy4vbm9kZV9tb2R1bGVzL3VzZS1zeW5jLWV4dGVybmFsLXN0b3JlL3dpdGgtc2VsZWN0b3IuanM/NjMzNSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvdXNlLXN5bmMtZXh0ZXJuYWwtc3RvcmUtd2l0aC1zZWxlY3Rvci5wcm9kdWN0aW9uLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3VzZS1zeW5jLWV4dGVybmFsLXN0b3JlLXdpdGgtc2VsZWN0b3IuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/use-sync-external-store/with-selector.js\n");

/***/ })

};
;