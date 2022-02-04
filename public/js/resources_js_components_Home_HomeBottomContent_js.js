"use strict";
(self["webpackChunkinvision_chat"] = self["webpackChunkinvision_chat"] || []).push([["resources_js_components_Home_HomeBottomContent_js"],{

/***/ "./resources/js/components/Home/HomeBottomContent.js":
/*!***********************************************************!*\
  !*** ./resources/js/components/Home/HomeBottomContent.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HomeBottomContent)
/* harmony export */ });
/* harmony import */ var _HomeRecentChats__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HomeRecentChats */ "./resources/js/components/Home/HomeRecentChats.js");
/* harmony import */ var _helpers_CustomButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/CustomButton */ "./resources/js/components/helpers/CustomButton.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




function HomeBottomContent() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: "w-full h-full bg-black mt-[100px] z-10 px-[50px]",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "flex justify-between mb-[30px]",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "flex gap-[10px] items-center",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "bg-down h-[50px] w-[50px]"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "uppercase text-white font-karla-bold text-[20px] leading-[23px] tracking-[2px]",
          children: "Recent chats"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_helpers_CustomButton__WEBPACK_IMPORTED_MODULE_1__["default"], {
        icon: "new"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_HomeRecentChats__WEBPACK_IMPORTED_MODULE_0__["default"], {})]
  });
}

/***/ }),

/***/ "./resources/js/components/Home/HomeRecentChat.js":
/*!********************************************************!*\
  !*** ./resources/js/components/Home/HomeRecentChat.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HomeRecentChat)
/* harmony export */ });
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



function HomeRecentChat() {
  var id = 1;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "../chats/".concat(id),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "flex justify-between p-[50px]",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex justify-start gap-[40px]",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
          className: "w-[80px] h-[80px] bg-gray-500"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
            className: "font-karla-bold text-[24px] leading-[28px] mb-[22px]",
            children: "Ana Jackobson"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
            className: "font-karla text-[26px] text-[#050706] leading-[30px]",
            children: "I am on my way"
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
          className: "font-karla-bold text-[20px] text-[#AD807D] leading-[23px]",
          children: "5 minutes ago"
        })
      })]
    })
  });
}

/***/ }),

/***/ "./resources/js/components/Home/HomeRecentChats.js":
/*!*********************************************************!*\
  !*** ./resources/js/components/Home/HomeRecentChats.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HomeRecentChats)
/* harmony export */ });
/* harmony import */ var _HomeRecentChat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HomeRecentChat */ "./resources/js/components/Home/HomeRecentChat.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");


function HomeRecentChats() {
  var chats = [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_HomeRecentChat__WEBPACK_IMPORTED_MODULE_0__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_HomeRecentChat__WEBPACK_IMPORTED_MODULE_0__["default"], {})];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    className: "bg-white z-20",
    children: [].concat(chats).map(function (e, i) {
      return i < chats.length - 1 ? [e, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("hr", {
        className: "w-[550px] mx-auto h-[2px] bg-black opacity-[0.1]"
      })] : [e];
    }).reduce(function (a, b) {
      return a.concat(b);
    })
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

/***/ })

}]);