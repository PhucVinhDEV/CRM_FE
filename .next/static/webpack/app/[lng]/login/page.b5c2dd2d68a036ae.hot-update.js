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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AuthService: function() { return /* binding */ AuthService; }\n/* harmony export */ });\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js-cookie */ \"(app-pages-browser)/./node_modules/js-cookie/dist/js.cookie.mjs\");\n/* harmony import */ var _utils_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/storage */ \"(app-pages-browser)/./src/utils/storage.ts\");\n/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/auth */ \"(app-pages-browser)/./src/utils/auth.ts\");\n\n\n\nconst API_URL = \"http://localhost:8888/bitznomad\";\nconst AuthService = {\n    // called api login function\n    async login (username, password) {\n        try {\n            const response = await fetch(\"\".concat(API_URL, \"/auth/v1/login\"), {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    username,\n                    password\n                })\n            });\n            const data = await response.json();\n            if (!response.ok || data.status !== 1000 || !data.result.authenticated) {\n                console.error(\"Login failed:\", (data === null || data === void 0 ? void 0 : data.errors) || \"Unknown error\");\n                return {\n                    success: false,\n                    message: data.errors\n                };\n            }\n            const tokenResponse = data.result;\n            if (tokenResponse.authenticated) {\n                js_cookie__WEBPACK_IMPORTED_MODULE_0__[\"default\"].set(\"access_token\", tokenResponse.token.access_token, {\n                    expires: 1\n                });\n                js_cookie__WEBPACK_IMPORTED_MODULE_0__[\"default\"].set(\"refresh_token\", tokenResponse.token.refresh_token, {\n                    expires: 7\n                });\n                return {\n                    success: true,\n                    message: \"Login successful!\"\n                };\n            }\n            return {\n                success: false,\n                message: \"Unexpected error occurred.\"\n            };\n        } catch (error) {\n            console.error(\"Login failed service:\", error);\n            return {\n                success: false,\n                message: \"Network error. Please try again later.\"\n            };\n        }\n    },\n    // called api check authenticated\n    isAuthenticated () {\n        const jwt = js_cookie__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(_utils_storage__WEBPACK_IMPORTED_MODULE_1__.ACCESS_TOKEN);\n        if (!jwt) return false;\n        const token = (0,_utils_auth__WEBPACK_IMPORTED_MODULE_2__.decryptSync)(jwt);\n        if (!token || (0,_utils_auth__WEBPACK_IMPORTED_MODULE_2__.checkTokenExpired)(token)) {\n            this.logout();\n            return false;\n        }\n        return true;\n    },\n    //logout\n    logout () {\n        js_cookie__WEBPACK_IMPORTED_MODULE_0__[\"default\"].remove(_utils_storage__WEBPACK_IMPORTED_MODULE_1__.ACCESS_TOKEN);\n        window.location.href = \"/login\"; // Redirect to login page after logout\n    }\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9zZXJ2aWNlL2F1dGhTZXJ2aWNlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBK0I7QUFDaUI7QUFDZTtBQUcvRCxNQUFNSSxVQUFVQyxpQ0FBc0M7QUFFL0MsTUFBTUcsY0FBYztJQUN6Qiw0QkFBNEI7SUFDNUIsTUFBTUMsT0FDSkMsUUFBZ0IsRUFDaEJDLFFBQWdCO1FBRWhCLElBQUk7WUFDRixNQUFNQyxXQUFXLE1BQU1DLE1BQU0sR0FBVyxPQUFSVCxTQUFRLG1CQUFpQjtnQkFDdkRVLFFBQVE7Z0JBQ1JDLFNBQVM7b0JBQUUsZ0JBQWdCO2dCQUFtQjtnQkFDOUNDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQztvQkFBRVI7b0JBQVVDO2dCQUFTO1lBQzVDO1lBRUEsTUFBTVEsT0FBTyxNQUFNUCxTQUFTUSxJQUFJO1lBRWhDLElBQUksQ0FBQ1IsU0FBU1MsRUFBRSxJQUFJRixLQUFLRyxNQUFNLEtBQUssUUFBUSxDQUFDSCxLQUFLSSxNQUFNLENBQUNDLGFBQWEsRUFBRTtnQkFDdEVDLFFBQVFDLEtBQUssQ0FBQyxpQkFBaUJQLENBQUFBLGlCQUFBQSwyQkFBQUEsS0FBTVEsTUFBTSxLQUFJO2dCQUMvQyxPQUFPO29CQUFFQyxTQUFTO29CQUFPQyxTQUFTVixLQUFLUSxNQUFNO2dCQUFDO1lBQ2hEO1lBRUEsTUFBTUcsZ0JBQStCWCxLQUFLSSxNQUFNO1lBQ2hELElBQUlPLGNBQWNOLGFBQWEsRUFBRTtnQkFDL0J4QixpREFBTUEsQ0FBQytCLEdBQUcsQ0FBQyxnQkFBZ0JELGNBQWNFLEtBQUssQ0FBQ0MsWUFBWSxFQUFFO29CQUMzREMsU0FBUztnQkFDWDtnQkFDQWxDLGlEQUFNQSxDQUFDK0IsR0FBRyxDQUFDLGlCQUFpQkQsY0FBY0UsS0FBSyxDQUFDRyxhQUFhLEVBQUU7b0JBQzdERCxTQUFTO2dCQUNYO2dCQUNBLE9BQU87b0JBQUVOLFNBQVM7b0JBQU1DLFNBQVM7Z0JBQW9CO1lBQ3ZEO1lBRUEsT0FBTztnQkFBRUQsU0FBUztnQkFBT0MsU0FBUztZQUE2QjtRQUNqRSxFQUFFLE9BQU9ILE9BQU87WUFDZEQsUUFBUUMsS0FBSyxDQUFDLHlCQUF5QkE7WUFDdkMsT0FBTztnQkFDTEUsU0FBUztnQkFDVEMsU0FBUztZQUNYO1FBQ0Y7SUFDRjtJQUVBLGlDQUFpQztJQUNqQ087UUFDRSxNQUFNQyxNQUFNckMsaURBQU1BLENBQUNzQyxHQUFHLENBQUNyQyx3REFBWUE7UUFDbkMsSUFBSSxDQUFDb0MsS0FBSyxPQUFPO1FBRWpCLE1BQU1MLFFBQVE5Qix3REFBV0EsQ0FBQ21DO1FBQzFCLElBQUksQ0FBQ0wsU0FBUzdCLDhEQUFpQkEsQ0FBQzZCLFFBQVE7WUFDdEMsSUFBSSxDQUFDTyxNQUFNO1lBQ1gsT0FBTztRQUNUO1FBQ0EsT0FBTztJQUNUO0lBRUEsUUFBUTtJQUNSQTtRQUNFdkMsaURBQU1BLENBQUN3QyxNQUFNLENBQUN2Qyx3REFBWUE7UUFDMUJ3QyxPQUFPQyxRQUFRLENBQUNDLElBQUksR0FBRyxVQUFVLHNDQUFzQztJQUN6RTtBQUNGLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlcnZpY2UvYXV0aFNlcnZpY2UudHM/MTg2NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29va2llIGZyb20gXCJqcy1jb29raWVcIjtcbmltcG9ydCB7IEFDQ0VTU19UT0tFTiB9IGZyb20gXCIuLi91dGlscy9zdG9yYWdlXCI7XG5pbXBvcnQgeyBkZWNyeXB0U3luYywgY2hlY2tUb2tlbkV4cGlyZWQgfSBmcm9tIFwiLi4vdXRpbHMvYXV0aFwiO1xuaW1wb3J0IHsgVG9rZW5SZXNwb25zZSB9IGZyb20gXCJAL3R5cGVzL3VzZXJcIjtcblxuY29uc3QgQVBJX1VSTCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NUQVRJQ19BUElfVVJMO1xuXG5leHBvcnQgY29uc3QgQXV0aFNlcnZpY2UgPSB7XG4gIC8vIGNhbGxlZCBhcGkgbG9naW4gZnVuY3Rpb25cbiAgYXN5bmMgbG9naW4oXG4gICAgdXNlcm5hbWU6IHN0cmluZyxcbiAgICBwYXNzd29yZDogc3RyaW5nLFxuICApOiBQcm9taXNlPHsgc3VjY2VzczogYm9vbGVhbjsgbWVzc2FnZTogc3RyaW5nIH0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtBUElfVVJMfS9hdXRoL3YxL2xvZ2luYCwge1xuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgdXNlcm5hbWUsIHBhc3N3b3JkIH0pLFxuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICAgIGlmICghcmVzcG9uc2Uub2sgfHwgZGF0YS5zdGF0dXMgIT09IDEwMDAgfHwgIWRhdGEucmVzdWx0LmF1dGhlbnRpY2F0ZWQpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkxvZ2luIGZhaWxlZDpcIiwgZGF0YT8uZXJyb3JzIHx8IFwiVW5rbm93biBlcnJvclwiKTtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IGRhdGEuZXJyb3JzIH07XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHRva2VuUmVzcG9uc2U6IFRva2VuUmVzcG9uc2UgPSBkYXRhLnJlc3VsdDtcbiAgICAgIGlmICh0b2tlblJlc3BvbnNlLmF1dGhlbnRpY2F0ZWQpIHtcbiAgICAgICAgQ29va2llLnNldChcImFjY2Vzc190b2tlblwiLCB0b2tlblJlc3BvbnNlLnRva2VuLmFjY2Vzc190b2tlbiwge1xuICAgICAgICAgIGV4cGlyZXM6IDEsXG4gICAgICAgIH0pO1xuICAgICAgICBDb29raWUuc2V0KFwicmVmcmVzaF90b2tlblwiLCB0b2tlblJlc3BvbnNlLnRva2VuLnJlZnJlc2hfdG9rZW4sIHtcbiAgICAgICAgICBleHBpcmVzOiA3LFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJMb2dpbiBzdWNjZXNzZnVsIVwiIH07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIlVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWQuXCIgfTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihcIkxvZ2luIGZhaWxlZCBzZXJ2aWNlOlwiLCBlcnJvcik7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgbWVzc2FnZTogXCJOZXR3b3JrIGVycm9yLiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLlwiLFxuICAgICAgfTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gY2FsbGVkIGFwaSBjaGVjayBhdXRoZW50aWNhdGVkXG4gIGlzQXV0aGVudGljYXRlZCgpOiBib29sZWFuIHtcbiAgICBjb25zdCBqd3QgPSBDb29raWUuZ2V0KEFDQ0VTU19UT0tFTik7XG4gICAgaWYgKCFqd3QpIHJldHVybiBmYWxzZTtcblxuICAgIGNvbnN0IHRva2VuID0gZGVjcnlwdFN5bmMoand0KTtcbiAgICBpZiAoIXRva2VuIHx8IGNoZWNrVG9rZW5FeHBpcmVkKHRva2VuKSkge1xuICAgICAgdGhpcy5sb2dvdXQoKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH0sXG5cbiAgLy9sb2dvdXRcbiAgbG9nb3V0KCkge1xuICAgIENvb2tpZS5yZW1vdmUoQUNDRVNTX1RPS0VOKTtcbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL2xvZ2luXCI7IC8vIFJlZGlyZWN0IHRvIGxvZ2luIHBhZ2UgYWZ0ZXIgbG9nb3V0XG4gIH0sXG59O1xuIl0sIm5hbWVzIjpbIkNvb2tpZSIsIkFDQ0VTU19UT0tFTiIsImRlY3J5cHRTeW5jIiwiY2hlY2tUb2tlbkV4cGlyZWQiLCJBUElfVVJMIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX1NUQVRJQ19BUElfVVJMIiwiQXV0aFNlcnZpY2UiLCJsb2dpbiIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YSIsImpzb24iLCJvayIsInN0YXR1cyIsInJlc3VsdCIsImF1dGhlbnRpY2F0ZWQiLCJjb25zb2xlIiwiZXJyb3IiLCJlcnJvcnMiLCJzdWNjZXNzIiwibWVzc2FnZSIsInRva2VuUmVzcG9uc2UiLCJzZXQiLCJ0b2tlbiIsImFjY2Vzc190b2tlbiIsImV4cGlyZXMiLCJyZWZyZXNoX3Rva2VuIiwiaXNBdXRoZW50aWNhdGVkIiwiand0IiwiZ2V0IiwibG9nb3V0IiwicmVtb3ZlIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/service/authService.ts\n"));

/***/ })

});