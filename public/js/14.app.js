(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "./src/client/pages/Search.tsx":
/*!*************************************!*\
  !*** ./src/client/pages/Search.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_use_form_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-use-form-state */ "./node_modules/react-use-form-state/dist/index.es.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};




var Search = function (props) {
    var _a = Object(react_use_form_state__WEBPACK_IMPORTED_MODULE_1__["useFormState"])(), formState = _a[0], text = _a[1].text;
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], { fluid: true },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], { className: "justify-content-center my-2" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], { md: 8 },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"], { className: "p-3 border border-primary rounded shadow-lg" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control, __assign({ size: "lg", type: "text", placeholder: "Search ..." }, text('query'))),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Check, { inline: true, label: "Characters", type: "radio" }),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], { className: "w-75 mx-auto shadow mt-3", block: true, size: "lg" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaSearch"], null),
                        " Search"))))));
};
/* harmony default export */ __webpack_exports__["default"] = (Search);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L3BhZ2VzL1NlYXJjaC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUFnQixTQUFJLElBQUksU0FBSTtBQUM1QjtBQUNBLGdEQUFnRCxPQUFPO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDK0I7QUFDcUI7QUFDZ0I7QUFDMUI7QUFDMUM7QUFDQSxhQUFhLHlFQUFZO0FBQ3pCLFlBQVksbURBQW1CLENBQUMseURBQVMsR0FBRyxjQUFjO0FBQzFELFFBQVEsbURBQW1CLENBQUMsbURBQUcsR0FBRywyQ0FBMkM7QUFDN0UsWUFBWSxtREFBbUIsQ0FBQyxtREFBRyxHQUFHLFFBQVE7QUFDOUMsZ0JBQWdCLG1EQUFtQixDQUFDLG9EQUFJLEdBQUcsMkRBQTJEO0FBQ3RHLG9CQUFvQixtREFBbUIsQ0FBQyxvREFBSSxvQkFBb0Isc0RBQXNEO0FBQ3RILG9CQUFvQixtREFBbUIsQ0FBQyxvREFBSSxTQUFTLG1EQUFtRDtBQUN4RyxvQkFBb0IsbURBQW1CLENBQUMsc0RBQU0sR0FBRyxpRUFBaUU7QUFDbEgsd0JBQXdCLG1EQUFtQixDQUFDLHVEQUFRO0FBQ3BEO0FBQ0E7QUFDZSxxRUFBTSxFQUFDIiwiZmlsZSI6IjE0LmFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcclxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH07XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufTtcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VGb3JtU3RhdGUgfSBmcm9tICdyZWFjdC11c2UtZm9ybS1zdGF0ZSc7XHJcbmltcG9ydCB7IENvbnRhaW5lciwgUm93LCBDb2wsIEZvcm0sIEJ1dHRvbiB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcbmltcG9ydCB7IEZhU2VhcmNoIH0gZnJvbSAncmVhY3QtaWNvbnMvZmEnO1xyXG52YXIgU2VhcmNoID0gZnVuY3Rpb24gKHByb3BzKSB7XHJcbiAgICB2YXIgX2EgPSB1c2VGb3JtU3RhdGUoKSwgZm9ybVN0YXRlID0gX2FbMF0sIHRleHQgPSBfYVsxXS50ZXh0O1xyXG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KENvbnRhaW5lciwgeyBmbHVpZDogdHJ1ZSB9LFxyXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUm93LCB7IGNsYXNzTmFtZTogXCJqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIG15LTJcIiB9LFxyXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KENvbCwgeyBtZDogOCB9LFxyXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtLCB7IGNsYXNzTmFtZTogXCJwLTMgYm9yZGVyIGJvcmRlci1wcmltYXJ5IHJvdW5kZWQgc2hhZG93LWxnXCIgfSxcclxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm0uQ29udHJvbCwgX19hc3NpZ24oeyBzaXplOiBcImxnXCIsIHR5cGU6IFwidGV4dFwiLCBwbGFjZWhvbGRlcjogXCJTZWFyY2ggLi4uXCIgfSwgdGV4dCgncXVlcnknKSkpLFxyXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybS5DaGVjaywgeyBpbmxpbmU6IHRydWUsIGxhYmVsOiBcIkNoYXJhY3RlcnNcIiwgdHlwZTogXCJyYWRpb1wiIH0pLFxyXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQnV0dG9uLCB7IGNsYXNzTmFtZTogXCJ3LTc1IG14LWF1dG8gc2hhZG93IG10LTNcIiwgYmxvY2s6IHRydWUsIHNpemU6IFwibGdcIiB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZhU2VhcmNoLCBudWxsKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgU2VhcmNoXCIpKSkpKSk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IFNlYXJjaDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==