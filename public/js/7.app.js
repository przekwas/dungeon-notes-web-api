(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

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

/***/ "./src/client/pages/forms/Personal.tsx":
/*!*********************************************!*\
  !*** ./src/client/pages/forms/Personal.tsx ***!
  \*********************************************/
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








var Personal = function (props) {
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false), loading = _a[0], setLoading = _a[1];
    var _b = Object(react_use_form_state__WEBPACK_IMPORTED_MODULE_2__["useFormState"])(), formState = _b[0], text = _b[1].text;
    var state = Object(react_router__WEBPACK_IMPORTED_MODULE_1__["useLocation"])().state;
    var handleSubmit = function (e) { return __awaiter(void 0, void 0, void 0, function () {
        var uri, method, res, characterid;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    e.preventDefault();
                    uri = props.match.params.id ? "/api/personal/" + props.match.params.id : '/api/personal/';
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
                    props.history.push("/personal/details/" + characterid);
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
                    uri = "/api/personal/" + props.match.params.id;
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
                        formState.setField('title', state.item.title);
                        formState.setField('notes', state.item.notes);
                        return [3 /*break*/, 4];
                    case 1:
                        setLoading(true);
                        return [4 /*yield*/, fetch('/api/personal/' + props.id)];
                    case 2:
                        res = _b.sent();
                        return [4 /*yield*/, res.json()];
                    case 3:
                        data = _b.sent();
                        formState.setField('title', data.title);
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
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], { md: 12 },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Group, { controlId: "personal-title" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Label, null, "Personal Note Title"),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Control, __assign({ className: "shadow-sm" }, text('title'))))),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], { md: 12 },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Group, { controlId: "personal-notes" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Label, null, "Notes"),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Control, __assign({ className: "shadow-sm", rows: 15, as: "textarea" }, text('notes')))))),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_forms_SubmitButton__WEBPACK_IMPORTED_MODULE_4__["default"], { text: props.match.params.id ? 'Save' : 'Add', handleSubmit: handleSubmit }),
            props.match.params.id ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_forms_DeleteButton__WEBPACK_IMPORTED_MODULE_6__["default"], { handleDelete: handleDelete }) : null));
    }
};
/* harmony default export */ __webpack_exports__["default"] = (Personal);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvZm9ybXMvRGVsZXRlQnV0dG9uLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvZm9ybXMvRm9ybUxheW91dC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9jb21wb25lbnRzL2Zvcm1zL1N1Ym1pdEJ1dHRvbi50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9wYWdlcy9mb3Jtcy9QZXJzb25hbC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTBCO0FBQ2U7QUFDekM7QUFDQSxZQUFZLDRDQUFLLGVBQWUsc0RBQU0sR0FBRyxvSUFBb0k7QUFDN0s7QUFDZSwyRUFBWSxFQUFDOzs7Ozs7Ozs7Ozs7O0FDTDVCO0FBQUE7QUFBQTtBQUFBO0FBQTBCO0FBQ2tDO0FBQzVEO0FBQ0EsWUFBWSw0Q0FBSyxlQUFlLHlEQUFTLEdBQUcsY0FBYztBQUMxRCxRQUFRLDRDQUFLLGVBQWUsbURBQUcsR0FBRyxvQkFBb0I7QUFDdEQsWUFBWSw0Q0FBSyxlQUFlLG1EQUFHLEdBQUcsU0FBUztBQUMvQyxnQkFBZ0IsNENBQUssZUFBZSxvREFBSSxHQUFHLDJEQUEyRDtBQUN0RztBQUNlLHlFQUFVLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUNSMUI7QUFBQTtBQUFBO0FBQUE7QUFBMEI7QUFDZTtBQUN6QztBQUNBLFlBQVksNENBQUssZUFBZSxzREFBTSxHQUFHLGlIQUFpSDtBQUMxSjtBQUNBO0FBQ0E7QUFDZSwyRUFBWSxFQUFDOzs7Ozs7Ozs7Ozs7O0FDUDVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUFnQixTQUFJLElBQUksU0FBSTtBQUM1QjtBQUNBLGdEQUFnRCxPQUFPO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsU0FBSSxJQUFJLFNBQUk7QUFDN0IsMkJBQTJCLCtEQUErRCxnQkFBZ0IsRUFBRSxFQUFFO0FBQzlHO0FBQ0EsbUNBQW1DLE1BQU0sNkJBQTZCLEVBQUUsWUFBWSxXQUFXLEVBQUU7QUFDakcsa0NBQWtDLE1BQU0saUNBQWlDLEVBQUUsWUFBWSxXQUFXLEVBQUU7QUFDcEcsK0JBQStCLHFGQUFxRjtBQUNwSDtBQUNBLEtBQUs7QUFDTDtBQUNBLG1CQUFtQixTQUFJLElBQUksU0FBSTtBQUMvQixhQUFhLDZCQUE2QiwwQkFBMEIsYUFBYSxFQUFFLHFCQUFxQjtBQUN4RyxnQkFBZ0IscURBQXFELG9FQUFvRSxhQUFhLEVBQUU7QUFDeEosc0JBQXNCLHNCQUFzQixxQkFBcUIsR0FBRztBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkMsa0NBQWtDLFNBQVM7QUFDM0Msa0NBQWtDLFdBQVcsVUFBVTtBQUN2RCx5Q0FBeUMsY0FBYztBQUN2RDtBQUNBLDZHQUE2RyxPQUFPLFVBQVU7QUFDOUgsZ0ZBQWdGLGlCQUFpQixPQUFPO0FBQ3hHLHdEQUF3RCxnQkFBZ0IsUUFBUSxPQUFPO0FBQ3ZGLDhDQUE4QyxnQkFBZ0IsZ0JBQWdCLE9BQU87QUFDckY7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBLFNBQVMsWUFBWSxhQUFhLE9BQU8sRUFBRSxVQUFVLFdBQVc7QUFDaEUsbUNBQW1DLFNBQVM7QUFDNUM7QUFDQTtBQUMwQjtBQUNpQjtBQUNDO0FBQ1E7QUFDQztBQUNVO0FBQ0o7QUFDSTtBQUMvRDtBQUNBLGFBQWEsc0RBQVE7QUFDckIsYUFBYSx5RUFBWTtBQUN6QixnQkFBZ0IsZ0VBQVc7QUFDM0IscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLLEVBQUU7QUFDUCxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSyxFQUFFO0FBQ1AsSUFBSSx1REFBUztBQUNiLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUyxFQUFFLEVBQUU7QUFDYixLQUFLO0FBQ0w7QUFDQSxlQUFlLDRDQUFLLGVBQWUsdURBQU8sR0FBRywwRUFBMEU7QUFDdkg7QUFDQTtBQUNBLGdCQUFnQiw0Q0FBSyxlQUFlLG9FQUFVO0FBQzlDLFlBQVksNENBQUssZUFBZSxvREFBSTtBQUNwQyxnQkFBZ0IsNENBQUssZUFBZSxtREFBRyxHQUFHLFNBQVM7QUFDbkQsb0JBQW9CLDRDQUFLLGVBQWUsb0RBQUksU0FBUyw4QkFBOEI7QUFDbkYsd0JBQXdCLDRDQUFLLGVBQWUsb0RBQUk7QUFDaEQsd0JBQXdCLDRDQUFLLGVBQWUsb0RBQUksb0JBQW9CLHlCQUF5QjtBQUM3RixnQkFBZ0IsNENBQUssZUFBZSxtREFBRyxHQUFHLFNBQVM7QUFDbkQsb0JBQW9CLDRDQUFLLGVBQWUsb0RBQUksU0FBUyw4QkFBOEI7QUFDbkYsd0JBQXdCLDRDQUFLLGVBQWUsb0RBQUk7QUFDaEQsd0JBQXdCLDRDQUFLLGVBQWUsb0RBQUksb0JBQW9CLG1EQUFtRDtBQUN2SCxZQUFZLDRDQUFLLGVBQWUsc0VBQVksR0FBRywyRUFBMkU7QUFDMUgsb0NBQW9DLDRDQUFLLGVBQWUsc0VBQVksR0FBRyw2QkFBNkI7QUFDcEc7QUFDQTtBQUNlLHVFQUFRLEVBQUMiLCJmaWxlIjoiNy5hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG52YXIgRGVsZXRlQnV0dG9uID0gZnVuY3Rpb24gKHByb3BzKSB7XHJcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoQnV0dG9uLCB7IHZhcmlhbnQ6IFwiZGFuZ2VyXCIsIHNpemU6IFwibGdcIiwgb25DbGljazogcHJvcHMuaGFuZGxlRGVsZXRlLCBjbGFzc05hbWU6IFwibXQtNCB3LTUwIG14LWF1dG8gc2hhZG93LXNtXCIsIGJsb2NrOiB0cnVlLCB0eXBlOiBcInN1Ym1pdFwiIH0sIFwiRGVsZXRlICdkYXQgU2hpdFwiKSk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IERlbGV0ZUJ1dHRvbjtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQ29udGFpbmVyLCBSb3csIENvbCwgRm9ybSB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcbnZhciBGb3JtTGF5b3V0ID0gZnVuY3Rpb24gKHByb3BzKSB7XHJcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29udGFpbmVyLCB7IGZsdWlkOiB0cnVlIH0sXHJcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChSb3csIHsgY2xhc3NOYW1lOiBcIm15LTJcIiB9LFxyXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KENvbCwgeyBtZDogMTIgfSxcclxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybSwgeyBjbGFzc05hbWU6IFwicC0zIGJvcmRlciBib3JkZXItcHJpbWFyeSByb3VuZGVkIHNoYWRvdy1sZ1wiIH0sIHByb3BzLmNoaWxkcmVuKSkpKSk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IEZvcm1MYXlvdXQ7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcbnZhciBTdWJtaXRCdXR0b24gPSBmdW5jdGlvbiAocHJvcHMpIHtcclxuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChCdXR0b24sIHsgc2l6ZTogXCJsZ1wiLCBvbkNsaWNrOiBwcm9wcy5oYW5kbGVTdWJtaXQsIGNsYXNzTmFtZTogXCJtdC0zIHctNTAgbXgtYXV0byBzaGFkb3ctc21cIiwgYmxvY2s6IHRydWUsIHR5cGU6IFwic3VibWl0XCIgfSxcclxuICAgICAgICBwcm9wcy50ZXh0LFxyXG4gICAgICAgIFwiICdkYXQgU2hpdFwiKSk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IFN1Ym1pdEJ1dHRvbjtcclxuIiwidmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxyXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfTtcclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59O1xyXG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufTtcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlTG9jYXRpb24gfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VGb3JtU3RhdGUgfSBmcm9tICdyZWFjdC11c2UtZm9ybS1zdGF0ZSc7XHJcbmltcG9ydCB7IFNwaW5uZXIsIENvbCwgRm9ybSB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcbmltcG9ydCBTdWJtaXRCdXR0b24gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9mb3Jtcy9TdWJtaXRCdXR0b24nO1xyXG5pbXBvcnQgRm9ybUxheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL2Zvcm1zL0Zvcm1MYXlvdXQnO1xyXG5pbXBvcnQgRGVsZXRlQnV0dG9uIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvZm9ybXMvRGVsZXRlQnV0dG9uJztcclxudmFyIFBlcnNvbmFsID0gZnVuY3Rpb24gKHByb3BzKSB7XHJcbiAgICB2YXIgX2EgPSB1c2VTdGF0ZShmYWxzZSksIGxvYWRpbmcgPSBfYVswXSwgc2V0TG9hZGluZyA9IF9hWzFdO1xyXG4gICAgdmFyIF9iID0gdXNlRm9ybVN0YXRlKCksIGZvcm1TdGF0ZSA9IF9iWzBdLCB0ZXh0ID0gX2JbMV0udGV4dDtcclxuICAgIHZhciBzdGF0ZSA9IHVzZUxvY2F0aW9uKCkuc3RhdGU7XHJcbiAgICB2YXIgaGFuZGxlU3VibWl0ID0gZnVuY3Rpb24gKGUpIHsgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHVyaSwgbWV0aG9kLCByZXMsIGNoYXJhY3RlcmlkO1xyXG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICB1cmkgPSBwcm9wcy5tYXRjaC5wYXJhbXMuaWQgPyBcIi9hcGkvcGVyc29uYWwvXCIgKyBwcm9wcy5tYXRjaC5wYXJhbXMuaWQgOiAnL2FwaS9wZXJzb25hbC8nO1xyXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZCA9IHByb3BzLm1hdGNoLnBhcmFtcy5pZCA/ICdQVVQnIDogJ1BPU1QnO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGZldGNoKHVyaSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBtZXRob2QsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGZvcm1TdGF0ZS52YWx1ZXMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICByZXMgPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgcmVzLmpzb24oKV07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgY2hhcmFjdGVyaWQgPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMuaGlzdG9yeS5wdXNoKFwiL3BlcnNvbmFsL2RldGFpbHMvXCIgKyBjaGFyYWN0ZXJpZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTsgfTtcclxuICAgIHZhciBoYW5kbGVEZWxldGUgPSBmdW5jdGlvbiAoZSkgeyByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgdXJpLCBtZXRob2QsIHJlcztcclxuICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJpID0gXCIvYXBpL3BlcnNvbmFsL1wiICsgcHJvcHMubWF0Y2gucGFyYW1zLmlkO1xyXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZCA9ICdERUxFVEUnO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGZldGNoKHVyaSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBtZXRob2QsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICByZXMgPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMuaGlzdG9yeS5wdXNoKCcvJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTsgfTtcclxuICAgIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgKGZ1bmN0aW9uICgpIHsgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciByZXMsIGRhdGE7XHJcbiAgICAgICAgICAgIHZhciBfYTtcclxuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYikge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYi5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFwcm9wcy5pZCkgcmV0dXJuIFszIC8qYnJlYWsqLywgNF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKChfYSA9IHN0YXRlKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuaXRlbSkpIHJldHVybiBbMyAvKmJyZWFrKi8sIDFdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtU3RhdGUuc2V0RmllbGQoJ3RpdGxlJywgc3RhdGUuaXRlbS50aXRsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1TdGF0ZS5zZXRGaWVsZCgnbm90ZXMnLCBzdGF0ZS5pdGVtLm5vdGVzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgNF07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBmZXRjaCgnL2FwaS9wZXJzb25hbC8nICsgcHJvcHMuaWQpXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcyA9IF9iLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgcmVzLmpzb24oKV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhID0gX2Iuc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtU3RhdGUuc2V0RmllbGQoJ3RpdGxlJywgZGF0YS50aXRsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1TdGF0ZS5zZXRGaWVsZCgnbm90ZXMnLCBkYXRhLm5vdGVzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9iLmxhYmVsID0gNDtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6IHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7IH0pKCk7XHJcbiAgICB9LCBbcHJvcHMuaWRdKTtcclxuICAgIGlmIChsb2FkaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3Bpbm5lciwgeyBjbGFzc05hbWU6IFwiZC1ibG9jayBteC1hdXRvIG10LTVcIiwgYW5pbWF0aW9uOiBcImJvcmRlclwiLCB2YXJpYW50OiBcImRhcmtcIiB9KTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtTGF5b3V0LCBudWxsLFxyXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm0uUm93LCBudWxsLFxyXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChDb2wsIHsgbWQ6IDEyIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtLkdyb3VwLCB7IGNvbnRyb2xJZDogXCJwZXJzb25hbC10aXRsZVwiIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybS5MYWJlbCwgbnVsbCwgXCJQZXJzb25hbCBOb3RlIFRpdGxlXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm0uQ29udHJvbCwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwic2hhZG93LXNtXCIgfSwgdGV4dCgndGl0bGUnKSkpKSksXHJcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KENvbCwgeyBtZDogMTIgfSxcclxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm0uR3JvdXAsIHsgY29udHJvbElkOiBcInBlcnNvbmFsLW5vdGVzXCIgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtLkxhYmVsLCBudWxsLCBcIk5vdGVzXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm0uQ29udHJvbCwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwic2hhZG93LXNtXCIsIHJvd3M6IDE1LCBhczogXCJ0ZXh0YXJlYVwiIH0sIHRleHQoJ25vdGVzJykpKSkpKSxcclxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChTdWJtaXRCdXR0b24sIHsgdGV4dDogcHJvcHMubWF0Y2gucGFyYW1zLmlkID8gJ1NhdmUnIDogJ0FkZCcsIGhhbmRsZVN1Ym1pdDogaGFuZGxlU3VibWl0IH0pLFxyXG4gICAgICAgICAgICBwcm9wcy5tYXRjaC5wYXJhbXMuaWQgPyBSZWFjdC5jcmVhdGVFbGVtZW50KERlbGV0ZUJ1dHRvbiwgeyBoYW5kbGVEZWxldGU6IGhhbmRsZURlbGV0ZSB9KSA6IG51bGwpKTtcclxuICAgIH1cclxufTtcclxuZXhwb3J0IGRlZmF1bHQgUGVyc29uYWw7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=