"use strict";
(self["webpackChunkinvision_chat"] = self["webpackChunkinvision_chat"] || []).push([["resources_js_components_Profile_ProfileContent_js"],{

/***/ "./resources/js/components/Profile/ProfileContent.js":
/*!***********************************************************!*\
  !*** ./resources/js/components/Profile/ProfileContent.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProfileContent)
/* harmony export */ });
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _features_currentUser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../features/currentUser */ "./resources/js/features/currentUser.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _helpers_CustomButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/CustomButton */ "./resources/js/components/helpers/CustomButton.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









function ProfileContent() {
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_6__.useParams)(),
      id = _useParams.id;

  var myId = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector)(function (state) {
    return state.currentUser.userId;
  });
  var mySubscriptions = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector)(function (state) {
    return state.currentUser.userSubscriptions;
  });

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isMine = _useState2[0],
      setIsMine = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(mySubscriptions.some(function (u_id) {
    return u_id === Number(id);
  })),
      _useState4 = _slicedToArray(_useState3, 2),
      isSubscribed = _useState4[0],
      setIsSubscribed = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),
      _useState6 = _slicedToArray(_useState5, 2),
      userName = _useState6[0],
      setUserName = _useState6[1];

  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useDispatch)();
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    setIsMine(Number(id) === myId);
    axios__WEBPACK_IMPORTED_MODULE_3___default().get("/api/users/".concat(id)).then(function (response) {
      setUserName(response.data.username);
    })["catch"](function (error) {
      console.log(error);
    });
  }, [id]);

  var handleSubscribeButton = function handleSubscribeButton() {
    if (isSubscribed) {
      axios__WEBPACK_IMPORTED_MODULE_3___default()["delete"]("/api/users/".concat(myId, "/unsubscribe"), {
        followeeId: id
      }).then(function (response) {
        console.log(response.data.responseMessage);
        dispatch((0,_features_currentUser__WEBPACK_IMPORTED_MODULE_2__.deleteSubscription)(id));
        setIsSubscribed(false);
      })["catch"](function (error) {
        console.log(error);
      });
    } else {
      axios__WEBPACK_IMPORTED_MODULE_3___default().post("/api/users/".concat(myId, "/subscribe"), {
        followeeId: id
      }).then(function (response) {
        console.log(response.data.responseMessage);
        dispatch((0,_features_currentUser__WEBPACK_IMPORTED_MODULE_2__.addSubscription)(id));
        setIsSubscribed(true);
      })["catch"](function (error) {
        console.log(error);
      });
    }
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    className: "absolute z-20 top-[178px] left-[50px] w-[650px] h-[1106px] bg-[#00A0FF]",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      className: "bg-gray-500 h-[570px] w-full flex flex-col py-[50px] px-[50px] justify-end",
      children: [userName].map(function (text) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
          className: "text-white text-[70px] font-karla-bold leading-[70px] tracking-[-2px] drop-shadow-2xl",
          children: text
        });
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "flex justify-between w-full px-[50px] h-[186.2px]",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "flex flex-col gap-[10px] pt-[50px]",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
          className: "font-karla text-white text-[28px] leading-[32px]",
          children: "Event Manager"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
          className: "font-karla text-white text-[28px] leading-[32px]",
          children: "San Francisco"
        })]
      }), !isMine && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_helpers_CustomButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
        icon: isSubscribed ? 'close' : 'add',
        clickHandler: handleSubscribeButton
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("hr", {
      className: "bg-white opacity-[0.2] w-[550px] h-[3px] mx-[50px]"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "flex px-[50px] justify-between",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "flex flex-col gap-[21px] pt-[60.8px] basis-1/3",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
          className: "font-karla-bold text-white text-[50px] leading-[58px] text-center",
          children: "145k"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
          className: "font-karla-bold text-white text-[20px] leading-[23px] tracking-[2px] text-center uppercase",
          children: "followers"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "flex flex-col gap-[21px] pt-[60.8px] basis-1/3",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
          className: "font-karla-bold text-white text-[50px] leading-[58px] text-center",
          children: "56k"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
          className: "font-karla-bold text-white text-[20px] leading-[23px] tracking-[2px] text-center uppercase",
          children: "following"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "flex flex-col gap-[21px] pt-[60.8px] basis-1/3",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
          className: "font-karla-bold text-white text-[50px] leading-[58px] text-center",
          children: "1,690"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
          className: "font-karla-bold text-white text-[20px] leading-[23px] tracking-[2px] text-center uppercase",
          children: "likes"
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "mt-[64px] w-full h-[120px] bg-white flex justify-between items-center px-[80px]",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "bg-chat w-[50px] h-[50px]"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "bg-call w-[50px] h-[50px]"
      })]
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

/***/ })

}]);