"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nfunction Home() {\n    const { data  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession)();\n    console.log(\"HERE IS DATA\", data);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            data?.user ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.signOut)(),\n                children: \"Sign Out\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\arsh2\\\\OneDrive\\\\Documents\\\\Projects\\\\imessage\\\\frontend\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 13,\n                columnNumber: 9\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.signIn)(\"google\"),\n                children: \"Sign In\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\arsh2\\\\OneDrive\\\\Documents\\\\Projects\\\\imessage\\\\frontend\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 15,\n                columnNumber: 9\n            }, this),\n            data?.user?.name\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\arsh2\\\\OneDrive\\\\Documents\\\\Projects\\\\imessage\\\\frontend\\\\src\\\\pages\\\\index.tsx\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFHTUE7QUFGd0Q7QUFJL0MsU0FBU0ksT0FBTztJQUM3QixNQUFNLEVBQUVDLEtBQUksRUFBRSxHQUFHRiwyREFBVUE7SUFFM0JHLFFBQVFDLEdBQUcsQ0FBQyxnQkFBZ0JGO0lBQzVCLHFCQUNFLDhEQUFDRzs7WUFDRUgsTUFBTUkscUJBQ0wsOERBQUNDO2dCQUFPQyxTQUFTLElBQU1ULHdEQUFPQTswQkFBSTs7Ozs7cUNBRWxDLDhEQUFDUTtnQkFBT0MsU0FBUyxJQUFNVix1REFBTUEsQ0FBQzswQkFBVzs7Ozs7b0JBQzFDO1lBQ0FJLE1BQU1JLE1BQU1HOzs7Ozs7O0FBR25CLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9wYWdlcy9pbmRleC50c3g/MTlhMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbnRlciB9IGZyb20gXCJAbmV4dC9mb250L2dvb2dsZVwiO1xuaW1wb3J0IHsgc2lnbkluLCBzaWduT3V0LCB1c2VTZXNzaW9uIH0gZnJvbSBcIm5leHQtYXV0aC9yZWFjdFwiO1xuXG5jb25zdCBpbnRlciA9IEludGVyKHsgc3Vic2V0czogW1wibGF0aW5cIl0gfSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IHsgZGF0YSB9ID0gdXNlU2Vzc2lvbigpO1xuXG4gIGNvbnNvbGUubG9nKFwiSEVSRSBJUyBEQVRBXCIsIGRhdGEpO1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICB7ZGF0YT8udXNlciA/IChcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzaWduT3V0KCl9PlNpZ24gT3V0PC9idXR0b24+XG4gICAgICApIDogKFxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNpZ25JbihcImdvb2dsZVwiKX0+U2lnbiBJbjwvYnV0dG9uPlxuICAgICAgKX1cbiAgICAgIHtkYXRhPy51c2VyPy5uYW1lfVxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbImludGVyIiwic2lnbkluIiwic2lnbk91dCIsInVzZVNlc3Npb24iLCJIb21lIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJ1c2VyIiwiYnV0dG9uIiwib25DbGljayIsIm5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/index.tsx"));
module.exports = __webpack_exports__;

})();