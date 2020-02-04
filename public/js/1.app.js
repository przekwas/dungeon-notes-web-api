(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/react-use-form-state/dist/index.es.js":
/*!************************************************************!*\
  !*** ./node_modules/react-use-form-state/dist/index.es.js ***!
  \************************************************************/
/*! exports provided: useFormState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useFormState", function() { return useFormState; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

function _toPropertyKey(key) {
  if (typeof key === "symbol") {
    return key;
  } else {
    return String(key);
  }
}

/**
 * Returns a function that can be called with an object. The return value of the
 * new function is a copy of the object excluding the key passed initially.
 */
function omit(key) {
  return function (object) {
    var toRemove = object[key],
        rest = _objectWithoutProperties(object, [key].map(_toPropertyKey));

    return rest;
  };
}
/**
 * An empty function. It does nothing.
 */

function noop() {}
/**
 * Like `noop`, but passes through the first argument.
 */

function identity(val) {
  return val;
}
/**
 * Cast non-string values to a string, with the exception of functions, symbols,
 * and undefined.
 */

function toString(value) {
  switch (_typeof(value)) {
    case 'function':
    case 'symbol':
    case 'undefined':
      return '';

    default:
      return '' + value;
    // eslint-disable-line prefer-template
  }
}
function isFunction(value) {
  return typeof value === 'function';
}

var objectToString = function objectToString(value) {
  return Object.prototype.toString.call(value);
};
/**
 * Determines if a value is an empty collection (object, array, string, map, set)
 * @note this returns false for anything else.
 */


function isEmpty(value) {
  if (value == null) {
    return true;
  }

  if (Array.isArray(value) || typeof value === 'string') {
    return !value.length;
  }

  if (objectToString(value) === '[object Map]' || objectToString(value) === '[object Set]') {
    return !value.size;
  }

  if (objectToString(value) === '[object Object]') {
    return !Object.keys(value).length;
  }

  return false;
}

var defaultInputOptions = {
  onChange: identity,
  onBlur: noop,
  validate: null,
  validateOnBlur: undefined,
  touchOnChange: false
};
function parseInputArgs(args) {
  var name;
  var ownValue;
  var options;

  if (typeof args[0] === 'string' || typeof args[0] === 'number') {
    var _args = _slicedToArray(args, 2);

    name = _args[0];
    ownValue = _args[1];
  } else {
    var _args2 = _slicedToArray(args, 1);

    var _args2$ = _args2[0];
    name = _args2$.name;
    ownValue = _args2$.value;
    options = _objectWithoutProperties(_args2$, ["name", "value"]);
  }

  return _objectSpread({
    name: name,
    ownValue: ownValue
  }, defaultInputOptions, options);
}

var defaultCreateId = function defaultCreateId(name, value) {
  return ['__ufs', name, value].filter(Boolean).join('__');
};

function useInputId(implementation) {
  var getId = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (name, ownValue) {
    var createId;

    if (!implementation) {
      createId = noop;
    } else if (isFunction(implementation)) {
      createId = implementation;
    } else {
      createId = defaultCreateId;
    }

    var value = toString(ownValue);
    return value ? createId(name, value) : createId(name);
  }, [implementation]);
  var getIdProp = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (prop, name, value) {
    var id = getId(name, value);
    return id === undefined ? {} : _defineProperty({}, prop, id);
  }, [getId]);
  return {
    getIdProp: getIdProp
  };
}

function useCache() {
  var cache = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(new Map());

  var has = function has(key) {
    return cache.current.has(key);
  };

  var get = function get(key) {
    return cache.current.get(key);
  };

  var set = function set(key, value) {
    return cache.current.set(key, value);
  };

  var getOrSet = function getOrSet(key, value) {
    return has(key) ? get(key) : set(key, value) && get(key);
  };

  return {
    getOrSet: getOrSet,
    set: set,
    has: has,
    get: get
  };
}

function stateReducer(state, newState) {
  return isFunction(newState) ? newState(state) : _objectSpread({}, state, newState);
}

function useState(_ref) {
  var initialState = _ref.initialState;
  var state = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  var initialValues = useCache();

  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(stateReducer, initialState || {}),
      _useReducer2 = _slicedToArray(_useReducer, 2),
      values = _useReducer2[0],
      setValues = _useReducer2[1];

  var _useReducer3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(stateReducer, {}),
      _useReducer4 = _slicedToArray(_useReducer3, 2),
      touched = _useReducer4[0],
      setTouched = _useReducer4[1];

  var _useReducer5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(stateReducer, {}),
      _useReducer6 = _slicedToArray(_useReducer5, 2),
      validity = _useReducer6[0],
      setValidity = _useReducer6[1];

  var _useReducer7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(stateReducer, {}),
      _useReducer8 = _slicedToArray(_useReducer7, 2),
      errors = _useReducer8[0],
      setError = _useReducer8[1];

  state.current = {
    values: values,
    touched: touched,
    validity: validity,
    errors: errors
  };

  function setField(name, value, inputValidity, inputTouched, inputError) {
    setValues(_defineProperty({}, name, value));
    setTouched(_defineProperty({}, name, inputTouched));
    setValidity(_defineProperty({}, name, inputValidity));
    setError(_defineProperty({}, name, inputError));
  }

  function clearField(name) {
    setField(name);
  }

  function resetField(name) {
    setField(name, initialValues.has(name) ? initialValues.get(name) : initialState[name]);
  }

  function forEach(cb) {
    Object.keys(state.current.values).forEach(cb);
  }

  return {
    get current() {
      return state.current;
    },

    setValues: setValues,
    setTouched: setTouched,
    setValidity: setValidity,
    setError: setError,
    setField: setField,
    initialValues: initialValues,
    resetField: resetField,
    clearField: clearField,
    forEach: forEach
  };
}

var CHECKBOX = 'checkbox';
var COLOR = 'color';
var DATE = 'date';
var EMAIL = 'email';
var MONTH = 'month';
var NUMBER = 'number';
var PASSWORD = 'password';
var RADIO = 'radio';
var RANGE = 'range';
var RAW = 'raw';
var SEARCH = 'search';
var SELECT = 'select';
var SELECT_MULTIPLE = 'selectMultiple';
var TEL = 'tel';
var TEXT = 'text';
var TEXTAREA = 'textarea';
var TIME = 'time';
var URL = 'url';
var WEEK = 'week';
var LABEL = 'label';
var INPUT_TYPES = [CHECKBOX, COLOR, DATE, EMAIL, MONTH, NUMBER, PASSWORD, RADIO, RANGE, RAW, SEARCH, SELECT, SELECT_MULTIPLE, TEL, TEXT, TEXTAREA, TIME, URL, WEEK];
var ON_CHANGE_HANDLER = 0;
var ON_BLUR_HANDLER = 1;
var CONSOLE_TAG = '[useFormState]';

