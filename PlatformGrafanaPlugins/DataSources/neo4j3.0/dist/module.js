define(["@grafana/data","@grafana/runtime","@grafana/ui","react","rxjs"], function(__WEBPACK_EXTERNAL_MODULE__grafana_data__, __WEBPACK_EXTERNAL_MODULE__grafana_runtime__, __WEBPACK_EXTERNAL_MODULE__grafana_ui__, __WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_rxjs__) { return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./module.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/lodash/_Symbol.js":
/*!*****************************************!*\
  !*** ../node_modules/lodash/_Symbol.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "../node_modules/lodash/_root.js");

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),

/***/ "../node_modules/lodash/_apply.js":
/*!****************************************!*\
  !*** ../node_modules/lodash/_apply.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

module.exports = apply;


/***/ }),

/***/ "../node_modules/lodash/_arrayLikeKeys.js":
/*!************************************************!*\
  !*** ../node_modules/lodash/_arrayLikeKeys.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseTimes = __webpack_require__(/*! ./_baseTimes */ "../node_modules/lodash/_baseTimes.js"),
    isArguments = __webpack_require__(/*! ./isArguments */ "../node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__(/*! ./isArray */ "../node_modules/lodash/isArray.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "../node_modules/lodash/isBuffer.js"),
    isIndex = __webpack_require__(/*! ./_isIndex */ "../node_modules/lodash/_isIndex.js"),
    isTypedArray = __webpack_require__(/*! ./isTypedArray */ "../node_modules/lodash/isTypedArray.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;


/***/ }),

/***/ "../node_modules/lodash/_baseGetTag.js":
/*!*********************************************!*\
  !*** ../node_modules/lodash/_baseGetTag.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "../node_modules/lodash/_Symbol.js"),
    getRawTag = __webpack_require__(/*! ./_getRawTag */ "../node_modules/lodash/_getRawTag.js"),
    objectToString = __webpack_require__(/*! ./_objectToString */ "../node_modules/lodash/_objectToString.js");

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),

/***/ "../node_modules/lodash/_baseIsArguments.js":
/*!**************************************************!*\
  !*** ../node_modules/lodash/_baseIsArguments.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "../node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "../node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;


/***/ }),

/***/ "../node_modules/lodash/_baseIsNative.js":
/*!***********************************************!*\
  !*** ../node_modules/lodash/_baseIsNative.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(/*! ./isFunction */ "../node_modules/lodash/isFunction.js"),
    isMasked = __webpack_require__(/*! ./_isMasked */ "../node_modules/lodash/_isMasked.js"),
    isObject = __webpack_require__(/*! ./isObject */ "../node_modules/lodash/isObject.js"),
    toSource = __webpack_require__(/*! ./_toSource */ "../node_modules/lodash/_toSource.js");

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ }),

/***/ "../node_modules/lodash/_baseIsTypedArray.js":
/*!***************************************************!*\
  !*** ../node_modules/lodash/_baseIsTypedArray.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "../node_modules/lodash/_baseGetTag.js"),
    isLength = __webpack_require__(/*! ./isLength */ "../node_modules/lodash/isLength.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "../node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;


/***/ }),

/***/ "../node_modules/lodash/_baseKeysIn.js":
/*!*********************************************!*\
  !*** ../node_modules/lodash/_baseKeysIn.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./isObject */ "../node_modules/lodash/isObject.js"),
    isPrototype = __webpack_require__(/*! ./_isPrototype */ "../node_modules/lodash/_isPrototype.js"),
    nativeKeysIn = __webpack_require__(/*! ./_nativeKeysIn */ "../node_modules/lodash/_nativeKeysIn.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeysIn;


/***/ }),

/***/ "../node_modules/lodash/_baseRest.js":
/*!*******************************************!*\
  !*** ../node_modules/lodash/_baseRest.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var identity = __webpack_require__(/*! ./identity */ "../node_modules/lodash/identity.js"),
    overRest = __webpack_require__(/*! ./_overRest */ "../node_modules/lodash/_overRest.js"),
    setToString = __webpack_require__(/*! ./_setToString */ "../node_modules/lodash/_setToString.js");

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return setToString(overRest(func, start, identity), func + '');
}

module.exports = baseRest;


/***/ }),

/***/ "../node_modules/lodash/_baseSetToString.js":
/*!**************************************************!*\
  !*** ../node_modules/lodash/_baseSetToString.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var constant = __webpack_require__(/*! ./constant */ "../node_modules/lodash/constant.js"),
    defineProperty = __webpack_require__(/*! ./_defineProperty */ "../node_modules/lodash/_defineProperty.js"),
    identity = __webpack_require__(/*! ./identity */ "../node_modules/lodash/identity.js");

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !defineProperty ? identity : function(func, string) {
  return defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(string),
    'writable': true
  });
};

module.exports = baseSetToString;


/***/ }),

/***/ "../node_modules/lodash/_baseTimes.js":
/*!********************************************!*\
  !*** ../node_modules/lodash/_baseTimes.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;


/***/ }),

/***/ "../node_modules/lodash/_baseUnary.js":
/*!********************************************!*\
  !*** ../node_modules/lodash/_baseUnary.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ }),

/***/ "../node_modules/lodash/_coreJsData.js":
/*!*********************************************!*\
  !*** ../node_modules/lodash/_coreJsData.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "../node_modules/lodash/_root.js");

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),

/***/ "../node_modules/lodash/_defineProperty.js":
/*!*************************************************!*\
  !*** ../node_modules/lodash/_defineProperty.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "../node_modules/lodash/_getNative.js");

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

module.exports = defineProperty;


/***/ }),

/***/ "../node_modules/lodash/_freeGlobal.js":
/*!*********************************************!*\
  !*** ../node_modules/lodash/_freeGlobal.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../node_modules/lodash/_getNative.js":
/*!********************************************!*\
  !*** ../node_modules/lodash/_getNative.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsNative = __webpack_require__(/*! ./_baseIsNative */ "../node_modules/lodash/_baseIsNative.js"),
    getValue = __webpack_require__(/*! ./_getValue */ "../node_modules/lodash/_getValue.js");

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ }),

