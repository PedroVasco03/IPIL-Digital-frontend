"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/login/coordenacao/LoginCoordenador",{

/***/ "./pages/login/components/utils/regex.js":
/*!***********************************************!*\
  !*** ./pages/login/components/utils/regex.js ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"validateBi\": function() { return /* binding */ validateBi; },\n/* harmony export */   \"validateEmail\": function() { return /* binding */ validateEmail; },\n/* harmony export */   \"validateName\": function() { return /* binding */ validateName; },\n/* harmony export */   \"validatePassword\": function() { return /* binding */ validatePassword; },\n/* harmony export */   \"validateTelefone\": function() { return /* binding */ validateTelefone; }\n/* harmony export */ });\nconst emailRegex = /^(([^<>()\\]\\\\.,;:\\s@\"]+(\\.[^<>()\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/;\nconst passwordRegex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{10})$/;\nconst nameRegex = /^[a-zA-Z]{4,}(?: [a-zA-Z]+)?(?: [a-zA-Z]+)?$/;\nconst biRegex = /^[0-9]{9}[a-zA-Z]{2}[0-9]{3}$/;\nconst telefoneRegex = /^[9]{1}[1-9]{1}[0-9]{1}-?[0-9]{3}-?[0-9]{3}$/;\nconst validateEmail = new RegExp(emailRegex);\nconst validatePassword = new RegExp(passwordRegex);\nconst validateName = new RegExp(nameRegex);\nconst validateBi = new RegExp(biRegex);\nconst validateTelefone = new RegExp(telefoneRegex);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9sb2dpbi9jb21wb25lbnRzL3V0aWxzL3JlZ2V4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsTUFBTUEsYUFBWTtBQUNsQixNQUFNQyxnQkFBZTtBQUNyQixNQUFNQyxZQUFXO0FBQ2pCLE1BQU1DLFVBQVU7QUFDaEIsTUFBTUMsZ0JBQWdCO0FBRWYsTUFBTUMsZ0JBQWdCLElBQUlDLE9BQU9OLFlBQVk7QUFDN0MsTUFBTU8sbUJBQW1CLElBQUlELE9BQU9MLGVBQWU7QUFDbkQsTUFBTU8sZUFBZSxJQUFJRixPQUFPSixXQUFXO0FBQzNDLE1BQU1PLGFBQWEsSUFBSUgsT0FBT0gsU0FBUztBQUN2QyxNQUFNTyxtQkFBbUIsSUFBSUosT0FBT0YsZUFBZSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9sb2dpbi9jb21wb25lbnRzL3V0aWxzL3JlZ2V4LmpzP2RmYmEiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZW1haWxSZWdleD0gL14oKFtePD4oKVxcXVxcXFwuLDs6XFxzQFwiXSsoXFwuW148PigpXFxdXFxcXC4sOzpcXHNAXCJdKykqKXwoXCIuK1wiKSlAKChcXFtbMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFxdKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17Mix9KSkkL1xyXG5jb25zdCBwYXNzd29yZFJlZ2V4PSAvXig/PS4qWzAtOV0pKD89LipbYS16XSkoPz0uKltBLVpdKShbYS16QS1aMC05XXsxMH0pJC87XHJcbmNvbnN0IG5hbWVSZWdleD0gL15bYS16QS1aXXs0LH0oPzogW2EtekEtWl0rKT8oPzogW2EtekEtWl0rKT8kLztcclxuY29uc3QgYmlSZWdleCA9IC9eWzAtOV17OX1bYS16QS1aXXsyfVswLTldezN9JC87XHJcbmNvbnN0IHRlbGVmb25lUmVnZXggPSAvXls5XXsxfVsxLTldezF9WzAtOV17MX0tP1swLTldezN9LT9bMC05XXszfSQvO1xyXG5cclxuZXhwb3J0IGNvbnN0IHZhbGlkYXRlRW1haWwgPSBuZXcgUmVnRXhwKGVtYWlsUmVnZXgpO1xyXG5leHBvcnQgY29uc3QgdmFsaWRhdGVQYXNzd29yZCA9IG5ldyBSZWdFeHAocGFzc3dvcmRSZWdleCk7XHJcbmV4cG9ydCBjb25zdCB2YWxpZGF0ZU5hbWUgPSBuZXcgUmVnRXhwKG5hbWVSZWdleCk7XHJcbmV4cG9ydCBjb25zdCB2YWxpZGF0ZUJpID0gbmV3IFJlZ0V4cChiaVJlZ2V4KTtcclxuZXhwb3J0IGNvbnN0IHZhbGlkYXRlVGVsZWZvbmUgPSBuZXcgUmVnRXhwKHRlbGVmb25lUmVnZXgpOyJdLCJuYW1lcyI6WyJlbWFpbFJlZ2V4IiwicGFzc3dvcmRSZWdleCIsIm5hbWVSZWdleCIsImJpUmVnZXgiLCJ0ZWxlZm9uZVJlZ2V4IiwidmFsaWRhdGVFbWFpbCIsIlJlZ0V4cCIsInZhbGlkYXRlUGFzc3dvcmQiLCJ2YWxpZGF0ZU5hbWUiLCJ2YWxpZGF0ZUJpIiwidmFsaWRhdGVUZWxlZm9uZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/login/components/utils/regex.js\n"));

/***/ })

});