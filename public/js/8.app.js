(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./src/client/components/forms/DeleteButton.tsx":
/*!******************************************************!*\
  !*** ./src/client/components/forms/DeleteButton.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");


var DeleteButton = function (props) {
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], { variant: "danger", size: "lg", onClick: props.handleDelete, className: "mt-4 w-50 mx-auto shadow-sm", block: true, type: "submit" }, "Delete 'dat Shit"));
};
/* harmony default export */ __webpack_exports__["default"] = (DeleteButton);


/***/ }),

/***/ "./src/client/components/forms/FormLayout.tsx":
/*!****************************************************!*\
  !*** ./src/client/components/forms/FormLayout.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");


var FormLayout = function (props) {
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], { fluid: true },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], { className: "my-2" },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], { md: 12 },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"], { className: "p-3 border border-primary rounded shadow-lg" }, props.children)))));
};
/* harmony default export */ __webpack_exports__["default"] = (FormLayout);


/***/ }),

/***/ "./src/client/components/forms/SubmitButton.tsx":
/*!******************************************************!*\
  !*** ./src/client/components/forms/SubmitButton.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");


var SubmitButton = function (props) {
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], { size: "lg", onClick: props.handleSubmit, className: "mt-3 w-50 mx-auto shadow-sm", block: true, type: "submit" },
        props.text,
        " 'dat Shit"));
};
/* harmony default export */ __webpack_exports__["default"] = (SubmitButton);


/***/ }),

/***/ "./src/client/pages/forms/Places.tsx":
/*!*******************************************!*\
  !*** ./src/client/pages/forms/Places.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var react_use_form_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-use-form-state */ "./node_modules/react-use-form-state/dist/index.es.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _components_forms_SubmitButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/forms/SubmitButton */ "./src/client/components/forms/SubmitButton.tsx");
/* harmony import */ var _components_forms_FormLayout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/forms/FormLayout */ "./src/client/components/forms/FormLayout.tsx");
/* harmony import */ var _components_forms_DeleteButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/forms/DeleteButton */ "./src/client/components/forms/DeleteButton.tsx");
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
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};








