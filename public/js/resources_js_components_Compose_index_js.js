"use strict";
(self["webpackChunkinvision_chat"] = self["webpackChunkinvision_chat"] || []).push([["resources_js_components_Compose_index_js"],{

/***/ "./resources/js/components/Compose/ComposeTop.js":
/*!*******************************************************!*\
  !*** ./resources/js/components/Compose/ComposeTop.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ComposeTop)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");


function ComposeTop() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    "class": "h-[128px] w-full z-10 bg-black flex justify-between items-center px-[20px] pt-[58px] pb-[20px]",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
      "class": "bg-close h-[50px] w-[50px]"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
      "class": "text-white font-karla text-[34px]",
      children: "Compose"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
      "class": "bg-more h-[50px] w-[50px]"
    })]
  });
}

/***/ }),

/***/ "./resources/js/components/Compose/ComposeUser.js":
/*!********************************************************!*\
  !*** ./resources/js/components/Compose/ComposeUser.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ComposeUser)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





function ComposeUser(props) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isSelected = _useState2[0],
      toggleSelection = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      userName = _useState4[0],
      setUserName = _useState4[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    axios__WEBPACK_IMPORTED_MODULE_1___default().get("/api/users/".concat(props.id)).then(function (response) {
      setUserName(response.data.username);
    })["catch"](function (error) {
      console.log(error);
    });
  }, []);

  var handleClick = function handleClick() {
    toggleSelection(function (isSelected) {
      return !isSelected;
    });
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    "class": "flex justify-between p-[50px]",
    onClick: handleClick,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      "class": "flex justify-start gap-[40px]",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        "class": "w-[80px] h-[80px] bg-gray-500"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          "class": "font-karla-bold text-[24px] leading-[28px] mb-[22px]",
          children: userName
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: isSelected ? '' : 'hidden',
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        "class": "bg-tick w-[50px] h-[50px]"
      })
    })]
  });
}

/***/ }),

/***/ "./resources/js/components/Compose/ComposeUserIcons.js":
/*!*************************************************************!*\
  !*** ./resources/js/components/Compose/ComposeUserIcons.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ComposeUserIcons)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");

function ComposeUserIcons() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
    "class": "flex gap-[30px] px-[50px] pt-[45px] pb-[145px] min-h-[395px]",
    children: [1, 2].map(function (id) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        "class": "h-[100px] w-[100px] bg-gray-500 drop-shadow-2xl",
        children: id
      });
    })
  });
}

/***/ }),

/***/ "./resources/js/components/Compose/index.js":
/*!**************************************************!*\
  !*** ./resources/js/components/Compose/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Compose)
/* harmony export */ });
/* harmony import */ var _ComposeTop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ComposeTop */ "./resources/js/components/Compose/ComposeTop.js");
/* harmony import */ var _ComposeUserIcons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ComposeUserIcons */ "./resources/js/components/Compose/ComposeUserIcons.js");
/* harmony import */ var _ComposeUser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ComposeUser */ "./resources/js/components/Compose/ComposeUser.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");






function Compose() {
  var users = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(function (state) {
    return state.currentUser.userSubscriptions;
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ComposeTop__WEBPACK_IMPORTED_MODULE_0__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ComposeUserIcons__WEBPACK_IMPORTED_MODULE_1__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      "class": "absolute top-[523px] w-full h-[811px] bg-black z-10"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      "class": "absolute top-[423px] left-[50px] w-[650px] h-[911px] bg-white z-20",
      children: users.map(function (userId) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ComposeUser__WEBPACK_IMPORTED_MODULE_2__["default"], {
          id: userId
        });
      }).map(function (e, i) {
        return i < users.length - 1 ? [e, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("hr", {
          "class": "w-[550px] mx-auto h-[2px] bg-black opacity-[0.1]"
        })] : [e];
      }).reduce(function (a, b) {
        return a.concat(b);
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
      type: "submit",
      "class": "bg-[#FFBDB8] w-[120px] h-[120px] z-20 rounded-full transform absolute top-[363px] left-[530px] shadow-2xl",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        "class": "bg-next h-[50px] w-[50px] mx-[35px] flex-shrink-0"
      })
    })]
  });
}

/***/ })

}]);