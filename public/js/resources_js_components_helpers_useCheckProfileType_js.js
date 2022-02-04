"use strict";
(self["webpackChunkinvision_chat"] = self["webpackChunkinvision_chat"] || []).push([["resources_js_components_helpers_useCheckProfileType_js"],{

/***/ "./resources/js/components/helpers/useCheckProfileType.js":
/*!****************************************************************!*\
  !*** ./resources/js/components/helpers/useCheckProfileType.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useCheckProfileType)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

function useCheckProfileType(userId) {
  var myId = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector)(function (state) {
    return state.currentUser.userId;
  });
  var mySubscriptions = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector)(function (state) {
    return state.currentUser.userSubscriptions;
  });
  return myId === userId ? [true, false] : [false, mySubscriptions.some(function (id) {
    return id === userId;
  })];
}

/***/ })

}]);