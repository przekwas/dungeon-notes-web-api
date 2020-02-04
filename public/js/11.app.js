(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./src/client/components/lists/HomeList.tsx":
/*!**************************************************!*\
  !*** ./src/client/components/lists/HomeList.tsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
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





var HomeList = function (_a) {
    var type = _a.type;
    var _b = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]), data = _b[0], setData = _b[1];
    var _c = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0), offset = _c[0], setOffset = _c[1];
    var _d = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false), noMore = _d[0], setNoMore = _d[1];
    var _e = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true), loading = _e[0], setLoading = _e[1];
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        (function () { return __awaiter(void 0, void 0, void 0, function () {
            var uri, res, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = offset ? "/api/" + type + "?offset=" + offset : "/api/" + type;
                        return [4 /*yield*/, fetch(uri)];
                    case 1:
                        res = _a.sent();
                        return [4 /*yield*/, res.json()];
                    case 2:
                        data = _a.sent();
                        if (data.length === 0) {
                            setData([]);
                            setNoMore(true);
                            setLoading(false);
                        }
                        else {
                            setData(data);
                            setNoMore(false);
                            setLoading(false);
                        }
                        return [2 /*return*/];
                }
            });
        }); })();
    }, [offset]);
    var handleOffset = function (action) {
        switch (action) {
            case 'increase':
                setOffset(offset + 5);
                break;
            case 'decrease':
                var newVal = offset - 5;
                if (newVal <= 0) {
                    setOffset(0);
                }
                else {
                    setOffset(offset - 5);
                }
                break;
            default:
                break;
        }
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], { className: "my-2", md: 6 },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "d-flex align-items-center justify-content-around" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaArrowLeft"], { size: "1.5rem", onClick: function () { return handleOffset('decrease'); } }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], { to: "/" + type + "/full" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h3", { className: "text-center fancy-font" }, type[0].toUpperCase() + type.slice(1))),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaArrowRight"], { size: "1.5rem", onClick: function () { return handleOffset('increase'); } })),
        noMore ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h3", { className: "text-center" }, "End of Table") : null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ListGroup"], { className: "shadow-sm" },
            loading ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Spinner"], { className: "d-block mx-auto mt-5", animation: "border", variant: "dark" }) : null,
            data.map(function (item) {
                var _a, _b;
                return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ListGroup"].Item, { className: "d-flex justify-content-between align-items-center", action: true, key: type + "-" + item.id },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null,
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("b", null,
                            item.id,
                            ":"),
                        ' ',
                        type === 'personal' ? (_a = item.title) === null || _a === void 0 ? void 0 : _a.substring(0, 10) : (_b = item.name) === null || _b === void 0 ? void 0 : _b.substring(0, 10)),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null,
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], { as: "span", variant: "link" },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], { to: { pathname: "/" + type + "/edit/" + item.id, state: { item: item } } }, "Edit")),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], { as: "span", variant: "link" },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], { to: { pathname: "/" + type + "/details/" + item.id, state: { item: item } } }, "View")))));
            }))));
};
/* harmony default export */ __webpack_exports__["default"] = (HomeList);


/***/ }),

/***/ "./src/client/pages/Home.tsx":
/*!***********************************!*\
  !*** ./src/client/pages/Home.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _components_lists_HomeList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/lists/HomeList */ "./src/client/components/lists/HomeList.tsx");