var Places = function (props) {
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false), loading = _a[0], setLoading = _a[1];
    var _b = Object(react_use_form_state__WEBPACK_IMPORTED_MODULE_2__["useFormState"])(), formState = _b[0], text = _b[1].text;
    var state = Object(react_router__WEBPACK_IMPORTED_MODULE_1__["useLocation"])().state;
    var handleSubmit = function (e) { return __awaiter(void 0, void 0, void 0, function () {
        var uri, method, res, characterid;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    e.preventDefault();
                    uri = props.match.params.id ? "/api/places/" + props.match.params.id : '/api/places/';
                    method = props.match.params.id ? 'PUT' : 'POST';
                    return [4 /*yield*/, fetch(uri, {
                            method: method,
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(formState.values)
                        })];
                case 1:
                    res = _a.sent();
                    return [4 /*yield*/, res.json()];
                case 2:
                    characterid = _a.sent();
                    props.history.push("/places/details/" + characterid);
                    return [2 /*return*/];
            }
        });
    }); };
    var handleDelete = function (e) { return __awaiter(void 0, void 0, void 0, function () {
        var uri, method, res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    e.preventDefault();
                    uri = "/api/places/" + props.match.params.id;
                    method = 'DELETE';
                    return [4 /*yield*/, fetch(uri, {
                            method: method,
                        })];
                case 1:
                    res = _a.sent();
                    props.history.push('/');
                    return [2 /*return*/];
            }
        });
    }); };
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        (function () { return __awaiter(void 0, void 0, void 0, function () {
            var res, data;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!props.id) return [3 /*break*/, 4];
                        if (!((_a = state) === null || _a === void 0 ? void 0 : _a.item)) return [3 /*break*/, 1];
                        formState.setField('name', state.item.name);
                        formState.setField('location', state.item.location);
                        formState.setField('notes', state.item.notes);
                        return [3 /*break*/, 4];
                    case 1:
                        setLoading(true);
                        return [4 /*yield*/, fetch('/api/events/' + props.id)];
                    case 2:
                        res = _b.sent();
                        return [4 /*yield*/, res.json()];
                    case 3:
                        data = _b.sent();
                        formState.setField('name', data.name);
                        formState.setField('location', data.location);
                        formState.setField('notes', data.notes);
                        setLoading(false);
                        _b.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        }); })();
    }, [props.id]);
    if (loading) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Spinner"], { className: "d-block mx-auto mt-5", animation: "border", variant: "dark" });
    }
    else {
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_forms_FormLayout__WEBPACK_IMPORTED_MODULE_5__["default"], null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Row, null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], { md: 6 },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Group, { controlId: "places-name" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Label, null, "Place Name"),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Control, __assign({ className: "shadow-sm" }, text('name'))))),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], { md: 6 },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Group, { controlId: "places-locations" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Label, null, "Place Location"),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Control, __assign({ className: "shadow-sm" }, text('location'))))),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], { md: 12 },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Group, { controlId: "places-notes" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Label, null, "Notes"),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Control, __assign({ className: "shadow-sm", rows: 15, as: "textarea" }, text('notes')))))),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_forms_SubmitButton__WEBPACK_IMPORTED_MODULE_4__["default"], { text: props.match.params.id ? 'Save' : 'Add', handleSubmit: handleSubmit }),
            props.match.params.id ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_forms_DeleteButton__WEBPACK_IMPORTED_MODULE_6__["default"], { handleDelete: handleDelete }) : null));
    }
};
/* harmony default export */ __webpack_exports__["default"] = (Places);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvZm9ybXMvRGVsZXRlQnV0dG9uLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvZm9ybXMvRm9ybUxheW91dC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9jb21wb25lbnRzL2Zvcm1zL1N1Ym1pdEJ1dHRvbi50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9wYWdlcy9mb3Jtcy9QbGFjZXMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUEwQjtBQUNlO0FBQ3pDO0FBQ0EsWUFBWSw0Q0FBSyxlQUFlLHNEQUFNLEdBQUcsb0lBQW9JO0FBQzdLO0FBQ2UsMkVBQVksRUFBQzs7Ozs7Ozs7Ozs7OztBQ0w1QjtBQUFBO0FBQUE7QUFBQTtBQUEwQjtBQUNrQztBQUM1RDtBQUNBLFlBQVksNENBQUssZUFBZSx5REFBUyxHQUFHLGNBQWM7QUFDMUQsUUFBUSw0Q0FBSyxlQUFlLG1EQUFHLEdBQUcsb0JBQW9CO0FBQ3RELFlBQVksNENBQUssZUFBZSxtREFBRyxHQUFHLFNBQVM7QUFDL0MsZ0JBQWdCLDRDQUFLLGVBQWUsb0RBQUksR0FBRywyREFBMkQ7QUFDdEc7QUFDZSx5RUFBVSxFQUFDOzs7Ozs7Ozs7Ozs7O0FDUjFCO0FBQUE7QUFBQTtBQUFBO0FBQTBCO0FBQ2U7QUFDekM7QUFDQSxZQUFZLDRDQUFLLGVBQWUsc0RBQU0sR0FBRyxpSEFBaUg7QUFDMUo7QUFDQTtBQUNBO0FBQ2UsMkVBQVksRUFBQzs7Ozs7Ozs7Ozs7OztBQ1A1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFBZ0IsU0FBSSxJQUFJLFNBQUk7QUFDNUI7QUFDQSxnREFBZ0QsT0FBTztBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLFNBQUks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O0FBQ3ZILFlBQVksNENBQUssZUFBZSxzRUFBWSxHQUFHLDJFQUEyRTtBQUMxSCxvQ0FBb0MsNENBQUssZUFBZSxzRUFBWSxHQUFHLDZCQUE2QjtBQUNwRztBQUNBO0FBQ2UscUVBQU0sRUFBQyIsImZpbGUiOiI4LmFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcbnZhciBEZWxldGVCdXR0b24gPSBmdW5jdGlvbiAocHJvcHMpIHtcclxuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChCdXR0b24sIHsgdmFyaWFudDogXCJkYW5nZXJcIiwgc2l6ZTogXCJsZ1wiLCBvbkNsaWNrOiBwcm9wcy5oYW5kbGVEZWxldGUsIGNsYXNzTmFtZTogXCJtdC00IHctNTAgbXgtYXV0byBzaGFkb3ctc21cIiwgYmxvY2s6IHRydWUsIHR5cGU6IFwic3VibWl0XCIgfSwgXCJEZWxldGUgJ2RhdCBTaGl0XCIpKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgRGVsZXRlQnV0dG9uO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBDb250YWluZXIsIFJvdywgQ29sLCBGb3JtIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcclxudmFyIEZvcm1MYXlvdXQgPSBmdW5jdGlvbiAocHJvcHMpIHtcclxuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChDb250YWluZXIsIHsgZmx1aWQ6IHRydWUgfSxcclxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFJvdywgeyBjbGFzc05hbWU6IFwibXktMlwiIH0sXHJcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29sLCB7IG1kOiAxMiB9LFxyXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtLCB7IGNsYXNzTmFtZTogXCJwLTMgYm9yZGVyIGJvcmRlci1wcmltYXJ5IHJvdW5kZWQgc2hhZG93LWxnXCIgfSwgcHJvcHMuY2hpbGRyZW4pKSkpKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgRm9ybUxheW91dDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcclxudmFyIFN1Ym1pdEJ1dHRvbiA9IGZ1bmN0aW9uIChwcm9wcykge1xyXG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KEJ1dHRvbiwgeyBzaXplOiBcImxnXCIsIG9uQ2xpY2s6IHByb3BzLmhhbmRsZVN1Ym1pdCwgY2xhc3NOYW1lOiBcIm10LTMgdy01MCBteC1hdXRvIHNoYWRvdy1zbVwiLCBibG9jazogdHJ1ZSwgdHlwZTogXCJzdWJtaXRcIiB9LFxyXG4gICAgICAgIHByb3BzLnRleHQsXHJcbiAgICAgICAgXCIgJ2RhdCBTaGl0XCIpKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgU3VibWl0QnV0dG9uO1xyXG4iLCJ2YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXHJcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn07XHJcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59O1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VMb2NhdGlvbiB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZUZvcm1TdGF0ZSB9IGZyb20gJ3JlYWN0LXVzZS1mb3JtLXN0YXRlJztcclxuaW1wb3J0IHsgU3Bpbm5lciwgQ29sLCBGb3JtIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcclxuaW1wb3J0IFN1Ym1pdEJ1dHRvbiBmcm9tICcuLi8uLi9jb21wb25lbnRzL2Zvcm1zL1N1Ym1pdEJ1dHRvbic7XHJcbmltcG9ydCBGb3JtTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvZm9ybXMvRm9ybUxheW91dCc7XHJcbmltcG9ydCBEZWxldGVCdXR0b24gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9mb3Jtcy9EZWxldGVCdXR0b24nO1xyXG52YXIgUGxhY2VzID0gZnVuY3Rpb24gKHByb3BzKSB7XHJcbiAgICB2YXIgX2EgPSB1c2VTdGF0ZShmYWxzZSksIGxvYWRpbmcgPSBfYVswXSwgc2V0TG9hZGluZyA9IF9hWzFdO1xyXG4gICAgdmFyIF9iID0gdXNlRm9ybVN0YXRlKCksIGZvcm1TdGF0ZSA9IF9iWzBdLCB0ZXh0ID0gX2JbMV0udGV4dDtcclxuICAgIHZhciBzdGF0ZSA9IHVzZUxvY2F0aW9uKCkuc3RhdGU7XHJcbiAgICB2YXIgaGFuZGxlU3VibWl0ID0gZnVuY3Rpb24gKGUpIHsgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHVyaSwgbWV0aG9kLCByZXMsIGNoYXJhY3RlcmlkO1xyXG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICB1cmkgPSBwcm9wcy5tYXRjaC5wYXJhbXMuaWQgPyBcIi9hcGkvcGxhY2VzL1wiICsgcHJvcHMubWF0Y2gucGFyYW1zLmlkIDogJy9hcGkvcGxhY2VzLyc7XHJcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kID0gcHJvcHMubWF0Y2gucGFyYW1zLmlkID8gJ1BVVCcgOiAnUE9TVCc7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgZmV0Y2godXJpLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IG1ldGhvZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZm9ybVN0YXRlLnZhbHVlcylcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSldO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgIHJlcyA9IF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCByZXMuanNvbigpXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICBjaGFyYWN0ZXJpZCA9IF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICBwcm9wcy5oaXN0b3J5LnB1c2goXCIvcGxhY2VzL2RldGFpbHMvXCIgKyBjaGFyYWN0ZXJpZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTsgfTtcclxuICAgIHZhciBoYW5kbGVEZWxldGUgPSBmdW5jdGlvbiAoZSkgeyByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgdXJpLCBtZXRob2QsIHJlcztcclxuICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJpID0gXCIvYXBpL3BsYWNlcy9cIiArIHByb3BzLm1hdGNoLnBhcmFtcy5pZDtcclxuICAgICAgICAgICAgICAgICAgICBtZXRob2QgPSAnREVMRVRFJztcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBmZXRjaCh1cmksIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogbWV0aG9kLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KV07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzID0gX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHByb3BzLmhpc3RvcnkucHVzaCgnLycpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7IH07XHJcbiAgICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIChmdW5jdGlvbiAoKSB7IHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgcmVzLCBkYXRhO1xyXG4gICAgICAgICAgICB2YXIgX2E7XHJcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2IpIHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2IubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcHJvcHMuaWQpIHJldHVybiBbMyAvKmJyZWFrKi8sIDRdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoISgoX2EgPSBzdGF0ZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLml0ZW0pKSByZXR1cm4gWzMgLypicmVhayovLCAxXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybVN0YXRlLnNldEZpZWxkKCduYW1lJywgc3RhdGUuaXRlbS5uYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybVN0YXRlLnNldEZpZWxkKCdsb2NhdGlvbicsIHN0YXRlLml0ZW0ubG9jYXRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtU3RhdGUuc2V0RmllbGQoJ25vdGVzJywgc3RhdGUuaXRlbS5ub3Rlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDRdO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgZmV0Y2goJy9hcGkvZXZlbnRzLycgKyBwcm9wcy5pZCldO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzID0gX2Iuc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCByZXMuanNvbigpXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEgPSBfYi5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1TdGF0ZS5zZXRGaWVsZCgnbmFtZScsIGRhdGEubmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1TdGF0ZS5zZXRGaWVsZCgnbG9jYXRpb24nLCBkYXRhLmxvY2F0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybVN0YXRlLnNldEZpZWxkKCdub3RlcycsIGRhdGEubm90ZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2IubGFiZWwgPSA0O1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDogcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTsgfSkoKTtcclxuICAgIH0sIFtwcm9wcy5pZF0pO1xyXG4gICAgaWYgKGxvYWRpbmcpIHtcclxuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChTcGlubmVyLCB7IGNsYXNzTmFtZTogXCJkLWJsb2NrIG14LWF1dG8gbXQtNVwiLCBhbmltYXRpb246IFwiYm9yZGVyXCIsIHZhcmlhbnQ6IFwiZGFya1wiIH0pO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm1MYXlvdXQsIG51bGwsXHJcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybS5Sb3csIG51bGwsXHJcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KENvbCwgeyBtZDogNiB9LFxyXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybS5Hcm91cCwgeyBjb250cm9sSWQ6IFwicGxhY2VzLW5hbWVcIiB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm0uTGFiZWwsIG51bGwsIFwiUGxhY2UgTmFtZVwiKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtLkNvbnRyb2wsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcInNoYWRvdy1zbVwiIH0sIHRleHQoJ25hbWUnKSkpKSksXHJcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KENvbCwgeyBtZDogNiB9LFxyXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybS5Hcm91cCwgeyBjb250cm9sSWQ6IFwicGxhY2VzLWxvY2F0aW9uc1wiIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybS5MYWJlbCwgbnVsbCwgXCJQbGFjZSBMb2NhdGlvblwiKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtLkNvbnRyb2wsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcInNoYWRvdy1zbVwiIH0sIHRleHQoJ2xvY2F0aW9uJykpKSkpLFxyXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChDb2wsIHsgbWQ6IDEyIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtLkdyb3VwLCB7IGNvbnRyb2xJZDogXCJwbGFjZXMtbm90ZXNcIiB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm0uTGFiZWwsIG51bGwsIFwiTm90ZXNcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybS5Db250cm9sLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJzaGFkb3ctc21cIiwgcm93czogMTUsIGFzOiBcInRleHRhcmVhXCIgfSwgdGV4dCgnbm90ZXMnKSkpKSkpLFxyXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFN1Ym1pdEJ1dHRvbiwgeyB0ZXh0OiBwcm9wcy5tYXRjaC5wYXJhbXMuaWQgPyAnU2F2ZScgOiAnQWRkJywgaGFuZGxlU3VibWl0OiBoYW5kbGVTdWJtaXQgfSksXHJcbiAgICAgICAgICAgIHByb3BzLm1hdGNoLnBhcmFtcy5pZCA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoRGVsZXRlQnV0dG9uLCB7IGhhbmRsZURlbGV0ZTogaGFuZGxlRGVsZXRlIH0pIDogbnVsbCkpO1xyXG4gICAgfVxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBQbGFjZXM7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=