/***/ "../node_modules/lodash/_getRawTag.js":
/*!********************************************!*\
  !*** ../node_modules/lodash/_getRawTag.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "../node_modules/lodash/_Symbol.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),

/***/ "../node_modules/lodash/_getValue.js":
/*!*******************************************!*\
  !*** ../node_modules/lodash/_getValue.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),

/***/ "../node_modules/lodash/_isIndex.js":
/*!******************************************!*\
  !*** ../node_modules/lodash/_isIndex.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),

/***/ "../node_modules/lodash/_isIterateeCall.js":
/*!*************************************************!*\
  !*** ../node_modules/lodash/_isIterateeCall.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(/*! ./eq */ "../node_modules/lodash/eq.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "../node_modules/lodash/isArrayLike.js"),
    isIndex = __webpack_require__(/*! ./_isIndex */ "../node_modules/lodash/_isIndex.js"),
    isObject = __webpack_require__(/*! ./isObject */ "../node_modules/lodash/isObject.js");

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike(object) && isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq(object[index], value);
  }
  return false;
}

module.exports = isIterateeCall;


/***/ }),

/***/ "../node_modules/lodash/_isMasked.js":
/*!*******************************************!*\
  !*** ../node_modules/lodash/_isMasked.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var coreJsData = __webpack_require__(/*! ./_coreJsData */ "../node_modules/lodash/_coreJsData.js");

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ }),

/***/ "../node_modules/lodash/_isPrototype.js":
/*!**********************************************!*\
  !*** ../node_modules/lodash/_isPrototype.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;


/***/ }),

/***/ "../node_modules/lodash/_nativeKeysIn.js":
/*!***********************************************!*\
  !*** ../node_modules/lodash/_nativeKeysIn.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

module.exports = nativeKeysIn;


/***/ }),

/***/ "../node_modules/lodash/_nodeUtil.js":
/*!*******************************************!*\
  !*** ../node_modules/lodash/_nodeUtil.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "../node_modules/lodash/_freeGlobal.js");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "../node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "../node_modules/lodash/_objectToString.js":
/*!*************************************************!*\
  !*** ../node_modules/lodash/_objectToString.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),

/***/ "../node_modules/lodash/_overRest.js":
/*!*******************************************!*\
  !*** ../node_modules/lodash/_overRest.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var apply = __webpack_require__(/*! ./_apply */ "../node_modules/lodash/_apply.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}

module.exports = overRest;


/***/ }),

/***/ "../node_modules/lodash/_root.js":
/*!***************************************!*\
  !*** ../node_modules/lodash/_root.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "../node_modules/lodash/_freeGlobal.js");

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),

/***/ "../node_modules/lodash/_setToString.js":
/*!**********************************************!*\
  !*** ../node_modules/lodash/_setToString.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseSetToString = __webpack_require__(/*! ./_baseSetToString */ "../node_modules/lodash/_baseSetToString.js"),
    shortOut = __webpack_require__(/*! ./_shortOut */ "../node_modules/lodash/_shortOut.js");

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = shortOut(baseSetToString);

module.exports = setToString;


/***/ }),

/***/ "../node_modules/lodash/_shortOut.js":
/*!*******************************************!*\
  !*** ../node_modules/lodash/_shortOut.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

module.exports = shortOut;


/***/ }),

/***/ "../node_modules/lodash/_toSource.js":
/*!*******************************************!*\
  !*** ../node_modules/lodash/_toSource.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ }),

/***/ "../node_modules/lodash/constant.js":
/*!******************************************!*\
  !*** ../node_modules/lodash/constant.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

module.exports = constant;


/***/ }),

/***/ "../node_modules/lodash/defaults.js":
/*!******************************************!*\
  !*** ../node_modules/lodash/defaults.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseRest = __webpack_require__(/*! ./_baseRest */ "../node_modules/lodash/_baseRest.js"),
    eq = __webpack_require__(/*! ./eq */ "../node_modules/lodash/eq.js"),
    isIterateeCall = __webpack_require__(/*! ./_isIterateeCall */ "../node_modules/lodash/_isIterateeCall.js"),
    keysIn = __webpack_require__(/*! ./keysIn */ "../node_modules/lodash/keysIn.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns own and inherited enumerable string keyed properties of source
 * objects to the destination object for all destination properties that
 * resolve to `undefined`. Source objects are applied from left to right.
 * Once a property is set, additional values of the same property are ignored.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @see _.defaultsDeep
 * @example
 *
 * _.defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
 * // => { 'a': 1, 'b': 2 }
 */
var defaults = baseRest(function(object, sources) {
  object = Object(object);

  var index = -1;
  var length = sources.length;
  var guard = length > 2 ? sources[2] : undefined;

  if (guard && isIterateeCall(sources[0], sources[1], guard)) {
    length = 1;
  }

  while (++index < length) {
    var source = sources[index];
    var props = keysIn(source);
    var propsIndex = -1;
    var propsLength = props.length;

    while (++propsIndex < propsLength) {
      var key = props[propsIndex];
      var value = object[key];

      if (value === undefined ||
          (eq(value, objectProto[key]) && !hasOwnProperty.call(object, key))) {
        object[key] = source[key];
      }
    }
  }

  return object;
});

module.exports = defaults;


/***/ }),

/***/ "../node_modules/lodash/eq.js":
/*!************************************!*\
  !*** ../node_modules/lodash/eq.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),

/***/ "../node_modules/lodash/identity.js":
/*!******************************************!*\
  !*** ../node_modules/lodash/identity.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),

/***/ "../node_modules/lodash/isArguments.js":
/*!*********************************************!*\
  !*** ../node_modules/lodash/isArguments.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsArguments = __webpack_require__(/*! ./_baseIsArguments */ "../node_modules/lodash/_baseIsArguments.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "../node_modules/lodash/isObjectLike.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;


/***/ }),

/***/ "../node_modules/lodash/isArray.js":
/*!*****************************************!*\
  !*** ../node_modules/lodash/isArray.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),

/***/ "../node_modules/lodash/isArrayLike.js":
/*!*********************************************!*\
  !*** ../node_modules/lodash/isArrayLike.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(/*! ./isFunction */ "../node_modules/lodash/isFunction.js"),
    isLength = __webpack_require__(/*! ./isLength */ "../node_modules/lodash/isLength.js");

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),

/***/ "../node_modules/lodash/isBuffer.js":
/*!******************************************!*\
  !*** ../node_modules/lodash/isBuffer.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(/*! ./_root */ "../node_modules/lodash/_root.js"),
    stubFalse = __webpack_require__(/*! ./stubFalse */ "../node_modules/lodash/stubFalse.js");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "../node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "../node_modules/lodash/isFunction.js":