var Home = function (props) {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], { fluid: true },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], { className: "justify-content-center my-2" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_lists_HomeList__WEBPACK_IMPORTED_MODULE_2__["default"], { type: "characters" }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_lists_HomeList__WEBPACK_IMPORTED_MODULE_2__["default"], { type: "places" }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_lists_HomeList__WEBPACK_IMPORTED_MODULE_2__["default"], { type: "events" }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_lists_HomeList__WEBPACK_IMPORTED_MODULE_2__["default"], { type: "personal" }))));
};
/* harmony default export */ __webpack_exports__["default"] = (Home);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvbGlzdHMvSG9tZUxpc3QudHN4Iiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvcGFnZXMvSG9tZS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFpQixTQUFJLElBQUksU0FBSTtBQUM3QiwyQkFBMkIsK0RBQStELGdCQUFnQixFQUFFLEVBQUU7QUFDOUc7QUFDQSxtQ0FBbUMsTUFBTSw2QkFBNkIsRUFBRSxZQUFZLFdBQVcsRUFBRTtBQUNqRyxrQ0FBa0MsTUFBTSxpQ0FBaUMsRUFBRSxZQUFZLFdBQVcsRUFBRTtBQUNwRywrQkFBK0IscUZBQXFGO0FBQ3BIO0FBQ0EsS0FBSztBQUNMO0FBQ0EsbUJBQW1CLFNBQUksSUFBSSxTQUFJO0FBQy9CLGFBQWEsNkJBQTZCLDBCQUEwQixhQUFhLEVBQUUscUJBQXFCO0FBQ3hHLGdCQUFnQixxREFBcUQsb0VBQW9FLGFBQWEsRUFBRTtBQUN4SixzQkFBc0Isc0JBQXNCLHFCQUFxQixHQUFHO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QyxrQ0FBa0MsU0FBUztBQUMzQyxrQ0FBa0MsV0FBVyxVQUFVO0FBQ3ZELHlDQUF5QyxjQUFjO0FBQ3ZEO0FBQ0EsNkdBQTZHLE9BQU8sVUFBVTtBQUM5SCxnRkFBZ0YsaUJBQWlCLE9BQU87QUFDeEcsd0RBQXdELGdCQUFnQixRQUFRLE9BQU87QUFDdkYsOENBQThDLGdCQUFnQixnQkFBZ0IsT0FBTztBQUNyRjtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0EsU0FBUyxZQUFZLGFBQWEsT0FBTyxFQUFFLFVBQVUsV0FBVztBQUNoRSxtQ0FBbUMsU0FBUztBQUM1QztBQUNBO0FBQytCO0FBQ2E7QUFDSjtBQUMwQjtBQUNQO0FBQzNEO0FBQ0E7QUFDQSxhQUFhLHNEQUFRO0FBQ3JCLGFBQWEsc0RBQVE7QUFDckIsYUFBYSxzREFBUTtBQUNyQixhQUFhLHNEQUFRO0FBQ3JCLElBQUksdURBQVM7QUFDYixzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTLEVBQUUsRUFBRTtBQUNiLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLG1EQUFtQixDQUFDLG1EQUFHLEdBQUcsMkJBQTJCO0FBQ2pFLFFBQVEsbURBQW1CLFNBQVMsZ0VBQWdFO0FBQ3BHLFlBQVksbURBQW1CLENBQUMsMERBQVcsR0FBRyx1Q0FBdUMsaUNBQWlDLEVBQUUsRUFBRTtBQUMxSCxZQUFZLG1EQUFtQixDQUFDLHFEQUFJLEdBQUcsMkJBQTJCO0FBQ2xFLGdCQUFnQixtREFBbUIsUUFBUSxzQ0FBc0M7QUFDakYsWUFBWSxtREFBbUIsQ0FBQywyREFBWSxHQUFHLHVDQUF1QyxpQ0FBaUMsRUFBRSxFQUFFO0FBQzNILGlCQUFpQixtREFBbUIsUUFBUSwyQkFBMkI7QUFDdkUsUUFBUSxtREFBbUIsQ0FBQyx5REFBUyxHQUFHLHlCQUF5QjtBQUNqRSxzQkFBc0IsbURBQW1CLENBQUMsdURBQU8sR0FBRywwRUFBMEU7QUFDOUg7QUFDQTtBQUNBLHdCQUF3QixtREFBbUIsQ0FBQyx5REFBUyxRQUFRLDBHQUEwRztBQUN2SyxvQkFBb0IsbURBQW1CO0FBQ3ZDLHdCQUF3QixtREFBbUI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsbURBQW1CO0FBQ3ZDLHdCQUF3QixtREFBbUIsQ0FBQyxzREFBTSxHQUFHLDhCQUE4QjtBQUNuRiw0QkFBNEIsbURBQW1CLENBQUMscURBQUksR0FBRyxNQUFNLG9EQUFvRCxhQUFhLEVBQUUsRUFBRTtBQUNsSSx3QkFBd0IsbURBQW1CLENBQUMsc0RBQU0sR0FBRyw4QkFBOEI7QUFDbkYsNEJBQTRCLG1EQUFtQixDQUFDLHFEQUFJLEdBQUcsTUFBTSx1REFBdUQsYUFBYSxFQUFFLEVBQUU7QUFDckksYUFBYTtBQUNiO0FBQ2UsdUVBQVEsRUFBQzs7Ozs7Ozs7Ozs7OztBQ3RIeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUErQjtBQUNrQjtBQUNHO0FBQ3BEO0FBQ0EsWUFBWSxtREFBbUIsQ0FBQyx5REFBUyxHQUFHLGNBQWM7QUFDMUQsUUFBUSxtREFBbUIsQ0FBQyxtREFBRyxHQUFHLDJDQUEyQztBQUM3RSxZQUFZLG1EQUFtQixDQUFDLGtFQUFRLEdBQUcscUJBQXFCO0FBQ2hFLFlBQVksbURBQW1CLENBQUMsa0VBQVEsR0FBRyxpQkFBaUI7QUFDNUQsWUFBWSxtREFBbUIsQ0FBQyxrRUFBUSxHQUFHLGlCQUFpQjtBQUM1RCxZQUFZLG1EQUFtQixDQUFDLGtFQUFRLEdBQUcsbUJBQW1CO0FBQzlEO0FBQ2UsbUVBQUksRUFBQyIsImZpbGUiOiIxMS5hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufTtcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCB7IENvbCwgTGlzdEdyb3VwLCBCdXR0b24sIFNwaW5uZXIgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5pbXBvcnQgeyBGYUFycm93TGVmdCwgRmFBcnJvd1JpZ2h0IH0gZnJvbSAncmVhY3QtaWNvbnMvZmEnO1xyXG52YXIgSG9tZUxpc3QgPSBmdW5jdGlvbiAoX2EpIHtcclxuICAgIHZhciB0eXBlID0gX2EudHlwZTtcclxuICAgIHZhciBfYiA9IHVzZVN0YXRlKFtdKSwgZGF0YSA9IF9iWzBdLCBzZXREYXRhID0gX2JbMV07XHJcbiAgICB2YXIgX2MgPSB1c2VTdGF0ZSgwKSwgb2Zmc2V0ID0gX2NbMF0sIHNldE9mZnNldCA9IF9jWzFdO1xyXG4gICAgdmFyIF9kID0gdXNlU3RhdGUoZmFsc2UpLCBub01vcmUgPSBfZFswXSwgc2V0Tm9Nb3JlID0gX2RbMV07XHJcbiAgICB2YXIgX2UgPSB1c2VTdGF0ZSh0cnVlKSwgbG9hZGluZyA9IF9lWzBdLCBzZXRMb2FkaW5nID0gX2VbMV07XHJcbiAgICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIChmdW5jdGlvbiAoKSB7IHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgdXJpLCByZXMsIGRhdGE7XHJcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVyaSA9IG9mZnNldCA/IFwiL2FwaS9cIiArIHR5cGUgKyBcIj9vZmZzZXQ9XCIgKyBvZmZzZXQgOiBcIi9hcGkvXCIgKyB0eXBlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBmZXRjaCh1cmkpXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcyA9IF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgcmVzLmpzb24oKV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhID0gX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldERhdGEoW10pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Tm9Nb3JlKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXREYXRhKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Tm9Nb3JlKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7IH0pKCk7XHJcbiAgICB9LCBbb2Zmc2V0XSk7XHJcbiAgICB2YXIgaGFuZGxlT2Zmc2V0ID0gZnVuY3Rpb24gKGFjdGlvbikge1xyXG4gICAgICAgIHN3aXRjaCAoYWN0aW9uKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ2luY3JlYXNlJzpcclxuICAgICAgICAgICAgICAgIHNldE9mZnNldChvZmZzZXQgKyA1KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdkZWNyZWFzZSc6XHJcbiAgICAgICAgICAgICAgICB2YXIgbmV3VmFsID0gb2Zmc2V0IC0gNTtcclxuICAgICAgICAgICAgICAgIGlmIChuZXdWYWwgPD0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldE9mZnNldCgwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldE9mZnNldChvZmZzZXQgLSA1KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChDb2wsIHsgY2xhc3NOYW1lOiBcIm15LTJcIiwgbWQ6IDYgfSxcclxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWFyb3VuZFwiIH0sXHJcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRmFBcnJvd0xlZnQsIHsgc2l6ZTogXCIxLjVyZW1cIiwgb25DbGljazogZnVuY3Rpb24gKCkgeyByZXR1cm4gaGFuZGxlT2Zmc2V0KCdkZWNyZWFzZScpOyB9IH0pLFxyXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KExpbmssIHsgdG86IFwiL1wiICsgdHlwZSArIFwiL2Z1bGxcIiB9LFxyXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImgzXCIsIHsgY2xhc3NOYW1lOiBcInRleHQtY2VudGVyIGZhbmN5LWZvbnRcIiB9LCB0eXBlWzBdLnRvVXBwZXJDYXNlKCkgKyB0eXBlLnNsaWNlKDEpKSksXHJcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRmFBcnJvd1JpZ2h0LCB7IHNpemU6IFwiMS41cmVtXCIsIG9uQ2xpY2s6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGhhbmRsZU9mZnNldCgnaW5jcmVhc2UnKTsgfSB9KSksXHJcbiAgICAgICAgbm9Nb3JlID8gUmVhY3QuY3JlYXRlRWxlbWVudChcImgzXCIsIHsgY2xhc3NOYW1lOiBcInRleHQtY2VudGVyXCIgfSwgXCJFbmQgb2YgVGFibGVcIikgOiBudWxsLFxyXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGlzdEdyb3VwLCB7IGNsYXNzTmFtZTogXCJzaGFkb3ctc21cIiB9LFxyXG4gICAgICAgICAgICBsb2FkaW5nID8gUmVhY3QuY3JlYXRlRWxlbWVudChTcGlubmVyLCB7IGNsYXNzTmFtZTogXCJkLWJsb2NrIG14LWF1dG8gbXQtNVwiLCBhbmltYXRpb246IFwiYm9yZGVyXCIsIHZhcmlhbnQ6IFwiZGFya1wiIH0pIDogbnVsbCxcclxuICAgICAgICAgICAgZGF0YS5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgIHZhciBfYSwgX2I7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGlzdEdyb3VwLkl0ZW0sIHsgY2xhc3NOYW1lOiBcImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBhbGlnbi1pdGVtcy1jZW50ZXJcIiwgYWN0aW9uOiB0cnVlLCBrZXk6IHR5cGUgKyBcIi1cIiArIGl0ZW0uaWQgfSxcclxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJiXCIsIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCI6XCIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnICcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGUgPT09ICdwZXJzb25hbCcgPyAoX2EgPSBpdGVtLnRpdGxlKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Euc3Vic3RyaW5nKDAsIDEwKSA6IChfYiA9IGl0ZW0ubmFtZSkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLnN1YnN0cmluZygwLCAxMCkpLFxyXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCdXR0b24sIHsgYXM6IFwic3BhblwiLCB2YXJpYW50OiBcImxpbmtcIiB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChMaW5rLCB7IHRvOiB7IHBhdGhuYW1lOiBcIi9cIiArIHR5cGUgKyBcIi9lZGl0L1wiICsgaXRlbS5pZCwgc3RhdGU6IHsgaXRlbTogaXRlbSB9IH0gfSwgXCJFZGl0XCIpKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCdXR0b24sIHsgYXM6IFwic3BhblwiLCB2YXJpYW50OiBcImxpbmtcIiB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChMaW5rLCB7IHRvOiB7IHBhdGhuYW1lOiBcIi9cIiArIHR5cGUgKyBcIi9kZXRhaWxzL1wiICsgaXRlbS5pZCwgc3RhdGU6IHsgaXRlbTogaXRlbSB9IH0gfSwgXCJWaWV3XCIpKSkpKTtcclxuICAgICAgICAgICAgfSkpKSk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVMaXN0O1xyXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IENvbnRhaW5lciwgUm93IH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcclxuaW1wb3J0IEhvbWVMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvbGlzdHMvSG9tZUxpc3QnO1xyXG52YXIgSG9tZSA9IGZ1bmN0aW9uIChwcm9wcykge1xyXG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KENvbnRhaW5lciwgeyBmbHVpZDogdHJ1ZSB9LFxyXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUm93LCB7IGNsYXNzTmFtZTogXCJqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIG15LTJcIiB9LFxyXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEhvbWVMaXN0LCB7IHR5cGU6IFwiY2hhcmFjdGVyc1wiIH0pLFxyXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEhvbWVMaXN0LCB7IHR5cGU6IFwicGxhY2VzXCIgfSksXHJcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSG9tZUxpc3QsIHsgdHlwZTogXCJldmVudHNcIiB9KSxcclxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChIb21lTGlzdCwgeyB0eXBlOiBcInBlcnNvbmFsXCIgfSkpKSk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=