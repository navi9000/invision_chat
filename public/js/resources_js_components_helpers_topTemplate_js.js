"use strict";
(self["webpackChunkinvision_chat"] = self["webpackChunkinvision_chat"] || []).push([["resources_js_components_helpers_TopTemplate_js"],{

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