/*!********************************************!*\
  !*** ../node_modules/lodash/isFunction.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "../node_modules/lodash/_baseGetTag.js"),
    isObject = __webpack_require__(/*! ./isObject */ "../node_modules/lodash/isObject.js");

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),

/***/ "../node_modules/lodash/isLength.js":
/*!******************************************!*\
  !*** ../node_modules/lodash/isLength.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),

/***/ "../node_modules/lodash/isObject.js":
/*!******************************************!*\
  !*** ../node_modules/lodash/isObject.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),

/***/ "../node_modules/lodash/isObjectLike.js":
/*!**********************************************!*\
  !*** ../node_modules/lodash/isObjectLike.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),

/***/ "../node_modules/lodash/isTypedArray.js":
/*!**********************************************!*\
  !*** ../node_modules/lodash/isTypedArray.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsTypedArray = __webpack_require__(/*! ./_baseIsTypedArray */ "../node_modules/lodash/_baseIsTypedArray.js"),
    baseUnary = __webpack_require__(/*! ./_baseUnary */ "../node_modules/lodash/_baseUnary.js"),
    nodeUtil = __webpack_require__(/*! ./_nodeUtil */ "../node_modules/lodash/_nodeUtil.js");

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;


/***/ }),

/***/ "../node_modules/lodash/keysIn.js":
/*!****************************************!*\
  !*** ../node_modules/lodash/keysIn.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(/*! ./_arrayLikeKeys */ "../node_modules/lodash/_arrayLikeKeys.js"),
    baseKeysIn = __webpack_require__(/*! ./_baseKeysIn */ "../node_modules/lodash/_baseKeysIn.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "../node_modules/lodash/isArrayLike.js");

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

module.exports = keysIn;


/***/ }),

/***/ "../node_modules/lodash/stubFalse.js":
/*!*******************************************!*\
  !*** ../node_modules/lodash/stubFalse.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),

/***/ "../node_modules/tslib/tslib.es6.js":
/*!******************************************!*\
  !*** ../node_modules/tslib/tslib.es6.js ***!
  \******************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
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
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "../node_modules/webpack/buildin/global.js":
/*!*************************************************!*\
  !*** ../node_modules/webpack/buildin/global.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "../node_modules/webpack/buildin/module.js":
/*!*************************************************!*\
  !*** ../node_modules/webpack/buildin/module.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./AnnotationQueryEditor.ts":
/*!**********************************!*\
  !*** ./AnnotationQueryEditor.ts ***!
  \**********************************/
/*! exports provided: AnnotationQueryEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnnotationQueryEditor", function() { return AnnotationQueryEditor; });
var AnnotationQueryEditor = function () {
  function AnnotationQueryEditor() {
    this.annotation.rawQuery = this.annotation.rawQuery || '';
  }

  AnnotationQueryEditor.templateUrl = 'partials/annotations.editor.html';
  return AnnotationQueryEditor;
}();



/***/ }),

/***/ "./ConfigEditor.tsx":
/*!**************************!*\
  !*** ./ConfigEditor.tsx ***!
  \**************************/
/*! exports provided: ConfigEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigEditor", function() { return ConfigEditor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__);



var logapi = window.location.protocol + "//localhost:8080/PlatformService/externalApi/Neo4jPluginLog/logDashboardInfo";

if (document.domain !== 'localhost') {
  logapi = window.location.protocol + "//" + document.domain + "/PlatformService/externalApi/Neo4jPluginLog/logDashboardInfo";
}

var ConfigEditor = function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ConfigEditor, _super);

  function ConfigEditor() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.onPathChange = function (event) {
      var _a = _this.props,
          onOptionsChange = _a.onOptionsChange,
          options = _a.options;

      var jsonData = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options.jsonData), {
        path: event.target.value
      });

      onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options), {
        jsonData: jsonData
      }));
    }; // Secure field (only sent to th ebackend)


    _this.onAPIKeyChange = function (event) {
      var _a = _this.props,
          onOptionsChange = _a.onOptionsChange,
          options = _a.options;
      onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options), {
        secureJsonData: {
          apiKey: event.target.value
        }
      }));
    };

    _this.onResetAPIKey = function () {
      var _a = _this.props,
          onOptionsChange = _a.onOptionsChange,
          options = _a.options;
      onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options), {
        secureJsonFields: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options.secureJsonFields), {
          apiKey: false
        }),
        secureJsonData: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options.secureJsonData), {
          apiKey: ''
        })
      }));
    };

    _this.onServiceUrlChange = function (event) {
      var _a = _this.props,
          onOptionsChange = _a.onOptionsChange,
          options = _a.options;

      var jsonData = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options.jsonData), {
        serviceUrl: event.target.value
      });

      onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options), {
        jsonData: jsonData
      }));
    };

    _this.onSwitched = function (event) {
      var _a = _this.props,
          onOptionsChange = _a.onOptionsChange,
          options = _a.options;

      var jsonData = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options.jsonData), {
        logging: event.target.checked
      });

      onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options), {
        jsonData: jsonData
      }));
    };

    _this.onBasicPwdChange = function (event) {
      var _a = _this.props,
          onOptionsChange = _a.onOptionsChange,
          options = _a.options;

      var jsonData = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options.jsonData), {
        basicPassword: event.target.value
      });

      onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options), {
        jsonData: jsonData
      }));
    };

    _this.onAuthEnable = function (event) {
      var _a = _this.props,
          onOptionsChange = _a.onOptionsChange,
          options = _a.options;

      var jsonData = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options.jsonData), {
        authToken: event.target.checked
      });

      onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options), {
        jsonData: jsonData
      }));
    };

    return _this;
  }

  ConfigEditor.prototype.render = function () {
    console.log(this.props.options.jsonData);
    var _a = this.props,
        options = _a.options,
        onOptionsChange = _a.onOptionsChange;
    var jsonData = options.jsonData,
        secureJsonFields = options.secureJsonFields;
    var secureJsonData = options.secureJsonData || {};
    options.jsonData.serviceUrl = options.jsonData.serviceUrl == undefined ? logapi : options.jsonData.serviceUrl;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "gf-form-group"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
      className: "page-heading"
    }, "Enable Auth Token"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["LegacyForms"].Switch, {
      label: "Enable Token Auth",
      labelClass: "width-8",
      checked: options.jsonData.authToken,
      onChange: this.onAuthEnable
    }), options.jsonData.authToken && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "gf-form"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["LegacyForms"].FormField, {
      label: "Path",
      labelWidth: 6,
      inputWidth: 20,
      onChange: this.onPathChange,
      value: jsonData.path || '',
      placeholder: "External API url"
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "gf-form-inline"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "gf-form"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["LegacyForms"].SecretFormField, {
      isConfigured: secureJsonFields && secureJsonFields.apiKey,
      value: secureJsonData.apiKey || '',
      label: "API Key",
      placeholder: "secure json field (backend only)",
      labelWidth: 6,
      inputWidth: 20,
      onReset: this.onResetAPIKey,
      onChange: this.onAPIKeyChange
    }))))), !options.jsonData.authToken && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["DataSourceHttpSettings"], {
      defaultUrl: "http://localhost:7474/db/data/transaction/commit?includeStats=true",
      dataSourceConfig: options,
      showAccessOptions: true,
      onChange: onOptionsChange
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
      className: "page-heading"
    }, "Enable Logging"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["LegacyForms"].Switch, {
      label: "Enable Logging",
      labelClass: "width-8",
      checked: options.jsonData.logging,
      onChange: this.onSwitched
    }), options.jsonData.logging && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Field"], {
      label: "Service URL",
      description: "This is required only when insights usage is collected."
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Input"], {
      name: "serviceUrl",
      onChange: this.onServiceUrlChange,
      value: options.jsonData.serviceUrl,
      placeholder: "External API url"
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["LegacyForms"].FormField, {
      label: "Password",
      labelWidth: 6,
      inputWidth: 20,
      onChange: this.onBasicPwdChange,
      value: jsonData.basicPassword || '',
      placeholder: "Base64 password without Basic"
    })));
  };

  return ConfigEditor;
}(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]);



/***/ }),

