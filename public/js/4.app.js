(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

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

/***/ "./src/client/pages/Edit.tsx":
/*!***********************************!*\
  !*** ./src/client/pages/Edit.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pages_forms_Places__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/forms/Places */ "./src/client/pages/forms/Places.tsx");
/* harmony import */ var _pages_forms_Characters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/forms/Characters */ "./src/client/pages/forms/Characters.tsx");
/* harmony import */ var _pages_forms_Events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/forms/Events */ "./src/client/pages/forms/Events.tsx");
/* harmony import */ var _pages_forms_Personal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/forms/Personal */ "./src/client/pages/forms/Personal.tsx");
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





var Edit = function (props) {
    switch (props.match.params.type) {
        case 'characters':
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pages_forms_Characters__WEBPACK_IMPORTED_MODULE_2__["default"], __assign({ id: props.match.params.id }, props));
        case 'places':
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pages_forms_Places__WEBPACK_IMPORTED_MODULE_1__["default"], __assign({ id: props.match.params.id }, props));
        case 'events':
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pages_forms_Events__WEBPACK_IMPORTED_MODULE_3__["default"], __assign({ id: props.match.params.id }, props));
        case 'personal':
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pages_forms_Personal__WEBPACK_IMPORTED_MODULE_4__["default"], __assign({ id: props.match.params.id }, props));
        default:
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", { className: "text-center" }, "You fucked up.");
    }
};
/* harmony default export */ __webpack_exports__["default"] = (Edit);


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


/***/ }),

