"use strict";
(self["webpackChunkinvision_chat"] = self["webpackChunkinvision_chat"] || []).push([["resources_js_components_Search_index_js"],{

/***/ "./resources/js/components/Search/SearchUser.js":
/*!******************************************************!*\
  !*** ./resources/js/components/Search/SearchUser.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SearchUser)
/* harmony export */ });
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



function SearchUser(props) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
    className: "p-[50px]",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
      to: "../users/".concat(props.id),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex justify-start gap-[40px]",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
          className: "w-[80px] h-[80px] bg-gray-500"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
            className: "font-karla-bold text-[24px] leading-[28px] mb-[22px]",
            children: props.username
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
            className: "font-karla-bold text-[20px] text-[#AD807D] leading-[23px]",
            children: "5 minutes ago"
          })]
        })]
      })
    })
  });
}

/***/ }),

/***/ "./resources/js/components/Search/index.js":
/*!*************************************************!*\
  !*** ./resources/js/components/Search/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Search)
/* harmony export */ });
/* harmony import */ var _helpers_TopTemplate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/TopTemplate */ "./resources/js/components/helpers/TopTemplate.js");
/* harmony import */ var _SearchUser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SearchUser */ "./resources/js/components/Search/SearchUser.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _helpers_CustomButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/CustomButton */ "./resources/js/components/helpers/CustomButton.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









function Search() {
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_6__.useNavigate)();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''),
      _useState2 = _slicedToArray(_useState, 2),
      searchQuery = _useState2[0],
      changeSearchQuery = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
      _useState4 = _slicedToArray(_useState3, 2),
      users = _useState4[0],
      setUsers = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0),
      _useState6 = _slicedToArray(_useState5, 2),
      firstOutput = _useState6[0],
      setFirstOutput = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {})),
      _useState8 = _slicedToArray(_useState7, 2),
      searchOutput = _useState8[0],
      setSearchOutput = _useState8[1];

  var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    var lastSearchQuery = window.localStorage.getItem('lastSearchQuery');
    ref.current.focus();

    if (lastSearchQuery !== null) {
      changeSearchQuery(lastSearchQuery);
    }
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    window.localStorage.setItem('lastSearchQuery', searchQuery);

    if (searchQuery) {
      axios__WEBPACK_IMPORTED_MODULE_3___default().post('api/users', {
        searchQuery: searchQuery
      }).then(function (response) {
        if (response.data) {
          setUsers(response.data);
        } else {
          setUsers([]);
        }
      })["catch"](function (error) {
        return console.log(error);
      });
    } else {
      setUsers([]);
    }
  }, [searchQuery]);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    setFirstOutput(0);
  }, [users]);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    if (users.length > 0) {
      var myOutput = users.slice(firstOutput, firstOutput + 5);

      if (users.length > 5 && myOutput.length < 5) {
        myOutput = myOutput.concat(users.slice(0, 5 - myOutput.length));
      }

      setSearchOutput(_toConsumableArray(myOutput.map(function (entry) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_SearchUser__WEBPACK_IMPORTED_MODULE_1__["default"], {
          id: entry.id,
          username: entry.username
        }, entry.id);
      })).map(function (e, i) {
        return i < users.length - 1 ? [e, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("hr", {
          className: "w-[550px] mx-auto h-[2px] bg-black opacity-[0.1]"
        })] : [e];
      }).reduce(function (a, b) {
        return a.concat(b);
      }));
    } else {
      if (searchQuery) {
        setSearchOutput( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          className: "font-karla-bold m-[50px] text-[24px]",
          children: "Not Found"
        }));
      } else setSearchOutput( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {}));
    }
  }, [firstOutput, users]);

  var clickHandler = function clickHandler() {
    var arrLength = users.length;

    if (arrLength > 5) {
      if (arrLength - firstOutput > 5) {
        setFirstOutput(function (state) {
          return state + 5;
        });
      } else setFirstOutput(function (state) {
        return state + 5 - arrLength;
      });
    }
  };

  var closeHandler = function closeHandler() {
    window.localStorage.removeItem('lastSearchQuery');
    navigate('../home');
  };

  window.addEventListener('beforeunload', function () {
    return window.localStorage.removeItem('lastSearchQuery');
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_helpers_TopTemplate__WEBPACK_IMPORTED_MODULE_0__["default"], {
      leftBG: "bg-close",
      leftHandler: closeHandler,
      text: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input", {
        type: "text",
        ref: ref,
        value: searchQuery,
        onChange: function onChange(e) {
          changeSearchQuery(e.target.value);
        },
        className: "bg-transparent placeholder-white text-center",
        placeholder: "Search for..."
      }),
      rightBG: "bg-more"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      className: "absolute top-[523px] w-full h-[811px] bg-black z-10"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "absolute top-[423px] left-[50px] w-[650px] h-[911px] bg-white z-20",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_helpers_CustomButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
        icon: "next",
        clickHandler: clickHandler,
        customClass: "ml-[480px] absolute ".concat(users.length < 6 ? 'hidden' : '')
      }), searchOutput]
    })]
  });
}

/***/ }),

/***/ "./resources/js/components/helpers/CustomButton.js":
/*!*********************************************************!*\
  !*** ./resources/js/components/helpers/CustomButton.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CustomButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");

function CustomButton(props) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
    type: "submit",
    className: "bg-[#FFBDB8] w-[120px] h-[120px] z-20 rounded-full transform translate-y-[-60px] shadow-2xl ".concat(props.customClass),
    onClick: props.clickHandler,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
      className: "bg-".concat(props.icon, " h-[50px] w-[50px] mx-[35px] flex-shrink-0")
    })
  });
}

/***/ }),

/***/ "./resources/js/components/helpers/TopTemplate.js":
/*!********************************************************!*\
  !*** ./resources/js/components/helpers/TopTemplate.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TopTemplate)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");


function TopTemplate(props) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: "h-[128px] w-full z-10 bg-black flex justify-between items-center px-[20px] pt-[58px] pb-[20px]",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
      className: "h-[50px] w-[50px] cursor-pointer opacity-20 hover:opacity-100 duration-300 ease-in-out ".concat(props.leftBG),
      onClick: props.leftHandler
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
      className: "text-white font-karla text-[34px]",
      children: props.text
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
      className: "".concat(props.rightBG, " h-[50px] w-[50px] opacity-20 hover:opacity-100 duration-300 ease-in-out ").concat(props.rightBG ? "cursor-pointer" : "", " "),
      onClick: props.rightHandler
    })]
  });
}

/***/ })

}]);