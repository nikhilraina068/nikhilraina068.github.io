(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/ngx-toastr/toastr.css":
/*!********************************************!*\
  !*** ./node_modules/ngx-toastr/toastr.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../raw-loader!../postcss-loader/lib??embedded!./toastr.css */ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./node_modules/ngx-toastr/toastr.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./node_modules/ngx-toastr/toastr.css":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./node_modules/postcss-loader/lib??embedded!./node_modules/ngx-toastr/toastr.css ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* based on angular-toastr css https://github.com/Foxandxss/angular-toastr/blob/cb508fe6801d6b288d3afc525bb40fee1b101650/dist/angular-toastr.css */\n\n/* position */\n\n.toast-center-center {\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n\n.toast-top-center {\n  top: 0;\n  right: 0;\n  width: 100%;\n}\n\n.toast-bottom-center {\n  bottom: 0;\n  right: 0;\n  width: 100%;\n}\n\n.toast-top-full-width {\n  top: 0;\n  right: 0;\n  width: 100%;\n}\n\n.toast-bottom-full-width {\n  bottom: 0;\n  right: 0;\n  width: 100%;\n}\n\n.toast-top-left {\n  top: 12px;\n  left: 12px;\n}\n\n.toast-top-right {\n  top: 12px;\n  right: 12px;\n}\n\n.toast-bottom-right {\n  right: 12px;\n  bottom: 12px;\n}\n\n.toast-bottom-left {\n  bottom: 12px;\n  left: 12px;\n}\n\n/* toast styles */\n\n.toast-title {\n  font-weight: bold;\n}\n\n.toast-message {\n  word-wrap: break-word;\n}\n\n.toast-message a,\n.toast-message label {\n  color: #FFFFFF;\n}\n\n.toast-message a:hover {\n  color: #CCCCCC;\n  text-decoration: none;\n}\n\n.toast-close-button {\n  position: relative;\n  right: -0.3em;\n  top: -0.3em;\n  float: right;\n  font-size: 20px;\n  font-weight: bold;\n  color: #FFFFFF;\n  text-shadow: 0 1px 0 #ffffff;\n  /* opacity: 0.8; */\n}\n\n.toast-close-button:hover,\n.toast-close-button:focus {\n  color: #000000;\n  text-decoration: none;\n  cursor: pointer;\n  opacity: 0.4;\n}\n\n/*Additional properties for button version\n iOS requires the button element instead of an anchor tag.\n If you want the anchor version, it requires `href=\"#\"`.*/\n\nbutton.toast-close-button {\n  padding: 0;\n  cursor: pointer;\n  background: transparent;\n  border: 0;\n}\n\n.toast-container {\n  pointer-events: none;\n  position: fixed;\n  z-index: 999999;\n}\n\n.toast-container * {\n  box-sizing: border-box;\n}\n\n.toast-container .toast {\n  position: relative;\n  overflow: hidden;\n  margin: 0 0 6px;\n  padding: 15px 15px 15px 50px;\n  width: 300px;\n  border-radius: 3px 3px 3px 3px;\n  background-position: 15px center;\n  background-repeat: no-repeat;\n  background-size: 24px;\n  box-shadow: 0 0 12px #999999;\n  color: #FFFFFF;\n}\n\n.toast-container .toast:hover {\n  box-shadow: 0 0 12px #000000;\n  opacity: 1;\n  cursor: pointer;\n}\n\n/* https://github.com/FortAwesome/Font-Awesome-Pro/blob/master/advanced-options/raw-svg/regular/info-circle.svg */\n\n.toast-info {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='512' height='512'%3E%3Cpath fill='rgb(255,255,255)' d='M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z'/%3E%3C/svg%3E\");\n}\n\n/* https://github.com/FortAwesome/Font-Awesome-Pro/blob/master/advanced-options/raw-svg/regular/times-circle.svg */\n\n.toast-error {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='512' height='512'%3E%3Cpath fill='rgb(255,255,255)' d='M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z'/%3E%3C/svg%3E\");\n}\n\n/* https://github.com/FortAwesome/Font-Awesome-Pro/blob/master/advanced-options/raw-svg/regular/check.svg */\n\n.toast-success {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='512' height='512'%3E%3Cpath fill='rgb(255,255,255)' d='M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z'/%3E%3C/svg%3E\");\n}\n\n/* https://github.com/FortAwesome/Font-Awesome-Pro/blob/master/advanced-options/raw-svg/regular/exclamation-triangle.svg */\n\n.toast-warning {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512' width='576' height='512'%3E%3Cpath fill='rgb(255,255,255)' d='M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z'/%3E%3C/svg%3E\");\n}\n\n.toast-container.toast-top-center .toast,\n.toast-container.toast-bottom-center .toast {\n  width: 300px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.toast-container.toast-top-full-width .toast,\n.toast-container.toast-bottom-full-width .toast {\n  width: 96%;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.toast {\n  background-color: #030303;\n  pointer-events: auto;\n}\n\n.toast-success {\n  background-color: #51A351;\n}\n\n.toast-error {\n  background-color: #BD362F;\n}\n\n.toast-info {\n  background-color: #2F96B4;\n}\n\n.toast-warning {\n  background-color: #F89406;\n}\n\n.toast-progress {\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  height: 4px;\n  background-color: #000000;\n  opacity: 0.4;\n}\n\n/* Responsive Design */\n\n@media all and (max-width: 240px) {\n  .toast-container .toast.div {\n    padding: 8px 8px 8px 50px;\n    width: 11em;\n  }\n  .toast-container .toast-close-button {\n    right: -0.2em;\n    top: -0.2em;\n  }\n}\n\n@media all and (min-width: 241px) and (max-width: 480px) {\n  .toast-container .toast.div {\n    padding: 8px 8px 8px 50px;\n    width: 18em;\n  }\n  .toast-container .toast-close-button {\n    right: -0.2em;\n    top: -0.2em;\n  }\n}\n\n@media all and (min-width: 481px) and (max-width: 768px) {\n  .toast-container .toast.div {\n    padding: 15px 15px 15px 50px;\n    width: 25em;\n  }\n}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./node_modules/sass-loader/lib/loader.js??ref--14-3!./src/styles.scss":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./node_modules/postcss-loader/lib??embedded!./node_modules/sass-loader/lib/loader.js??ref--14-3!./src/styles.scss ***!
  \***************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* You can add global styles to this file, and also import other style files */\n.row,.row.reverse{}\n*,.row{box-sizing:border-box}\nbody{margin:0}\n.container,.container-fluid{margin-right:auto;margin-left:auto}\n.container-fluid{padding-right:2rem;padding-left:2rem}\n.row{display:flex;flex:0 1 auto;flex-direction:row;flex-wrap:wrap;margin-right:0;margin-left:0}\n.col.reverse,.row.reverse{}\n.row.reverse{flex-direction:row-reverse}\n.col.reverse{flex-direction:column-reverse}\n.col-xs,.col-xs-1,.col-xs-10,.col-xs-11,.col-xs-12,.col-xs-2,.col-xs-3,.col-xs-4,.col-xs-5,.col-xs-6,.col-xs-7,.col-xs-8,.col-xs-9{box-sizing:border-box;flex:0 0 auto;padding-right:.5rem;padding-left:.5rem}\n.col-xs{flex-grow:1;flex-basis:0;max-width:100%}\n.col-xs-1{flex-basis:8.33333333%;max-width:8.33333333%}\n.col-xs-2{flex-basis:16.66666667%;max-width:16.66666667%}\n.col-xs-3{flex-basis:25%;max-width:25%}\n.col-xs-4{flex-basis:33.33333333%;max-width:33.33333333%}\n.col-xs-5{flex-basis:41.66666667%;max-width:41.66666667%}\n.col-xs-6{flex-basis:50%;max-width:50%}\n.col-xs-7{flex-basis:58.33333333%;max-width:58.33333333%}\n.col-xs-8{flex-basis:66.66666667%;max-width:66.66666667%}\n.col-xs-9{flex-basis:75%;max-width:75%}\n.col-xs-10{flex-basis:83.33333333%;max-width:83.33333333%}\n.col-xs-11{flex-basis:91.66666667%;max-width:91.66666667%}\n.col-xs-12{flex-basis:100%;max-width:100%}\n.start-xs{justify-content:flex-start;text-align:start}\n.center-xs{justify-content:center;text-align:center}\n.end-xs{justify-content:flex-end;text-align:end}\n.top-xs{align-items:flex-start}\n.middle-xs{align-items:center}\n.bottom-xs{align-items:flex-end}\n.around-xs{justify-content:space-around}\n.between-xs{justify-content:space-between}\n.first-xs{order:-1}\n.last-xs{order:1}\n@media only screen and (min-width:768px){.container{width:47rem}.col-sm,.col-sm-1,.col-sm-10,.col-sm-11,.col-sm-12,.col-sm-2,.col-sm-3,.col-sm-4,.col-sm-5,.col-sm-6,.col-sm-7,.col-sm-8,.col-sm-9{box-sizing:border-box;flex:0 0 auto;padding-right:.5rem;padding-left:.5rem}.col-sm{flex-grow:1;flex-basis:0;max-width:100%}.col-sm-1{flex-basis:8.33333333%;max-width:8.33333333%}.col-sm-2{flex-basis:16.66666667%;max-width:16.66666667%}.col-sm-3{flex-basis:25%;max-width:25%}.col-sm-4{flex-basis:33.33333333%;max-width:33.33333333%}.col-sm-5{flex-basis:41.66666667%;max-width:41.66666667%}.col-sm-6{flex-basis:50%;max-width:50%}.col-sm-7{flex-basis:58.33333333%;max-width:58.33333333%}.col-sm-8{flex-basis:66.66666667%;max-width:66.66666667%}.col-sm-9{flex-basis:75%;max-width:75%}.col-sm-10{flex-basis:83.33333333%;max-width:83.33333333%}.col-sm-11{flex-basis:91.66666667%;max-width:91.66666667%}.col-sm-12{flex-basis:100%;max-width:100%}.start-sm{justify-content:flex-start;text-align:start}.center-sm{justify-content:center;text-align:center}.end-sm{justify-content:flex-end;text-align:end}.top-sm{align-items:flex-start}.middle-sm{align-items:center}.bottom-sm{align-items:flex-end}.around-sm{justify-content:space-around}.between-sm{justify-content:space-between}.first-sm{order:-1}.last-sm{order:1}}\n@media only screen and (min-width:1024px){.container{width:63rem}.col-md,.col-md-1,.col-md-10,.col-md-11,.col-md-12,.col-md-2,.col-md-3,.col-md-4,.col-md-5,.col-md-6,.col-md-7,.col-md-8,.col-md-9{box-sizing:border-box;flex:0 0 auto;padding-right:.5rem;padding-left:.5rem}.col-md{flex-grow:1;flex-basis:0;max-width:100%}.col-md-1{flex-basis:8.33333333%;max-width:8.33333333%}.col-md-2{flex-basis:16.66666667%;max-width:16.66666667%}.col-md-3{flex-basis:25%;max-width:25%}.col-md-4{flex-basis:33.33333333%;max-width:33.33333333%}.col-md-5{flex-basis:41.66666667%;max-width:41.66666667%}.col-md-6{flex-basis:50%;max-width:50%}.col-md-7{flex-basis:58.33333333%;max-width:58.33333333%}.col-md-8{flex-basis:66.66666667%;max-width:66.66666667%}.col-md-9{flex-basis:75%;max-width:75%}.col-md-10{flex-basis:83.33333333%;max-width:83.33333333%}.col-md-11{flex-basis:91.66666667%;max-width:91.66666667%}.col-md-12{flex-basis:100%;max-width:100%}.start-md{justify-content:flex-start;text-align:start}.center-md{justify-content:center;text-align:center}.end-md{justify-content:flex-end;text-align:end}.top-md{align-items:flex-start}.middle-md{align-items:center}.bottom-md{align-items:flex-end}.around-md{justify-content:space-around}.between-md{justify-content:space-between}.first-md{order:-1}.last-md{order:1}}\n@media only screen and (min-width:1440px){.container{width:76rem}.col-lg,.col-lg-1,.col-lg-10,.col-lg-11,.col-lg-12,.col-lg-2,.col-lg-3,.col-lg-4,.col-lg-5,.col-lg-6,.col-lg-7,.col-lg-8,.col-lg-9{box-sizing:border-box;flex:0 0 auto;padding-right:.5rem;padding-left:.5rem}.col-lg{flex-grow:1;flex-basis:0;max-width:100%}.col-lg-1{flex-basis:8.33333333%;max-width:8.33333333%}.col-lg-2{flex-basis:16.66666667%;max-width:16.66666667%}.col-lg-3{flex-basis:25%;max-width:25%}.col-lg-4{flex-basis:33.33333333%;max-width:33.33333333%}.col-lg-5{flex-basis:41.66666667%;max-width:41.66666667%}.col-lg-6{flex-basis:50%;max-width:50%}.col-lg-7{flex-basis:58.33333333%;max-width:58.33333333%}.col-lg-8{flex-basis:66.66666667%;max-width:66.66666667%}.col-lg-9{flex-basis:75%;max-width:75%}.col-lg-10{flex-basis:83.33333333%;max-width:83.33333333%}.col-lg-11{flex-basis:91.66666667%;max-width:91.66666667%}.col-lg-12{flex-basis:100%;max-width:100%}.start-lg{justify-content:flex-start;text-align:start}.center-lg{justify-content:center;text-align:center}.end-lg{justify-content:flex-end;text-align:end}.top-lg{align-items:flex-start}.middle-lg{align-items:center}.bottom-lg{align-items:flex-end}.around-lg{justify-content:space-around}.between-lg{justify-content:space-between}.first-lg{order:-1}.last-lg{order:1}}\n@media only screen and (min-width:1867px){.container{width:115rem}.col-xl,.col-xl-1,.col-xl-10,.col-xl-11,.col-xl-12,.col-xl-2,.col-xl-3,.col-xl-4,.col-xl-5,.col-xl-6,.col-xl-7,.col-xl-8,.col-xl-9{box-sizing:border-box;flex:0 0 auto;padding-right:.5rem;padding-left:.5rem}.col-xl{flex-grow:1;flex-basis:0;max-width:100%}.col-xl-1{flex-basis:8.33333333%;max-width:8.33333333%}.col-xl-2{flex-basis:16.66666667%;max-width:16.66666667%}.col-xl-3{flex-basis:25%;max-width:25%}.col-xl-4{flex-basis:33.33333333%;max-width:33.33333333%}.col-xl-5{flex-basis:41.66666667%;max-width:41.66666667%}.col-xl-6{flex-basis:50%;max-width:50%}.col-xl-7{flex-basis:58.33333333%;max-width:58.33333333%}.col-xl-8{flex-basis:66.66666667%;max-width:66.66666667%}.col-xl-9{flex-basis:75%;max-width:75%}.col-xl-10{flex-basis:83.33333333%;max-width:83.33333333%}.col-xl-11{flex-basis:91.66666667%;max-width:91.66666667%}.col-xl-12{flex-basis:100%;max-width:100%}.start-xl{justify-content:flex-start;text-align:start}.center-xl{justify-content:center;text-align:center}.end-xl{justify-content:flex-end;text-align:end}.top-xl{align-items:flex-start}.middle-xl{align-items:center}.bottom-xl{align-items:flex-end}.around-xl{justify-content:space-around}.between-xl{justify-content:space-between}.first-xl{order:-1}.last-xl{order:1}}\n@font-face {\n  font-family: 'RobotoBold';\n  src: url('RobotoBold.ttf'); }\n@font-face {\n  font-family: 'RobotoExtraBlack';\n  src: url('RobotoExtraBlack.ttf'); }\n@font-face {\n  font-family: 'RobotoLight';\n  src: url('RobotoLight.ttf'); }\n@font-face {\n  font-family: 'RobotoMedium';\n  src: url('RobotoMedium.ttf'); }\n@font-face {\n  font-family: 'RobotoRegular';\n  src: url('RobotoRegular.ttf'); }\n@media only screen and (min-width: 320px) {\n  h1,\n  h2,\n  h3,\n  h4,\n  p {\n    margin: 0px;\n    padding: 0px; }\n  a {\n    text-decoration: none; }\n  .toast-message {\n    font-family: 'RobotoRegular';\n    font-size: 20px;\n    padding: 20px 0px; }\n  .hero {\n    font-family: 'RobotoLight';\n    font-size: 28px;\n    font-weight: 300;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: normal;\n    letter-spacing: normal;\n    color: #ffffff; }\n  .h1 {\n    font-family: 'RobotoRegular';\n    font-size: 22px;\n    font-weight: normal;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: normal;\n    letter-spacing: normal;\n    color: #000052; }\n  .h2 {\n    font-family: 'RobotoMedium';\n    font-size: 20px;\n    font-weight: 500;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: normal;\n    letter-spacing: normal;\n    color: #000052; }\n  .h3 {\n    font-family: 'RobotoBold';\n    font-size: 16px;\n    font-weight: bold;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: normal;\n    letter-spacing: normal;\n    color: #000052; }\n  .b1 {\n    font-family: 'RobotoLight';\n    font-size: 16px;\n    font-weight: 300;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: 1.5;\n    letter-spacing: normal;\n    color: #323648; }\n  .b2 {\n    font-family: 'RobotoRegular';\n    font-size: 12px;\n    font-weight: normal;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: 1.5;\n    letter-spacing: 0.1px;\n    color: #323648; }\n  .b3 {\n    font-family: 'RobotoRegular';\n    font-size: 10px;\n    font-weight: normal;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: 1.5;\n    letter-spacing: 0.1px;\n    color: #323648; }\n  .button--bw {\n    border-radius: 30px;\n    border: solid 2px #ffffff;\n    font-size: 10px;\n    font-weight: 500;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: normal;\n    letter-spacing: normal;\n    text-align: center;\n    background-color: transparent;\n    padding: 8px 18px;\n    color: #ffffff;\n    cursor: pointer;\n    font-family: 'RobotoMedium';\n    outline: none; }\n  .button--color {\n    border-radius: 30px;\n    border: solid 0px #ffffff;\n    font-size: 10px;\n    font-weight: 500;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: normal;\n    letter-spacing: normal;\n    text-align: center;\n    background: linear-gradient(to right, #523d93, #41a1fa);\n    padding: 10px 20px;\n    color: #ffffff;\n    cursor: pointer;\n    font-family: 'RobotoMedium'; } }\n@media only screen and (min-width: 768px) {\n  .hero {\n    font-size: 36px; }\n  .h1 {\n    font-size: 32px; }\n  .h2 {\n    font-size: 26px; }\n  .h3 {\n    font-size: 20px; }\n  .b1 {\n    font-size: 20px; }\n  .b2 {\n    font-size: 14px; }\n  .b3 {\n    font-size: 11px; } }\n@media only screen and (min-width: 1024px) {\n  .hero {\n    font-size: 48px; }\n  .h1 {\n    font-size: 38px; }\n  .h2 {\n    font-size: 29px; }\n  .h3 {\n    font-size: 22px; }\n  .b1 {\n    font-size: 24px; }\n  .b2 {\n    font-size: 16px; }\n  .b3 {\n    font-size: 12px; }\n  .button--color,\n  .button--bw {\n    font-size: 14px;\n    padding: 10px 22px; }\n  .button--color {\n    padding: 12px 24px; } }\n@media only screen and (min-width: 1440px) {\n  .hero {\n    font-size: 55px; }\n  .h1 {\n    font-size: 42px; }\n  .h2 {\n    font-size: 31px; }\n  .h3 {\n    font-size: 24px; }\n  .b1 {\n    font-size: 28px; }\n  .b2 {\n    font-size: 17px; }\n  .b3 {\n    font-size: 14px; }\n  .button--color,\n  .button--bw {\n    font-size: 17px;\n    padding: 11px 30px;\n    font-family: 'RobotoRegular'; }\n  .button--color {\n    padding: 13px 32px; } }\n"

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/raw-loader!../node_modules/postcss-loader/lib??embedded!../node_modules/sass-loader/lib/loader.js??ref--14-3!./styles.scss */ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./node_modules/sass-loader/lib/loader.js??ref--14-3!./src/styles.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 2:
/*!********************************************************************!*\
  !*** multi ./src/styles.scss ./node_modules/ngx-toastr/toastr.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/hashworks/Desktop/projects/packeto-website/src/styles.scss */"./src/styles.scss");
module.exports = __webpack_require__(/*! /home/hashworks/Desktop/projects/packeto-website/node_modules/ngx-toastr/toastr.css */"./node_modules/ngx-toastr/toastr.css");


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles.js.map