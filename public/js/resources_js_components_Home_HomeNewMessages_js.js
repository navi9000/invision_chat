"use strict";
(self["webpackChunkinvision_chat"] = self["webpackChunkinvision_chat"] || []).push([["resources_js_components_Home_HomeNewMessages_js"],{

/***/ "./resources/js/components/Home/HomeNewMessage.js":
/*!********************************************************!*\
  !*** ./resources/js/components/Home/HomeNewMessage.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HomeNewMessage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");


function HomeNewMessage() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: "flex justify-between w-[650px] bg-white z-10",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
      className: "w-[200px] h-[200px] bg-gray-500 z-20 flex-shrink-0"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "flex justify-between items-end w-full px-[50px] py-[30px]",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
        className: "font-karla-bold text-[24px] leading-[28px]",
        children: "Michael Stelton"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
        className: "font-karla-bold text-[#AD807D] text-[20px] leading-[23px]",
        children: "Just now"
      })]
    })]
  });
}

/***/ }),

/***/ "./resources/js/components/Home/HomeNewMessages.js":
/*!*********************************************************!*\
  !*** ./resources/js/components/Home/HomeNewMessages.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HomeNewMessages)
/* harmony export */ });
/* harmony import */ var _HomeNewMessage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HomeNewMessage */ "./resources/js/components/Home/HomeNewMessage.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");


function HomeNewMessages() {
  var newMessages = [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_HomeNewMessage__WEBPACK_IMPORTED_MODULE_0__["default"], {})];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    className: "flex flex-col items-center flex-shrink-0 flex-grow-0",
    children: newMessages
  });
}

/***/ })

}]);