/***/ "./src/client/pages/forms/Events.tsx":
/*!*******************************************!*\
  !*** ./src/client/pages/forms/Events.tsx ***!
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








var Events = function (props) {
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false), loading = _a[0], setLoading = _a[1];
    var _b = Object(react_use_form_state__WEBPACK_IMPORTED_MODULE_2__["useFormState"])(), formState = _b[0], text = _b[1].text;
    var state = Object(react_router__WEBPACK_IMPORTED_MODULE_1__["useLocation"])().state;
    var handleSubmit = function (e) { return __awaiter(void 0, void 0, void 0, function () {
        var uri, method, res, characterid;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    e.preventDefault();
                    uri = props.match.params.id ? "/api/events/" + props.match.params.id : '/api/events/';
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
                    props.history.push("/events/details/" + characterid);
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
                    uri = "/api/events/" + props.match.params.id;
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
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Group, { controlId: "event-name" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Label, null, "Event Name"),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Control, __assign({ className: "shadow-sm" }, text('name'))))),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], { md: 6 },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Group, { controlId: "event-title" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Label, null, "Event Location"),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Control, __assign({ className: "shadow-sm" }, text('location'))))),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], { md: 12 },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Group, { controlId: "event-notes" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Label, null, "Notes"),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Control, __assign({ className: "shadow-sm", rows: 15, as: "textarea" }, text('notes')))))),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_forms_SubmitButton__WEBPACK_IMPORTED_MODULE_4__["default"], { text: props.match.params.id ? 'Save' : 'Add', handleSubmit: handleSubmit }),
            props.match.params.id ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_forms_DeleteButton__WEBPACK_IMPORTED_MODULE_6__["default"], { handleDelete: handleDelete }) : null));
    }
};
/* harmony default export */ __webpack_exports__["default"] = (Events);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvZm9ybXMvRGVsZXRlQnV0dG9uLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvZm9ybXMvRm9ybUxheW91dC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9jb21wb25lbnRzL2Zvcm1zL1N1Ym1pdEJ1dHRvbi50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9wYWdlcy9FZGl0LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L3BhZ2VzL2Zvcm1zL0NoYXJhY3RlcnMudHN4Iiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvcGFnZXMvZm9ybXMvRXZlbnRzLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L3BhZ2VzL2Zvcm1zL1BlcnNvbmFsLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L3BhZ2VzL2Zvcm1zL1BsYWNlcy50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTBCO0FBQ2U7QUFDekM7QUFDQSxZQUFZLDRDQUFLLGVBQWUsc0RBQU0sR0FBRyxvSUFBb0k7QUFDN0s7QUFDZSwyRUFBWSxFQUFDOzs7Ozs7Ozs7Ozs7O0FDTDVCO0FBQUE7QUFBQTtBQUFBO0FBQTBCO0FBQ2tDO0FBQzVEO0FBQ0EsWUFBWSw0Q0FBSyxlQUFlLHlEQUFTLEdBQUcsY0FBYztBQUMxRCxRQUFRLDRDQUFLLGVBQWUsbURBQUcsR0FBRyxvQkFBb0I7QUFDdEQsWUFBWSw0Q0FBSyxlQUFlLG1EQUFHLEdBQUcsU0FBUztBQUMvQyxnQkFBZ0IsNENBQUssZUFBZSxvREFBSSxHQUFHLDJEQUEyRDtBQUN0RztBQUNlLHlFQUFVLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUNSMUI7QUFBQTtBQUFBO0FBQUE7QUFBMEI7QUFDZTtBQUN6QztBQUNBLFlBQVksNENBQUssZUFBZSxzREFBTSxHQUFHLGlIQUFpSDtBQUMx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QTJCO0FBQ2hGLHdCQUF3Qiw0Q0FBSyxlQUFlLG9EQUFJO0FBQ2hELHdCQUF3Qiw0Q0FBSyxlQUFlLG9EQUFJLG9CQUFvQix5QkFBeUI7QUFDN0YsZ0JBQWdCLDRDQUFLLGVBQWUsbURBQUcsR0FBRyxRQUFRO0FBQ2xELG9CQUFvQiw0Q0FBSyxlQUFlLG9EQUFJLFNBQVMsZ0NBQWdDO0FBQ3JGLHdCQUF3Qiw0Q0FBSyxlQUFlLG9EQUFJO0FBQ2hELHdCQUF3Qiw0Q0FBSyxlQUFlLG9EQUFJLG9CQUFvQix5QkFBeUI7QUFDN0YsZ0JBQWdCLDRDQUFLLGVBQWUsbURBQUcsR0FBRyxTQUFTO0FBQ25ELG9CQUFvQiw0Q0FBSyxlQUFlLG9EQUFJLFNBQVMsNEJBQTRCO0FBQ2pGLHdCQUF3Qiw0Q0FBSyxlQUFlLG9EQUFJO0FBQ2hELHdCQUF3Qiw0Q0FBSyxlQUFlLG9EQUFJLG9CQUFvQixtREFBbUQ7QUFDdkgsWUFBWSw0Q0FBSyxlQUFlLHNFQUFZLEdBQUcsMkVBQTJFO0FBQzFILG9DQUFvQyw0Q0FBSyxlQUFlLHNFQUFZLEdBQUcsNkJBQTZCO0FBQ3BHO0FBQ0E7QUFDZSxxRUFBTSxFQUFDIiwiZmlsZSI6IjQuYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcclxudmFyIERlbGV0ZUJ1dHRvbiA9IGZ1bmN0aW9uIChwcm9wcykge1xyXG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KEJ1dHRvbiwgeyB2YXJpYW50OiBcImRhbmdlclwiLCBzaXplOiBcImxnXCIsIG9uQ2xpY2s6IHByb3BzLmhhbmRsZURlbGV0ZSwgY2xhc3NOYW1lOiBcIm10LTQgdy01MCBteC1hdXRvIHNoYWRvdy1zbVwiLCBibG9jazogdHJ1ZSwgdHlwZTogXCJzdWJtaXRcIiB9LCBcIkRlbGV0ZSAnZGF0IFNoaXRcIikpO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBEZWxldGVCdXR0b247XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IENvbnRhaW5lciwgUm93LCBDb2wsIEZvcm0gfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG52YXIgRm9ybUxheW91dCA9IGZ1bmN0aW9uIChwcm9wcykge1xyXG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KENvbnRhaW5lciwgeyBmbHVpZDogdHJ1ZSB9LFxyXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUm93LCB7IGNsYXNzTmFtZTogXCJteS0yXCIgfSxcclxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChDb2wsIHsgbWQ6IDEyIH0sXHJcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm0sIHsgY2xhc3NOYW1lOiBcInAtMyBib3JkZXIgYm9yZGVyLXByaW1hcnkgcm91bmRlZCBzaGFkb3ctbGdcIiB9LCBwcm9wcy5jaGlsZHJlbikpKSkpO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBGb3JtTGF5b3V0O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG52YXIgU3VibWl0QnV0dG9uID0gZnVuY3Rpb24gKHByb3BzKSB7XHJcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoQnV0dG9uLCB7IHNpemU6IFwibGdcIiwgb25DbGljazogcHJvcHMuaGFuZGxlU3VibWl0LCBjbGFzc05hbWU6IFwibXQtMyB3LTUwIG14LWF1dG8gc2hhZG93LXNtXCIsIGJsb2NrOiB0cnVlLCB0eXBlOiBcInN1Ym1pdFwiIH0sXHJcbiAgICAgICAgcHJvcHMudGV4dCxcclxuICAgICAgICBcIiAnZGF0IFNoaXRcIikpO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBTdWJtaXRCdXR0b247XHJcbiIsInZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcclxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH07XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufTtcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFBsYWNlcyBmcm9tICcuLi9wYWdlcy9mb3Jtcy9QbGFjZXMnO1xyXG5pbXBvcnQgQ2hhcmFjdGVycyBmcm9tICcuLi9wYWdlcy9mb3Jtcy9DaGFyYWN0ZXJzJztcclxuaW1wb3J0IEV2ZW50cyBmcm9tICcuLi9wYWdlcy9mb3Jtcy9FdmVudHMnO1xyXG5pbXBvcnQgUGVyc29uYWwgZnJvbSAnLi4vcGFnZXMvZm9ybXMvUGVyc29uYWwnO1xyXG52YXIgRWRpdCA9IGZ1bmN0aW9uIChwcm9wcykge1xyXG4gICAgc3dpdGNoIChwcm9wcy5tYXRjaC5wYXJhbXMudHlwZSkge1xyXG4gICAgICAgIGNhc2UgJ2NoYXJhY3RlcnMnOlxyXG4gICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChDaGFyYWN0ZXJzLCBfX2Fzc2lnbih7IGlkOiBwcm9wcy5tYXRjaC5wYXJhbXMuaWQgfSwgcHJvcHMpKTtcclxuICAgICAgICBjYXNlICdwbGFjZXMnOlxyXG4gICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChQbGFjZXMsIF9fYXNzaWduKHsgaWQ6IHByb3BzLm1hdGNoLnBhcmFtcy5pZCB9LCBwcm9wcykpO1xyXG4gICAgICAgIGNhc2UgJ2V2ZW50cyc6XHJcbiAgICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KEV2ZW50cywgX19hc3NpZ24oeyBpZDogcHJvcHMubWF0Y2gucGFyYW1zLmlkIH0sIHByb3BzKSk7XHJcbiAgICAgICAgY2FzZSAncGVyc29uYWwnOlxyXG4gICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChQZXJzb25hbCwgX19hc3NpZ24oeyBpZDogcHJvcHMubWF0Y2gucGFyYW1zLmlkIH0sIHByb3BzKSk7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJoMVwiLCB7IGNsYXNzTmFtZTogXCJ0ZXh0LWNlbnRlclwiIH0sIFwiWW91IGZ1Y2tlZCB1cC5cIik7XHJcbiAgICB9XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IEVkaXQ7XHJcbiIsInZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcclxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH07XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufTtcclxudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn07XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZUxvY2F0aW9uIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlRm9ybVN0YXRlIH0gZnJvbSAncmVhY3QtdXNlLWZvcm0tc3RhdGUnO1xyXG5pbXBvcnQgeyBTcGlubmVyLCBDb2wsIEZvcm0gfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5pbXBvcnQgU3VibWl0QnV0dG9uIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvZm9ybXMvU3VibWl0QnV0dG9uJztcclxuaW1wb3J0IEZvcm1MYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9mb3Jtcy9Gb3JtTGF5b3V0JztcclxuaW1wb3J0IERlbGV0ZUJ1dHRvbiBmcm9tICcuLi8uLi9jb21wb25lbnRzL2Zvcm1zL0RlbGV0ZUJ1dHRvbic7XHJcbnZhciBDaGFyYWN0ZXJzID0gZnVuY3Rpb24gKHByb3BzKSB7XHJcbiAgICB2YXIgX2EgPSB1c2VTdGF0ZShmYWxzZSksIGxvYWRpbmcgPSBfYVswXSwgc2V0TG9hZGluZyA9IF9hWzFdO1xyXG4gICAgdmFyIF9iID0gdXNlRm9ybVN0YXRlKCksIGZvcm1TdGF0ZSA9IF9iWzBdLCB0ZXh0ID0gX2JbMV0udGV4dDtcclxuICAgIHZhciBzdGF0ZSA9IHVzZUxvY2F0aW9uKCkuc3RhdGU7XHJcbiAgICB2YXIgaGFuZGxlU3VibWl0ID0gZnVuY3Rpb24gKGUpIHsgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHVyaSwgbWV0aG9kLCByZXMsIGNoYXJhY3RlcmlkO1xyXG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICB1cmkgPSBwcm9wcy5tYXRjaC5wYXJhbXMuaWQgPyBcIi9hcGkvY2hhcmFjdGVycy9cIiArIHByb3BzLm1hdGNoLnBhcmFtcy5pZCA6ICcvYXBpL2NoYXJhY3RlcnMvJztcclxuICAgICAgICAgICAgICAgICAgICBtZXRob2QgPSBwcm9wcy5tYXRjaC5wYXJhbXMuaWQgPyAnUFVUJyA6ICdQT1NUJztcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBmZXRjaCh1cmksIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogbWV0aG9kLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShmb3JtU3RhdGUudmFsdWVzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KV07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzID0gX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHJlcy5qc29uKCldO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgIGNoYXJhY3RlcmlkID0gX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHByb3BzLmhpc3RvcnkucHVzaChcIi9jaGFyYWN0ZXJzL2RldGFpbHMvXCIgKyBjaGFyYWN0ZXJpZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTsgfTtcclxuICAgIHZhciBoYW5kbGVEZWxldGUgPSBmdW5jdGlvbiAoZSkgeyByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgdXJpLCBtZXRob2QsIHJlcztcclxuICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJpID0gXCIvYXBpL2NoYXJhY3RlcnMvXCIgKyBwcm9wcy5tYXRjaC5wYXJhbXMuaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kID0gJ0RFTEVURSc7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgZmV0Y2godXJpLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IG1ldGhvZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSldO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgIHJlcyA9IF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICBwcm9wcy5oaXN0b3J5LnB1c2goJy8nKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pOyB9O1xyXG4gICAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAoZnVuY3Rpb24gKCkgeyByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIHJlcywgZGF0YTtcclxuICAgICAgICAgICAgdmFyIF9hO1xyXG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9iKSB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9iLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXByb3BzLmlkKSByZXR1cm4gWzMgLypicmVhayovLCA0XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEoKF9hID0gc3RhdGUpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5pdGVtKSkgcmV0dXJuIFszIC8qYnJlYWsqLywgMV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1TdGF0ZS5zZXRGaWVsZCgnbmFtZScsIHN0YXRlLml0ZW0ubmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1TdGF0ZS5zZXRGaWVsZCgndGl0bGUnLCBzdGF0ZS5pdGVtLnRpdGxlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybVN0YXRlLnNldEZpZWxkKCdub3RlcycsIHN0YXRlLml0ZW0ubm90ZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA0XTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGZldGNoKCcvYXBpL2NoYXJhY3RlcnMvJyArIHByb3BzLmlkKV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXMgPSBfYi5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHJlcy5qc29uKCldO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YSA9IF9iLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybVN0YXRlLnNldEZpZWxkKCduYW1lJywgZGF0YS5uYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybVN0YXRlLnNldEZpZWxkKCd0aXRsZScsIGRhdGEudGl0bGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtU3RhdGUuc2V0RmllbGQoJ25vdGVzJywgZGF0YS5ub3Rlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfYi5sYWJlbCA9IDQ7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OiByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pOyB9KSgpO1xyXG4gICAgfSwgW3Byb3BzLmlkXSk7XHJcbiAgICBpZiAobG9hZGluZykge1xyXG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFNwaW5uZXIsIHsgY2xhc3NOYW1lOiBcImQtYmxvY2sgbXgtYXV0byBtdC01XCIsIGFuaW1hdGlvbjogXCJib3JkZXJcIiwgdmFyaWFudDogXCJkYXJrXCIgfSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybUxheW91dCwgbnVsbCxcclxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtLlJvdywgbnVsbCxcclxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29sLCB7IG1kOiA2IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtLkdyb3VwLCB7IGNvbnRyb2xJZDogXCJjaGFyYWN0ZXItbmFtZVwiIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybS5MYWJlbCwgbnVsbCwgXCJDaGFyYWN0ZXIgTmFtZVwiKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtLkNvbnRyb2wsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcInNoYWRvdy1zbVwiIH0sIHRleHQoJ25hbWUnKSkpKSksXHJcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KENvbCwgeyBtZDogNiB9LFxyXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybS5Hcm91cCwgeyBjb250cm9sSWQ6IFwiY2hhcmFjdGVyLXRpdGxlXCIgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtLkxhYmVsLCBudWxsLCBcIkNoYXJhY3RlciBUaXRsZVwiKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtLkNvbnRyb2wsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcInNoYWRvdy1zbVwiIH0sIHRleHQoJ3RpdGxlJykpKSkpLFxyXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChDb2wsIHsgbWQ6IDEyIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtLkdyb3VwLCB7IGNvbnRyb2xJZDogXCJjaGFyYWN0ZXItbm90ZXNcIiB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm0uTGFiZWwsIG51bGwsIFwiTm90ZXNcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybS5Db250cm9sLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJzaGFkb3ctc21cIiwgcm93czogMTUsIGFzOiBcInRleHRhcmVhXCIgfSwgdGV4dCgnbm90ZXMnKSkpKSkpLFxyXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFN1Ym1pdEJ1dHRvbiwgeyB0ZXh0OiBwcm9wcy5tYXRjaC5wYXJhbXMuaWQgPyAnU2F2ZScgOiAnQWRkJywgaGFuZGxlU3VibWl0OiBoYW5kbGVTdWJtaXQgfSksXHJcbiAgICAgICAgICAgIHByb3BzLm1hdGNoLnBhcmFtcy5pZCA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoRGVsZXRlQnV0dG9uLCB7IGhhbmRsZURlbGV0ZTogaGFuZGxlRGVsZXRlIH0pIDogbnVsbCkpO1xyXG4gICAgfVxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBDaGFyYWN0ZXJzO1xyXG4iLCJ2YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXHJcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn07XHJcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59O1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VMb2NhdGlvbiB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZUZvcm1TdGF0ZSB9IGZyb20gJ3JlYWN0LXVzZS1mb3JtLXN0YXRlJztcclxuaW1wb3J0IHsgU3Bpbm5lciwgQ29sLCBGb3JtIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcclxuaW1wb3J0IFN1Ym1pdEJ1dHRvbiBmcm9tICcuLi8uLi9jb21wb25lbnRzL2Zvcm1zL1N1Ym1pdEJ1dHRvbic7XHJcbmltcG9ydCBGb3JtTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvZm9ybXMvRm9ybUxheW91dCc7XHJcbmltcG9ydCBEZWxldGVCdXR0b24gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9mb3Jtcy9EZWxldGVCdXR0b24nO1xyXG52YXIgRXZlbnRzID0gZnVuY3Rpb24gKHByb3BzKSB7XHJcbiAgICB2YXIgX2EgPSB1c2VTdGF0ZShmYWxzZSksIGxvYWRpbmcgPSBfYVswXSwgc2V0TG9hZGluZyA9IF9hWzFdO1xyXG4gICAgdmFyIF9iID0gdXNlRm9ybVN0YXRlKCksIGZvcm1TdGF0ZSA9IF9iWzBdLCB0ZXh0ID0gX2JbMV0udGV4dDtcclxuICAgIHZhciBzdGF0ZSA9IHVzZUxvY2F0aW9uKCkuc3RhdGU7XHJcbiAgICB2YXIgaGFuZGxlU3VibWl0ID0gZnVuY3Rpb24gKGUpIHsgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHVyaSwgbWV0aG9kLCByZXMsIGNoYXJhY3RlcmlkO1xyXG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICB1cmkgPSBwcm9wcy5tYXRjaC5wYXJhbXMuaWQgPyBcIi9hcGkvZXZlbnRzL1wiICsgcHJvcHMubWF0Y2gucGFyYW1zLmlkIDogJy9hcGkvZXZlbnRzLyc7XHJcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kID0gcHJvcHMubWF0Y2gucGFyYW1zLmlkID8gJ1BVVCcgOiAnUE9TVCc7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgZmV0Y2godXJpLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IG1ldGhvZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZm9ybVN0YXRlLnZhbHVlcylcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSldO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgIHJlcyA9IF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCByZXMuanNvbigpXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICBjaGFyYWN0ZXJpZCA9IF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICBwcm9wcy5oaXN0b3J5LnB1c2goXCIvZXZlbnRzL2RldGFpbHMvXCIgKyBjaGFyYWN0ZXJpZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTsgfTtcclxuICAgIHZhciBoYW5kbGVEZWxldGUgPSBmdW5jdGlvbiAoZSkgeyByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgdXJpLCBtZXRob2QsIHJlcztcclxuICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJpID0gXCIvYXBpL2V2ZW50cy9cIiArIHByb3BzLm1hdGNoLnBhcmFtcy5pZDtcclxuICAgICAgICAgICAgICAgICAgICBtZXRob2QgPSAnREVMRVRFJztcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBmZXRjaCh1cmksIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogbWV0aG9kLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KV07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzID0gX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHByb3BzLmhpc3RvcnkucHVzaCgnLycpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7IH07XHJcbiAgICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIChmdW5jdGlvbiAoKSB7IHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgcmVzLCBkYXRhO1xyXG4gICAgICAgICAgICB2YXIgX2E7XHJcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2IpIHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2IubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcHJvcHMuaWQpIHJldHVybiBbMyAvKmJyZWFrKi8sIDRdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoISgoX2EgPSBzdGF0ZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLml0ZW0pKSByZXR1cm4gWzMgLypicmVhayovLCAxXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybVN0YXRlLnNldEZpZWxkKCduYW1lJywgc3RhdGUuaXRlbS5uYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybVN0YXRlLnNldEZpZWxkKCdsb2NhdGlvbicsIHN0YXRlLml0ZW0ubG9jYXRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtU3RhdGUuc2V0RmllbGQoJ25vdGVzJywgc3RhdGUuaXRlbS5ub3Rlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDRdO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgZmV0Y2goJy9hcGkvZXZlbnRzLycgKyBwcm9wcy5pZCldO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzID0gX2Iuc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCByZXMuanNvbigpXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEgPSBfYi5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1TdGF0ZS5zZXRGaWVsZCgnbmFtZScsIGRhdGEubmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1TdGF0ZS5zZXRGaWVsZCgnbG9jYXRpb24nLCBkYXRhLmxvY2F0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybVN0YXRlLnNldEZpZWxkKCdub3RlcycsIGRhdGEubm90ZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2IubGFiZWwgPSA0O1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDogcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTsgfSkoKTtcclxuICAgIH0sIFtwcm9wcy5pZF0pO1xyXG4gICAgaWYgKGxvYWRpbmcpIHtcclxuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChTcGlubmVyLCB7IGNsYXNzTmFtZTogXCJkLWJsb2NrIG14LWF1dG8gbXQtNVwiLCBhbmltYXRpb246IFwiYm9yZGVyXCIsIHZhcmlhbnQ6IFwiZGFya1wiIH0pO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm1MYXlvdXQsIG51bGwsXHJcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybS5Sb3csIG51bGwsXHJcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KENvbCwgeyBtZDogNiB9LFxyXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybS5Hcm91cCwgeyBjb250cm9sSWQ6IFwiZXZlbnQtbmFtZVwiIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybS5MYWJlbCwgbnVsbCwgXCJFdmVudCBOYW1lXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm0uQ29udHJvbCwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwic2hhZG93LXNtXCIgfSwgdGV4dCgnbmFtZScpKSkpKSxcclxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29sLCB7IG1kOiA2IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtLkdyb3VwLCB7IGNvbnRyb2xJZDogXCJldmVudC10aXRsZVwiIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybS5MYWJlbCwgbnVsbCwgXCJFdmVudCBMb2NhdGlvblwiKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtLkNvbnRyb2wsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcInNoYWRvdy1zbVwiIH0sIHRleHQoJ2xvY2F0aW9uJykpKSkpLFxyXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChDb2wsIHsgbWQ6IDEyIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtLkdyb3VwLCB7IGNvbnRyb2xJZDogXCJldmVudC1ub3Rlc1wiIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybS5MYWJlbCwgbnVsbCwgXCJOb3Rlc1wiKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtLkNvbnRyb2wsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcInNoYWRvdy1zbVwiLCByb3dzOiAxNSwgYXM6IFwidGV4dGFyZWFcIiB9LCB0ZXh0KCdub3RlcycpKSkpKSksXHJcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3VibWl0QnV0dG9uLCB7IHRleHQ6IHByb3BzLm1hdGNoLnBhcmFtcy5pZCA/ICdTYXZlJyA6ICdBZGQnLCBoYW5kbGVTdWJtaXQ6IGhhbmRsZVN1Ym1pdCB9KSxcclxuICAgICAgICAgICAgcHJvcHMubWF0Y2gucGFyYW1zLmlkID8gUmVhY3QuY3JlYXRlRWxlbWVudChEZWxldGVCdXR0b24sIHsgaGFuZGxlRGVsZXRlOiBoYW5kbGVEZWxldGUgfSkgOiBudWxsKSk7XHJcbiAgICB9XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IEV2ZW50cztcclxuIiwidmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxyXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfTtcclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59O1xyXG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufTtcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlTG9jYXRpb24gfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VGb3JtU3RhdGUgfSBmcm9tICdyZWFjdC11c2UtZm9ybS1zdGF0ZSc7XHJcbmltcG9ydCB7IFNwaW5uZXIsIENvbCwgRm9ybSB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcbmltcG9ydCBTdWJtaXRCdXR0b24gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9mb3Jtcy9TdWJtaXRCdXR0b24nO1xyXG5pbXBvcnQgRm9ybUxheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL2Zvcm1zL0Zvcm1MYXlvdXQnO1xyXG5pbXBvcnQgRGVsZXRlQnV0dG9uIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvZm9ybXMvRGVsZXRlQnV0dG9uJztcclxudmFyIFBlcnNvbmFsID0gZnVuY3Rpb24gKHByb3BzKSB7XHJcbiAgICB2YXIgX2EgPSB1c2VTdGF0ZShmYWxzZSksIGxvYWRpbmcgPSBfYVswXSwgc2V0TG9hZGluZyA9IF9hWzFdO1xyXG4gICAgdmFyIF9iID0gdXNlRm9ybVN0YXRlKCksIGZvcm1TdGF0ZSA9IF9iWzBdLCB0ZXh0ID0gX2JbMV0udGV4dDtcclxuICAgIHZhciBzdGF0ZSA9IHVzZUxvY2F0aW9uKCkuc3RhdGU7XHJcbiAgICB2YXIgaGFuZGxlU3VibWl0ID0gZnVuY3Rpb24gKGUpIHsgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHVyaSwgbWV0aG9kLCByZXMsIGNoYXJhY3RlcmlkO1xyXG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICB1cmkgPSBwcm9wcy5tYXRjaC5wYXJhbXMuaWQgPyBcIi9hcGkvcGVyc29uYWwvXCIgKyBwcm9wcy5tYXRjaC5wYXJhbXMuaWQgOiAnL2FwaS9wZXJzb25hbC8nO1xyXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZCA9IHByb3BzLm1hdGNoLnBhcmFtcy5pZCA/ICdQVVQnIDogJ1BPU1QnO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGZldGNoKHVyaSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBtZXRob2QsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGZvcm1TdGF0ZS52YWx1ZXMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICByZXMgPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgcmVzLmpzb24oKV07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgY2hhcmFjdGVyaWQgPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMuaGlzdG9yeS5wdXNoKFwiL3BlcnNvbmFsL2RldGFpbHMvXCIgKyBjaGFyYWN0ZXJpZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTsgfTtcclxuICAgIHZhciBoYW5kbGVEZWxldGUgPSBmdW5jdGlvbiAoZSkgeyByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgdXJpLCBtZXRob2QsIHJlcztcclxuICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJpID0gXCIvYXBpL3BlcnNvbmFsL1wiICsgcHJvcHMubWF0Y2gucGFyYW1zLmlkO1xyXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZCA9ICdERUxFVEUnO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGZldGNoKHVyaSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBtZXRob2QsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICByZXMgPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMuaGlzdG9yeS5wdXNoKCcvJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTsgfTtcclxuICAgIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgKGZ1bmN0aW9uICgpIHsgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciByZXMsIGRhdGE7XHJcbiAgICAgICAgICAgIHZhciBfYTtcclxuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYikge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYi5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFwcm9wcy5pZCkgcmV0dXJuIFszIC8qYnJlYWsqLywgNF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKChfYSA9IHN0YXRlKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuaXRlbSkpIHJldHVybiBbMyAvKmJyZWFrKi8sIDFdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtU3RhdGUuc2V0RmllbGQoJ3RpdGxlJywgc3RhdGUuaXRlbS50aXRsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1TdGF0ZS5zZXRGaWVsZCgnbm90ZXMnLCBzdGF0ZS5pdGVtLm5vdGVzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgNF07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBmZXRjaCgnL2FwaS9wZXJzb25hbC8nICsgcHJvcHMuaWQpXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcyA9IF9iLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgcmVzLmpzb24oKV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhID0gX2Iuc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtU3RhdGUuc2V0RmllbGQoJ3RpdGxlJywgZGF0YS50aXRsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1TdGF0ZS5zZXRGaWVsZCgnbm90ZXMnLCBkYXRhLm5vdGVzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9iLmxhYmVsID0gNDtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6IHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7IH0pKCk7XHJcbiAgICB9LCBbcHJvcHMuaWRdKTtcclxuICAgIGlmIChsb2FkaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3Bpbm5lciwgeyBjbGFzc05hbWU6IFwiZC1ibG9jayBteC1hdXRvIG10LTVcIiwgYW5pbWF0aW9uOiBcImJvcmRlclwiLCB2YXJpYW50OiBcImRhcmtcIiB9KTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtTGF5b3V0LCBudWxsLFxyXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm0uUm93LCBudWxsLFxyXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChDb2wsIHsgbWQ6IDEyIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtLkdyb3VwLCB7IGNvbnRyb2xJZDogXCJwZXJzb25hbC10aXRsZVwiIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybS5MYWJlbCwgbnVsbCwgXCJQZXJzb25hbCBOb3RlIFRpdGxlXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm0uQ29udHJvbCwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwic2hhZG93LXNtXCIgfSwgdGV4dCgndGl0bGUnKSkpKSksXHJcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KENvbCwgeyBtZDogMTIgfSxcclxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm0uR3JvdXAsIHsgY29udHJvbElkOiBcInBlcnNvbmFsLW5vdGVzXCIgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtLkxhYmVsLCBudWxsLCBcIk5vdGVzXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm0uQ29udHJvbCwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwic2hhZG93LXNtXCIsIHJvd3M6IDE1LCBhczogXCJ0ZXh0YXJlYVwiIH0sIHRleHQoJ25vdGVzJykpKSkpKSxcclxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChTdWJtaXRCdXR0b24sIHsgdGV4dDogcHJvcHMubWF0Y2gucGFyYW1zLmlkID8gJ1NhdmUnIDogJ0FkZCcsIGhhbmRsZVN1Ym1pdDogaGFuZGxlU3VibWl0IH0pLFxyXG4gICAgICAgICAgICBwcm9wcy5tYXRjaC5wYXJhbXMuaWQgPyBSZWFjdC5jcmVhdGVFbGVtZW50KERlbGV0ZUJ1dHRvbiwgeyBoYW5kbGVEZWxldGU6IGhhbmRsZURlbGV0ZSB9KSA6IG51bGwpKTtcclxuICAgIH1cclxufTtcclxuZXhwb3J0IGRlZmF1bHQgUGVyc29uYWw7XHJcbiIsInZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcclxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH07XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufTtcclxudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn07XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZUxvY2F0aW9uIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlRm9ybVN0YXRlIH0gZnJvbSAncmVhY3QtdXNlLWZvcm0tc3RhdGUnO1xyXG5pbXBvcnQgeyBTcGlubmVyLCBDb2wsIEZvcm0gfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5pbXBvcnQgU3VibWl0QnV0dG9uIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvZm9ybXMvU3VibWl0QnV0dG9uJztcclxuaW1wb3J0IEZvcm1MYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9mb3Jtcy9Gb3JtTGF5b3V0JztcclxuaW1wb3J0IERlbGV0ZUJ1dHRvbiBmcm9tICcuLi8uLi9jb21wb25lbnRzL2Zvcm1zL0RlbGV0ZUJ1dHRvbic7XHJcbnZhciBQbGFjZXMgPSBmdW5jdGlvbiAocHJvcHMpIHtcclxuICAgIHZhciBfYSA9IHVzZVN0YXRlKGZhbHNlKSwgbG9hZGluZyA9IF9hWzBdLCBzZXRMb2FkaW5nID0gX2FbMV07XHJcbiAgICB2YXIgX2IgPSB1c2VGb3JtU3RhdGUoKSwgZm9ybVN0YXRlID0gX2JbMF0sIHRleHQgPSBfYlsxXS50ZXh0O1xyXG4gICAgdmFyIHN0YXRlID0gdXNlTG9jYXRpb24oKS5zdGF0ZTtcclxuICAgIHZhciBoYW5kbGVTdWJtaXQgPSBmdW5jdGlvbiAoZSkgeyByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgdXJpLCBtZXRob2QsIHJlcywgY2hhcmFjdGVyaWQ7XHJcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHVyaSA9IHByb3BzLm1hdGNoLnBhcmFtcy5pZCA/IFwiL2FwaS9wbGFjZXMvXCIgKyBwcm9wcy5tYXRjaC5wYXJhbXMuaWQgOiAnL2FwaS9wbGFjZXMvJztcclxuICAgICAgICAgICAgICAgICAgICBtZXRob2QgPSBwcm9wcy5tYXRjaC5wYXJhbXMuaWQgPyAnUFVUJyA6ICdQT1NUJztcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBmZXRjaCh1cmksIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogbWV0aG9kLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShmb3JtU3RhdGUudmFsdWVzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KV07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzID0gX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHJlcy5qc29uKCldO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgIGNoYXJhY3RlcmlkID0gX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHByb3BzLmhpc3RvcnkucHVzaChcIi9wbGFjZXMvZGV0YWlscy9cIiArIGNoYXJhY3RlcmlkKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pOyB9O1xyXG4gICAgdmFyIGhhbmRsZURlbGV0ZSA9IGZ1bmN0aW9uIChlKSB7IHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciB1cmksIG1ldGhvZCwgcmVzO1xyXG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICB1cmkgPSBcIi9hcGkvcGxhY2VzL1wiICsgcHJvcHMubWF0Y2gucGFyYW1zLmlkO1xyXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZCA9ICdERUxFVEUnO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGZldGNoKHVyaSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBtZXRob2QsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICByZXMgPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMuaGlzdG9yeS5wdXNoKCcvJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTsgfTtcclxuICAgIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgKGZ1bmN0aW9uICgpIHsgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciByZXMsIGRhdGE7XHJcbiAgICAgICAgICAgIHZhciBfYTtcclxuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYikge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYi5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFwcm9wcy5pZCkgcmV0dXJuIFszIC8qYnJlYWsqLywgNF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKChfYSA9IHN0YXRlKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuaXRlbSkpIHJldHVybiBbMyAvKmJyZWFrKi8sIDFdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtU3RhdGUuc2V0RmllbGQoJ25hbWUnLCBzdGF0ZS5pdGVtLm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtU3RhdGUuc2V0RmllbGQoJ2xvY2F0aW9uJywgc3RhdGUuaXRlbS5sb2NhdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1TdGF0ZS5zZXRGaWVsZCgnbm90ZXMnLCBzdGF0ZS5pdGVtLm5vdGVzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgNF07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBmZXRjaCgnL2FwaS9ldmVudHMvJyArIHByb3BzLmlkKV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXMgPSBfYi5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHJlcy5qc29uKCldO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YSA9IF9iLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybVN0YXRlLnNldEZpZWxkKCduYW1lJywgZGF0YS5uYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybVN0YXRlLnNldEZpZWxkKCdsb2NhdGlvbicsIGRhdGEubG9jYXRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtU3RhdGUuc2V0RmllbGQoJ25vdGVzJywgZGF0YS5ub3Rlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfYi5sYWJlbCA9IDQ7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OiByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pOyB9KSgpO1xyXG4gICAgfSwgW3Byb3BzLmlkXSk7XHJcbiAgICBpZiAobG9hZGluZykge1xyXG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFNwaW5uZXIsIHsgY2xhc3NOYW1lOiBcImQtYmxvY2sgbXgtYXV0byBtdC01XCIsIGFuaW1hdGlvbjogXCJib3JkZXJcIiwgdmFyaWFudDogXCJkYXJrXCIgfSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybUxheW91dCwgbnVsbCxcclxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtLlJvdywgbnVsbCxcclxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29sLCB7IG1kOiA2IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtLkdyb3VwLCB7IGNvbnRyb2xJZDogXCJwbGFjZXMtbmFtZVwiIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybS5MYWJlbCwgbnVsbCwgXCJQbGFjZSBOYW1lXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm0uQ29udHJvbCwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwic2hhZG93LXNtXCIgfSwgdGV4dCgnbmFtZScpKSkpKSxcclxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29sLCB7IG1kOiA2IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtLkdyb3VwLCB7IGNvbnRyb2xJZDogXCJwbGFjZXMtbG9jYXRpb25zXCIgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtLkxhYmVsLCBudWxsLCBcIlBsYWNlIExvY2F0aW9uXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm0uQ29udHJvbCwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwic2hhZG93LXNtXCIgfSwgdGV4dCgnbG9jYXRpb24nKSkpKSksXHJcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KENvbCwgeyBtZDogMTIgfSxcclxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm0uR3JvdXAsIHsgY29udHJvbElkOiBcInBsYWNlcy1ub3Rlc1wiIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybS5MYWJlbCwgbnVsbCwgXCJOb3Rlc1wiKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtLkNvbnRyb2wsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcInNoYWRvdy1zbVwiLCByb3dzOiAxNSwgYXM6IFwidGV4dGFyZWFcIiB9LCB0ZXh0KCdub3RlcycpKSkpKSksXHJcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3VibWl0QnV0dG9uLCB7IHRleHQ6IHByb3BzLm1hdGNoLnBhcmFtcy5pZCA/ICdTYXZlJyA6ICdBZGQnLCBoYW5kbGVTdWJtaXQ6IGhhbmRsZVN1Ym1pdCB9KSxcclxuICAgICAgICAgICAgcHJvcHMubWF0Y2gucGFyYW1zLmlkID8gUmVhY3QuY3JlYXRlRWxlbWVudChEZWxldGVCdXR0b24sIHsgaGFuZGxlRGVsZXRlOiBoYW5kbGVEZWxldGUgfSkgOiBudWxsKSk7XHJcbiAgICB9XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IFBsYWNlcztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==