/***/ "./DataSource.ts":
/*!***********************!*\
  !*** ./DataSource.ts ***!
  \***********************/
/*! exports provided: DataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataSource", function() { return DataSource; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @grafana/data */ "@grafana/data");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_grafana_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @grafana/runtime */ "@grafana/runtime");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var Utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! Utils */ "./Utils.ts");






var DataSource = function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DataSource, _super);

  function DataSource(instanceSettings, templateSrv, dashboardSrv, timeSrv) {
    var _this = _super.call(this, instanceSettings) || this;

    _this.templateSrv = templateSrv;
    _this.dashboardSrv = dashboardSrv;
    _this.timeSrv = timeSrv;
    _this.type = instanceSettings.type;
    _this.url = instanceSettings.url;
    _this.name = instanceSettings.name;
    _this.serviceUrl = instanceSettings.jsonData.serviceUrl;
    _this.datasourceId = instanceSettings.id;
    _this.logging = instanceSettings.jsonData.logging;
    _this.tokenEnabled = instanceSettings.jsonData.authToken;
    return _this;
  }
  /**provides ability to test connection from connection settings page . */


  DataSource.prototype.testDatasource = function () {
    var queryJson = {
      "statements": [{
        "statement": "match (n) return n limit 1",
        "includeStats": true,
        "resultDataContents": ["row", "graph"]
      }],
      "metadata": [{
        "testDB": true
      }]
    };
    var testQuery = JSON.stringify(queryJson);
    var routePath = this.url;

    if (this.tokenEnabled) {
      routePath = this.url + "/platformservice";
    }

    return Object(_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__["getBackendSrv"])().datasourceRequest({
      url: routePath,
      method: 'POST',
      data: testQuery
    }).then(function (res) {
      var data = res.data;

      if (res.status === 200) {
        if (data && data.results.length > 0) {
          return {
            status: 'success',
            message: 'Data source is working'
          };
        } else {
          return {
            status: "failure",
            message: "No data returned",
            title: "failure"
          };
        }
      } else {
        return {
          status: 'error',
          message: res.error
        };
      }
    })["catch"](function (err) {
      console.log(err);

      if (err.data && err.data.errors[0].message) {
        return {
          status: 'error',
          message: err.data.errors[0].message
        };
      } else {
        return {
          status: 'error',
          message: err.status
        };
      }
    });
  };

  DataSource.prototype.query = function (options) {
    var e_1, _a;

    var _this = this;

    var queries = [];
    var streams = [];
    var range = options.range;
    var from1 = range.from.valueOf() / 1000;
    var to = range.to.valueOf() / 1000;
    var cypherQuery = {};
    var statements = [];
    var metadata = [];
    cypherQuery['statements'] = statements;
    cypherQuery['metadata'] = metadata;
    var logInfo = {};
    logInfo['eventName'] = 'data-request';
    logInfo['panelId'] = options.panelId;
    logInfo['dashboardId'] = options.dashboardId;
    logInfo['datasourceId'] = this.datasourceId;
    logInfo['datasourceType'] = this.type;
    logInfo['datasourceName'] = this.name;
    logInfo['timestamp'] = new Date().toISOString();

    try {
      // Start streams and prepare queries
      for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(options.targets), _c = _b.next(); !_c.done; _c = _b.next()) {
        var target = _c.value;

        if (target.hide) {
          continue;
        } //let query = target.queryText;


        var query = this.templateSrv.replace(target.queryText, options.scopedVars, Utils__WEBPACK_IMPORTED_MODULE_4__["applyTemplateVariables"]);
        query = Object(Utils__WEBPACK_IMPORTED_MODULE_4__["addTimestampToQuery"])(query, options);
        var resultDataContents = [];
        var statement = {
          "statement": query,
          "resultDataContents": resultDataContents
        };
        var cacheoptions = {
          "startTime": from1,
          "endTime": to,
          "testDB": false,
          "resultCache": target.cache,
          "cachingType": target.cacheType,
          "cachingValue": target.cacheValue
        };
        statements.push(statement);
        metadata.push(cacheoptions);
        queries.push(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, target), {
          intervalMs: options.intervalMs,
          maxDataPoints: options.maxDataPoints,
          datasourceId: this.id
        }));
      }
    } catch (e_1_1) {
      e_1 = {
        error: e_1_1
      };
    } finally {
      try {
        if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
      } finally {
        if (e_1) throw e_1.error;
      }
    }

    console.log(this.url);
    logInfo['query'] = cypherQuery;
    var startTime = Date.now();

    if (queries.length) {
      var routePath = this.url;

      if (this.tokenEnabled) {
        routePath = this.url + "/platformservice";
      }

      var req = Object(_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__["getBackendSrv"])().datasourceRequest({
        method: 'POST',
        url: routePath,
        data: cypherQuery
      }).then(function (res) {
        var endTime = Date.now();
        logInfo['time_ms'] = endTime - startTime;
        logInfo['panelQuery'] = true;
        logInfo['requestId'] = options.requestId;

        if (_this.logging) {
          try {
            var user = _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__["config"].bootData.user;
            var dashboard = _this.dashboardSrv.dashboard;
            logInfo['userId'] = user.id;
            logInfo['userName'] = user.name;
            logInfo['email'] = user.email;
            logInfo['orgId'] = user.orgId;
            logInfo['orgName'] = user.orgName;
            logInfo['uid'] = dashboard.uid;
            logInfo['dashboardName'] = dashboard.title;
            logInfo['panelCount'] = dashboard.panels.length;
            dashboard.panels.forEach(function (panel) {
              if (panel.id === options.panelId) {
                logInfo['panelName'] = panel.title;
                logInfo['chartType'] = panel.type;
              }
            });

            _this.logDashboardInfo(logInfo);
          } catch (e) {
            console.log(e);
          }
        }

        if (queries[0].table) {
          return Object(Utils__WEBPACK_IMPORTED_MODULE_4__["convertResponseToDataFramesTable"])(queries, res);
        } else if (queries[0].graph) {
          return Object(Utils__WEBPACK_IMPORTED_MODULE_4__["convertResponseToDataFramesGraph"])(queries, res);
        } else if (queries[0].raw) {
          return Object(Utils__WEBPACK_IMPORTED_MODULE_4__["convertResponseToDataFramesRaw"])(queries, res);
        } else if (queries[0].mode == 'Metrics' || queries[0].showingTable) {
          //Explore Functionality
          return Object(Utils__WEBPACK_IMPORTED_MODULE_4__["convertResponseToDataFramesTable"])(queries, res);
        } else if (queries[0].mode == 'Metrics' || queries[0].showingGraph) {
          //Explore Functionality
          return Object(Utils__WEBPACK_IMPORTED_MODULE_4__["convertResponseToDataFramesGraph"])(queries, res);
        } else {
          throw new Error("Select some response type");
        }
      });
      streams.push(Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(req));
    }

    return rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"].apply(void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(streams));
  };

  DataSource.prototype.logDashboardInfo = function (logInfo) {
    Object(_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__["getBackendSrv"])().datasourceRequest({
      method: 'POST',
      url: this.url + '/neo4jLog',
      data: logInfo
    }).then(function (res) {
      console.log(res);
    });
  };

  DataSource.prototype.metricFindQuery = function (query, options) {
    var _this = this;

    var cypherQuery = {};
    var statements = [];
    cypherQuery['statements'] = statements;

    if (this.timeSrv && this.timeSrv.timeRange()) {
      var options_1 = {
        range: this.timeSrv.timeRange()
      };
      query = Object(Utils__WEBPACK_IMPORTED_MODULE_4__["addTimestampToQuery"])(query, options_1);
    } //query = addTimestampToQuery(query, null);


    query = this.templateSrv.replace(query, {}, Utils__WEBPACK_IMPORTED_MODULE_4__["applyTemplateVariables"]);
    var resultDataContents = ["row"];
    var statement = {
      "statement": query,
      "includeStats": false,
      "resultDataContents": resultDataContents
    };
    statements.push(statement);
    return new Promise(function (resolve, reject) {
      return Object(_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__["getBackendSrv"])().datasourceRequest({
        url: _this.url,
        method: 'POST',
        data: cypherQuery
      }).then(function (res) {
        var e_2, _a;

        if (res.status === 200 && res.data.errors.length === 0) {
          var result = res.data.results[0];

          if (result) {
            var data = result.data;

            if (data) {
              var metrics = [];

              try {
                for (var data_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(data), data_1_1 = data_1.next(); !data_1_1.done; data_1_1 = data_1.next()) {
                  var row = data_1_1.value;
                  var record = row.row;

                  if (record && record.length > 0) {
                    metrics.push({
                      text: record[0],
                      value: record[0]
                    });
                  }
                }
              } catch (e_2_1) {
                e_2 = {
                  error: e_2_1
                };
              } finally {
                try {
                  if (data_1_1 && !data_1_1.done && (_a = data_1["return"])) _a.call(data_1);
                } finally {
                  if (e_2) throw e_2.error;
                }
              }

              return resolve(metrics);
            }
          }
        } else {
          return reject(res.data.errors[0].message);
        }
      })["catch"](function (err) {
        console.log(err);

        if (err.data && err.data.message) {
          return {
            status: 'error',
            message: err.data.message
          };
        } else {
          return {
            status: 'error',
            message: err.status
          };
        }
      });
    });
  };
  /**
   *
   *  all Below methods need improvisation.
   */


  DataSource.prototype.annotationQuery = function (options) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, Promise, function () {
      var events, date, event;
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
        events = [];
        date = new Date();
        event = {
          time: date.valueOf(),
          text: 'foo',
          tags: ['bar', 'foo']
        };
        events.push(event);
        return [2
        /*return*/
        , events];
      });
    });
  };

  return DataSource;
}(_grafana_data__WEBPACK_IMPORTED_MODULE_1__["DataSourceApi"]);