var defaultFormOptions = {
  onBlur: noop,
  onChange: noop,
  onClear: noop,
  onReset: noop,
  onTouched: noop,
  withIds: false
};
function useFormState(initialState, options) {
  var formOptions = _objectSpread({}, defaultFormOptions, options);

  var formState = useState({
    initialState: initialState
  });

  var _useInputId = useInputId(formOptions.withIds),
      getIdProp = _useInputId.getIdProp;

  var _useCache = useCache(),
      setDirty = _useCache.set,
      isDirty = _useCache.has;

  var callbacks = useCache();
  var devWarnings = useCache();

  function warn(key, type, message) {
    if (!devWarnings.has("".concat(type, ":").concat(key))) {
      devWarnings.set("".concat(type, ":").concat(key), true); // eslint-disable-next-line no-console

      console.warn(CONSOLE_TAG, message);
    }
  }

  var createPropsGetter = function createPropsGetter(type) {
    return function () {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var _parseInputArgs = parseInputArgs(args),
          name = _parseInputArgs.name,
          ownValue = _parseInputArgs.ownValue,
          inputOptions = _objectWithoutProperties(_parseInputArgs, ["name", "ownValue"]);

      var hasOwnValue = !!toString(ownValue);
      var isCheckbox = type === CHECKBOX;
      var isRadio = type === RADIO;
      var isSelectMultiple = type === SELECT_MULTIPLE;
      var isRaw = type === RAW;
      var hasValueInState = formState.current.values[name] !== undefined; // This is used to cache input props that shouldn't change across
      // re-renders.  Note that for `raw` values, `toString(ownValue)`
      // will return '[object Object]'.  This means we can't have multiple
      // raw inputs with the same name and different values, but this is
      // probably fine.

      var key = "".concat(type, ".").concat(name, ".").concat(toString(ownValue));

      function setDefaultValue() {
        /* istanbul ignore else */
        if (true) {
          if (isRaw && formState.current.values[name] === undefined) {
            warn(key, 'missingInitialValue', "The initial value for input \"".concat(name, "\" is missing. Custom inputs ") + 'controlled with raw() are expected to have an initial value ' + 'provided to useFormState(). To prevent React from treating ' + 'this input as uncontrolled, an empty string will be used instead.');
          }
        }

        var value = '';

        if (isCheckbox) {
          /**
           * If a checkbox has a user-defined value, its value the form state
           * value will be an array. Otherwise it will be considered a toggle.
           */
          value = hasOwnValue ? [] : false;
        }

        if (isSelectMultiple) {
          value = [];
        }

        formState.setValues(_defineProperty({}, name, value));
      }

      function getNextCheckboxValue(e) {
        var _e$target = e.target,
            value = _e$target.value,
            checked = _e$target.checked;

        if (!hasOwnValue) {
          return checked;
        }

        var checkedValues = new Set(formState.current.values[name]);

        if (checked) {
          checkedValues.add(value);
        } else {
          checkedValues.delete(value);
        }

        return Array.from(checkedValues);
      }

      function getNextSelectMultipleValue(e) {
        return Array.from(e.target.options).reduce(function (values, option) {
          return option.selected ? _toConsumableArray(values).concat([option.value]) : values;
        }, []);
      }

      function validate(e) {
        var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : isRaw ? formState.current.values[name] : e.target.value;
        var values = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : formState.current.values;
        var error;
        var isValid = true;
        /* istanbul ignore else */

        if (isFunction(inputOptions.validate)) {
          var result = inputOptions.validate(value, values, e);

          if (result !== true && result != null) {
            isValid = false;
            error = result !== false ? result : '';
          }
        } else if (!isRaw) {
          isValid = e.target.validity.valid;
          error = e.target.validationMessage;
        } else if (true) {
          warn(key, 'missingValidate', "You used a raw input type for \"".concat(name, "\" without providing a ") + 'custom validate method. As a result, validation of this input ' + 'will be set to "true" automatically. If you need to validate ' + 'this input, provide a custom validation option.');
        }

        formState.setValidity(_defineProperty({}, name, isValid));
        formState.setError(isEmpty(error) ? omit(name) : _defineProperty({}, name, error));
      }

      function touch(e) {
        if (!formState.current.touched[name]) {
          formState.setTouched(_defineProperty({}, name, true));
          formOptions.onTouched(e);
        }
      }

      var inputProps = _objectSpread({
        name: name,

        get type() {
          if (type !== SELECT && type !== SELECT_MULTIPLE && type !== TEXTAREA) {
            return type;
          }
        },

        get multiple() {
          if (type === SELECT_MULTIPLE) {
            return true;
          }
        },

        get checked() {
          var values = formState.current.values;

          if (isRadio) {
            return values[name] === toString(ownValue);
          }

          if (isCheckbox) {
            if (!hasOwnValue) {
              return values[name] || false;
            }
            /**
             * @todo Handle the case where two checkbox inputs share the same
             * name, but one has a value, the other doesn't (throws currently).
             * <input {...input.checkbox('option1')} />
             * <input {...input.checkbox('option1', 'value_of_option1')} />
             */


            return hasValueInState ? values[name].includes(toString(ownValue)) : false;
          }
        },

        get value() {
          if (!hasValueInState) {
            // auto populating default values if an initial value is not provided
            setDefaultValue();
          } else if (!formState.initialValues.has(name)) {
            // keep track of user-provided initial values on first render
            formState.initialValues.set(name, formState.current.values[name]);
          } // auto populating default values of touched


          if (formState.current.touched[name] == null) {
            formState.setTouched(_defineProperty({}, name, false));
          }
          /**
           * Since checkbox and radio inputs have their own user-defined values,
           * and since checkbox inputs can be either an array or a boolean,
           * returning the value of input from the current form state is illogical
           */


          if (isCheckbox || isRadio) {
            return toString(ownValue);
          }

          return hasValueInState ? formState.current.values[name] : '';
        },

        onChange: callbacks.getOrSet(ON_BLUR_HANDLER + key, function (e) {
          setDirty(name, true);
          var value;

          if (isRaw) {
            value = inputOptions.onChange(e);

            if (value === undefined) {
              // setting value to its current state if onChange does not return
              // value to prevent React from complaining about the input switching
              // from controlled to uncontrolled
              value = formState.current.values[name];
              /* istanbul ignore else */

              if (true) {
                warn(key, 'onChangeUndefined', "You used a raw input type for \"".concat(name, "\" with an onChange() ") + 'option without returning a value. The onChange callback ' + 'of raw inputs, when provided, is used to determine the ' + 'custom value that will be stored in the form state. ' + 'Therefore, a value must be returned from the onChange callback.');
              }
            }
          } else {
            if (isCheckbox) {
              value = getNextCheckboxValue(e);
            } else if (isSelectMultiple) {
              value = getNextSelectMultipleValue(e);
            } else {
              value = e.target.value;
            }

            inputOptions.onChange(e);
          } // Mark raw fields as touched on change, since we might not get an
          // `onBlur` event from them.


          if (inputOptions.touchOnChange) {
            touch(e);
          }

          var partialNewState = _defineProperty({}, name, value);

          var newValues = _objectSpread({}, formState.current.values, partialNewState);

          formOptions.onChange(e, formState.current.values, newValues);
          var validateOnBlur = formOptions.validateOnBlur ? inputOptions.validateOnBlur !== false : inputOptions.validateOnBlur;

          if (!validateOnBlur) {
            validate(e, value, newValues);
          }

          formState.setValues(partialNewState);
        }),
        onBlur: callbacks.getOrSet(ON_CHANGE_HANDLER + key, function (e) {
          touch(e);
          inputOptions.onBlur(e);
          formOptions.onBlur(e);
          /**
           * Limiting input validation on blur to:
           * A) when it's either touched for the first time
           * B) when it's marked as dirty due to a value change
           */

          /* istanbul ignore else */

          if (!formState.current.touched[name] || isDirty(name)) {
            validate(e);
            setDirty(name, false);
          }
        })
      }, getIdProp('id', name, ownValue));

      return isRaw ? {
        onChange: inputProps.onChange,
        onBlur: inputProps.onBlur,
        value: inputProps.value
      } : inputProps;
    };
  };

  var formStateAPI = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])({
    clearField: formState.clearField,
    resetField: formState.resetField,
    setField: function setField(name, value) {
      formState.setField(name, value, true, true);
    },
    setFieldError: function setFieldError(name, error) {
      formState.setValidity(_defineProperty({}, name, false));
      formState.setError(_defineProperty({}, name, error));
    },
    clear: function clear() {
      formState.forEach(formState.clearField);
      formOptions.onClear();
    },
    reset: function reset() {
      formState.forEach(formState.resetField);
      formOptions.onReset();
    }
  }); // exposing current form state (e.g. values, touched, validity, etc)
  // eslint-disable-next-line guard-for-in, no-restricted-syntax

  for (var key in formState.current) {
    formStateAPI.current[key] = formState.current[key];
  }

  var inputPropsCreators = _defineProperty({}, LABEL, function (name, ownValue) {
    return getIdProp('htmlFor', name, ownValue);
  });

  INPUT_TYPES.forEach(function (type) {
    inputPropsCreators[type] = createPropsGetter(type);
  });
  return [formStateAPI.current, inputPropsCreators];
}




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtdXNlLWZvcm0tc3RhdGUvZGlzdC9pbmRleC5lcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBd0Q7O0FBRXhEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLHNCQUFzQjtBQUN2QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxhQUFhLHVCQUF1QjtBQUNwQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxlQUFlLDZCQUE2QjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpREFBaUQsZ0JBQWdCOztBQUVqRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNkNBQTZDLCtCQUErQjtBQUM1RTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FB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QUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQSxxQkFBcUIsb0RBQU07QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSw4Q0FBOEM7QUFDOUMsMkNBQTJDO0FBQzNDLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLEVBQUU7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsNkNBQTZDO0FBQzdDO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRXdCIiwiZmlsZSI6IjEuYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZVJlZiwgdXNlUmVkdWNlciB9IGZyb20gJ3JlYWN0JztcblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgX3R5cGVvZiA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgX3R5cGVvZiA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTtcbiAgICB2YXIgb3duS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG5cbiAgICBpZiAodHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIG93bktleXMgPSBvd25LZXlzLmNvbmNhdChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZSkuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBzeW0pLmVudW1lcmFibGU7XG4gICAgICB9KSk7XG4gICAgfVxuXG4gICAgb3duS2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkge1xuICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTtcbiAgdmFyIHRhcmdldCA9IHt9O1xuICB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG4gIHZhciBrZXksIGk7XG5cbiAgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHtcbiAgICBrZXkgPSBzb3VyY2VLZXlzW2ldO1xuICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuXG4gIHZhciB0YXJnZXQgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKTtcblxuICB2YXIga2V5LCBpO1xuXG4gIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgdmFyIHNvdXJjZVN5bWJvbEtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZSk7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgc291cmNlU3ltYm9sS2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAga2V5ID0gc291cmNlU3ltYm9sS2V5c1tpXTtcbiAgICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzb3VyY2UsIGtleSkpIGNvbnRpbnVlO1xuICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHtcbiAgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTtcbn1cblxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikge1xuICByZXR1cm4gX2FycmF5V2l0aG91dEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheShhcnIpIHx8IF9ub25JdGVyYWJsZVNwcmVhZCgpO1xufVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHtcbiAgICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShhcnIubGVuZ3RoKTsgaSA8IGFyci5sZW5ndGg7IGkrKykgYXJyMltpXSA9IGFycltpXTtcblxuICAgIHJldHVybiBhcnIyO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjtcbn1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7XG4gIGlmIChTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGl0ZXIpIHx8IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChpdGVyKSA9PT0gXCJbb2JqZWN0IEFyZ3VtZW50c11cIikgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7XG59XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHtcbiAgdmFyIF9hcnIgPSBbXTtcbiAgdmFyIF9uID0gdHJ1ZTtcbiAgdmFyIF9kID0gZmFsc2U7XG4gIHZhciBfZSA9IHVuZGVmaW5lZDtcblxuICB0cnkge1xuICAgIGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHtcbiAgICAgIF9hcnIucHVzaChfcy52YWx1ZSk7XG5cbiAgICAgIGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhaztcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIF9kID0gdHJ1ZTtcbiAgICBfZSA9IGVycjtcbiAgfSBmaW5hbGx5IHtcbiAgICB0cnkge1xuICAgICAgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBpZiAoX2QpIHRocm93IF9lO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBfYXJyO1xufVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZVwiKTtcbn1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2VcIik7XG59XG5cbmZ1bmN0aW9uIF90b1Byb3BlcnR5S2V5KGtleSkge1xuICBpZiAodHlwZW9mIGtleSA9PT0gXCJzeW1ib2xcIikge1xuICAgIHJldHVybiBrZXk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIFN0cmluZyhrZXkpO1xuICB9XG59XG5cbi8qKlxuICogUmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgY2FuIGJlIGNhbGxlZCB3aXRoIGFuIG9iamVjdC4gVGhlIHJldHVybiB2YWx1ZSBvZiB0aGVcbiAqIG5ldyBmdW5jdGlvbiBpcyBhIGNvcHkgb2YgdGhlIG9iamVjdCBleGNsdWRpbmcgdGhlIGtleSBwYXNzZWQgaW5pdGlhbGx5LlxuICovXG5mdW5jdGlvbiBvbWl0KGtleSkge1xuICByZXR1cm4gZnVuY3Rpb24gKG9iamVjdCkge1xuICAgIHZhciB0b1JlbW92ZSA9IG9iamVjdFtrZXldLFxuICAgICAgICByZXN0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iamVjdCwgW2tleV0ubWFwKF90b1Byb3BlcnR5S2V5KSk7XG5cbiAgICByZXR1cm4gcmVzdDtcbiAgfTtcbn1cbi8qKlxuICogQW4gZW1wdHkgZnVuY3Rpb24uIEl0IGRvZXMgbm90aGluZy5cbiAqL1xuXG5mdW5jdGlvbiBub29wKCkge31cbi8qKlxuICogTGlrZSBgbm9vcGAsIGJ1dCBwYXNzZXMgdGhyb3VnaCB0aGUgZmlyc3QgYXJndW1lbnQuXG4gKi9cblxuZnVuY3Rpb24gaWRlbnRpdHkodmFsKSB7XG4gIHJldHVybiB2YWw7XG59XG4vKipcbiAqIENhc3Qgbm9uLXN0cmluZyB2YWx1ZXMgdG8gYSBzdHJpbmcsIHdpdGggdGhlIGV4Y2VwdGlvbiBvZiBmdW5jdGlvbnMsIHN5bWJvbHMsXG4gKiBhbmQgdW5kZWZpbmVkLlxuICovXG5cbmZ1bmN0aW9uIHRvU3RyaW5nKHZhbHVlKSB7XG4gIHN3aXRjaCAoX3R5cGVvZih2YWx1ZSkpIHtcbiAgICBjYXNlICdmdW5jdGlvbic6XG4gICAgY2FzZSAnc3ltYm9sJzpcbiAgICBjYXNlICd1bmRlZmluZWQnOlxuICAgICAgcmV0dXJuICcnO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiAnJyArIHZhbHVlO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgcHJlZmVyLXRlbXBsYXRlXG4gIH1cbn1cbmZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJztcbn1cblxudmFyIG9iamVjdFRvU3RyaW5nID0gZnVuY3Rpb24gb2JqZWN0VG9TdHJpbmcodmFsdWUpIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG59O1xuLyoqXG4gKiBEZXRlcm1pbmVzIGlmIGEgdmFsdWUgaXMgYW4gZW1wdHkgY29sbGVjdGlvbiAob2JqZWN0LCBhcnJheSwgc3RyaW5nLCBtYXAsIHNldClcbiAqIEBub3RlIHRoaXMgcmV0dXJucyBmYWxzZSBmb3IgYW55dGhpbmcgZWxzZS5cbiAqL1xuXG5cbmZ1bmN0aW9uIGlzRW1wdHkodmFsdWUpIHtcbiAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSB8fCB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuICF2YWx1ZS5sZW5ndGg7XG4gIH1cblxuICBpZiAob2JqZWN0VG9TdHJpbmcodmFsdWUpID09PSAnW29iamVjdCBNYXBdJyB8fCBvYmplY3RUb1N0cmluZyh2YWx1ZSkgPT09ICdbb2JqZWN0IFNldF0nKSB7XG4gICAgcmV0dXJuICF2YWx1ZS5zaXplO1xuICB9XG5cbiAgaWYgKG9iamVjdFRvU3RyaW5nKHZhbHVlKSA9PT0gJ1tvYmplY3QgT2JqZWN0XScpIHtcbiAgICByZXR1cm4gIU9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGg7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbnZhciBkZWZhdWx0SW5wdXRPcHRpb25zID0ge1xuICBvbkNoYW5nZTogaWRlbnRpdHksXG4gIG9uQmx1cjogbm9vcCxcbiAgdmFsaWRhdGU6IG51bGwsXG4gIHZhbGlkYXRlT25CbHVyOiB1bmRlZmluZWQsXG4gIHRvdWNoT25DaGFuZ2U6IGZhbHNlXG59O1xuZnVuY3Rpb24gcGFyc2VJbnB1dEFyZ3MoYXJncykge1xuICB2YXIgbmFtZTtcbiAgdmFyIG93blZhbHVlO1xuICB2YXIgb3B0aW9ucztcblxuICBpZiAodHlwZW9mIGFyZ3NbMF0gPT09ICdzdHJpbmcnIHx8IHR5cGVvZiBhcmdzWzBdID09PSAnbnVtYmVyJykge1xuICAgIHZhciBfYXJncyA9IF9zbGljZWRUb0FycmF5KGFyZ3MsIDIpO1xuXG4gICAgbmFtZSA9IF9hcmdzWzBdO1xuICAgIG93blZhbHVlID0gX2FyZ3NbMV07XG4gIH0gZWxzZSB7XG4gICAgdmFyIF9hcmdzMiA9IF9zbGljZWRUb0FycmF5KGFyZ3MsIDEpO1xuXG4gICAgdmFyIF9hcmdzMiQgPSBfYXJnczJbMF07XG4gICAgbmFtZSA9IF9hcmdzMiQubmFtZTtcbiAgICBvd25WYWx1ZSA9IF9hcmdzMiQudmFsdWU7XG4gICAgb3B0aW9ucyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfYXJnczIkLCBbXCJuYW1lXCIsIFwidmFsdWVcIl0pO1xuICB9XG5cbiAgcmV0dXJuIF9vYmplY3RTcHJlYWQoe1xuICAgIG5hbWU6IG5hbWUsXG4gICAgb3duVmFsdWU6IG93blZhbHVlXG4gIH0sIGRlZmF1bHRJbnB1dE9wdGlvbnMsIG9wdGlvbnMpO1xufVxuXG52YXIgZGVmYXVsdENyZWF0ZUlkID0gZnVuY3Rpb24gZGVmYXVsdENyZWF0ZUlkKG5hbWUsIHZhbHVlKSB7XG4gIHJldHVybiBbJ19fdWZzJywgbmFtZSwgdmFsdWVdLmZpbHRlcihCb29sZWFuKS5qb2luKCdfXycpO1xufTtcblxuZnVuY3Rpb24gdXNlSW5wdXRJZChpbXBsZW1lbnRhdGlvbikge1xuICB2YXIgZ2V0SWQgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAobmFtZSwgb3duVmFsdWUpIHtcbiAgICB2YXIgY3JlYXRlSWQ7XG5cbiAgICBpZiAoIWltcGxlbWVudGF0aW9uKSB7XG4gICAgICBjcmVhdGVJZCA9IG5vb3A7XG4gICAgfSBlbHNlIGlmIChpc0Z1bmN0aW9uKGltcGxlbWVudGF0aW9uKSkge1xuICAgICAgY3JlYXRlSWQgPSBpbXBsZW1lbnRhdGlvbjtcbiAgICB9IGVsc2Uge1xuICAgICAgY3JlYXRlSWQgPSBkZWZhdWx0Q3JlYXRlSWQ7XG4gICAgfVxuXG4gICAgdmFyIHZhbHVlID0gdG9TdHJpbmcob3duVmFsdWUpO1xuICAgIHJldHVybiB2YWx1ZSA/IGNyZWF0ZUlkKG5hbWUsIHZhbHVlKSA6IGNyZWF0ZUlkKG5hbWUpO1xuICB9LCBbaW1wbGVtZW50YXRpb25dKTtcbiAgdmFyIGdldElkUHJvcCA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIChwcm9wLCBuYW1lLCB2YWx1ZSkge1xuICAgIHZhciBpZCA9IGdldElkKG5hbWUsIHZhbHVlKTtcbiAgICByZXR1cm4gaWQgPT09IHVuZGVmaW5lZCA/IHt9IDogX2RlZmluZVByb3BlcnR5KHt9LCBwcm9wLCBpZCk7XG4gIH0sIFtnZXRJZF0pO1xuICByZXR1cm4ge1xuICAgIGdldElkUHJvcDogZ2V0SWRQcm9wXG4gIH07XG59XG5cbmZ1bmN0aW9uIHVzZUNhY2hlKCkge1xuICB2YXIgY2FjaGUgPSB1c2VSZWYobmV3IE1hcCgpKTtcblxuICB2YXIgaGFzID0gZnVuY3Rpb24gaGFzKGtleSkge1xuICAgIHJldHVybiBjYWNoZS5jdXJyZW50LmhhcyhrZXkpO1xuICB9O1xuXG4gIHZhciBnZXQgPSBmdW5jdGlvbiBnZXQoa2V5KSB7XG4gICAgcmV0dXJuIGNhY2hlLmN1cnJlbnQuZ2V0KGtleSk7XG4gIH07XG5cbiAgdmFyIHNldCA9IGZ1bmN0aW9uIHNldChrZXksIHZhbHVlKSB7XG4gICAgcmV0dXJuIGNhY2hlLmN1cnJlbnQuc2V0KGtleSwgdmFsdWUpO1xuICB9O1xuXG4gIHZhciBnZXRPclNldCA9IGZ1bmN0aW9uIGdldE9yU2V0KGtleSwgdmFsdWUpIHtcbiAgICByZXR1cm4gaGFzKGtleSkgPyBnZXQoa2V5KSA6IHNldChrZXksIHZhbHVlKSAmJiBnZXQoa2V5KTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGdldE9yU2V0OiBnZXRPclNldCxcbiAgICBzZXQ6IHNldCxcbiAgICBoYXM6IGhhcyxcbiAgICBnZXQ6IGdldFxuICB9O1xufVxuXG5mdW5jdGlvbiBzdGF0ZVJlZHVjZXIoc3RhdGUsIG5ld1N0YXRlKSB7XG4gIHJldHVybiBpc0Z1bmN0aW9uKG5ld1N0YXRlKSA/IG5ld1N0YXRlKHN0YXRlKSA6IF9vYmplY3RTcHJlYWQoe30sIHN0YXRlLCBuZXdTdGF0ZSk7XG59XG5cbmZ1bmN0aW9uIHVzZVN0YXRlKF9yZWYpIHtcbiAgdmFyIGluaXRpYWxTdGF0ZSA9IF9yZWYuaW5pdGlhbFN0YXRlO1xuICB2YXIgc3RhdGUgPSB1c2VSZWYoKTtcbiAgdmFyIGluaXRpYWxWYWx1ZXMgPSB1c2VDYWNoZSgpO1xuXG4gIHZhciBfdXNlUmVkdWNlciA9IHVzZVJlZHVjZXIoc3RhdGVSZWR1Y2VyLCBpbml0aWFsU3RhdGUgfHwge30pLFxuICAgICAgX3VzZVJlZHVjZXIyID0gX3NsaWNlZFRvQXJyYXkoX3VzZVJlZHVjZXIsIDIpLFxuICAgICAgdmFsdWVzID0gX3VzZVJlZHVjZXIyWzBdLFxuICAgICAgc2V0VmFsdWVzID0gX3VzZVJlZHVjZXIyWzFdO1xuXG4gIHZhciBfdXNlUmVkdWNlcjMgPSB1c2VSZWR1Y2VyKHN0YXRlUmVkdWNlciwge30pLFxuICAgICAgX3VzZVJlZHVjZXI0ID0gX3NsaWNlZFRvQXJyYXkoX3VzZVJlZHVjZXIzLCAyKSxcbiAgICAgIHRvdWNoZWQgPSBfdXNlUmVkdWNlcjRbMF0sXG4gICAgICBzZXRUb3VjaGVkID0gX3VzZVJlZHVjZXI0WzFdO1xuXG4gIHZhciBfdXNlUmVkdWNlcjUgPSB1c2VSZWR1Y2VyKHN0YXRlUmVkdWNlciwge30pLFxuICAgICAgX3VzZVJlZHVjZXI2ID0gX3NsaWNlZFRvQXJyYXkoX3VzZVJlZHVjZXI1LCAyKSxcbiAgICAgIHZhbGlkaXR5ID0gX3VzZVJlZHVjZXI2WzBdLFxuICAgICAgc2V0VmFsaWRpdHkgPSBfdXNlUmVkdWNlcjZbMV07XG5cbiAgdmFyIF91c2VSZWR1Y2VyNyA9IHVzZVJlZHVjZXIoc3RhdGVSZWR1Y2VyLCB7fSksXG4gICAgICBfdXNlUmVkdWNlcjggPSBfc2xpY2VkVG9BcnJheShfdXNlUmVkdWNlcjcsIDIpLFxuICAgICAgZXJyb3JzID0gX3VzZVJlZHVjZXI4WzBdLFxuICAgICAgc2V0RXJyb3IgPSBfdXNlUmVkdWNlcjhbMV07XG5cbiAgc3RhdGUuY3VycmVudCA9IHtcbiAgICB2YWx1ZXM6IHZhbHVlcyxcbiAgICB0b3VjaGVkOiB0b3VjaGVkLFxuICAgIHZhbGlkaXR5OiB2YWxpZGl0eSxcbiAgICBlcnJvcnM6IGVycm9yc1xuICB9O1xuXG4gIGZ1bmN0aW9uIHNldEZpZWxkKG5hbWUsIHZhbHVlLCBpbnB1dFZhbGlkaXR5LCBpbnB1dFRvdWNoZWQsIGlucHV0RXJyb3IpIHtcbiAgICBzZXRWYWx1ZXMoX2RlZmluZVByb3BlcnR5KHt9LCBuYW1lLCB2YWx1ZSkpO1xuICAgIHNldFRvdWNoZWQoX2RlZmluZVByb3BlcnR5KHt9LCBuYW1lLCBpbnB1dFRvdWNoZWQpKTtcbiAgICBzZXRWYWxpZGl0eShfZGVmaW5lUHJvcGVydHkoe30sIG5hbWUsIGlucHV0VmFsaWRpdHkpKTtcbiAgICBzZXRFcnJvcihfZGVmaW5lUHJvcGVydHkoe30sIG5hbWUsIGlucHV0RXJyb3IpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNsZWFyRmllbGQobmFtZSkge1xuICAgIHNldEZpZWxkKG5hbWUpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRGaWVsZChuYW1lKSB7XG4gICAgc2V0RmllbGQobmFtZSwgaW5pdGlhbFZhbHVlcy5oYXMobmFtZSkgPyBpbml0aWFsVmFsdWVzLmdldChuYW1lKSA6IGluaXRpYWxTdGF0ZVtuYW1lXSk7XG4gIH1cblxuICBmdW5jdGlvbiBmb3JFYWNoKGNiKSB7XG4gICAgT2JqZWN0LmtleXMoc3RhdGUuY3VycmVudC52YWx1ZXMpLmZvckVhY2goY2IpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBnZXQgY3VycmVudCgpIHtcbiAgICAgIHJldHVybiBzdGF0ZS5jdXJyZW50O1xuICAgIH0sXG5cbiAgICBzZXRWYWx1ZXM6IHNldFZhbHVlcyxcbiAgICBzZXRUb3VjaGVkOiBzZXRUb3VjaGVkLFxuICAgIHNldFZhbGlkaXR5OiBzZXRWYWxpZGl0eSxcbiAgICBzZXRFcnJvcjogc2V0RXJyb3IsXG4gICAgc2V0RmllbGQ6IHNldEZpZWxkLFxuICAgIGluaXRpYWxWYWx1ZXM6IGluaXRpYWxWYWx1ZXMsXG4gICAgcmVzZXRGaWVsZDogcmVzZXRGaWVsZCxcbiAgICBjbGVhckZpZWxkOiBjbGVhckZpZWxkLFxuICAgIGZvckVhY2g6IGZvckVhY2hcbiAgfTtcbn1cblxudmFyIENIRUNLQk9YID0gJ2NoZWNrYm94JztcbnZhciBDT0xPUiA9ICdjb2xvcic7XG52YXIgREFURSA9ICdkYXRlJztcbnZhciBFTUFJTCA9ICdlbWFpbCc7XG52YXIgTU9OVEggPSAnbW9udGgnO1xudmFyIE5VTUJFUiA9ICdudW1iZXInO1xudmFyIFBBU1NXT1JEID0gJ3Bhc3N3b3JkJztcbnZhciBSQURJTyA9ICdyYWRpbyc7XG52YXIgUkFOR0UgPSAncmFuZ2UnO1xudmFyIFJBVyA9ICdyYXcnO1xudmFyIFNFQVJDSCA9ICdzZWFyY2gnO1xudmFyIFNFTEVDVCA9ICdzZWxlY3QnO1xudmFyIFNFTEVDVF9NVUxUSVBMRSA9ICdzZWxlY3RNdWx0aXBsZSc7XG52YXIgVEVMID0gJ3RlbCc7XG52YXIgVEVYVCA9ICd0ZXh0JztcbnZhciBURVhUQVJFQSA9ICd0ZXh0YXJlYSc7XG52YXIgVElNRSA9ICd0aW1lJztcbnZhciBVUkwgPSAndXJsJztcbnZhciBXRUVLID0gJ3dlZWsnO1xudmFyIExBQkVMID0gJ2xhYmVsJztcbnZhciBJTlBVVF9UWVBFUyA9IFtDSEVDS0JPWCwgQ09MT1IsIERBVEUsIEVNQUlMLCBNT05USCwgTlVNQkVSLCBQQVNTV09SRCwgUkFESU8sIFJBTkdFLCBSQVcsIFNFQVJDSCwgU0VMRUNULCBTRUxFQ1RfTVVMVElQTEUsIFRFTCwgVEVYVCwgVEVYVEFSRUEsIFRJTUUsIFVSTCwgV0VFS107XG52YXIgT05fQ0hBTkdFX0hBTkRMRVIgPSAwO1xudmFyIE9OX0JMVVJfSEFORExFUiA9IDE7XG52YXIgQ09OU09MRV9UQUcgPSAnW3VzZUZvcm1TdGF0ZV0nO1xuXG52YXIgZGVmYXVsdEZvcm1PcHRpb25zID0ge1xuICBvbkJsdXI6IG5vb3AsXG4gIG9uQ2hhbmdlOiBub29wLFxuICBvbkNsZWFyOiBub29wLFxuICBvblJlc2V0OiBub29wLFxuICBvblRvdWNoZWQ6IG5vb3AsXG4gIHdpdGhJZHM6IGZhbHNlXG59O1xuZnVuY3Rpb24gdXNlRm9ybVN0YXRlKGluaXRpYWxTdGF0ZSwgb3B0aW9ucykge1xuICB2YXIgZm9ybU9wdGlvbnMgPSBfb2JqZWN0U3ByZWFkKHt9LCBkZWZhdWx0Rm9ybU9wdGlvbnMsIG9wdGlvbnMpO1xuXG4gIHZhciBmb3JtU3RhdGUgPSB1c2VTdGF0ZSh7XG4gICAgaW5pdGlhbFN0YXRlOiBpbml0aWFsU3RhdGVcbiAgfSk7XG5cbiAgdmFyIF91c2VJbnB1dElkID0gdXNlSW5wdXRJZChmb3JtT3B0aW9ucy53aXRoSWRzKSxcbiAgICAgIGdldElkUHJvcCA9IF91c2VJbnB1dElkLmdldElkUHJvcDtcblxuICB2YXIgX3VzZUNhY2hlID0gdXNlQ2FjaGUoKSxcbiAgICAgIHNldERpcnR5ID0gX3VzZUNhY2hlLnNldCxcbiAgICAgIGlzRGlydHkgPSBfdXNlQ2FjaGUuaGFzO1xuXG4gIHZhciBjYWxsYmFja3MgPSB1c2VDYWNoZSgpO1xuICB2YXIgZGV2V2FybmluZ3MgPSB1c2VDYWNoZSgpO1xuXG4gIGZ1bmN0aW9uIHdhcm4oa2V5LCB0eXBlLCBtZXNzYWdlKSB7XG4gICAgaWYgKCFkZXZXYXJuaW5ncy5oYXMoXCJcIi5jb25jYXQodHlwZSwgXCI6XCIpLmNvbmNhdChrZXkpKSkge1xuICAgICAgZGV2V2FybmluZ3Muc2V0KFwiXCIuY29uY2F0KHR5cGUsIFwiOlwiKS5jb25jYXQoa2V5KSwgdHJ1ZSk7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG5cbiAgICAgIGNvbnNvbGUud2FybihDT05TT0xFX1RBRywgbWVzc2FnZSk7XG4gICAgfVxuICB9XG5cbiAgdmFyIGNyZWF0ZVByb3BzR2V0dGVyID0gZnVuY3Rpb24gY3JlYXRlUHJvcHNHZXR0ZXIodHlwZSkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgIH1cblxuICAgICAgdmFyIF9wYXJzZUlucHV0QXJncyA9IHBhcnNlSW5wdXRBcmdzKGFyZ3MpLFxuICAgICAgICAgIG5hbWUgPSBfcGFyc2VJbnB1dEFyZ3MubmFtZSxcbiAgICAgICAgICBvd25WYWx1ZSA9IF9wYXJzZUlucHV0QXJncy5vd25WYWx1ZSxcbiAgICAgICAgICBpbnB1dE9wdGlvbnMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3BhcnNlSW5wdXRBcmdzLCBbXCJuYW1lXCIsIFwib3duVmFsdWVcIl0pO1xuXG4gICAgICB2YXIgaGFzT3duVmFsdWUgPSAhIXRvU3RyaW5nKG93blZhbHVlKTtcbiAgICAgIHZhciBpc0NoZWNrYm94ID0gdHlwZSA9PT0gQ0hFQ0tCT1g7XG4gICAgICB2YXIgaXNSYWRpbyA9IHR5cGUgPT09IFJBRElPO1xuICAgICAgdmFyIGlzU2VsZWN0TXVsdGlwbGUgPSB0eXBlID09PSBTRUxFQ1RfTVVMVElQTEU7XG4gICAgICB2YXIgaXNSYXcgPSB0eXBlID09PSBSQVc7XG4gICAgICB2YXIgaGFzVmFsdWVJblN0YXRlID0gZm9ybVN0YXRlLmN1cnJlbnQudmFsdWVzW25hbWVdICE9PSB1bmRlZmluZWQ7IC8vIFRoaXMgaXMgdXNlZCB0byBjYWNoZSBpbnB1dCBwcm9wcyB0aGF0IHNob3VsZG4ndCBjaGFuZ2UgYWNyb3NzXG4gICAgICAvLyByZS1yZW5kZXJzLiAgTm90ZSB0aGF0IGZvciBgcmF3YCB2YWx1ZXMsIGB0b1N0cmluZyhvd25WYWx1ZSlgXG4gICAgICAvLyB3aWxsIHJldHVybiAnW29iamVjdCBPYmplY3RdJy4gIFRoaXMgbWVhbnMgd2UgY2FuJ3QgaGF2ZSBtdWx0aXBsZVxuICAgICAgLy8gcmF3IGlucHV0cyB3aXRoIHRoZSBzYW1lIG5hbWUgYW5kIGRpZmZlcmVudCB2YWx1ZXMsIGJ1dCB0aGlzIGlzXG4gICAgICAvLyBwcm9iYWJseSBmaW5lLlxuXG4gICAgICB2YXIga2V5ID0gXCJcIi5jb25jYXQodHlwZSwgXCIuXCIpLmNvbmNhdChuYW1lLCBcIi5cIikuY29uY2F0KHRvU3RyaW5nKG93blZhbHVlKSk7XG5cbiAgICAgIGZ1bmN0aW9uIHNldERlZmF1bHRWYWx1ZSgpIHtcbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAgICAgaWYgKGlzUmF3ICYmIGZvcm1TdGF0ZS5jdXJyZW50LnZhbHVlc1tuYW1lXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB3YXJuKGtleSwgJ21pc3NpbmdJbml0aWFsVmFsdWUnLCBcIlRoZSBpbml0aWFsIHZhbHVlIGZvciBpbnB1dCBcXFwiXCIuY29uY2F0KG5hbWUsIFwiXFxcIiBpcyBtaXNzaW5nLiBDdXN0b20gaW5wdXRzIFwiKSArICdjb250cm9sbGVkIHdpdGggcmF3KCkgYXJlIGV4cGVjdGVkIHRvIGhhdmUgYW4gaW5pdGlhbCB2YWx1ZSAnICsgJ3Byb3ZpZGVkIHRvIHVzZUZvcm1TdGF0ZSgpLiBUbyBwcmV2ZW50IFJlYWN0IGZyb20gdHJlYXRpbmcgJyArICd0aGlzIGlucHV0IGFzIHVuY29udHJvbGxlZCwgYW4gZW1wdHkgc3RyaW5nIHdpbGwgYmUgdXNlZCBpbnN0ZWFkLicpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB2YWx1ZSA9ICcnO1xuXG4gICAgICAgIGlmIChpc0NoZWNrYm94KSB7XG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogSWYgYSBjaGVja2JveCBoYXMgYSB1c2VyLWRlZmluZWQgdmFsdWUsIGl0cyB2YWx1ZSB0aGUgZm9ybSBzdGF0ZVxuICAgICAgICAgICAqIHZhbHVlIHdpbGwgYmUgYW4gYXJyYXkuIE90aGVyd2lzZSBpdCB3aWxsIGJlIGNvbnNpZGVyZWQgYSB0b2dnbGUuXG4gICAgICAgICAgICovXG4gICAgICAgICAgdmFsdWUgPSBoYXNPd25WYWx1ZSA/IFtdIDogZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNTZWxlY3RNdWx0aXBsZSkge1xuICAgICAgICAgIHZhbHVlID0gW107XG4gICAgICAgIH1cblxuICAgICAgICBmb3JtU3RhdGUuc2V0VmFsdWVzKF9kZWZpbmVQcm9wZXJ0eSh7fSwgbmFtZSwgdmFsdWUpKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gZ2V0TmV4dENoZWNrYm94VmFsdWUoZSkge1xuICAgICAgICB2YXIgX2UkdGFyZ2V0ID0gZS50YXJnZXQsXG4gICAgICAgICAgICB2YWx1ZSA9IF9lJHRhcmdldC52YWx1ZSxcbiAgICAgICAgICAgIGNoZWNrZWQgPSBfZSR0YXJnZXQuY2hlY2tlZDtcblxuICAgICAgICBpZiAoIWhhc093blZhbHVlKSB7XG4gICAgICAgICAgcmV0dXJuIGNoZWNrZWQ7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgY2hlY2tlZFZhbHVlcyA9IG5ldyBTZXQoZm9ybVN0YXRlLmN1cnJlbnQudmFsdWVzW25hbWVdKTtcblxuICAgICAgICBpZiAoY2hlY2tlZCkge1xuICAgICAgICAgIGNoZWNrZWRWYWx1ZXMuYWRkKHZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjaGVja2VkVmFsdWVzLmRlbGV0ZSh2YWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbShjaGVja2VkVmFsdWVzKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gZ2V0TmV4dFNlbGVjdE11bHRpcGxlVmFsdWUoZSkge1xuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbShlLnRhcmdldC5vcHRpb25zKS5yZWR1Y2UoZnVuY3Rpb24gKHZhbHVlcywgb3B0aW9uKSB7XG4gICAgICAgICAgcmV0dXJuIG9wdGlvbi5zZWxlY3RlZCA/IF90b0NvbnN1bWFibGVBcnJheSh2YWx1ZXMpLmNvbmNhdChbb3B0aW9uLnZhbHVlXSkgOiB2YWx1ZXM7XG4gICAgICAgIH0sIFtdKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gdmFsaWRhdGUoZSkge1xuICAgICAgICB2YXIgdmFsdWUgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IGlzUmF3ID8gZm9ybVN0YXRlLmN1cnJlbnQudmFsdWVzW25hbWVdIDogZS50YXJnZXQudmFsdWU7XG4gICAgICAgIHZhciB2YWx1ZXMgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IGZvcm1TdGF0ZS5jdXJyZW50LnZhbHVlcztcbiAgICAgICAgdmFyIGVycm9yO1xuICAgICAgICB2YXIgaXNWYWxpZCA9IHRydWU7XG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG5cbiAgICAgICAgaWYgKGlzRnVuY3Rpb24oaW5wdXRPcHRpb25zLnZhbGlkYXRlKSkge1xuICAgICAgICAgIHZhciByZXN1bHQgPSBpbnB1dE9wdGlvbnMudmFsaWRhdGUodmFsdWUsIHZhbHVlcywgZSk7XG5cbiAgICAgICAgICBpZiAocmVzdWx0ICE9PSB0cnVlICYmIHJlc3VsdCAhPSBudWxsKSB7XG4gICAgICAgICAgICBpc1ZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgICBlcnJvciA9IHJlc3VsdCAhPT0gZmFsc2UgPyByZXN1bHQgOiAnJztcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoIWlzUmF3KSB7XG4gICAgICAgICAgaXNWYWxpZCA9IGUudGFyZ2V0LnZhbGlkaXR5LnZhbGlkO1xuICAgICAgICAgIGVycm9yID0gZS50YXJnZXQudmFsaWRhdGlvbk1lc3NhZ2U7XG4gICAgICAgIH0gZWxzZSBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgICAgICB3YXJuKGtleSwgJ21pc3NpbmdWYWxpZGF0ZScsIFwiWW91IHVzZWQgYSByYXcgaW5wdXQgdHlwZSBmb3IgXFxcIlwiLmNvbmNhdChuYW1lLCBcIlxcXCIgd2l0aG91dCBwcm92aWRpbmcgYSBcIikgKyAnY3VzdG9tIHZhbGlkYXRlIG1ldGhvZC4gQXMgYSByZXN1bHQsIHZhbGlkYXRpb24gb2YgdGhpcyBpbnB1dCAnICsgJ3dpbGwgYmUgc2V0IHRvIFwidHJ1ZVwiIGF1dG9tYXRpY2FsbHkuIElmIHlvdSBuZWVkIHRvIHZhbGlkYXRlICcgKyAndGhpcyBpbnB1dCwgcHJvdmlkZSBhIGN1c3RvbSB2YWxpZGF0aW9uIG9wdGlvbi4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvcm1TdGF0ZS5zZXRWYWxpZGl0eShfZGVmaW5lUHJvcGVydHkoe30sIG5hbWUsIGlzVmFsaWQpKTtcbiAgICAgICAgZm9ybVN0YXRlLnNldEVycm9yKGlzRW1wdHkoZXJyb3IpID8gb21pdChuYW1lKSA6IF9kZWZpbmVQcm9wZXJ0eSh7fSwgbmFtZSwgZXJyb3IpKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gdG91Y2goZSkge1xuICAgICAgICBpZiAoIWZvcm1TdGF0ZS5jdXJyZW50LnRvdWNoZWRbbmFtZV0pIHtcbiAgICAgICAgICBmb3JtU3RhdGUuc2V0VG91Y2hlZChfZGVmaW5lUHJvcGVydHkoe30sIG5hbWUsIHRydWUpKTtcbiAgICAgICAgICBmb3JtT3B0aW9ucy5vblRvdWNoZWQoZSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIGlucHV0UHJvcHMgPSBfb2JqZWN0U3ByZWFkKHtcbiAgICAgICAgbmFtZTogbmFtZSxcblxuICAgICAgICBnZXQgdHlwZSgpIHtcbiAgICAgICAgICBpZiAodHlwZSAhPT0gU0VMRUNUICYmIHR5cGUgIT09IFNFTEVDVF9NVUxUSVBMRSAmJiB0eXBlICE9PSBURVhUQVJFQSkge1xuICAgICAgICAgICAgcmV0dXJuIHR5cGU7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGdldCBtdWx0aXBsZSgpIHtcbiAgICAgICAgICBpZiAodHlwZSA9PT0gU0VMRUNUX01VTFRJUExFKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgZ2V0IGNoZWNrZWQoKSB7XG4gICAgICAgICAgdmFyIHZhbHVlcyA9IGZvcm1TdGF0ZS5jdXJyZW50LnZhbHVlcztcblxuICAgICAgICAgIGlmIChpc1JhZGlvKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWVzW25hbWVdID09PSB0b1N0cmluZyhvd25WYWx1ZSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGlzQ2hlY2tib3gpIHtcbiAgICAgICAgICAgIGlmICghaGFzT3duVmFsdWUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlc1tuYW1lXSB8fCBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQHRvZG8gSGFuZGxlIHRoZSBjYXNlIHdoZXJlIHR3byBjaGVja2JveCBpbnB1dHMgc2hhcmUgdGhlIHNhbWVcbiAgICAgICAgICAgICAqIG5hbWUsIGJ1dCBvbmUgaGFzIGEgdmFsdWUsIHRoZSBvdGhlciBkb2Vzbid0ICh0aHJvd3MgY3VycmVudGx5KS5cbiAgICAgICAgICAgICAqIDxpbnB1dCB7Li4uaW5wdXQuY2hlY2tib3goJ29wdGlvbjEnKX0gLz5cbiAgICAgICAgICAgICAqIDxpbnB1dCB7Li4uaW5wdXQuY2hlY2tib3goJ29wdGlvbjEnLCAndmFsdWVfb2Zfb3B0aW9uMScpfSAvPlxuICAgICAgICAgICAgICovXG5cblxuICAgICAgICAgICAgcmV0dXJuIGhhc1ZhbHVlSW5TdGF0ZSA/IHZhbHVlc1tuYW1lXS5pbmNsdWRlcyh0b1N0cmluZyhvd25WYWx1ZSkpIDogZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGdldCB2YWx1ZSgpIHtcbiAgICAgICAgICBpZiAoIWhhc1ZhbHVlSW5TdGF0ZSkge1xuICAgICAgICAgICAgLy8gYXV0byBwb3B1bGF0aW5nIGRlZmF1bHQgdmFsdWVzIGlmIGFuIGluaXRpYWwgdmFsdWUgaXMgbm90IHByb3ZpZGVkXG4gICAgICAgICAgICBzZXREZWZhdWx0VmFsdWUoKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKCFmb3JtU3RhdGUuaW5pdGlhbFZhbHVlcy5oYXMobmFtZSkpIHtcbiAgICAgICAgICAgIC8vIGtlZXAgdHJhY2sgb2YgdXNlci1wcm92aWRlZCBpbml0aWFsIHZhbHVlcyBvbiBmaXJzdCByZW5kZXJcbiAgICAgICAgICAgIGZvcm1TdGF0ZS5pbml0aWFsVmFsdWVzLnNldChuYW1lLCBmb3JtU3RhdGUuY3VycmVudC52YWx1ZXNbbmFtZV0pO1xuICAgICAgICAgIH0gLy8gYXV0byBwb3B1bGF0aW5nIGRlZmF1bHQgdmFsdWVzIG9mIHRvdWNoZWRcblxuXG4gICAgICAgICAgaWYgKGZvcm1TdGF0ZS5jdXJyZW50LnRvdWNoZWRbbmFtZV0gPT0gbnVsbCkge1xuICAgICAgICAgICAgZm9ybVN0YXRlLnNldFRvdWNoZWQoX2RlZmluZVByb3BlcnR5KHt9LCBuYW1lLCBmYWxzZSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBTaW5jZSBjaGVja2JveCBhbmQgcmFkaW8gaW5wdXRzIGhhdmUgdGhlaXIgb3duIHVzZXItZGVmaW5lZCB2YWx1ZXMsXG4gICAgICAgICAgICogYW5kIHNpbmNlIGNoZWNrYm94IGlucHV0cyBjYW4gYmUgZWl0aGVyIGFuIGFycmF5IG9yIGEgYm9vbGVhbixcbiAgICAgICAgICAgKiByZXR1cm5pbmcgdGhlIHZhbHVlIG9mIGlucHV0IGZyb20gdGhlIGN1cnJlbnQgZm9ybSBzdGF0ZSBpcyBpbGxvZ2ljYWxcbiAgICAgICAgICAgKi9cblxuXG4gICAgICAgICAgaWYgKGlzQ2hlY2tib3ggfHwgaXNSYWRpbykge1xuICAgICAgICAgICAgcmV0dXJuIHRvU3RyaW5nKG93blZhbHVlKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gaGFzVmFsdWVJblN0YXRlID8gZm9ybVN0YXRlLmN1cnJlbnQudmFsdWVzW25hbWVdIDogJyc7XG4gICAgICAgIH0sXG5cbiAgICAgICAgb25DaGFuZ2U6IGNhbGxiYWNrcy5nZXRPclNldChPTl9CTFVSX0hBTkRMRVIgKyBrZXksIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgc2V0RGlydHkobmFtZSwgdHJ1ZSk7XG4gICAgICAgICAgdmFyIHZhbHVlO1xuXG4gICAgICAgICAgaWYgKGlzUmF3KSB7XG4gICAgICAgICAgICB2YWx1ZSA9IGlucHV0T3B0aW9ucy5vbkNoYW5nZShlKTtcblxuICAgICAgICAgICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgLy8gc2V0dGluZyB2YWx1ZSB0byBpdHMgY3VycmVudCBzdGF0ZSBpZiBvbkNoYW5nZSBkb2VzIG5vdCByZXR1cm5cbiAgICAgICAgICAgICAgLy8gdmFsdWUgdG8gcHJldmVudCBSZWFjdCBmcm9tIGNvbXBsYWluaW5nIGFib3V0IHRoZSBpbnB1dCBzd2l0Y2hpbmdcbiAgICAgICAgICAgICAgLy8gZnJvbSBjb250cm9sbGVkIHRvIHVuY29udHJvbGxlZFxuICAgICAgICAgICAgICB2YWx1ZSA9IGZvcm1TdGF0ZS5jdXJyZW50LnZhbHVlc1tuYW1lXTtcbiAgICAgICAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cblxuICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgICAgICAgICAgICB3YXJuKGtleSwgJ29uQ2hhbmdlVW5kZWZpbmVkJywgXCJZb3UgdXNlZCBhIHJhdyBpbnB1dCB0eXBlIGZvciBcXFwiXCIuY29uY2F0KG5hbWUsIFwiXFxcIiB3aXRoIGFuIG9uQ2hhbmdlKCkgXCIpICsgJ29wdGlvbiB3aXRob3V0IHJldHVybmluZyBhIHZhbHVlLiBUaGUgb25DaGFuZ2UgY2FsbGJhY2sgJyArICdvZiByYXcgaW5wdXRzLCB3aGVuIHByb3ZpZGVkLCBpcyB1c2VkIHRvIGRldGVybWluZSB0aGUgJyArICdjdXN0b20gdmFsdWUgdGhhdCB3aWxsIGJlIHN0b3JlZCBpbiB0aGUgZm9ybSBzdGF0ZS4gJyArICdUaGVyZWZvcmUsIGEgdmFsdWUgbXVzdCBiZSByZXR1cm5lZCBmcm9tIHRoZSBvbkNoYW5nZSBjYWxsYmFjay4nKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoaXNDaGVja2JveCkge1xuICAgICAgICAgICAgICB2YWx1ZSA9IGdldE5leHRDaGVja2JveFZhbHVlKGUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChpc1NlbGVjdE11bHRpcGxlKSB7XG4gICAgICAgICAgICAgIHZhbHVlID0gZ2V0TmV4dFNlbGVjdE11bHRpcGxlVmFsdWUoZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpbnB1dE9wdGlvbnMub25DaGFuZ2UoZSk7XG4gICAgICAgICAgfSAvLyBNYXJrIHJhdyBmaWVsZHMgYXMgdG91Y2hlZCBvbiBjaGFuZ2UsIHNpbmNlIHdlIG1pZ2h0IG5vdCBnZXQgYW5cbiAgICAgICAgICAvLyBgb25CbHVyYCBldmVudCBmcm9tIHRoZW0uXG5cblxuICAgICAgICAgIGlmIChpbnB1dE9wdGlvbnMudG91Y2hPbkNoYW5nZSkge1xuICAgICAgICAgICAgdG91Y2goZSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdmFyIHBhcnRpYWxOZXdTdGF0ZSA9IF9kZWZpbmVQcm9wZXJ0eSh7fSwgbmFtZSwgdmFsdWUpO1xuXG4gICAgICAgICAgdmFyIG5ld1ZhbHVlcyA9IF9vYmplY3RTcHJlYWQoe30sIGZvcm1TdGF0ZS5jdXJyZW50LnZhbHVlcywgcGFydGlhbE5ld1N0YXRlKTtcblxuICAgICAgICAgIGZvcm1PcHRpb25zLm9uQ2hhbmdlKGUsIGZvcm1TdGF0ZS5jdXJyZW50LnZhbHVlcywgbmV3VmFsdWVzKTtcbiAgICAgICAgICB2YXIgdmFsaWRhdGVPbkJsdXIgPSBmb3JtT3B0aW9ucy52YWxpZGF0ZU9uQmx1ciA/IGlucHV0T3B0aW9ucy52YWxpZGF0ZU9uQmx1ciAhPT0gZmFsc2UgOiBpbnB1dE9wdGlvbnMudmFsaWRhdGVPbkJsdXI7XG5cbiAgICAgICAgICBpZiAoIXZhbGlkYXRlT25CbHVyKSB7XG4gICAgICAgICAgICB2YWxpZGF0ZShlLCB2YWx1ZSwgbmV3VmFsdWVzKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBmb3JtU3RhdGUuc2V0VmFsdWVzKHBhcnRpYWxOZXdTdGF0ZSk7XG4gICAgICAgIH0pLFxuICAgICAgICBvbkJsdXI6IGNhbGxiYWNrcy5nZXRPclNldChPTl9DSEFOR0VfSEFORExFUiArIGtleSwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICB0b3VjaChlKTtcbiAgICAgICAgICBpbnB1dE9wdGlvbnMub25CbHVyKGUpO1xuICAgICAgICAgIGZvcm1PcHRpb25zLm9uQmx1cihlKTtcbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBMaW1pdGluZyBpbnB1dCB2YWxpZGF0aW9uIG9uIGJsdXIgdG86XG4gICAgICAgICAgICogQSkgd2hlbiBpdCdzIGVpdGhlciB0b3VjaGVkIGZvciB0aGUgZmlyc3QgdGltZVxuICAgICAgICAgICAqIEIpIHdoZW4gaXQncyBtYXJrZWQgYXMgZGlydHkgZHVlIHRvIGEgdmFsdWUgY2hhbmdlXG4gICAgICAgICAgICovXG5cbiAgICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuXG4gICAgICAgICAgaWYgKCFmb3JtU3RhdGUuY3VycmVudC50b3VjaGVkW25hbWVdIHx8IGlzRGlydHkobmFtZSkpIHtcbiAgICAgICAgICAgIHZhbGlkYXRlKGUpO1xuICAgICAgICAgICAgc2V0RGlydHkobmFtZSwgZmFsc2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0sIGdldElkUHJvcCgnaWQnLCBuYW1lLCBvd25WYWx1ZSkpO1xuXG4gICAgICByZXR1cm4gaXNSYXcgPyB7XG4gICAgICAgIG9uQ2hhbmdlOiBpbnB1dFByb3BzLm9uQ2hhbmdlLFxuICAgICAgICBvbkJsdXI6IGlucHV0UHJvcHMub25CbHVyLFxuICAgICAgICB2YWx1ZTogaW5wdXRQcm9wcy52YWx1ZVxuICAgICAgfSA6IGlucHV0UHJvcHM7XG4gICAgfTtcbiAgfTtcblxuICB2YXIgZm9ybVN0YXRlQVBJID0gdXNlUmVmKHtcbiAgICBjbGVhckZpZWxkOiBmb3JtU3RhdGUuY2xlYXJGaWVsZCxcbiAgICByZXNldEZpZWxkOiBmb3JtU3RhdGUucmVzZXRGaWVsZCxcbiAgICBzZXRGaWVsZDogZnVuY3Rpb24gc2V0RmllbGQobmFtZSwgdmFsdWUpIHtcbiAgICAgIGZvcm1TdGF0ZS5zZXRGaWVsZChuYW1lLCB2YWx1ZSwgdHJ1ZSwgdHJ1ZSk7XG4gICAgfSxcbiAgICBzZXRGaWVsZEVycm9yOiBmdW5jdGlvbiBzZXRGaWVsZEVycm9yKG5hbWUsIGVycm9yKSB7XG4gICAgICBmb3JtU3RhdGUuc2V0VmFsaWRpdHkoX2RlZmluZVByb3BlcnR5KHt9LCBuYW1lLCBmYWxzZSkpO1xuICAgICAgZm9ybVN0YXRlLnNldEVycm9yKF9kZWZpbmVQcm9wZXJ0eSh7fSwgbmFtZSwgZXJyb3IpKTtcbiAgICB9LFxuICAgIGNsZWFyOiBmdW5jdGlvbiBjbGVhcigpIHtcbiAgICAgIGZvcm1TdGF0ZS5mb3JFYWNoKGZvcm1TdGF0ZS5jbGVhckZpZWxkKTtcbiAgICAgIGZvcm1PcHRpb25zLm9uQ2xlYXIoKTtcbiAgICB9LFxuICAgIHJlc2V0OiBmdW5jdGlvbiByZXNldCgpIHtcbiAgICAgIGZvcm1TdGF0ZS5mb3JFYWNoKGZvcm1TdGF0ZS5yZXNldEZpZWxkKTtcbiAgICAgIGZvcm1PcHRpb25zLm9uUmVzZXQoKTtcbiAgICB9XG4gIH0pOyAvLyBleHBvc2luZyBjdXJyZW50IGZvcm0gc3RhdGUgKGUuZy4gdmFsdWVzLCB0b3VjaGVkLCB2YWxpZGl0eSwgZXRjKVxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZ3VhcmQtZm9yLWluLCBuby1yZXN0cmljdGVkLXN5bnRheFxuXG4gIGZvciAodmFyIGtleSBpbiBmb3JtU3RhdGUuY3VycmVudCkge1xuICAgIGZvcm1TdGF0ZUFQSS5jdXJyZW50W2tleV0gPSBmb3JtU3RhdGUuY3VycmVudFtrZXldO1xuICB9XG5cbiAgdmFyIGlucHV0UHJvcHNDcmVhdG9ycyA9IF9kZWZpbmVQcm9wZXJ0eSh7fSwgTEFCRUwsIGZ1bmN0aW9uIChuYW1lLCBvd25WYWx1ZSkge1xuICAgIHJldHVybiBnZXRJZFByb3AoJ2h0bWxGb3InLCBuYW1lLCBvd25WYWx1ZSk7XG4gIH0pO1xuXG4gIElOUFVUX1RZUEVTLmZvckVhY2goZnVuY3Rpb24gKHR5cGUpIHtcbiAgICBpbnB1dFByb3BzQ3JlYXRvcnNbdHlwZV0gPSBjcmVhdGVQcm9wc0dldHRlcih0eXBlKTtcbiAgfSk7XG4gIHJldHVybiBbZm9ybVN0YXRlQVBJLmN1cnJlbnQsIGlucHV0UHJvcHNDcmVhdG9yc107XG59XG5cbmV4cG9ydCB7IHVzZUZvcm1TdGF0ZSB9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==