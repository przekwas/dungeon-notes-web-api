(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./src/client/components/cards/DetailsCard.tsx":
/*!*****************************************************!*\
  !*** ./src/client/components/cards/DetailsCard.tsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fetch_suspense__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fetch-suspense */ "./node_modules/fetch-suspense/fetch-suspense.js");
/* harmony import */ var fetch_suspense__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fetch_suspense__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-markdown */ "./node_modules/react-markdown/lib/react-markdown.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");




var DetailsCard = function (_a) {
    var type = _a.type, id = _a.id;
    var data = fetch_suspense__WEBPACK_IMPORTED_MODULE_1__("/api/" + type + "/" + id);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], { md: 12 },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], { className: "shadow-lg" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Body, null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Title, null, type === 'personal' ? data.title : data.name),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Subtitle, { className: "mb-2 text-muted" }, type === 'characters' ? data.title : data.location),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Text, { as: "span" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_markdown__WEBPACK_IMPORTED_MODULE_2___default.a, { source: data.notes }))))));
};
/* harmony default export */ __webpack_exports__["default"] = (DetailsCard);


/***/ }),

/***/ "./src/client/pages/Details.tsx":
/*!**************************************!*\
  !*** ./src/client/pages/Details.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _components_cards_DetailsCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/cards/DetailsCard */ "./src/client/components/cards/DetailsCard.tsx");




var Details = function (props) {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], { fluid: true },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], { className: " justify-content-center my-2" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], { fallback: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Spinner"], { className: "d-block mx-auto mt-5", animation: "border", variant: "dark" }) },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_cards_DetailsCard__WEBPACK_IMPORTED_MODULE_2__["default"], { type: props.match.params.type, id: props.match.params.id })))));
};
/* harmony default export */ __webpack_exports__["default"] = (Details);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvY2FyZHMvRGV0YWlsc0NhcmQudHN4Iiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvcGFnZXMvRGV0YWlscy50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBK0I7QUFDWTtBQUNBO0FBQ0M7QUFDNUM7QUFDQTtBQUNBLGVBQWUsMkNBQVE7QUFDdkIsWUFBWSxtREFBbUIsQ0FBQyxtREFBRyxHQUFHLFNBQVM7QUFDL0MsUUFBUSxtREFBbUIsQ0FBQyxvREFBSSxHQUFHLHlCQUF5QjtBQUM1RCxZQUFZLG1EQUFtQixDQUFDLG9EQUFJO0FBQ3BDLGdCQUFnQixtREFBbUIsQ0FBQyxvREFBSTtBQUN4QyxnQkFBZ0IsbURBQW1CLENBQUMsb0RBQUksWUFBWSwrQkFBK0I7QUFDbkYsZ0JBQWdCLG1EQUFtQixDQUFDLG9EQUFJLFFBQVEsYUFBYTtBQUM3RCxvQkFBb0IsbURBQW1CLENBQUMscURBQWEsR0FBRyxxQkFBcUI7QUFDN0U7QUFDZSwwRUFBVyxFQUFDOzs7Ozs7Ozs7Ozs7O0FDZjNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBK0I7QUFDRTtBQUN5QjtBQUNBO0FBQzFEO0FBQ0EsWUFBWSxtREFBbUIsQ0FBQyx5REFBUyxHQUFHLGNBQWM7QUFDMUQsUUFBUSxtREFBbUIsQ0FBQyxtREFBRyxHQUFHLDRDQUE0QztBQUM5RSxZQUFZLG1EQUFtQixDQUFDLDhDQUFRLEdBQUcsV0FBVyxtREFBbUIsQ0FBQyx1REFBTyxHQUFHLDBFQUEwRSxHQUFHO0FBQ2pLLGdCQUFnQixtREFBbUIsQ0FBQyxxRUFBVyxHQUFHLDJEQUEyRDtBQUM3RztBQUNlLHNFQUFPLEVBQUMiLCJmaWxlIjoiOS5hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAqIGFzIHVzZUZldGNoIGZyb20gJ2ZldGNoLXN1c3BlbnNlJztcclxuaW1wb3J0IFJlYWN0TWFya2Rvd24gZnJvbSAncmVhY3QtbWFya2Rvd24nO1xyXG5pbXBvcnQgeyBDb2wsIENhcmQgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG52YXIgRGV0YWlsc0NhcmQgPSBmdW5jdGlvbiAoX2EpIHtcclxuICAgIHZhciB0eXBlID0gX2EudHlwZSwgaWQgPSBfYS5pZDtcclxuICAgIHZhciBkYXRhID0gdXNlRmV0Y2goXCIvYXBpL1wiICsgdHlwZSArIFwiL1wiICsgaWQpO1xyXG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KENvbCwgeyBtZDogMTIgfSxcclxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KENhcmQsIHsgY2xhc3NOYW1lOiBcInNoYWRvdy1sZ1wiIH0sXHJcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ2FyZC5Cb2R5LCBudWxsLFxyXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChDYXJkLlRpdGxlLCBudWxsLCB0eXBlID09PSAncGVyc29uYWwnID8gZGF0YS50aXRsZSA6IGRhdGEubmFtZSksXHJcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KENhcmQuU3VidGl0bGUsIHsgY2xhc3NOYW1lOiBcIm1iLTIgdGV4dC1tdXRlZFwiIH0sIHR5cGUgPT09ICdjaGFyYWN0ZXJzJyA/IGRhdGEudGl0bGUgOiBkYXRhLmxvY2F0aW9uKSxcclxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ2FyZC5UZXh0LCB7IGFzOiBcInNwYW5cIiB9LFxyXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3RNYXJrZG93biwgeyBzb3VyY2U6IGRhdGEubm90ZXMgfSkpKSkpKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgRGV0YWlsc0NhcmQ7XHJcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgU3VzcGVuc2UgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IENvbnRhaW5lciwgUm93LCBTcGlubmVyIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcclxuaW1wb3J0IERldGFpbHNDYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvY2FyZHMvRGV0YWlsc0NhcmQnO1xyXG52YXIgRGV0YWlscyA9IGZ1bmN0aW9uIChwcm9wcykge1xyXG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KENvbnRhaW5lciwgeyBmbHVpZDogdHJ1ZSB9LFxyXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUm93LCB7IGNsYXNzTmFtZTogXCIganVzdGlmeS1jb250ZW50LWNlbnRlciBteS0yXCIgfSxcclxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChTdXNwZW5zZSwgeyBmYWxsYmFjazogUmVhY3QuY3JlYXRlRWxlbWVudChTcGlubmVyLCB7IGNsYXNzTmFtZTogXCJkLWJsb2NrIG14LWF1dG8gbXQtNVwiLCBhbmltYXRpb246IFwiYm9yZGVyXCIsIHZhcmlhbnQ6IFwiZGFya1wiIH0pIH0sXHJcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KERldGFpbHNDYXJkLCB7IHR5cGU6IHByb3BzLm1hdGNoLnBhcmFtcy50eXBlLCBpZDogcHJvcHMubWF0Y2gucGFyYW1zLmlkIH0pKSkpKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgRGV0YWlscztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==