/***/ }),

/***/ "./ExploreQueryEditor.tsx":
/*!********************************!*\
  !*** ./ExploreQueryEditor.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  //console.log(props);
  var query = props.query;

  var onQueryChange = function onQueryChange(value, override) {
    var query = props.query,
        onChange = props.onChange,
        onRunQuery = props.onRunQuery; //console.log(value);

    if (onChange) {
      // Update the query whenever the query field changes.
      onChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, query), {
        queryText: value
      })); // Run the query on Enter.

      if (override && onRunQuery) {
        onRunQuery();
      }
    }
  };

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__["QueryField"], {
    portalOrigin: "mock-origin",
    onChange: onQueryChange,
    onRunQuery: props.onRunQuery,
    onBlur: props.onBlur,
    query: query.queryText || '',
    placeholder: "Enter a query"
  });
});

/***/ }),

/***/ "./ExploreStartPage.tsx":
/*!******************************!*\
  !*** ./ExploreStartPage.tsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var examples = [{
  title: 'Fetch top 25 nodes of JIRA',
  expression: 'MATCH (n:JIRA) RETURN n LIMIT 25',
  label: 'TOP JIRA NODES'
}];
/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Cheat Sheet"), examples.map(function (item, index) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "cheat-sheet-item",
      key: index
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "cheat-sheet-item__title"
    }, item.title), item.expression ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "cheat-sheet-item__example",
      onClick: function onClick(e) {
        return props.onClickExample({
          refId: 'A',
          queryText: item.expression
        });
      }
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, item.expression)) : null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "cheat-sheet-item__label"
    }, item.label));
  }));
});

/***/ }),

