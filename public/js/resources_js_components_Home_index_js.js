"use strict";
(self["webpackChunkinvision_chat"] = self["webpackChunkinvision_chat"] || []).push([["resources_js_components_Home_index_js"],{

/***/ "./resources/js/components/Home/HomeAlert.js":
/*!***************************************************!*\
  !*** ./resources/js/components/Home/HomeAlert.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HomeAlert)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");


function HomeAlert() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: "flex gap-[21px] items-center justify-center mt-[48px] mb-[48px] flex-shrink-0 flex-grow-0",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
      className: "w-[50px] h-[50px] bg-alert"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
      className: "font-karla-bold text-white uppercase font-[22px] tracking-[2px]",
      children: "1 new message"
    })]
  });
}

/***/ }),

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

/***/ "./resources/js/components/Home/index.js":
/*!***********************************************!*\
  !*** ./resources/js/components/Home/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var _helpers_TopTemplate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/TopTemplate */ "./resources/js/components/helpers/TopTemplate.js");
/* harmony import */ var _HomeAlert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HomeAlert */ "./resources/js/components/Home/HomeAlert.js");
/* harmony import */ var _HomeNewMessages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HomeNewMessages */ "./resources/js/components/Home/HomeNewMessages.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _features_currentUser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../features/currentUser */ "./resources/js/features/currentUser.js");
/* harmony import */ var _HomeBottomContent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./HomeBottomContent */ "./resources/js/components/Home/HomeBottomContent.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");











function Home(props) {
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_9__.useNavigate)();
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
  var myId = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(function (state) {
    return state.currentUser.userId;
  });
  var myName = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(function (state) {
    return state.currentUser.userName;
  });
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {
    axios__WEBPACK_IMPORTED_MODULE_5___default().get("api/users/".concat(myId, "/subscriptions")).then(function (response) {
      if (response.data) {
        dispatch((0,_features_currentUser__WEBPACK_IMPORTED_MODULE_6__.setSubscriptions)(response.data.map(function (entry) {
          return entry.followeeId;
        })));
      } else {
        dispatch((0,_features_currentUser__WEBPACK_IMPORTED_MODULE_6__.setSubscriptions)([]));
      }
    })["catch"](function (error) {
      console.log(error);
    });
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
    className: "absolute top-0 flex flex-col h-full w-full z-0",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_helpers_TopTemplate__WEBPACK_IMPORTED_MODULE_0__["default"], {
      leftBG: "bg-menu",
      leftHandler: props.nav,
      text: "Hi, ".concat(myName),
      rightBG: "bg-search",
      rightHandler: function rightHandler() {
        return navigate('../search');
      }
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_HomeAlert__WEBPACK_IMPORTED_MODULE_1__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_HomeNewMessages__WEBPACK_IMPORTED_MODULE_2__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_HomeBottomContent__WEBPACK_IMPORTED_MODULE_7__["default"], {})]
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