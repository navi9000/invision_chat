"use strict";
(self["webpackChunkinvision_chat"] = self["webpackChunkinvision_chat"] || []).push([["resources_js_components_Login_index_js"],{

/***/ "./resources/js/components/Login/LoginForm.js":
/*!****************************************************!*\
  !*** ./resources/js/components/Login/LoginForm.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LoginForm)
/* harmony export */ });
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _features_currentUser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../features/currentUser */ "./resources/js/features/currentUser.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");






function LoginForm() {
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_4__.useNavigate)();
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();

  var handleForm = function handleForm(e) {
    e.preventDefault();
    axios__WEBPACK_IMPORTED_MODULE_0___default()["delete"]('api/users/1/unsubscribe', {
      followeeId: 3
    }).then(function (response) {
      console.log(response.data);
    })["catch"](function (error) {
      console.log('Somethind went wrong');
    });
    axios__WEBPACK_IMPORTED_MODULE_0___default().post('api/auth/login', {
      username: e.target.username.value,
      password: e.target.password.value
    }).then(function (response) {
      if (response.status == 200) {
        dispatch((0,_features_currentUser__WEBPACK_IMPORTED_MODULE_2__.setUserId)(response.data.id));
        dispatch((0,_features_currentUser__WEBPACK_IMPORTED_MODULE_2__.setUserName)(response.data.username));
        console.log(response.data.subscriptions);
        dispatch((0,_features_currentUser__WEBPACK_IMPORTED_MODULE_2__.setSubscriptions)(response.data.subscriptions.map(function (sub) {
          return sub.followeeId;
        })));
        navigate('../home');
      }
    })["catch"](function (error) {
      alert(error.response.data.errorMessage);
      console.log(error.response.data.request);
    });
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("form", {
    className: "absolute top-[654px] left-[50px] w-[650px] h-[540px] z-30 bg-white",
    onSubmit: handleForm,
    autoComplete: "off",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: "flex flex-col p-[80px]",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "flex flex-col mb-[60px]",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("label", {
          htmlFor: "username",
          className: "font-karla-bold text-[#AD807D] uppercase tracking-[2px]",
          children: "Username"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("input", {
          type: "text",
          id: "username",
          name: "username",
          className: "h-[80px] border-b-[2px] border-gray-200 pt-[22px] pb-[25px] outline-none"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "flex flex-col",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("label", {
          htmlFor: "password",
          className: "font-karla-bold text-[#AD807D] uppercase tracking-[2px]",
          children: "Password"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("input", {
          type: "password",
          id: "password",
          name: "password",
          className: "h-[80px] border-b-[2px] border-gray-200 pt-[22px] pb-[25px] outline-none"
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("button", {
      type: "submit",
      className: "w-full h-[120px] bg-[#00A0FF] flex justify-between",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "bg-go h-[50px] w-[50px] mt-[35px] ml-[62px]"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
        className: "text-white font-karla-bold mt-[42.5px] mr-[79.5px]",
        children: "Get Started"
      })]
    })]
  });
}

/***/ }),

/***/ "./resources/js/components/Login/index.js":
/*!************************************************!*\
  !*** ./resources/js/components/Login/index.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Login)
/* harmony export */ });
/* harmony import */ var _LoginForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LoginForm */ "./resources/js/components/Login/LoginForm.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");






function Login() {
  var myId = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.currentUser.userId;
  });
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_4__.useNavigate)();
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    if (myId) navigate('../home');
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h1", {
      className: "font-karla-bold text-white text-[200px] leading-[234px] tracking-[-10px] drop-shadow-md absolute top-[120px] z-10",
      children: "Chat"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: "bg-bubble w-[200px] h-[249px] mx-auto mt-[290px] drop-shadow-2xl"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: "absolute top-[754px] bg-black w-full h-[580px] z-10",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("p", {
        className: "mx-auto text-center bottom-[52px] font-karla text-white z-20 pt-[490px]",
        children: ["Not Registered? ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Link, {
          to: "../register",
          className: "font-karla-bold hover:underline cursor-pointer",
          children: "Create Account"
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_LoginForm__WEBPACK_IMPORTED_MODULE_0__["default"], {})]
  });
}

/***/ })

}]);