/***/ "./QueryEditor.tsx":
/*!*************************!*\
  !*** ./QueryEditor.tsx ***!
  \*************************/
/*! exports provided: QueryEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryEditor", function() { return QueryEditor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var lodash_defaults__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/defaults */ "../node_modules/lodash/defaults.js");
/* harmony import */ var lodash_defaults__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_defaults__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./types */ "./types.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__);





var cacheTypes = [{
  value: 'Fixed Time',
  label: 'Fixed Time'
}, {
  value: 'Variance Time',
  label: 'Variance Time'
}];
var fixedTime = [{
  value: '1',
  label: '1'
}, {
  value: '2',
  label: '2'
}, {
  value: '3',
  label: '3'
}];
var varianeTime = [{
  value: '5',
  label: '5'
}, {
  value: '10',
  label: '10'
}, {
  value: '15',
  label: '15'
}];

var QueryEditor = function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(QueryEditor, _super);

  function QueryEditor() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.state = {
      graph: false,
      timeseries: false,
      table: false,
      stats: false,
      cache: false,
      raw: false,
      fixTime: false,
      varTime: false,
      cacheType: '',
      cacheValue: ''
    };

    _this.onQueryTextChange = function (event) {
      var _a = _this.props,
          onChange = _a.onChange,
          query = _a.query,
          onRunQuery = _a.onRunQuery;
      onChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, query), {
        queryText: event.target.value
      }));
      onRunQuery();
    };

    _this.onConstantChange = function (event) {
      var _a = _this.props,
          onChange = _a.onChange,
          query = _a.query,
          onRunQuery = _a.onRunQuery;
      onChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, query), {
        constant: parseFloat(event.target.value)
      }));
      onRunQuery(); // executes the query
    };

    _this.onCacheChanged = function (_a) {
      var value = _a.value;

      if (value === 'Fixed Time' && _this.props.query["cache"]) {
        _this.props.query["fixTime"] = true;
        _this.props.query["varTime"] = false;
        _this.props.query["cacheType"] = 'Fixed Time';

        _this.setState({
          fixTime: true,
          varTime: false,
          cacheType: 'Fixed Time'
        });
      } else if (value === 'Variance Time' && _this.props.query["cache"]) {
        _this.props.query["varTime"] = true;
        _this.props.query["fixTime"] = false;
        _this.props.query["cacheType"] = 'Variance Time';

        _this.setState({
          varTime: true,
          fixTime: false,
          cacheType: 'Variance Time'
        });
      }
    };

    return _this;
  }

  QueryEditor.prototype.componentDidMount = function () {
    this.setState(this.props.query);
  };

  QueryEditor.prototype.onChanged = function (type, e) {
    var _this = this; //const { query } = this.props;
    //throw new Error("Method not implemented.");


    var obj = {};

    if (type === 'cache') {
      obj['cache'] = !this.props.query[type];
      this.props.query['cache'] = !this.props.query[type];
    } else {
      Object.keys(this.props.query).forEach(function (c) {
        if (c == type) {
          obj[type] = !_this.props.query[type];
          _this.props.query[type] = !_this.props.query[type];
        } else if (c == 'constant' || c == 'queryText' || c == 'cypherQuery' || c == 'refId') {// do nothing
        } else {
          if (c !== 'cache') {
            obj[c] = false;
            _this.props.query[c] = false;
          }
        }
      });
    }

    this.setState(obj);
  };

  QueryEditor.prototype.onVarianceChanged = function (e) {
    this.props.query["cacheValue"] = e.value;
    this.setState({
      cacheValue: e.value
    });
  };

  QueryEditor.prototype.onFixChanged = function (e) {
    // const params = this.props.query;
    this.props.query["cacheValue"] = e.value;
    this.setState({
      cacheValue: e.value
    });
  };

  QueryEditor.prototype.render = function () {
    var _this = this;

    var query = lodash_defaults__WEBPACK_IMPORTED_MODULE_1___default()(this.props.query, _types__WEBPACK_IMPORTED_MODULE_3__["defaultQuery"]);
    var queryText = query.queryText;
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "gf-form-inline"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "gf-form gf-form--v-stretch"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
      className: "gf-form-label width-5"
    }, "Cypher")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "gf-form gf-form--grow"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("textarea", {
      rows: 5,
      className: "gf-form-input width-100",
      onChange: this.onQueryTextChange,
      placeholder: "Example: match (n) return n limit 1",
      value: queryText,
      required: true
    }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "gf-form-inline"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "gf-form gf-form--v-stretch"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
      className: "gf-form-label width-5"
    }, "Type")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__["LegacyForms"].Switch, {
      label: "Graph",
      labelClass: "width-5",
      checked: this.state.graph,
      onChange: function onChange(e) {
        return _this.onChanged('graph', e);
      }
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__["LegacyForms"].Switch, {
      label: "Table",
      labelClass: "width-5",
      checked: this.state.table,
      onChange: function onChange(e) {
        return _this.onChanged('table', e);
      }
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__["LegacyForms"].Switch, {
      label: "Cache",
      labelClass: "width-5",
      checked: this.state.cache,
      onChange: function onChange(e) {
        return _this.onChanged('cache', e);
      }
    })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "gf-form-inline"
    }, this.props.query.cache && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "gf-form gf-form--v-stretch"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
      className: "gf-form-label width-5"
    }, "Cache Type"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__["Select"], {
      width: 20,
      options: cacheTypes,
      onChange: function onChange(e) {
        return _this.onCacheChanged(e);
      },
      value: cacheTypes.find(function (item) {
        return item.value === _this.state.cacheType;
      })
    })), this.state.fixTime && this.props.query.cache && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "gf-form gf-form--v-stretch"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
      className: "gf-form-label width-10"
    }, "Duration (Hours)"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__["Select"], {
      width: 10,
      options: fixedTime,
      onChange: function onChange(e) {
        return _this.onFixChanged(e);
      },
      value: fixedTime.find(function (item) {
        return item.value === _this.state.cacheValue;
      })
    })), this.state.varTime && this.props.query.cache && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "gf-form gf-form--v-stretch"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
      className: "gf-form-label width-10"
    }, "Variance (%)"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__["Select"], {
      width: 10,
      options: varianeTime,
      onChange: function onChange(e) {
        return _this.onVarianceChanged(e);
      },
      value: varianeTime.find(function (item) {
        return item.value === _this.state.cacheValue;
      })
    }))), this.state.fixTime && this.props.query.cache && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
      className: "gf-form-label width-50"
    }, "Please note that when Fixed Time is selected, the time selector would be disabled for selected fixed time interval.")));
  };

  return QueryEditor;
}(react__WEBPACK_IMPORTED_MODULE_2__["PureComponent"]);



