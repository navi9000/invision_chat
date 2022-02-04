"use strict";
(self["webpackChunkinvision_chat"] = self["webpackChunkinvision_chat"] || []).push([["resources_js_components_Register_index_js"],{

/***/ "./resources/js/components/Register/RegisterForm.js":
/*!**********************************************************!*\
  !*** ./resources/js/components/Register/RegisterForm.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RegisterForm)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _features_currentUser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../features/currentUser */ "./resources/js/features/currentUser.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");






function RegisterForm() {
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_4__.useNavigate)();
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();

  var handleForm = function handleForm(e) {
    e.preventDefault();
    axios__WEBPACK_IMPORTED_MODULE_0___default().post('api/auth/register', {
      username: e.target.username.value,
      email: e.target.email.value,
      password: e.target.password.value,
      phone: e.target.phone.value
    }).then(function (response) {
      if (response.status == 201) {
        console.log(response.data);
        dispatch((0,_features_currentUser__WEBPACK_IMPORTED_MODULE_2__.setUserId)(response.data.id));
        dispatch((0,_features_currentUser__WEBPACK_IMPORTED_MODULE_2__.setUserName)(response.data.username));
        alert('User Created');
        navigate('../home');
      }
    })["catch"](function (error) {
      alert(error.response.data.errorMessage);
      console.log(error.response.data.request);
    });
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("form", {
    className: "absolute bg-white top-[402px] left-[50px] w-[650px] h-[922px] z-20",
    autoComplete: "off",
    onSubmit: handleForm,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: "flex flex-col p-[80px]",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "flex flex-col mb-[60px]",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("label", {
          htmlFor: "username",
          className: "font-karla-bold text-[#AD807D] uppercase tracking-[2px]",
          children: "Name"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("input", {
          type: "text",
          id: "username",
          name: "username",
          className: "h-[80px] border-b-[2px] border-gray-200 pt-[22px] pb-[25px] outline-none"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "flex flex-col mb-[60px]",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("label", {
          htmlFor: "email",
          className: "font-karla-bold text-[#AD807D] uppercase tracking-[2px]",
          children: "Email"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("input", {
          type: "email",
          id: "email",
          name: "email",
          className: "h-[80px] border-b-[2px] border-gray-200 pt-[22px] pb-[25px] outline-none"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "flex flex-col mb-[60px]",
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
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "flex flex-col",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("label", {
          htmlFor: "phone",
          className: "font-karla-bold text-[#AD807D] uppercase tracking-[2px]",
          children: "Phone"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("input", {
          type: "text",
          id: "phone",
          name: "phone",
          className: "h-[80px] border-b-[2px] border-gray-200 pt-[22px] pb-[25px] outline-none"
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("button", {
      type: "submit",
      className: "w-full h-[168px] bg-[#00A0FF] px-[80px] pt-[30px] flex flex-col justify-between",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "flex justify-between items-center w-full",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
          className: "text-white font-karla-bold text-[26px] leading-[30px]",
          children: "Next Step"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "flex gap-[10px]",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            className: "w-[16px] h-[16px] rounded-full bg-[#FFBDB8]"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            className: "w-[16px] h-[16px] rounded-full bg-white opacity-[0.2]"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            className: "w-[16px] h-[16px] rounded-full bg-white opacity-[0.2]"
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
        className: "font-karla-bold text-[75px] tracking-[-4px] text-white opacity-[0.2]",
        children: "1 of 3"
      })]
    })]
  });
}

/***/ }),

/***/ "./resources/js/components/Register/index.js":
/*!***************************************************!*\
  !*** ./resources/js/components/Register/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Register)
/* harmony export */ });
/* harmony import */ var _helpers_TopTemplate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/TopTemplate */ "./resources/js/components/helpers/TopTemplate.js");
/* harmony import */ var _RegisterForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RegisterForm */ "./resources/js/components/Register/RegisterForm.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");







function Register() {
  var myId = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (state) {
    return state.currentUser.userId;
  });
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useNavigate)();
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    if (myId) navigate('../home');
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_helpers_TopTemplate__WEBPACK_IMPORTED_MODULE_0__["default"], {
      leftBG: "bg-back",
      leftHandler: function leftHandler() {
        return navigate('../login');
      },
      text: "New Account"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: "bg-sign_up w-full h-[700px] absolute bg-no-repeat",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
        className: "mt-[90px] ml-[50px] font-karla-bold text-[70px] text-white leading-[82px] tracking-[-2px] ",
        children: "Sign Up"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: "absolute bg-black top-[550px] w-full h-[784px]"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_RegisterForm__WEBPACK_IMPORTED_MODULE_1__["default"], {})]
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