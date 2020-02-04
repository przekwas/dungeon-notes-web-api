(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./src/client/components/lists/FullList.tsx":
/*!**************************************************!*\
  !*** ./src/client/components/lists/FullList.tsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
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




var FullList = function (_a) {
    var type = _a.type;
    var _b = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]), data = _b[0], setData = _b[1];
    var _c = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true), loading = _c[0], setLoading = _c[1];
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        (function () { return __awaiter(void 0, void 0, void 0, function () {
            var res, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch("/api/" + type + "/all")];
                    case 1:
                        res = _a.sent();
                        return [4 /*yield*/, res.json()];
                    case 2:
                        data = _a.sent();
                        setData(data);
                        setLoading(false);
                        return [2 /*return*/];
                }
            });
        }); })();
    }, []);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], { className: "my-2", md: 12 },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "d-flex align-items-center justify-content-around" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h1", { className: "text-center fancy-font" }, type[0].toUpperCase() + type.slice(1))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ListGroup"], { className: "shadow-sm" },
            loading ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Spinner"], { className: "d-block mx-auto mt-5", animation: "border", variant: "dark" }) : null,
            data.map(function (item) { return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ListGroup"].Item, { className: "d-flex justify-content-between align-items-center", action: true, key: type + "-" + item.id },
                type === 'personal' ? item.title : item.name,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null,
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], { as: "span", variant: "link" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], { to: { pathname: "/" + type + "/edit/" + item.id, state: { item: item } } }, "Edit")),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], { as: "span", variant: "link" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], { to: { pathname: "/" + type + "/details/" + item.id, state: { item: item } } }, "View"))))); }))));
};
/* harmony default export */ __webpack_exports__["default"] = (FullList);


/***/ }),

/***/ "./src/client/pages/Full.tsx":
/*!***********************************!*\
  !*** ./src/client/pages/Full.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _components_lists_FullList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/lists/FullList */ "./src/client/components/lists/FullList.tsx");