/***/ }),

/***/ "./Utils.ts":
/*!******************!*\
  !*** ./Utils.ts ***!
  \******************/
/*! exports provided: convertResponseToDataFramesTable, convertResponseToDataFramesGraph, convertResponseToDataFramesRaw, convertResponseToDataFramesTimeSeries, convertResponseToDataFramesTimeSeries1, checkCypherQueryModificationKeyword, addTimestampToQuery, applyTemplateVariables */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertResponseToDataFramesTable", function() { return convertResponseToDataFramesTable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertResponseToDataFramesGraph", function() { return convertResponseToDataFramesGraph; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertResponseToDataFramesRaw", function() { return convertResponseToDataFramesRaw; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertResponseToDataFramesTimeSeries", function() { return convertResponseToDataFramesTimeSeries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertResponseToDataFramesTimeSeries1", function() { return convertResponseToDataFramesTimeSeries1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkCypherQueryModificationKeyword", function() { return checkCypherQueryModificationKeyword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addTimestampToQuery", function() { return addTimestampToQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyTemplateVariables", function() { return applyTemplateVariables; });
var convertResponseToDataFramesTable = function convertResponseToDataFramesTable(queries, res) {
  var data = [];
  var error = undefined;
  var dataArray1 = [];
  var columnArray1 = [];
  var rows1;

  if (res.data) {
    for (var index = 0; index < res.data.results.length; index++) {
      dataArray1 = res.data.results[index].data;
      columnArray1 = res.data.results[index].columns.map(function (x) {
        return {
          text: x
        };
      });
      rows1 = dataArray1.map(function (c) {
        return c.row;
      });
      data.push({
        columns: columnArray1,
        rows: rows1,
        refId: queries[index].refId,
        name: undefined,
        target: queries[index]
      });
    }
  } //console.log('datahere ----',data);

  /*let dataArray = res.data.results[0].data;
  let columnArray = res.data.results[0].columns.map(x => { return { text: x } });
  const rows = dataArray.map(c => c.row);
  data.push({ columns: columnArray, rows: rows, refId: 'A', name: undefined,target: queries });*/


  return {
    data: data,
    error: error
  };
};
var convertResponseToDataFramesGraph = function convertResponseToDataFramesGraph(queries, res) {
  var data = [];
  var error = undefined;
  var datapoints = [];
  var multiSeriesResponse = false;
  var response = [];
  var timestamp = new Date().getTime() * 1000;

  if (res.options && res.options.range && res.options.range.to) {
    timestamp = res.options.range.to.valueOf();
  }

  var targetResponse = {
    target: queries[0].refId,
    datapoints: datapoints
  };
  var targetDatapointsMap = {};
  var dataArray = res.data.results[0].data;
  var columns = res.data.results[0].columns;

  for (var r in dataArray) {
    var row = dataArray[r].row;

    if (columns.length === 1) {
      datapoints.push([row[0], timestamp]);
    } else if (columns.length === 3) {
      var targetName = row[2];
      var targetDataPoints = targetDatapointsMap[targetName];

      if (targetDataPoints === undefined) {
        targetDataPoints = [];
        targetDatapointsMap[targetName] = targetDataPoints;
        data.push({
          target: targetName,
          datapoints: targetDataPoints
        });
        multiSeriesResponse = true;
      }

      targetDataPoints.push([row[1], row[0] * 1000]);
    } else {
      //Assuming the first column will be the time and second column will be the data.
      datapoints.push([row[1], row[0] * 1000]);
    }
  }

  if (!multiSeriesResponse) {
    response.push(targetResponse);
    data.push(response[0]);
  }

  return {
    data: data,
    error: error
  };
};
var convertResponseToDataFramesRaw = function convertResponseToDataFramesRaw(queries, res) {
  /* let datapoints = {} as any;
   datapoints["datapoints"] = res
   datapoints["type"] = "docs";*/
  var data = [];
  var error = undefined;
  res.data["targets"] = queries;
  data.push(res);
  var obj = data[0].data;
  return {
    obj: obj,
    error: error
  };
};
var convertResponseToDataFramesTimeSeries = function convertResponseToDataFramesTimeSeries(queries, res) {
  var timestamp = new Date().getTime() * 1000;
  var data = [];
  var error = undefined;
  var datapoints = [];
  var results = res.data.results;

  for (var i in results) {
    var targetDatapointsMap = {};
    var response = [];
    var result = results[i];
    var rows = result.data;

    for (var r in rows) {
      var row = rows[r].row;

      if (result.columns.length === 1) {
        datapoints.push([row[0], timestamp]);
        data.push({
          target: results[i].refId,
          datapoints: datapoints,
          refId: results[i].refId,
          tags: undefined
        });
      } else if (result.columns.length === 3) {
        var targetName = row[2];
        var targetDataPoints = targetDatapointsMap[targetName];

        if (targetDataPoints === undefined) {
          targetDataPoints = [];
          targetDatapointsMap[targetName] = targetDataPoints;
          response.push({
            target: targetName,
            datapoints: targetDataPoints
          });
        }

        targetDataPoints.push([row[1], row[0] * 1000]);
        data.push({
          target: results[i].refId,
          datapoints: targetDataPoints,
          refId: results[i].refId,
          tags: undefined
        });
      } else {
        //Assuming the first column will be the time and second column will be the data.
        datapoints.push([row[1], row[0] * 1000]);
        data.push({
          target: results[i].refId,
          datapoints: datapoints,
          refId: results[i].refId,
          tags: undefined
        });
      }
    }
  }

  return {
    data: data,
    error: error
  };
};
var convertResponseToDataFramesTimeSeries1 = function convertResponseToDataFramesTimeSeries1(queries, res) {
  var data = [];
  var error = undefined;
  var responseArray = res.data.results[0].data;
  var datapoints = responseArray.map(function (c) {
    return c.row;
  });
  var columnArray = res.data.results[0].columns;
  var targetName = columnArray.map(function (c) {
    return c;
  });
  data.push({
    target: targetName,
    datapoints: datapoints,
    refId: 'A',
    tags: undefined
  });
  return {
    data: data,
    error: error
  };
};
function checkCypherQueryModificationKeyword(cypherQuery) {
  var keywords;
  keywords = ["create", "delete", "set", "update", "merge", "detach"];
  var flag = 0;
  var queryCorrect = true;

  if (cypherQuery.statements[0].statement == undefined) {
    return queryCorrect;
  }

  var j;

  for (j in keywords) {
    var query = cypherQuery.statements[0].statement.toString().toLowerCase();

    if (query.indexOf(" " + keywords[j] + " ") >= 0) {
      console.log(keywords[j] + " is present as an individual word.");
      flag = 1;
      break;
    }

    if (query.indexOf("\n" + keywords[j]) >= 0 && query.indexOf("\n" + keywords[j] + " ") >= 0) {
      console.log(keywords[j] + " is present after new line.");
      flag = 1;
      break;
    }

    if (query.indexOf(keywords[j] + ")") >= 0 || query.indexOf(keywords[j] + "(") >= 0 || query.indexOf(")" + keywords[j]) >= 0 || query.indexOf("(" + keywords[j]) >= 0 || query.indexOf(" " + keywords[j] + "\n") >= 0 || query.indexOf("\n" + keywords[j] + "\n") >= 0) {
      console.log(keywords[j] + " is present.");
      flag = 1;
      break;
    }
  }

  if (flag == 0) {
    return queryCorrect;
  } else {
    queryCorrect = false;
    return queryCorrect;
  }
}
function addTimestampToQuery(query, options) {
  if (query && options) {
    var range = options.range;

    if (range === undefined) {
      return query;
    }

    if (range.from) {
      var fromTime = range.from.valueOf() / 1000;

      if (query.indexOf('?START_TIME?') > -1) {
        query = query.replace(/\?START_TIME\?/g, fromTime.toString());
      }
    }

    if (range.to) {
      var toTime = range.to.valueOf() / 1000;

      if (query.indexOf('?END_TIME?') > -1) {
        query = query.replace(/\?END_TIME\?/g, toTime.toString());
      }
    }
  }

  return query;
}
function applyTemplateVariables(value, variable, formatValue) {
  if (typeof value === 'string') {
    var values = [];
    values.push(value);
    value = values;
  }

  return JSON.stringify(value);
}

/***/ }),

