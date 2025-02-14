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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AuthService: function() { return /* binding */ AuthService; }\n/* harmony export */ });\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js-cookie */ \"(app-pages-browser)/./node_modules/js-cookie/dist/js.cookie.mjs\");\n/* harmony import */ var _utils_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/storage */ \"(app-pages-browser)/./src/utils/storage.ts\");\n/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/auth */ \"(app-pages-browser)/./src/utils/auth.ts\");\n/* harmony import */ var _connectors_AxiosRestConnector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/connectors/AxiosRestConnector */ \"(app-pages-browser)/./src/connectors/AxiosRestConnector.ts\");\n/* harmony import */ var _connectors_ApiEndpoint__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/connectors/ApiEndpoint */ \"(app-pages-browser)/./src/connectors/ApiEndpoint.ts\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n\n\n\n\n\n\nconst API_URL = \"http://localhost:8888/bitznomad\";\nconst AuthService = {\n    // called api login function\n    async login (username, password) {\n        try {\n            const response = await (0,_connectors_AxiosRestConnector__WEBPACK_IMPORTED_MODULE_3__[\"default\"])().post(_connectors_ApiEndpoint__WEBPACK_IMPORTED_MODULE_4__.API_ENDPOINTS.AUTH.LOGIN, {\n                username,\n                password\n            });\n            const data = response.data;\n            if (data.status !== 1000 || !data.result.authenticated) {\n                console.error(\"Login failed:\", data.errors || \"Unknown error\");\n                return {\n                    success: false,\n                    message: data.body.errors || \"Authentication failed\"\n                };\n            }\n            const tokenResponse = data.result;\n            if (tokenResponse.authenticated) {\n                js_cookie__WEBPACK_IMPORTED_MODULE_0__[\"default\"].set(\"access_token\", tokenResponse.token.access_token, {\n                    expires: 1\n                });\n                js_cookie__WEBPACK_IMPORTED_MODULE_0__[\"default\"].set(\"refresh_token\", tokenResponse.token.refresh_token, {\n                    expires: 7\n                });\n                return {\n                    success: true,\n                    message: \"Login successful!\"\n                };\n            }\n            return {\n                success: false,\n                message: \"Unexpected error occurred.\"\n            };\n        } catch (error) {\n            if (axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].isAxiosError(error)) {\n                var _error_response, _errResponse_errors;\n                const errResponse = (_error_response = error.response) === null || _error_response === void 0 ? void 0 : _error_response.data;\n                console.error(\"Login failed service:\", errResponse);\n                return {\n                    success: false,\n                    message: (errResponse === null || errResponse === void 0 ? void 0 : (_errResponse_errors = errResponse.errors) === null || _errResponse_errors === void 0 ? void 0 : _errResponse_errors[0]) || \"Server error. Please try again.\"\n                };\n            }\n            console.error(\"Unexpected error:\", error);\n            return {\n                success: false,\n                message: \"An unexpected error occurred.\"\n            };\n        }\n    },\n    // called api check authenticated\n    isAuthenticated () {\n        const jwt = js_cookie__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(_utils_storage__WEBPACK_IMPORTED_MODULE_1__.ACCESS_TOKEN);\n        if (!jwt) return false;\n        const token = (0,_utils_auth__WEBPACK_IMPORTED_MODULE_2__.decryptSync)(jwt);\n        if (!token || (0,_utils_auth__WEBPACK_IMPORTED_MODULE_2__.checkTokenExpired)(token)) {\n            this.logout();\n            return false;\n        }\n        return true;\n    },\n    //logout\n    logout () {\n        js_cookie__WEBPACK_IMPORTED_MODULE_0__[\"default\"].remove(_utils_storage__WEBPACK_IMPORTED_MODULE_1__.ACCESS_TOKEN);\n        window.location.href = \"/login\"; // Redirect to login page after logout\n    }\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9zZXJ2aWNlL2F1dGhTZXJ2aWNlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBK0I7QUFDaUI7QUFDZTtBQUVIO0FBQ0g7QUFDZjtBQUUxQyxNQUFNTyxVQUFVQyxpQ0FBc0M7QUFFL0MsTUFBTUcsY0FBYztJQUN6Qiw0QkFBNEI7SUFDNUIsTUFBTUMsT0FDSkMsUUFBZ0IsRUFDaEJDLFFBQWdCO1FBRWhCLElBQUk7WUFDRixNQUFNQyxXQUFXLE1BQU1YLDBFQUFhQSxHQUFHWSxJQUFJLENBQUNYLGtFQUFhQSxDQUFDWSxJQUFJLENBQUNDLEtBQUssRUFBRTtnQkFDcEVMO2dCQUNBQztZQUNGO1lBRUEsTUFBTUssT0FBT0osU0FBU0ksSUFBSTtZQUMxQixJQUFJQSxLQUFLQyxNQUFNLEtBQUssUUFBUSxDQUFDRCxLQUFLRSxNQUFNLENBQUNDLGFBQWEsRUFBRTtnQkFDdERDLFFBQVFDLEtBQUssQ0FBQyxpQkFBaUJMLEtBQUtNLE1BQU0sSUFBSTtnQkFDOUMsT0FBTztvQkFBRUMsU0FBUztvQkFBT0MsU0FBU1IsS0FBS1MsSUFBSSxDQUFDSCxNQUFNLElBQUk7Z0JBQXVCO1lBQy9FO1lBRUEsTUFBTUksZ0JBQStCVixLQUFLRSxNQUFNO1lBQ2hELElBQUlRLGNBQWNQLGFBQWEsRUFBRTtnQkFDL0J0QixpREFBTUEsQ0FBQzhCLEdBQUcsQ0FBQyxnQkFBZ0JELGNBQWNFLEtBQUssQ0FBQ0MsWUFBWSxFQUFFO29CQUMzREMsU0FBUztnQkFDWDtnQkFDQWpDLGlEQUFNQSxDQUFDOEIsR0FBRyxDQUFDLGlCQUFpQkQsY0FBY0UsS0FBSyxDQUFDRyxhQUFhLEVBQUU7b0JBQzdERCxTQUFTO2dCQUNYO2dCQUNBLE9BQU87b0JBQUVQLFNBQVM7b0JBQU1DLFNBQVM7Z0JBQW9CO1lBQ3ZEO1lBRUEsT0FBTztnQkFBRUQsU0FBUztnQkFBT0MsU0FBUztZQUE2QjtRQUNqRSxFQUFFLE9BQU9ILE9BQWdCO1lBQ3ZCLElBQUlsQiw2Q0FBS0EsQ0FBQzZCLFlBQVksQ0FBQ1gsUUFBUTtvQkFDVEEsaUJBSVRZO2dCQUpYLE1BQU1BLGVBQWNaLGtCQUFBQSxNQUFNVCxRQUFRLGNBQWRTLHNDQUFBQSxnQkFBZ0JMLElBQUk7Z0JBQ3hDSSxRQUFRQyxLQUFLLENBQUMseUJBQXlCWTtnQkFDdkMsT0FBTztvQkFDTFYsU0FBUztvQkFDVEMsU0FBU1MsQ0FBQUEsd0JBQUFBLG1DQUFBQSxzQkFBQUEsWUFBYVgsTUFBTSxjQUFuQlcsMENBQUFBLG1CQUFxQixDQUFDLEVBQUUsS0FBSTtnQkFDdkM7WUFDRjtZQUVBYixRQUFRQyxLQUFLLENBQUMscUJBQXFCQTtZQUNuQyxPQUFPO2dCQUFFRSxTQUFTO2dCQUFPQyxTQUFTO1lBQWdDO1FBQ3BFO0lBQ0Y7SUFFQSxpQ0FBaUM7SUFDakNVO1FBQ0UsTUFBTUMsTUFBTXRDLGlEQUFNQSxDQUFDdUMsR0FBRyxDQUFDdEMsd0RBQVlBO1FBQ25DLElBQUksQ0FBQ3FDLEtBQUssT0FBTztRQUVqQixNQUFNUCxRQUFRN0Isd0RBQVdBLENBQUNvQztRQUMxQixJQUFJLENBQUNQLFNBQVM1Qiw4REFBaUJBLENBQUM0QixRQUFRO1lBQ3RDLElBQUksQ0FBQ1MsTUFBTTtZQUNYLE9BQU87UUFDVDtRQUNBLE9BQU87SUFDVDtJQUVBLFFBQVE7SUFDUkE7UUFDRXhDLGlEQUFNQSxDQUFDeUMsTUFBTSxDQUFDeEMsd0RBQVlBO1FBQzFCeUMsT0FBT0MsUUFBUSxDQUFDQyxJQUFJLEdBQUcsVUFBVSxzQ0FBc0M7SUFDekU7QUFDRixFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9zZXJ2aWNlL2F1dGhTZXJ2aWNlLnRzPzE4NjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvb2tpZSBmcm9tIFwianMtY29va2llXCI7XG5pbXBvcnQgeyBBQ0NFU1NfVE9LRU4gfSBmcm9tIFwiLi4vdXRpbHMvc3RvcmFnZVwiO1xuaW1wb3J0IHsgZGVjcnlwdFN5bmMsIGNoZWNrVG9rZW5FeHBpcmVkIH0gZnJvbSBcIi4uL3V0aWxzL2F1dGhcIjtcbmltcG9ydCB7IFRva2VuUmVzcG9uc2UgfSBmcm9tIFwiQC90eXBlcy91c2VyXCI7XG5pbXBvcnQgcmVzdENvbm5lY3RvciBmcm9tIFwiQC9jb25uZWN0b3JzL0F4aW9zUmVzdENvbm5lY3RvclwiO1xuaW1wb3J0IHsgQVBJX0VORFBPSU5UUyB9IGZyb20gXCJAL2Nvbm5lY3RvcnMvQXBpRW5kcG9pbnRcIjtcbmltcG9ydCBheGlvcywgeyBBeGlvc0Vycm9yIH0gZnJvbSBcImF4aW9zXCI7XG5cbmNvbnN0IEFQSV9VUkwgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TVEFUSUNfQVBJX1VSTDtcblxuZXhwb3J0IGNvbnN0IEF1dGhTZXJ2aWNlID0ge1xuICAvLyBjYWxsZWQgYXBpIGxvZ2luIGZ1bmN0aW9uXG4gIGFzeW5jIGxvZ2luKFxuICAgIHVzZXJuYW1lOiBzdHJpbmcsXG4gICAgcGFzc3dvcmQ6IHN0cmluZyxcbiAgKTogUHJvbWlzZTx7IHN1Y2Nlc3M6IGJvb2xlYW47IG1lc3NhZ2U6IHN0cmluZyB9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcmVzdENvbm5lY3RvcigpLnBvc3QoQVBJX0VORFBPSU5UUy5BVVRILkxPR0lOLCB7XG4gICAgICAgIHVzZXJuYW1lLFxuICAgICAgICBwYXNzd29yZCxcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBkYXRhID0gcmVzcG9uc2UuZGF0YTtcbiAgICAgIGlmIChkYXRhLnN0YXR1cyAhPT0gMTAwMCB8fCAhZGF0YS5yZXN1bHQuYXV0aGVudGljYXRlZCkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiTG9naW4gZmFpbGVkOlwiLCBkYXRhLmVycm9ycyB8fCBcIlVua25vd24gZXJyb3JcIik7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBkYXRhLmJvZHkuZXJyb3JzIHx8IFwiQXV0aGVudGljYXRpb24gZmFpbGVkXCJ9O1xuICAgICAgfVxuICAgICAgXG4gICAgICBjb25zdCB0b2tlblJlc3BvbnNlOiBUb2tlblJlc3BvbnNlID0gZGF0YS5yZXN1bHQ7XG4gICAgICBpZiAodG9rZW5SZXNwb25zZS5hdXRoZW50aWNhdGVkKSB7XG4gICAgICAgIENvb2tpZS5zZXQoXCJhY2Nlc3NfdG9rZW5cIiwgdG9rZW5SZXNwb25zZS50b2tlbi5hY2Nlc3NfdG9rZW4sIHtcbiAgICAgICAgICBleHBpcmVzOiAxLFxuICAgICAgICB9KTtcbiAgICAgICAgQ29va2llLnNldChcInJlZnJlc2hfdG9rZW5cIiwgdG9rZW5SZXNwb25zZS50b2tlbi5yZWZyZXNoX3Rva2VuLCB7XG4gICAgICAgICAgZXhwaXJlczogNyxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiTG9naW4gc3VjY2Vzc2Z1bCFcIiB9O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJVbmV4cGVjdGVkIGVycm9yIG9jY3VycmVkLlwiIH07XG4gICAgfSBjYXRjaCAoZXJyb3I6IHVua25vd24pIHtcbiAgICAgIGlmIChheGlvcy5pc0F4aW9zRXJyb3IoZXJyb3IpKSB7XG4gICAgICAgIGNvbnN0IGVyclJlc3BvbnNlID0gZXJyb3IucmVzcG9uc2U/LmRhdGE7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJMb2dpbiBmYWlsZWQgc2VydmljZTpcIiwgZXJyUmVzcG9uc2UpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICAgIG1lc3NhZ2U6IGVyclJlc3BvbnNlPy5lcnJvcnM/LlswXSB8fCBcIlNlcnZlciBlcnJvci4gUGxlYXNlIHRyeSBhZ2Fpbi5cIixcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgY29uc29sZS5lcnJvcihcIlVuZXhwZWN0ZWQgZXJyb3I6XCIsIGVycm9yKTtcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkFuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWQuXCIgfTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gY2FsbGVkIGFwaSBjaGVjayBhdXRoZW50aWNhdGVkXG4gIGlzQXV0aGVudGljYXRlZCgpOiBib29sZWFuIHtcbiAgICBjb25zdCBqd3QgPSBDb29raWUuZ2V0KEFDQ0VTU19UT0tFTik7XG4gICAgaWYgKCFqd3QpIHJldHVybiBmYWxzZTtcblxuICAgIGNvbnN0IHRva2VuID0gZGVjcnlwdFN5bmMoand0KTtcbiAgICBpZiAoIXRva2VuIHx8IGNoZWNrVG9rZW5FeHBpcmVkKHRva2VuKSkge1xuICAgICAgdGhpcy5sb2dvdXQoKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH0sXG5cbiAgLy9sb2dvdXRcbiAgbG9nb3V0KCkge1xuICAgIENvb2tpZS5yZW1vdmUoQUNDRVNTX1RPS0VOKTtcbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL2xvZ2luXCI7IC8vIFJlZGlyZWN0IHRvIGxvZ2luIHBhZ2UgYWZ0ZXIgbG9nb3V0XG4gIH0sXG59O1xuIl0sIm5hbWVzIjpbIkNvb2tpZSIsIkFDQ0VTU19UT0tFTiIsImRlY3J5cHRTeW5jIiwiY2hlY2tUb2tlbkV4cGlyZWQiLCJyZXN0Q29ubmVjdG9yIiwiQVBJX0VORFBPSU5UUyIsImF4aW9zIiwiQVBJX1VSTCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19TVEFUSUNfQVBJX1VSTCIsIkF1dGhTZXJ2aWNlIiwibG9naW4iLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwicmVzcG9uc2UiLCJwb3N0IiwiQVVUSCIsIkxPR0lOIiwiZGF0YSIsInN0YXR1cyIsInJlc3VsdCIsImF1dGhlbnRpY2F0ZWQiLCJjb25zb2xlIiwiZXJyb3IiLCJlcnJvcnMiLCJzdWNjZXNzIiwibWVzc2FnZSIsImJvZHkiLCJ0b2tlblJlc3BvbnNlIiwic2V0IiwidG9rZW4iLCJhY2Nlc3NfdG9rZW4iLCJleHBpcmVzIiwicmVmcmVzaF90b2tlbiIsImlzQXhpb3NFcnJvciIsImVyclJlc3BvbnNlIiwiaXNBdXRoZW50aWNhdGVkIiwiand0IiwiZ2V0IiwibG9nb3V0IiwicmVtb3ZlIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/service/authService.ts\n"));

/***/ })

});