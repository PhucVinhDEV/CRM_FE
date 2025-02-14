"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/[lng]/login/page",{

/***/ "(app-pages-browser)/./src/service/authService.ts":
/*!************************************!*\
  !*** ./src/service/authService.ts ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AuthService: function() { return /* binding */ AuthService; }\n/* harmony export */ });\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js-cookie */ \"(app-pages-browser)/./node_modules/js-cookie/dist/js.cookie.mjs\");\n/* harmony import */ var _utils_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/storage */ \"(app-pages-browser)/./src/utils/storage.ts\");\n/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/auth */ \"(app-pages-browser)/./src/utils/auth.ts\");\n/* harmony import */ var _connectors_AxiosRestConnector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/connectors/AxiosRestConnector */ \"(app-pages-browser)/./src/connectors/AxiosRestConnector.ts\");\n/* harmony import */ var _connectors_ApiEndpoint__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/connectors/ApiEndpoint */ \"(app-pages-browser)/./src/connectors/ApiEndpoint.ts\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n\n\n\n\n\n\nconst API_URL = \"http://localhost:8888/bitznomad\";\nconst AuthService = {\n    // called api login function\n    async login (username, password) {\n        try {\n            const response = await (0,_connectors_AxiosRestConnector__WEBPACK_IMPORTED_MODULE_3__[\"default\"])().post(_connectors_ApiEndpoint__WEBPACK_IMPORTED_MODULE_4__.API_ENDPOINTS.AUTH.LOGIN, {\n                username,\n                password\n            });\n            const data = response.data;\n            if (data.status !== 1000 || !data.result.authenticated) {\n                console.error(\"Login failed:\", data.errors || \"Unknown error\");\n                return {\n                    success: false,\n                    message: data.body.errors || \"Authentication failed\"\n                };\n            }\n            const tokenResponse = data.result;\n            if (tokenResponse.authenticated) {\n                js_cookie__WEBPACK_IMPORTED_MODULE_0__[\"default\"].set(\"access_token\", tokenResponse.token.access_token, {\n                    expires: 1\n                });\n                js_cookie__WEBPACK_IMPORTED_MODULE_0__[\"default\"].set(\"refresh_token\", tokenResponse.token.refresh_token, {\n                    expires: 7\n                });\n                return {\n                    success: true,\n                    message: \"Login successful!\"\n                };\n            }\n            return {\n                success: false,\n                message: \"Unexpected error occurred.\"\n            };\n        } catch (error) {\n            if (axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].isAxiosError(error)) {\n                var _error_response, _errResponse_errors;\n                const errResponse = (_error_response = error.response) === null || _error_response === void 0 ? void 0 : _error_response.data;\n                return {\n                    success: false,\n                    message: (errResponse === null || errResponse === void 0 ? void 0 : (_errResponse_errors = errResponse.errors) === null || _errResponse_errors === void 0 ? void 0 : _errResponse_errors[0]) || \"Server error. Please try again.\"\n                };\n            }\n            console.error(\"Unexpected error:\", error);\n            return {\n                success: false,\n                message: \"An unexpected error occurred.\"\n            };\n        }\n    },\n    // called api check authenticated\n    isAuthenticated () {\n        const jwt = js_cookie__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(_utils_storage__WEBPACK_IMPORTED_MODULE_1__.ACCESS_TOKEN);\n        if (!jwt) return false;\n        const token = (0,_utils_auth__WEBPACK_IMPORTED_MODULE_2__.decryptSync)(jwt);\n        if (!token || (0,_utils_auth__WEBPACK_IMPORTED_MODULE_2__.checkTokenExpired)(token)) {\n            this.logout();\n            return false;\n        }\n        return true;\n    },\n    //logout\n    logout () {\n        js_cookie__WEBPACK_IMPORTED_MODULE_0__[\"default\"].remove(_utils_storage__WEBPACK_IMPORTED_MODULE_1__.ACCESS_TOKEN);\n        window.location.href = \"/login\"; // Redirect to login page after logout\n    }\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9zZXJ2aWNlL2F1dGhTZXJ2aWNlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBK0I7QUFDaUI7QUFDZTtBQUVIO0FBQ0g7QUFDZjtBQUUxQyxNQUFNTyxVQUFVQyxpQ0FBc0M7QUFFL0MsTUFBTUcsY0FBYztJQUN6Qiw0QkFBNEI7SUFDNUIsTUFBTUMsT0FDSkMsUUFBZ0IsRUFDaEJDLFFBQWdCO1FBRWhCLElBQUk7WUFDRixNQUFNQyxXQUFXLE1BQU1YLDBFQUFhQSxHQUFHWSxJQUFJLENBQUNYLGtFQUFhQSxDQUFDWSxJQUFJLENBQUNDLEtBQUssRUFBRTtnQkFDcEVMO2dCQUNBQztZQUNGO1lBRUEsTUFBTUssT0FBT0osU0FBU0ksSUFBSTtZQUMxQixJQUFJQSxLQUFLQyxNQUFNLEtBQUssUUFBUSxDQUFDRCxLQUFLRSxNQUFNLENBQUNDLGFBQWEsRUFBRTtnQkFDdERDLFFBQVFDLEtBQUssQ0FBQyxpQkFBaUJMLEtBQUtNLE1BQU0sSUFBSTtnQkFDOUMsT0FBTztvQkFBRUMsU0FBUztvQkFBT0MsU0FBU1IsS0FBS1MsSUFBSSxDQUFDSCxNQUFNLElBQUk7Z0JBQXVCO1lBQy9FO1lBRUEsTUFBTUksZ0JBQStCVixLQUFLRSxNQUFNO1lBQ2hELElBQUlRLGNBQWNQLGFBQWEsRUFBRTtnQkFDL0J0QixpREFBTUEsQ0FBQzhCLEdBQUcsQ0FBQyxnQkFBZ0JELGNBQWNFLEtBQUssQ0FBQ0MsWUFBWSxFQUFFO29CQUMzREMsU0FBUztnQkFDWDtnQkFDQWpDLGlEQUFNQSxDQUFDOEIsR0FBRyxDQUFDLGlCQUFpQkQsY0FBY0UsS0FBSyxDQUFDRyxhQUFhLEVBQUU7b0JBQzdERCxTQUFTO2dCQUNYO2dCQUNBLE9BQU87b0JBQUVQLFNBQVM7b0JBQU1DLFNBQVM7Z0JBQW9CO1lBQ3ZEO1lBRUEsT0FBTztnQkFBRUQsU0FBUztnQkFBT0MsU0FBUztZQUE2QjtRQUNqRSxFQUFFLE9BQU9ILE9BQWdCO1lBQ3ZCLElBQUlsQiw2Q0FBS0EsQ0FBQzZCLFlBQVksQ0FBQ1gsUUFBUTtvQkFDVEEsaUJBSVRZO2dCQUpYLE1BQU1BLGVBQWNaLGtCQUFBQSxNQUFNVCxRQUFRLGNBQWRTLHNDQUFBQSxnQkFBZ0JMLElBQUk7Z0JBRXhDLE9BQU87b0JBQ0xPLFNBQVM7b0JBQ1RDLFNBQVNTLENBQUFBLHdCQUFBQSxtQ0FBQUEsc0JBQUFBLFlBQWFYLE1BQU0sY0FBbkJXLDBDQUFBQSxtQkFBcUIsQ0FBQyxFQUFFLEtBQUk7Z0JBQ3ZDO1lBQ0Y7WUFFQWIsUUFBUUMsS0FBSyxDQUFDLHFCQUFxQkE7WUFDbkMsT0FBTztnQkFBRUUsU0FBUztnQkFBT0MsU0FBUztZQUFnQztRQUNwRTtJQUNGO0lBRUEsaUNBQWlDO0lBQ2pDVTtRQUNFLE1BQU1DLE1BQU10QyxpREFBTUEsQ0FBQ3VDLEdBQUcsQ0FBQ3RDLHdEQUFZQTtRQUNuQyxJQUFJLENBQUNxQyxLQUFLLE9BQU87UUFFakIsTUFBTVAsUUFBUTdCLHdEQUFXQSxDQUFDb0M7UUFDMUIsSUFBSSxDQUFDUCxTQUFTNUIsOERBQWlCQSxDQUFDNEIsUUFBUTtZQUN0QyxJQUFJLENBQUNTLE1BQU07WUFDWCxPQUFPO1FBQ1Q7UUFDQSxPQUFPO0lBQ1Q7SUFFQSxRQUFRO0lBQ1JBO1FBQ0V4QyxpREFBTUEsQ0FBQ3lDLE1BQU0sQ0FBQ3hDLHdEQUFZQTtRQUMxQnlDLE9BQU9DLFFBQVEsQ0FBQ0MsSUFBSSxHQUFHLFVBQVUsc0NBQXNDO0lBQ3pFO0FBQ0YsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvc2VydmljZS9hdXRoU2VydmljZS50cz8xODY0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb29raWUgZnJvbSBcImpzLWNvb2tpZVwiO1xuaW1wb3J0IHsgQUNDRVNTX1RPS0VOIH0gZnJvbSBcIi4uL3V0aWxzL3N0b3JhZ2VcIjtcbmltcG9ydCB7IGRlY3J5cHRTeW5jLCBjaGVja1Rva2VuRXhwaXJlZCB9IGZyb20gXCIuLi91dGlscy9hdXRoXCI7XG5pbXBvcnQgeyBUb2tlblJlc3BvbnNlIH0gZnJvbSBcIkAvdHlwZXMvdXNlclwiO1xuaW1wb3J0IHJlc3RDb25uZWN0b3IgZnJvbSBcIkAvY29ubmVjdG9ycy9BeGlvc1Jlc3RDb25uZWN0b3JcIjtcbmltcG9ydCB7IEFQSV9FTkRQT0lOVFMgfSBmcm9tIFwiQC9jb25uZWN0b3JzL0FwaUVuZHBvaW50XCI7XG5pbXBvcnQgYXhpb3MsIHsgQXhpb3NFcnJvciB9IGZyb20gXCJheGlvc1wiO1xuXG5jb25zdCBBUElfVVJMID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU1RBVElDX0FQSV9VUkw7XG5cbmV4cG9ydCBjb25zdCBBdXRoU2VydmljZSA9IHtcbiAgLy8gY2FsbGVkIGFwaSBsb2dpbiBmdW5jdGlvblxuICBhc3luYyBsb2dpbihcbiAgICB1c2VybmFtZTogc3RyaW5nLFxuICAgIHBhc3N3b3JkOiBzdHJpbmcsXG4gICk6IFByb21pc2U8eyBzdWNjZXNzOiBib29sZWFuOyBtZXNzYWdlOiBzdHJpbmcgfT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHJlc3RDb25uZWN0b3IoKS5wb3N0KEFQSV9FTkRQT0lOVFMuQVVUSC5MT0dJTiwge1xuICAgICAgICB1c2VybmFtZSxcbiAgICAgICAgcGFzc3dvcmQsXG4gICAgICB9KTtcblxuICAgICAgY29uc3QgZGF0YSA9IHJlc3BvbnNlLmRhdGE7XG4gICAgICBpZiAoZGF0YS5zdGF0dXMgIT09IDEwMDAgfHwgIWRhdGEucmVzdWx0LmF1dGhlbnRpY2F0ZWQpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkxvZ2luIGZhaWxlZDpcIiwgZGF0YS5lcnJvcnMgfHwgXCJVbmtub3duIGVycm9yXCIpO1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogZGF0YS5ib2R5LmVycm9ycyB8fCBcIkF1dGhlbnRpY2F0aW9uIGZhaWxlZFwifTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgY29uc3QgdG9rZW5SZXNwb25zZTogVG9rZW5SZXNwb25zZSA9IGRhdGEucmVzdWx0O1xuICAgICAgaWYgKHRva2VuUmVzcG9uc2UuYXV0aGVudGljYXRlZCkge1xuICAgICAgICBDb29raWUuc2V0KFwiYWNjZXNzX3Rva2VuXCIsIHRva2VuUmVzcG9uc2UudG9rZW4uYWNjZXNzX3Rva2VuLCB7XG4gICAgICAgICAgZXhwaXJlczogMSxcbiAgICAgICAgfSk7XG4gICAgICAgIENvb2tpZS5zZXQoXCJyZWZyZXNoX3Rva2VuXCIsIHRva2VuUmVzcG9uc2UudG9rZW4ucmVmcmVzaF90b2tlbiwge1xuICAgICAgICAgIGV4cGlyZXM6IDcsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIkxvZ2luIHN1Y2Nlc3NmdWwhXCIgfTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiVW5leHBlY3RlZCBlcnJvciBvY2N1cnJlZC5cIiB9O1xuICAgIH0gY2F0Y2ggKGVycm9yOiB1bmtub3duKSB7XG4gICAgICBpZiAoYXhpb3MuaXNBeGlvc0Vycm9yKGVycm9yKSkge1xuICAgICAgICBjb25zdCBlcnJSZXNwb25zZSA9IGVycm9yLnJlc3BvbnNlPy5kYXRhO1xuICAgICAgXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgICAgbWVzc2FnZTogZXJyUmVzcG9uc2U/LmVycm9ycz8uWzBdIHx8IFwiU2VydmVyIGVycm9yLiBQbGVhc2UgdHJ5IGFnYWluLlwiLFxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBjb25zb2xlLmVycm9yKFwiVW5leHBlY3RlZCBlcnJvcjpcIiwgZXJyb3IpO1xuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiQW4gdW5leHBlY3RlZCBlcnJvciBvY2N1cnJlZC5cIiB9O1xuICAgIH1cbiAgfSxcblxuICAvLyBjYWxsZWQgYXBpIGNoZWNrIGF1dGhlbnRpY2F0ZWRcbiAgaXNBdXRoZW50aWNhdGVkKCk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGp3dCA9IENvb2tpZS5nZXQoQUNDRVNTX1RPS0VOKTtcbiAgICBpZiAoIWp3dCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgY29uc3QgdG9rZW4gPSBkZWNyeXB0U3luYyhqd3QpO1xuICAgIGlmICghdG9rZW4gfHwgY2hlY2tUb2tlbkV4cGlyZWQodG9rZW4pKSB7XG4gICAgICB0aGlzLmxvZ291dCgpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSxcblxuICAvL2xvZ291dFxuICBsb2dvdXQoKSB7XG4gICAgQ29va2llLnJlbW92ZShBQ0NFU1NfVE9LRU4pO1xuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvbG9naW5cIjsgLy8gUmVkaXJlY3QgdG8gbG9naW4gcGFnZSBhZnRlciBsb2dvdXRcbiAgfSxcbn07XG4iXSwibmFtZXMiOlsiQ29va2llIiwiQUNDRVNTX1RPS0VOIiwiZGVjcnlwdFN5bmMiLCJjaGVja1Rva2VuRXhwaXJlZCIsInJlc3RDb25uZWN0b3IiLCJBUElfRU5EUE9JTlRTIiwiYXhpb3MiLCJBUElfVVJMIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX1NUQVRJQ19BUElfVVJMIiwiQXV0aFNlcnZpY2UiLCJsb2dpbiIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJyZXNwb25zZSIsInBvc3QiLCJBVVRIIiwiTE9HSU4iLCJkYXRhIiwic3RhdHVzIiwicmVzdWx0IiwiYXV0aGVudGljYXRlZCIsImNvbnNvbGUiLCJlcnJvciIsImVycm9ycyIsInN1Y2Nlc3MiLCJtZXNzYWdlIiwiYm9keSIsInRva2VuUmVzcG9uc2UiLCJzZXQiLCJ0b2tlbiIsImFjY2Vzc190b2tlbiIsImV4cGlyZXMiLCJyZWZyZXNoX3Rva2VuIiwiaXNBeGlvc0Vycm9yIiwiZXJyUmVzcG9uc2UiLCJpc0F1dGhlbnRpY2F0ZWQiLCJqd3QiLCJnZXQiLCJsb2dvdXQiLCJyZW1vdmUiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/service/authService.ts\n"));

/***/ })

});