/***/ "./module.ts":
/*!*******************!*\
  !*** ./module.ts ***!
  \*******************/
/*! exports provided: plugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "plugin", function() { return plugin; });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @grafana/data */ "@grafana/data");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_grafana_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _DataSource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DataSource */ "./DataSource.ts");
/* harmony import */ var _ConfigEditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ConfigEditor */ "./ConfigEditor.tsx");
/* harmony import */ var _QueryEditor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./QueryEditor */ "./QueryEditor.tsx");
/* harmony import */ var _AnnotationQueryEditor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AnnotationQueryEditor */ "./AnnotationQueryEditor.ts");
/* harmony import */ var _ExploreQueryEditor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ExploreQueryEditor */ "./ExploreQueryEditor.tsx");
/* harmony import */ var _ExploreStartPage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ExploreStartPage */ "./ExploreStartPage.tsx");



 //import { AnnotationsQueryCtrl } from './AnnotationsQueryCtrl';




var plugin = new _grafana_data__WEBPACK_IMPORTED_MODULE_0__["DataSourcePlugin"](_DataSource__WEBPACK_IMPORTED_MODULE_1__["DataSource"]).setConfigEditor(_ConfigEditor__WEBPACK_IMPORTED_MODULE_2__["ConfigEditor"]).setQueryEditor(_QueryEditor__WEBPACK_IMPORTED_MODULE_3__["QueryEditor"]).setAnnotationQueryCtrl(_AnnotationQueryEditor__WEBPACK_IMPORTED_MODULE_4__["AnnotationQueryEditor"]).setExploreQueryField(_ExploreQueryEditor__WEBPACK_IMPORTED_MODULE_5__["default"]).setExploreStartPage(_ExploreStartPage__WEBPACK_IMPORTED_MODULE_6__["default"]);

/***/ }),

/***/ "./types.ts":
/*!******************!*\
  !*** ./types.ts ***!
  \******************/
/*! exports provided: defaultQuery, defaults */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultQuery", function() { return defaultQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaults", function() { return defaults; });
var defaultQuery = {
  queryText: undefined,
  constant: 6.5,
  cypherQuery: undefined,
  graph: false,
  timeseries: false,
  table: false,
  stats: false,
  cache: false,
  raw: false,
  varTime: false,
  fixTime: false,
  cacheType: undefined,
  cacheValue: undefined
};
/** changes*/

var defaults = {
  logging: true,
  path: '',
  serviceUrl: '',
  authToken: true,
  basicPassword: ''
};

/***/ }),

/***/ "@grafana/data":
/*!********************************!*\
  !*** external "@grafana/data" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__grafana_data__;

/***/ }),

/***/ "@grafana/runtime":
/*!***********************************!*\
  !*** external "@grafana/runtime" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__grafana_runtime__;

/***/ }),

/***/ "@grafana/ui":
/*!******************************!*\
  !*** external "@grafana/ui" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__grafana_ui__;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ }),

/***/ "rxjs":
/*!***********************!*\
  !*** external "rxjs" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_rxjs__;

/***/ })

/******/ })});;
//# sourceMappingURL=module.js.map