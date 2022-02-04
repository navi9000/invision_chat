"use strict";
(self["webpackChunkinvision_chat"] = self["webpackChunkinvision_chat"] || []).push([["resources_js_components_Navigation_index_js"],{

/***/ "./resources/js/components/Navigation/NavLink.js":
/*!*******************************************************!*\
  !*** ./resources/js/components/Navigation/NavLink.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NavLink)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");

function NavLink(props) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {
    "class": "font-karla-bold text-[70px] tracking-[-2px] mb-[60px] text-white hover:text-[#FFBDB8] mx-auto leading-[82px]",
    children: props.to
  });
}

/***/ }),

/***/ "./resources/js/components/Navigation/index.js":
/*!*****************************************************!*\
  !*** ./resources/js/components/Navigation/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Navigation)
/* harmony export */ });
/* harmony import */ var _NavLink__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NavLink */ "./resources/js/components/Navigation/NavLink.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



function Navigation() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      "class": "flex justify-between mt-[57px] mb-[93px] mx-[24px]",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        "class": "h-[50px] w-[50px] bg-close"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        "class": "h-[50px] w-[50px] bg-settings_copy"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      "class": "flex flex-col",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_NavLink__WEBPACK_IMPORTED_MODULE_0__["default"], {
        to: "Home"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_NavLink__WEBPACK_IMPORTED_MODULE_0__["default"], {
        to: "Profile"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_NavLink__WEBPACK_IMPORTED_MODULE_0__["default"], {
        to: "Compose"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_NavLink__WEBPACK_IMPORTED_MODULE_0__["default"], {
        to: "Gallery"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_NavLink__WEBPACK_IMPORTED_MODULE_0__["default"], {
        to: "Capture"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_NavLink__WEBPACK_IMPORTED_MODULE_0__["default"], {
        to: "Stats"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("button", {
      "class": "absolute top-[1174px] bg-black z-10 w-full h-[160px] flex justify-between",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        "class": "pt-[29.5px] px-[70px] flex flex-col items-start gap-[12px]",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
          "class": "font-karla-bold tracking-[-2px] text-white text-[50px] leading-[58px]",
          children: "Logout"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
          "class": "ml-[0.5px] uppercase font-karla-bold text-[20px] tracking-[2px] text-[#FFBDB8] leading-[23px]",
          children: "Andrea Jameson"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        "class": "w-[160px] h-[160px] bg-gray-500"
      })]
    })]
  });
}

/***/ })

}]);