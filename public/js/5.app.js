(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

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

/***/ "./src/client/pages/forms/Characters.tsx":
/*!***********************************************!*\
  !*** ./src/client/pages/forms/Characters.tsx ***!
  \***********************************************/
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








var Characters = function (props) {
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false), loading = _a[0], setLoading = _a[1];
    var _b = Object(react_use_form_state__WEBPACK_IMPORTED_MODULE_2__["useFormState"])(), formState = _b[0], text = _b[1].text;
    var state = Object(react_router__WEBPACK_IMPORTED_MODULE_1__["useLocation"])().state;
    var handleSubmit = function (e) { return __awaiter(void 0, void 0, void 0, function () {
        var uri, method, res, characterid;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    e.preventDefault();
                    uri = props.match.params.id ? "/api/characters/" + props.match.params.id : '/api/characters/';
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
                    props.history.push("/characters/details/" + characterid);
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
                    uri = "/api/characters/" + props.match.params.id;
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
                        formState.setField('title', state.item.title);
                        formState.setField('notes', state.item.notes);
                        return [3 /*break*/, 4];
                    case 1:
                        setLoading(true);
                        return [4 /*yield*/, fetch('/api/characters/' + props.id)];
                    case 2:
                        res = _b.sent();
                        return [4 /*yield*/, res.json()];
                    case 3:
                        data = _b.sent();
                        formState.setField('name', data.name);
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
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], { md: 6 },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Group, { controlId: "character-name" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Label, null, "Character Name"),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Control, __assign({ className: "shadow-sm" }, text('name'))))),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], { md: 6 },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Group, { controlId: "character-title" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Label, null, "Character Title"),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Control, __assign({ className: "shadow-sm" }, text('title'))))),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], { md: 12 },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Group, { controlId: "character-notes" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Label, null, "Notes"),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Control, __assign({ className: "shadow-sm", rows: 15, as: "textarea" }, text('notes')))))),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_forms_SubmitButton__WEBPACK_IMPORTED_MODULE_4__["default"], { text: props.match.params.id ? 'Save' : 'Add', handleSubmit: handleSubmit }),
            props.match.params.id ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_forms_DeleteButton__WEBPACK_IMPORTED_MODULE_6__["default"], { handleDelete: handleDelete }) : null));
    }
};
/* harmony default export */ __webpack_exports__["default"] = (Characters);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvZm9ybXMvRGVsZXRlQnV0dG9uLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvZm9ybXMvRm9ybUxheW91dC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9jb21wb25lbnRzL2Zvcm1zL1N1Ym1pdEJ1dHRvbi50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9wYWdlcy9mb3Jtcy9DaGFyYWN0ZXJzLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMEI7QUFDZTtBQUN6QztBQUNBLFlBQVksNENBQUssZUFBZSxzREFBTSxHQUFHLG9JQUFvSTtBQUM3SztBQUNlLDJFQUFZLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUNMNUI7QUFBQTtBQUFBO0FBQUE7QUFBMEI7QUFDa0M7QUFDNUQ7QUFDQSxZQUFZLDRDQUFLLGVBQWUseURBQVMsR0FBRyxjQUFjO0FBQzFELFFBQVEsNENBQUssZUFBZSxtREFBRyxHQUFHLG9CQUFvQjtBQUN0RCxZQUFZLDRDQUFLLGVBQWUsbURBQUcsR0FBRyxTQUFTO0FBQy9DLGdCQUFnQiw0Q0FBSyxlQUFlLG9EQUFJLEdBQUcsMkRBQTJEO0FBQ3RHO0FBQ2UseUVBQVUsRUFBQzs7Ozs7Ozs7Ozs7OztBQ1IxQjtBQUFBO0FBQUE7QUFBQTtBQUEwQjtBQUNlO0FBQ3pDO0FBQ0EsWUFBWSw0Q0FBSyxlQUFlLHNEQUFNLEdBQUcsaUhBQWlIO0FBQzFKO0FBQ0E7QUFDQTtBQUNlLDJFQUFZLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUNQNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBQWdCLFNBQUksSUFBSSxTQUFJO0FBQzVCO0FBQ0EsZ0RBQWdELE9BQU87QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixT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QUFtRDtBQUN2SCxZQUFZLDRDQUFLLGVBQWUsc0VBQVksR0FBRywyRUFBMkU7QUFDMUgsb0NBQW9DLDRDQUFLLGVBQWUsc0VBQVksR0FBRyw2QkFBNkI7QUFDcEc7QUFDQTtBQUNlLHlFQUFVLEVBQUMiLCJmaWxlIjoiNS5hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG52YXIgRGVsZXRlQnV0dG9uID0gZnVuY3Rpb24gKHByb3BzKSB7XHJcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoQnV0dG9uLCB7IHZhcmlhbnQ6IFwiZGFuZ2VyXCIsIHNpemU6IFwibGdcIiwgb25DbGljazogcHJvcHMuaGFuZGxlRGVsZXRlLCBjbGFzc05hbWU6IFwibXQtNCB3LTUwIG14LWF1dG8gc2hhZG93LXNtXCIsIGJsb2NrOiB0cnVlLCB0eXBlOiBcInN1Ym1pdFwiIH0sIFwiRGVsZXRlICdkYXQgU2hpdFwiKSk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IERlbGV0ZUJ1dHRvbjtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQ29udGFpbmVyLCBSb3csIENvbCwgRm9ybSB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcbnZhciBGb3JtTGF5b3V0ID0gZnVuY3Rpb24gKHByb3BzKSB7XHJcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29udGFpbmVyLCB7IGZsdWlkOiB0cnVlIH0sXHJcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChSb3csIHsgY2xhc3NOYW1lOiBcIm15LTJcIiB9LFxyXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KENvbCwgeyBtZDogMTIgfSxcclxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybSwgeyBjbGFzc05hbWU6IFwicC0zIGJvcmRlciBib3JkZXItcHJpbWFyeSByb3VuZGVkIHNoYWRvdy1sZ1wiIH0sIHByb3BzLmNoaWxkcmVuKSkpKSk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IEZvcm1MYXlvdXQ7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcbnZhciBTdWJtaXRCdXR0b24gPSBmdW5jdGlvbiAocHJvcHMpIHtcclxuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChCdXR0b24sIHsgc2l6ZTogXCJsZ1wiLCBvbkNsaWNrOiBwcm9wcy5oYW5kbGVTdWJtaXQsIGNsYXNzTmFtZTogXCJtdC0zIHctNTAgbXgtYXV0byBzaGFkb3ctc21cIiwgYmxvY2s6IHRydWUsIHR5cGU6IFwic3VibWl0XCIgfSxcclxuICAgICAgICBwcm9wcy50ZXh0LFxyXG4gICAgICAgIFwiICdkYXQgU2hpdFwiKSk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IFN1Ym1pdEJ1dHRvbjtcclxuIiwidmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxyXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfTtcclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59O1xyXG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufTtcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlTG9jYXRpb24gfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VGb3JtU3RhdGUgfSBmcm9tICdyZWFjdC11c2UtZm9ybS1zdGF0ZSc7XHJcbmltcG9ydCB7IFNwaW5uZXIsIENvbCwgRm9ybSB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcbmltcG9ydCBTdWJtaXRCdXR0b24gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9mb3Jtcy9TdWJtaXRCdXR0b24nO1xyXG5pbXBvcnQgRm9ybUxheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL2Zvcm1zL0Zvcm1MYXlvdXQnO1xyXG5pbXBvcnQgRGVsZXRlQnV0dG9uIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvZm9ybXMvRGVsZXRlQnV0dG9uJztcclxudmFyIENoYXJhY3RlcnMgPSBmdW5jdGlvbiAocHJvcHMpIHtcclxuICAgIHZhciBfYSA9IHVzZVN0YXRlKGZhbHNlKSwgbG9hZGluZyA9IF9hWzBdLCBzZXRMb2FkaW5nID0gX2FbMV07XHJcbiAgICB2YXIgX2IgPSB1c2VGb3JtU3RhdGUoKSwgZm9ybVN0YXRlID0gX2JbMF0sIHRleHQgPSBfYlsxXS50ZXh0O1xyXG4gICAgdmFyIHN0YXRlID0gdXNlTG9jYXRpb24oKS5zdGF0ZTtcclxuICAgIHZhciBoYW5kbGVTdWJtaXQgPSBmdW5jdGlvbiAoZSkgeyByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgdXJpLCBtZXRob2QsIHJlcywgY2hhcmFjdGVyaWQ7XHJcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHVyaSA9IHByb3BzLm1hdGNoLnBhcmFtcy5pZCA/IFwiL2FwaS9jaGFyYWN0ZXJzL1wiICsgcHJvcHMubWF0Y2gucGFyYW1zLmlkIDogJy9hcGkvY2hhcmFjdGVycy8nO1xyXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZCA9IHByb3BzLm1hdGNoLnBhcmFtcy5pZCA/ICdQVVQnIDogJ1BPU1QnO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGZldGNoKHVyaSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBtZXRob2QsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGZvcm1TdGF0ZS52YWx1ZXMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICByZXMgPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgcmVzLmpzb24oKV07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgY2hhcmFjdGVyaWQgPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMuaGlzdG9yeS5wdXNoKFwiL2NoYXJhY3RlcnMvZGV0YWlscy9cIiArIGNoYXJhY3RlcmlkKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pOyB9O1xyXG4gICAgdmFyIGhhbmRsZURlbGV0ZSA9IGZ1bmN0aW9uIChlKSB7IHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciB1cmksIG1ldGhvZCwgcmVzO1xyXG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICB1cmkgPSBcIi9hcGkvY2hhcmFjdGVycy9cIiArIHByb3BzLm1hdGNoLnBhcmFtcy5pZDtcclxuICAgICAgICAgICAgICAgICAgICBtZXRob2QgPSAnREVMRVRFJztcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBmZXRjaCh1cmksIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogbWV0aG9kLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KV07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzID0gX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHByb3BzLmhpc3RvcnkucHVzaCgnLycpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7IH07XHJcbiAgICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIChmdW5jdGlvbiAoKSB7IHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgcmVzLCBkYXRhO1xyXG4gICAgICAgICAgICB2YXIgX2E7XHJcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2IpIHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2IubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcHJvcHMuaWQpIHJldHVybiBbMyAvKmJyZWFrKi8sIDRdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoISgoX2EgPSBzdGF0ZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLml0ZW0pKSByZXR1cm4gWzMgLypicmVhayovLCAxXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybVN0YXRlLnNldEZpZWxkKCduYW1lJywgc3RhdGUuaXRlbS5uYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybVN0YXRlLnNldEZpZWxkKCd0aXRsZScsIHN0YXRlLml0ZW0udGl0bGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtU3RhdGUuc2V0RmllbGQoJ25vdGVzJywgc3RhdGUuaXRlbS5ub3Rlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDRdO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgZmV0Y2goJy9hcGkvY2hhcmFjdGVycy8nICsgcHJvcHMuaWQpXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcyA9IF9iLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgcmVzLmpzb24oKV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhID0gX2Iuc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtU3RhdGUuc2V0RmllbGQoJ25hbWUnLCBkYXRhLm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtU3RhdGUuc2V0RmllbGQoJ3RpdGxlJywgZGF0YS50aXRsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1TdGF0ZS5zZXRGaWVsZCgnbm90ZXMnLCBkYXRhLm5vdGVzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9iLmxhYmVsID0gNDtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6IHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7IH0pKCk7XHJcbiAgICB9LCBbcHJvcHMuaWRdKTtcclxuICAgIGlmIChsb2FkaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3Bpbm5lciwgeyBjbGFzc05hbWU6IFwiZC1ibG9jayBteC1hdXRvIG10LTVcIiwgYW5pbWF0aW9uOiBcImJvcmRlclwiLCB2YXJpYW50OiBcImRhcmtcIiB9KTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtTGF5b3V0LCBudWxsLFxyXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm0uUm93LCBudWxsLFxyXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChDb2wsIHsgbWQ6IDYgfSxcclxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm0uR3JvdXAsIHsgY29udHJvbElkOiBcImNoYXJhY3Rlci1uYW1lXCIgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtLkxhYmVsLCBudWxsLCBcIkNoYXJhY3RlciBOYW1lXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm0uQ29udHJvbCwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwic2hhZG93LXNtXCIgfSwgdGV4dCgnbmFtZScpKSkpKSxcclxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29sLCB7IG1kOiA2IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtLkdyb3VwLCB7IGNvbnRyb2xJZDogXCJjaGFyYWN0ZXItdGl0bGVcIiB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm0uTGFiZWwsIG51bGwsIFwiQ2hhcmFjdGVyIFRpdGxlXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm0uQ29udHJvbCwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwic2hhZG93LXNtXCIgfSwgdGV4dCgndGl0bGUnKSkpKSksXHJcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KENvbCwgeyBtZDogMTIgfSxcclxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm0uR3JvdXAsIHsgY29udHJvbElkOiBcImNoYXJhY3Rlci1ub3Rlc1wiIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybS5MYWJlbCwgbnVsbCwgXCJOb3Rlc1wiKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtLkNvbnRyb2wsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcInNoYWRvdy1zbVwiLCByb3dzOiAxNSwgYXM6IFwidGV4dGFyZWFcIiB9LCB0ZXh0KCdub3RlcycpKSkpKSksXHJcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3VibWl0QnV0dG9uLCB7IHRleHQ6IHByb3BzLm1hdGNoLnBhcmFtcy5pZCA/ICdTYXZlJyA6ICdBZGQnLCBoYW5kbGVTdWJtaXQ6IGhhbmRsZVN1Ym1pdCB9KSxcclxuICAgICAgICAgICAgcHJvcHMubWF0Y2gucGFyYW1zLmlkID8gUmVhY3QuY3JlYXRlRWxlbWVudChEZWxldGVCdXR0b24sIHsgaGFuZGxlRGVsZXRlOiBoYW5kbGVEZWxldGUgfSkgOiBudWxsKSk7XHJcbiAgICB9XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IENoYXJhY3RlcnM7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=