var Full = function (props) {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], { fluid: true },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], { className: "justify-content-center my-2" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_lists_FullList__WEBPACK_IMPORTED_MODULE_2__["default"], { type: props.match.params.type }))));
};
/* harmony default export */ __webpack_exports__["default"] = (Full);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvbGlzdHMvRnVsbExpc3QudHN4Iiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvcGFnZXMvRnVsbC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBaUIsU0FBSSxJQUFJLFNBQUk7QUFDN0IsMkJBQTJCLCtEQUErRCxnQkFBZ0IsRUFBRSxFQUFFO0FBQzlHO0FBQ0EsbUNBQW1DLE1BQU0sNkJBQTZCLEVBQUUsWUFBWSxXQUFXLEVBQUU7QUFDakcsa0NBQWtDLE1BQU0saUNBQWlDLEVBQUUsWUFBWSxXQUFXLEVBQUU7QUFDcEcsK0JBQStCLHFGQUFxRjtBQUNwSDtBQUNBLEtBQUs7QUFDTDtBQUNBLG1CQUFtQixTQUFJLElBQUksU0FBSTtBQUMvQixhQUFhLDZCQUE2QiwwQkFBMEIsYUFBYSxFQUFFLHFCQUFxQjtBQUN4RyxnQkFBZ0IscURBQXFELG9FQUFvRSxhQUFhLEVBQUU7QUFDeEosc0JBQXNCLHNCQUFzQixxQkFBcUIsR0FBRztBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkMsa0NBQWtDLFNBQVM7QUFDM0Msa0NBQWtDLFdBQVcsVUFBVTtBQUN2RCx5Q0FBeUMsY0FBYztBQUN2RDtBQUNBLDZHQUE2RyxPQUFPLFVBQVU7QUFDOUgsZ0ZBQWdGLGlCQUFpQixPQUFPO0FBQ3hHLHdEQUF3RCxnQkFBZ0IsUUFBUSxPQUFPO0FBQ3ZGLDhDQUE4QyxnQkFBZ0IsZ0JBQWdCLE9BQU87QUFDckY7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBLFNBQVMsWUFBWSxhQUFhLE9BQU8sRUFBRSxVQUFVLFdBQVc7QUFDaEUsbUNBQW1DLFNBQVM7QUFDNUM7QUFDQTtBQUMrQjtBQUNhO0FBQ0o7QUFDMEI7QUFDbEU7QUFDQTtBQUNBLGFBQWEsc0RBQVE7QUFDckIsYUFBYSxzREFBUTtBQUNyQixJQUFJLHVEQUFTO0FBQ2Isc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVMsRUFBRSxFQUFFO0FBQ2IsS0FBSztBQUNMLFlBQVksbURBQW1CLENBQUMsbURBQUcsR0FBRyw0QkFBNEI7QUFDbEUsUUFBUSxtREFBbUIsU0FBUyxnRUFBZ0U7QUFDcEcsWUFBWSxtREFBbUIsUUFBUSxzQ0FBc0M7QUFDN0UsUUFBUSxtREFBbUIsQ0FBQyx5REFBUyxHQUFHLHlCQUF5QjtBQUNqRSxzQkFBc0IsbURBQW1CLENBQUMsdURBQU8sR0FBRywwRUFBMEU7QUFDOUgsc0NBQXNDLFNBQVMsbURBQW1CLENBQUMseURBQVMsUUFBUSwwR0FBMEc7QUFDOUw7QUFDQSxnQkFBZ0IsbURBQW1CO0FBQ25DLG9CQUFvQixtREFBbUIsQ0FBQyxzREFBTSxHQUFHLDhCQUE4QjtBQUMvRSx3QkFBd0IsbURBQW1CLENBQUMscURBQUksR0FBRyxNQUFNLG9EQUFvRCxhQUFhLEVBQUUsRUFBRTtBQUM5SCxvQkFBb0IsbURBQW1CLENBQUMsc0RBQU0sR0FBRyw4QkFBOEI7QUFDL0Usd0JBQXdCLG1EQUFtQixDQUFDLHFEQUFJLEdBQUcsTUFBTSx1REFBdUQsYUFBYSxFQUFFLEVBQUUsY0FBYyxFQUFFO0FBQ2pKO0FBQ2UsdUVBQVEsRUFBQzs7Ozs7Ozs7Ozs7OztBQzNFeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUErQjtBQUNrQjtBQUNHO0FBQ3BEO0FBQ0EsWUFBWSxtREFBbUIsQ0FBQyx5REFBUyxHQUFHLGNBQWM7QUFDMUQsUUFBUSxtREFBbUIsQ0FBQyxtREFBRyxHQUFHLDJDQUEyQztBQUM3RSxZQUFZLG1EQUFtQixDQUFDLGtFQUFRLEdBQUcsZ0NBQWdDO0FBQzNFO0FBQ2UsbUVBQUksRUFBQyIsImZpbGUiOiIxMC5hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufTtcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCB7IENvbCwgTGlzdEdyb3VwLCBCdXR0b24sIFNwaW5uZXIgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG52YXIgRnVsbExpc3QgPSBmdW5jdGlvbiAoX2EpIHtcclxuICAgIHZhciB0eXBlID0gX2EudHlwZTtcclxuICAgIHZhciBfYiA9IHVzZVN0YXRlKFtdKSwgZGF0YSA9IF9iWzBdLCBzZXREYXRhID0gX2JbMV07XHJcbiAgICB2YXIgX2MgPSB1c2VTdGF0ZSh0cnVlKSwgbG9hZGluZyA9IF9jWzBdLCBzZXRMb2FkaW5nID0gX2NbMV07XHJcbiAgICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIChmdW5jdGlvbiAoKSB7IHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgcmVzLCBkYXRhO1xyXG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQgLyp5aWVsZCovLCBmZXRjaChcIi9hcGkvXCIgKyB0eXBlICsgXCIvYWxsXCIpXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcyA9IF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgcmVzLmpzb24oKV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhID0gX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXREYXRhKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTsgfSkoKTtcclxuICAgIH0sIFtdKTtcclxuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChDb2wsIHsgY2xhc3NOYW1lOiBcIm15LTJcIiwgbWQ6IDEyIH0sXHJcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1hcm91bmRcIiB9LFxyXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaDFcIiwgeyBjbGFzc05hbWU6IFwidGV4dC1jZW50ZXIgZmFuY3ktZm9udFwiIH0sIHR5cGVbMF0udG9VcHBlckNhc2UoKSArIHR5cGUuc2xpY2UoMSkpKSxcclxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KExpc3RHcm91cCwgeyBjbGFzc05hbWU6IFwic2hhZG93LXNtXCIgfSxcclxuICAgICAgICAgICAgbG9hZGluZyA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3Bpbm5lciwgeyBjbGFzc05hbWU6IFwiZC1ibG9jayBteC1hdXRvIG10LTVcIiwgYW5pbWF0aW9uOiBcImJvcmRlclwiLCB2YXJpYW50OiBcImRhcmtcIiB9KSA6IG51bGwsXHJcbiAgICAgICAgICAgIGRhdGEubWFwKGZ1bmN0aW9uIChpdGVtKSB7IHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChMaXN0R3JvdXAuSXRlbSwgeyBjbGFzc05hbWU6IFwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGFsaWduLWl0ZW1zLWNlbnRlclwiLCBhY3Rpb246IHRydWUsIGtleTogdHlwZSArIFwiLVwiICsgaXRlbS5pZCB9LFxyXG4gICAgICAgICAgICAgICAgdHlwZSA9PT0gJ3BlcnNvbmFsJyA/IGl0ZW0udGl0bGUgOiBpdGVtLm5hbWUsXHJcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCdXR0b24sIHsgYXM6IFwic3BhblwiLCB2YXJpYW50OiBcImxpbmtcIiB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KExpbmssIHsgdG86IHsgcGF0aG5hbWU6IFwiL1wiICsgdHlwZSArIFwiL2VkaXQvXCIgKyBpdGVtLmlkLCBzdGF0ZTogeyBpdGVtOiBpdGVtIH0gfSB9LCBcIkVkaXRcIikpLFxyXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQnV0dG9uLCB7IGFzOiBcInNwYW5cIiwgdmFyaWFudDogXCJsaW5rXCIgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChMaW5rLCB7IHRvOiB7IHBhdGhuYW1lOiBcIi9cIiArIHR5cGUgKyBcIi9kZXRhaWxzL1wiICsgaXRlbS5pZCwgc3RhdGU6IHsgaXRlbTogaXRlbSB9IH0gfSwgXCJWaWV3XCIpKSkpKTsgfSkpKSk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IEZ1bGxMaXN0O1xyXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IENvbnRhaW5lciwgUm93IH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcclxuaW1wb3J0IEZ1bGxMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvbGlzdHMvRnVsbExpc3QnO1xyXG52YXIgRnVsbCA9IGZ1bmN0aW9uIChwcm9wcykge1xyXG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KENvbnRhaW5lciwgeyBmbHVpZDogdHJ1ZSB9LFxyXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUm93LCB7IGNsYXNzTmFtZTogXCJqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIG15LTJcIiB9LFxyXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZ1bGxMaXN0LCB7IHR5cGU6IHByb3BzLm1hdGNoLnBhcmFtcy50eXBlIH0pKSkpO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBGdWxsO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9