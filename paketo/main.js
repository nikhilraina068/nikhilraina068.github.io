(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: router, AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "router", function() { return router; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product/product.component */ "./src/app/product/product.component.ts");
/* harmony import */ var _product_enigma_enigma_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product/enigma/enigma.component */ "./src/app/product/enigma/enigma.component.ts");
/* harmony import */ var _product_herculis_herculis_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product/herculis/herculis.component */ "./src/app/product/herculis/herculis.component.ts");
/* harmony import */ var _product_swordfish_swordfish_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product/swordfish/swordfish.component */ "./src/app/product/swordfish/swordfish.component.ts");
/* harmony import */ var _casestudy_casestudy_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./casestudy/casestudy.component */ "./src/app/casestudy/casestudy.component.ts");
/* harmony import */ var _partners_partners_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./partners/partners.component */ "./src/app/partners/partners.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./contact-page/contact-page.component */ "./src/app/contact-page/contact-page.component.ts");
/* harmony import */ var _common_suits_suits_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./common/suits/suits.component */ "./src/app/common/suits/suits.component.ts");
/* harmony import */ var _features_features_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./features/features.component */ "./src/app/features/features.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var router = [
    {
        path: '',
        redirectTo: '/',
        pathMatch: 'full'
    },
    { path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    // { path: '**', component: HomeComponent },
    {
        path: 'product',
        component: _product_product_component__WEBPACK_IMPORTED_MODULE_3__["ProductComponent"],
        children: [
            //   { path: '', redirectTo: 'enigma', pathMatch: 'full' },
            { path: 'enigma', component: _product_enigma_enigma_component__WEBPACK_IMPORTED_MODULE_4__["EnigmaComponent"] },
            { path: 'swordfish', component: _product_swordfish_swordfish_component__WEBPACK_IMPORTED_MODULE_6__["SwordfishComponent"] },
            { path: 'herculis', component: _product_herculis_herculis_component__WEBPACK_IMPORTED_MODULE_5__["HerculisComponent"] }
        ]
    },
    { path: 'casestudy',
        component: _casestudy_casestudy_component__WEBPACK_IMPORTED_MODULE_7__["CasestudyComponent"] },
    { path: 'partners', component: _partners_partners_component__WEBPACK_IMPORTED_MODULE_8__["PartnersComponent"] },
    { path: 'signup',
        component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_9__["SignupComponent"] },
    { path: 'contact',
        component: _contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_10__["ContactPageComponent"] },
    { path: 'suits', component: _common_suits_suits_component__WEBPACK_IMPORTED_MODULE_11__["SuitsComponent"] },
    { path: 'features', component: _features_features_component__WEBPACK_IMPORTED_MODULE_12__["FeaturesComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(router)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"paketo\">\n<app-header></app-header>\n<router-outlet></router-outlet>\n<app-footer></app-footer>\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".paketo {\n  margin-top: 72px; }\n\n@media only screen and (min-width: 1025px) {\n  .paketo {\n    margin-top: 107px; } }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _service_service_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./service/service.component */ "./src/app/service/service.component.ts");
/* harmony import */ var _features_features_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./features/features.component */ "./src/app/features/features.component.ts");
/* harmony import */ var _casestudy_casestudy_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./casestudy/casestudy.component */ "./src/app/casestudy/casestudy.component.ts");
/* harmony import */ var _partners_partners_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./partners/partners.component */ "./src/app/partners/partners.component.ts");
/* harmony import */ var _product_product_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./product/product.module */ "./src/app/product/product.module.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _common_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./common/footer/footer.component */ "./src/app/common/footer/footer.component.ts");
/* harmony import */ var _common_header_header_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./common/header/header.component */ "./src/app/common/header/header.component.ts");
/* harmony import */ var _common_suits_suits_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./common/suits/suits.component */ "./src/app/common/suits/suits.component.ts");
/* harmony import */ var _contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./contact-page/contact-page.component */ "./src/app/contact-page/contact-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// import { ProductComponent } from './product/product.component';











// import { EnigmaComponent } from './product/enigma/enigma.component';
// import { SwordfishComponent } from './product/swordfish/swordfish.component';
// import { HerculisComponent } from './product/herculis/herculis.component';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                // ProductComponent,
                _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _service_service_component__WEBPACK_IMPORTED_MODULE_6__["ServiceComponent"],
                _features_features_component__WEBPACK_IMPORTED_MODULE_7__["FeaturesComponent"],
                _casestudy_casestudy_component__WEBPACK_IMPORTED_MODULE_8__["CasestudyComponent"],
                _partners_partners_component__WEBPACK_IMPORTED_MODULE_9__["PartnersComponent"],
                _signup_signup_component__WEBPACK_IMPORTED_MODULE_11__["SignupComponent"],
                _common_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"],
                _common_header_header_component__WEBPACK_IMPORTED_MODULE_13__["HeaderComponent"],
                _common_suits_suits_component__WEBPACK_IMPORTED_MODULE_14__["SuitsComponent"],
                _contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_15__["ContactPageComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _product_product_module__WEBPACK_IMPORTED_MODULE_10__["ProductModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/casestudy/casestudy.component.html":
/*!****************************************************!*\
  !*** ./src/app/casestudy/casestudy.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"caseStudy\">\n\n<div class=\"caseStudy__banner\">\n\n  <div class=\"caseStudy__banner__outer\">\n    <h1 class=\"hero\">Case Studies</h1>\n    <div class=\"caseStudy__banner__outer__line\">\n      <div class=\"dot\"></div>\n      <div class=\"line\"></div>\n    </div>\n  </div>\n  \n</div>\n\n\n<div class=\"caseStudy__container\">\n  <div class=\"row\">\n  <div class=\"caseStudy__container__card col-xs-12 col-sm-4\">\n    <div class=\"caseStudy__container__card__img caseStudy__container__card__card1\"></div>\n    <div class=\"caseStudy__container__card__text h3\">Explore the future of design and creativity.</div>\n  </div>\n  <div class=\"caseStudy__container__card col-xs-12 col-sm-4\">\n    <div class=\"caseStudy__container__card__img caseStudy__container__card__card2\"></div>\n    <div class=\"caseStudy__container__card__text h3\">Explore the future of design and creativity.</div>\n  </div>\n  <div class=\"caseStudy__container__card col-xs-12 col-sm-4\">\n    <div class=\"caseStudy__container__card__img caseStudy__container__card__card3\"></div>\n    <div class=\"caseStudy__container__card__text h3\">Explore the future of design and creativity.</div>\n  </div>\n  <div class=\"caseStudy__container__card col-xs-12 col-sm-4\">\n    <div class=\"caseStudy__container__card__img caseStudy__container__card__card4\"></div>\n    <div class=\"caseStudy__container__card__text h3\">Explore the future of design and creativity.</div>\n  </div>\n  <div class=\"caseStudy__container__card col-xs-12 col-sm-4\">\n    <div class=\"caseStudy__container__card__img caseStudy__container__card__card5\"></div>\n    <div class=\"caseStudy__container__card__text h3\">Explore the future of design and creativity.</div>\n  </div>\n  <div class=\"caseStudy__container__card col-xs-12 col-sm-4\">\n    <div class=\"caseStudy__container__card__img caseStudy__container__card__card6\"></div>\n    <div class=\"caseStudy__container__card__text h3\">Explore the future of design and creativity.</div>\n  </div>\n  </div>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/casestudy/casestudy.component.scss":
/*!****************************************************!*\
  !*** ./src/app/casestudy/casestudy.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".caseStudy__banner {\n  width: 100%;\n  height: 464px;\n  background-color: #1a1a1a;\n  display: flex;\n  justify-content: center;\n  /* align horizontal */\n  align-items: center; }\n  .caseStudy__banner__outer {\n    width: 164px; }\n  .caseStudy__banner__outer h1 {\n      color: white;\n      margin: 0px; }\n  .caseStudy__banner__outer__line {\n      width: 103px;\n      float: right; }\n  .caseStudy__banner__outer__line .dot {\n        width: 8px;\n        height: 8px;\n        background-color: #41a1fa;\n        border-radius: 50%;\n        display: inline-block; }\n  .caseStudy__banner__outer__line .line {\n        width: 90px;\n        height: 7px;\n        background-color: #41a1fa;\n        display: inline-block;\n        border-radius: 10px;\n        margin-left: 3px;\n        display: inline-block; }\n  .caseStudy__container {\n  width: 220px;\n  margin: 0 auto;\n  margin-bottom: 32px; }\n  .caseStudy__container__card {\n    margin-top: 32px;\n    transition: all .5s ease;\n    cursor: pointer;\n    width: 220px; }\n  .caseStudy__container__card__img {\n      width: 220px;\n      height: 156px;\n      background-repeat: no-repeat; }\n  .caseStudy__container__card:hover {\n      box-shadow: 2px 8px 20px 0 rgba(31, 32, 68, 0.25), 0px -1px 9px 0 rgba(31, 32, 68, 0.25);\n      -webkit-transform: scale(1.01);\n      transform: scale(1.01); }\n  .caseStudy__container__card__card1 {\n      background-image: url('caseStudyItemMob1.jpg'); }\n  .caseStudy__container__card__card2 {\n      background-image: url('caseStudyItemMob2.jpg'); }\n  .caseStudy__container__card__card3 {\n      background-image: url('caseStudyItemMob3.jpg'); }\n  .caseStudy__container__card__card4 {\n      background-image: url('caseStudyItemMob1.jpg'); }\n  .caseStudy__container__card__card5 {\n      background-image: url('caseStudyItemMob2.jpg'); }\n  .caseStudy__container__card__card6 {\n      background-image: url('caseStudyItemMob3.jpg'); }\n  .caseStudy__container__card__text {\n      color: #323648;\n      padding-top: 15px; }\n  @media only screen and (min-width: 768px) {\n  .caseStudy__banner__outer {\n    width: 698px; }\n    .caseStudy__banner__outer h1 {\n      display: inline-block; }\n    .caseStudy__banner__outer__line {\n      display: inline-block;\n      float: none;\n      margin-left: 12px;\n      width: 140px; }\n      .caseStudy__banner__outer__line .line {\n        width: 125px; }\n  .caseStudy__container {\n    width: 698px; }\n    .caseStudy__container__card {\n      width: 220px;\n      padding-top: 8px;\n      padding-bottom: 8px;\n      padding-left: 8px; } }\n  @media only screen and (min-width: 1025px) {\n  .caseStudy__banner__outer {\n    width: 930px; }\n  .caseStudy__container {\n    width: 930px; }\n    .caseStudy__container__card {\n      width: 290px;\n      padding-top: 8px;\n      padding-bottom: 8px;\n      padding-left: 10px; }\n      .caseStudy__container__card__img {\n        width: 290px;\n        height: 207px;\n        background-size: cover; }\n      .caseStudy__container__card__card1 {\n        background-image: url('caseStudyItem1.jpg'); }\n      .caseStudy__container__card__card2 {\n        background-image: url('caseStudyItem2.jpg'); }\n      .caseStudy__container__card__card3 {\n        background-image: url('caseStudyItem3.jpg'); }\n      .caseStudy__container__card__card4 {\n        background-image: url('caseStudyItem1.jpg'); }\n      .caseStudy__container__card__card5 {\n        background-image: url('caseStudyItem2.jpg'); }\n      .caseStudy__container__card__card6 {\n        background-image: url('caseStudyItem3.jpg'); } }\n  @media only screen and (min-width: 1440px) {\n  .caseStudy__banner__outer {\n    width: 1110px; }\n  .caseStudy__container {\n    width: 1110px; }\n    .caseStudy__container__card {\n      width: 350px; }\n      .caseStudy__container__card__img {\n        width: 350px;\n        height: 250px; } }\n"

/***/ }),

/***/ "./src/app/casestudy/casestudy.component.ts":
/*!**************************************************!*\
  !*** ./src/app/casestudy/casestudy.component.ts ***!
  \**************************************************/
/*! exports provided: CasestudyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CasestudyComponent", function() { return CasestudyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CasestudyComponent = /** @class */ (function () {
    function CasestudyComponent() {
    }
    CasestudyComponent.prototype.ngOnInit = function () {
    };
    CasestudyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-casestudy',
            template: __webpack_require__(/*! ./casestudy.component.html */ "./src/app/casestudy/casestudy.component.html"),
            styles: [__webpack_require__(/*! ./casestudy.component.scss */ "./src/app/casestudy/casestudy.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CasestudyComponent);
    return CasestudyComponent;
}());



/***/ }),

/***/ "./src/app/common/footer/footer.component.html":
/*!*****************************************************!*\
  !*** ./src/app/common/footer/footer.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\n  <div class=\"footer__all\">\n  <div class=\"footer__div1\">\n    <button [routerLink]=\"['/']\">\n    <img src=\"../../../assets/img/headerfooter/logo.svg\" alt=\"paketo_image\"></button>\n\n    <a [routerLink]=\"['/signup']\" target=\"_blank\" class=\"custom-button\"><span class=\"custom-button__text\">Sign up for Free Trail</span></a>\n  </div>\n  <div class=\"footer__div2\">\n    <a [routerLink]=\"['/product']\" class=\"h3\">Products</a>\n    <a class=\"b2\">Hercules</a>\n    <a class=\"b2\">Swordfish</a>\n    <a class=\"b2\">Enigma</a>\n  </div>\n  <div class=\"footer__div3\">\n    <a [routerLink]=\"['/features']\" class=\"h3\">Features</a>\n    <a [routerLink]=\"['/partners']\" class=\"h3\">Partners</a>\n    <a [routerLink]=\"['/casestudy']\" class=\"h3\">Case studies</a>\n    <a [routerLink]=\"['/services']\" class=\"h3\">Services</a>\n  </div>\n  <div class=\"footer__div4\">\n    <a class=\"h3\">Pricing</a>\n    <a [routerLink]=\"['/contact']\" class=\"h3\">Contact</a>\n    <a class=\"h3\">FAQ</a>\n  </div>\n</div>\n  <div class=\"footer__div5\">\n    <h2 class=\"b2\">Terms of service | Privacy policy</h2>\n    <h3 class=\"b3\">Copyright © 2018 Paketo.</h3>\n  </div>\n</footer>\n"

/***/ }),

/***/ "./src/app/common/footer/footer.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/common/footer/footer.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\n  background-color: #1a1a1a;\n  padding: 20px;\n  text-align: center; }\n  .footer .b2, .footer .b3, .footer .h3 {\n    color: #fff; }\n  .footer .h3 {\n    margin-bottom: 18px; }\n  .footer a {\n    text-decoration: none;\n    display: block; }\n  .footer__div1 button {\n    background: transparent;\n    border: none;\n    outline: none;\n    display: block;\n    margin: 0 auto; }\n  .footer__div1 button img {\n      cursor: pointer;\n      width: 106px;\n      height: 28px; }\n  .footer__div1 .custom-button {\n    text-decoration: none;\n    padding: 2px;\n    border-radius: 30px;\n    background: linear-gradient(to right, #523d93, #41a1fa);\n    display: inline-block;\n    margin: 23px 0px 35px; }\n  .footer__div1 .custom-button__text {\n      background: #1a1a1a;\n      color: #fff;\n      display: block;\n      padding: 10px 20px;\n      font-size: 10px;\n      font-family: 'RobotoMedium';\n      border-radius: 30px; }\n  .footer__div2 {\n    margin-bottom: 46px; }\n  .footer__div2 .b2 {\n      margin-bottom: 7px; }\n  .footer__div5 .b2 {\n    margin-bottom: 5px; }\n  @media only screen and (min-width: 768px) {\n  .footer {\n    padding: 65px 20px 63px; }\n    .footer__all {\n      width: 701px;\n      margin: 0 auto;\n      display: flex; }\n      .footer__all div {\n        margin-right: 70px;\n        text-align: left; }\n    .footer__div1 button {\n      margin: 0px; }\n      .footer__div1 button img {\n        width: 127px;\n        height: 34px; }\n    .footer__div1 .custom-button {\n      margin: 43px 0px 0px; }\n    .footer__div2 {\n      margin-bottom: 0px; }\n    .footer__div5 {\n      width: 701px;\n      margin: 50px auto 0px;\n      text-align: right; } }\n  @media only screen and (min-width: 1025px) {\n  .footer__all {\n    width: 930px; }\n    .footer__all div {\n      margin-right: 105px; }\n  .footer__div1 button {\n    margin: 0px; }\n    .footer__div1 button img {\n      width: 155px;\n      height: 44px; }\n  .footer__div1 .custom-button {\n    margin: 39px 0px 0px; }\n    .footer__div1 .custom-button__text {\n      font-size: 14px;\n      padding: 10px 22px; }\n  .footer__div5 {\n    width: 930px; } }\n  @media only screen and (min-width: 1440px) {\n  .footer__all {\n    width: 1110px; }\n    .footer__all div {\n      margin-right: 140px; }\n  .footer__div1 button {\n    margin: 0px; }\n    .footer__div1 button img {\n      width: 175px;\n      height: 52px; }\n  .footer__div1 .custom-button {\n    margin: 39px 0px 0px; }\n    .footer__div1 .custom-button__text {\n      font-size: 17px;\n      padding: 11px 30px;\n      font-family: 'RobotoRegular'; }\n  .footer__div5 {\n    width: 1110px; } }\n"

/***/ }),

/***/ "./src/app/common/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/common/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/common/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/common/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/common/header/header.component.html":
/*!*****************************************************!*\
  !*** ./src/app/common/header/header.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"header\">\n  <img class=\"header__img\" src=\"../../../assets/img/headerfooter/logo.svg\" alt=\"paketo_image\">\n  <div class=\"header__tab\">\n    <div>\n      <button class=\"header__tab__button b2\" [routerLink]=\"['/product']\" [routerLinkActive]=\"['selected']\">Products</button>\n      <button class=\"header__tab__button b2\" [routerLink]=\"['/services']\" [routerLinkActive]=\"['selected']\">Services</button>\n      <button class=\"header__tab__button b2\" [routerLink]=\"['/features']\" [routerLinkActive]=\"['selected']\">Features</button>\n      <button class=\"header__tab__button b2\" [routerLink]=\"['/pricing']\" [routerLinkActive]=\"['selected']\">Pricing</button>\n      <button class=\"header__tab__button b2\" [routerLink]=\"['/casestudy']\" [routerLinkActive]=\"['selected']\">Case studies</button>\n      <button class=\"header__tab__button b2\" [routerLink]=\"['/partners']\" [routerLinkActive]=\"['selected']\">Partners</button>\n\n    </div>\n    <a [routerLink]=\"['/signup']\" target=\"_blank\" class=\"custom-button\"><span class=\"custom-button__text\">Sign up for Free Trail</span></a>    \n  </div>\n</header>\n"

/***/ }),

/***/ "./src/app/common/header/header.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/common/header/header.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n  height: 72px;\n  z-index: 2;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0px 27px 0px 17px;\n  border-bottom: solid 1px #737373;\n  background-color: #1a1a1a;\n  position: fixed;\n  top: 0px; }\n  .header__img {\n    width: 100px;\n    height: 26px; }\n  .header__tab {\n    display: flex;\n    align-items: center; }\n  .header__tab .custom-button {\n      text-decoration: none;\n      padding: 2px;\n      border-radius: 30px;\n      background: linear-gradient(to right, #523d93, #41a1fa);\n      display: inline-block; }\n  .header__tab .custom-button__text {\n        background: #1a1a1a;\n        color: #fff;\n        display: block;\n        padding: 10px 20px;\n        font-size: 10px;\n        font-family: 'RobotoMedium';\n        border-radius: 30px; }\n  .header__tab__button {\n      padding: 0px;\n      position: relative;\n      background-color: transparent;\n      margin-right: 12px;\n      color: #fff;\n      border: none;\n      outline: none;\n      cursor: pointer; }\n  .header__tab__button::after {\n        content: '';\n        width: 0px;\n        transition: all .5s; }\n  .header .selected::before {\n    content: '';\n    width: 5px;\n    height: 5px;\n    background-color: #41a1fa;\n    border-radius: 50%;\n    position: absolute;\n    bottom: -10px; }\n  .header .selected::after {\n    content: '';\n    width: 81%;\n    height: 5px;\n    background-color: #41a1fa;\n    border-radius: 20px;\n    position: absolute;\n    bottom: -10px;\n    left: 11px; }\n  @media only screen and (min-width: 768px) {\n  .header {\n    padding: 0px 34px 0px 34px; }\n    .header__img {\n      width: 120px;\n      height: 31px; } }\n  @media only screen and (min-width: 1025px) {\n  .header {\n    height: 107px; }\n    .header__tab .custom-button__text {\n      font-size: 14px;\n      padding: 10px 22px; }\n    .header__tab__button {\n      margin-right: 20px; } }\n  @media only screen and (min-width: 1440px) {\n  .header__tab .custom-button__text {\n    font-size: 17px;\n    padding: 11px 30px;\n    font-family: 'RobotoRegular'; }\n  .header__tab__button {\n    margin-right: 20px; }\n  .header .selected::before {\n    content: '';\n    width: 6px;\n    height: 6px;\n    bottom: -14px; }\n  .header .selected::after {\n    content: '';\n    width: 83%;\n    height: 6px;\n    background-color: #41a1fa;\n    border-radius: 20px;\n    position: absolute;\n    bottom: -14px;\n    left: 12px; } }\n"

/***/ }),

/***/ "./src/app/common/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/common/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/common/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/common/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/common/suits/suits.component.html":
/*!***************************************************!*\
  !*** ./src/app/common/suits/suits.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"suits\">\n  <h1 class=\"h1\">Ready to get the Paketo suite?</h1>\n  <p class=\"b2\">It provides the backbone for DevOps release automation, complements existing tools, and enables full visibility across the entire software delivery process.</p>\n<button class=\"button--bw\">Get a free trail</button>\n</div>"

/***/ }),

/***/ "./src/app/common/suits/suits.component.scss":
/*!***************************************************!*\
  !*** ./src/app/common/suits/suits.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".suits {\n  background-color: rgba(26, 26, 26, 0.6);\n  text-align: center;\n  background-image: url('suit.jpg');\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: bottom; }\n  .suits h1 {\n    color: #ffffff;\n    padding: 40px 0px 25px;\n    width: 260px;\n    margin: 0 auto; }\n  .suits p {\n    color: #ffffff;\n    width: 238px;\n    margin: 0 auto; }\n  .suits button {\n    margin: 38px 0px 49px; }\n  @media only screen and (min-width: 768px) {\n  .suits {\n    background-size: cover; }\n    .suits h1 {\n      padding: 52px 0px 14px;\n      width: 490px; }\n    .suits p {\n      width: 548px; }\n    .suits button {\n      margin: 44px 0px 49px; } }\n  @media only screen and (min-width: 1025px) {\n  .suits h1 {\n    padding: 54px 0px 13px;\n    width: 571px;\n    line-height: 1.69; }\n  .suits p {\n    width: 730px; }\n  .suits button {\n    margin: 37px 0px 47px; } }\n  @media only screen and (min-width: 1440px) {\n  .suits h1 {\n    padding: 51px 0px 15px;\n    width: 598px; }\n  .suits button {\n    margin: 31px 0px 47px; } }\n"

/***/ }),

/***/ "./src/app/common/suits/suits.component.ts":
/*!*************************************************!*\
  !*** ./src/app/common/suits/suits.component.ts ***!
  \*************************************************/
/*! exports provided: SuitsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuitsComponent", function() { return SuitsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SuitsComponent = /** @class */ (function () {
    function SuitsComponent() {
    }
    SuitsComponent.prototype.ngOnInit = function () {
    };
    SuitsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-suits',
            template: __webpack_require__(/*! ./suits.component.html */ "./src/app/common/suits/suits.component.html"),
            styles: [__webpack_require__(/*! ./suits.component.scss */ "./src/app/common/suits/suits.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SuitsComponent);
    return SuitsComponent;
}());



/***/ }),

/***/ "./src/app/contact-page/contact-page.component.html":
/*!**********************************************************!*\
  !*** ./src/app/contact-page/contact-page.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"contact\">\n  \n    <div class=\"row\">\n  \n      <div class=\"contact__image col-xs-12 col-sm-4\">\n          <div class=\"contact__image__logo\">\n          </div>\n          <div class=\"contact__image__content b1\">\n              Go from code to running app in minutes. Deploy, scale, and deliver your app to the world.\n          </div>\n            <div class=\"contact__image__copyright b3\">\n                Copyright © 2018 Paketo.\n              </div>\n      </div>\n  \n      <div *ngIf=\"counter\" class=\"contact__form col-xs-12 col-sm-8\">\n          <div class=\"contact__form__header h1\">\n              Contact\n          </div>\n          <div class=\"contact__form__content b2\">\n              Hi, can we help you transform your organization?\n          </div>\n          <div *ngIf = \"errorMsgCounter\" class=\"contact__form__errorMsg b3\">\n              Please fill all the mandatory fields\n          </div>\n          <div class=\"contact__form__container\">\n          <form [formGroup]=\"contactform\" name=\"contactform\" (ngSubmit)=\"onSignup(contactform.value)\">\n          <div class=\"row\">\n            <div class=\"contact__form__container__input contact__form__container__fname col-xs-12 col-sm-6\">\n              <div   class=\"contact__form__container__input__label h2\">\n                  First Name\n              </div>\n              <input  [class.errorClassField]=\"errorMsgCounter\" type=\"text\" formControlName=\"firstname\" name=\"firstname\" class=\"contact__form__container__input__field b3\"/>\n            </div>\n  \n            <div class=\"contact__form__container__input contact__form__container__lname col-xs-12 col-sm-6\">\n                <div class=\"contact__form__container__input__label h2\">\n                    Last Name\n                </div>\n                <input  class=\"contact__form__container__input__field b3\"  [class.errorClassField]=\"errorMsgCounter\" type=\"text\" formControlName=\"lastname\" name=\"lastname\" />\n              </div>\n          </div>\n  \n              <div class=\"contact__form__container__input\">\n                  <div class=\"contact__form__container__input__label h2\">\n                      Company Name\n                  </div>\n                  <input  class=\"contact__form__container__input__field b3\" [class.errorClassField]=\"errorMsgCounter\" type=\"text\" formControlName=\"companyname\" name=\"companyname\" />\n              </div>\n  \n                <div class=\"contact__form__container__input\">\n                    <div class=\"contact__form__container__input__label h2\">\n                        Role\n                    </div>\n                    <input class=\"contact__form__container__input__field b3\" [class.errorClassField]=\"errorMsgCounter\" type=\"text\" formControlName=\"role\" name=\"role\"/>\n                 </div>\n  \n                  <div class=\"contact__form__container__input\">\n                      <div class=\"contact__form__container__input__label h2\">\n                          Work Email\n                      </div>\n                      <input  class=\"contact__form__container__input__field b3\"  [pattern]=\"emailPattern\" [class.errorClassField]=\"errorMsgCounter\" type=\"email\" formControlName=\"email\" name=\"email\"/>\n                  </div>\n\n                  <div class=\"contact__form__container__input\">\n                      <div class=\"contact__form__container__input__label h2\">\n                          Message\n                      </div>\n                      <!-- <input  class=\"contact__form__container__input__field b3\"   [class.errorClassField]=\"errorMsgCounter\" type=\"text\" formControlName=\"email\" name=\"email\"/> -->\n                    <textarea class=\"contact__form__container__input__field b3\"   [class.errorClassField]=\"errorMsgCounter\" formControlName=\"msg\" name=\"msg\"></textarea>\n                    </div>\n  \n                  <div class=\"contact__form__container__checkBox\">\n                      <label>\n                    <input type=\"checkbox\" name=\"informOffers\" />\n                    <div class=\"contact__form__container__checkBox__text b3\">\n                        Please keep me informed of products, services and offerings from Paketo and Hashworks.\n                    </div>\n                  </label>\n                  </div>\n  \n                  <button id=\"signup\" class=\"contact__form__container__button button--color\">Sign up</button>\n           </form>\n          </div>\n  \n      </div>\n  \n      <div *ngIf=\"!counter\" class=\"contact__reply col-xs-12 col-sm-8\">\n              <div class=\"contact__reply__header h1\">\n                      Thanks for signing up!\n               </div>\n               <div class=\"contact__reply__content b2\">\n                          Our team will be mailing you the credentials for the Paketo trail suite.\n               </div>\n               <div class=\"contact__reply__img\">\n  \n               </div>\n      </div>\n  \n    </div>\n  \n  </div>"

/***/ }),

/***/ "./src/app/contact-page/contact-page.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/contact-page/contact-page.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".contact__image {\n  background-image: url('signupImgMobile.jpg');\n  width: 100%;\n  height: 176px;\n  background-repeat: no-repeat;\n  background-size: cover;\n  padding: 13px 25px;\n  display: -ms-grid;\n  display: grid; }\n  .contact__image__copyright {\n    -ms-grid-row-align: end;\n        align-self: end; }\n  .contact__image__logo {\n    background-image: url(\"data:image/png;base64,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\");\n    width: 111px;\n    height: 29px; }\n  .contact__image__content {\n    color: #ffffff; }\n  .contact__image__copyright {\n    color: #ffffff; }\n  .contact__form {\n  display: block;\n  width: 320px;\n  text-align: center;\n  margin: 30px 0px; }\n  .contact__form__content {\n    margin-top: 5px;\n    padding: 0px 25px; }\n  .contact__form__errorMsg {\n    color: red;\n    margin-top: 15px; }\n  .contact__form__container {\n    width: 220px;\n    margin: 0 auto;\n    margin-top: 20px; }\n  .contact__form__container__input {\n      margin-top: 10px;\n      text-align: left;\n      padding: 0px; }\n  .contact__form__container__input__label {\n        font-size: 13px; }\n  .contact__form__container__input__field {\n        margin-top: 3px;\n        width: 100%;\n        height: 30px;\n        border-radius: 4px;\n        background-color: #ffffff;\n        border: solid 1px #e0e0e0;\n        outline: none;\n        padding-left: 10px; }\n  .contact__form__container__input > textarea {\n        height: 42px; }\n  .contact__form__container__input .errorClass {\n        color: red; }\n  .contact__form__container__input .errorClassField {\n        border: 1px solid red; }\n  .contact__form__container__input .ng-valid {\n        border: solid 1px #e0e0e0; }\n  .contact__form__container__checkBox {\n      text-align: left;\n      margin-top: 15px; }\n  .contact__form__container__checkBox input {\n        float: left;\n        cursor: pointer; }\n  .contact__form__container__checkBox__text {\n        width: 193px;\n        margin-left: 27px;\n        cursor: pointer; }\n  .contact__form__container__button {\n      margin-top: 30px;\n      outline: none; }\n  .contact__reply {\n  display: block;\n  text-align: center;\n  padding: 70px 0px; }\n  .contact__reply__content {\n    padding: 20px 25px; }\n  .contact__reply__img {\n    width: 234px;\n    height: 132px;\n    background-image: url('signUpReplyMobile.jpg');\n    margin: 0 auto; }\n  @media only screen and (min-width: 768px) {\n  .contact__image {\n    background-image: url('signupImgTab.jpg');\n    height: 542px;\n    background-repeat: no-repeat;\n    padding: 32px 25px;\n    display: -ms-grid;\n    display: grid; }\n  .contact__form__container {\n    width: 300px; }\n    .contact__form__container__input__label {\n      font-size: 17px; }\n    .contact__form__container__input > textarea {\n      height: 56px; }\n    .contact__form__container__fname {\n      padding-right: 5px; }\n    .contact__form__container__lname {\n      padding-left: 5px; }\n    .contact__form__container__checkBox__text {\n      width: 255px; }\n  .contact__reply {\n    padding: 130px 0px; } }\n  @media only screen and (min-width: 1025px) {\n  .contact__image {\n    background-image: url('signupImgDesk.jpg');\n    height: 682px;\n    background-repeat: no-repeat;\n    padding: 32px 25px; }\n  .contact__form__container {\n    width: 421px; }\n    .contact__form__container__checkBox__text {\n      width: 377px; }\n    .contact__form__container__input > textarea {\n      height: 78px; }\n  .contact__reply {\n    padding: 180px 0px; } }\n  @media only screen and (min-width: 1440px) {\n  .contact__image {\n    background-image: url('signupImgHD.jpg');\n    height: 768px; } }\n"

/***/ }),

/***/ "./src/app/contact-page/contact-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/contact-page/contact-page.component.ts ***!
  \********************************************************/
/*! exports provided: ContactPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactPageComponent", function() { return ContactPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPageComponent = /** @class */ (function () {
    function ContactPageComponent(fb) {
        this.fb = fb;
        this.emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
        this.counter = true;
        this.errorMsgCounter = false;
        this.signObj = {};
        this.contactform = fb.group({
            'firstname': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'lastname': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'companyname': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'role': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'email': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    }
    ContactPageComponent.prototype.ngOnInit = function () {
    };
    ContactPageComponent.prototype.onSignup = function (value) {
        console.log(this.contactform.valid);
        if (!this.contactform.valid) {
            this.errorMsgCounter = true;
        }
        else {
            this.counter = false;
        }
    };
    ContactPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact-page',
            template: __webpack_require__(/*! ./contact-page.component.html */ "./src/app/contact-page/contact-page.component.html"),
            styles: [__webpack_require__(/*! ./contact-page.component.scss */ "./src/app/contact-page/contact-page.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], ContactPageComponent);
    return ContactPageComponent;
}());



/***/ }),

/***/ "./src/app/features/features.component.html":
/*!**************************************************!*\
  !*** ./src/app/features/features.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"feature\">\n    <div class=\"feature__banners\">\n        <div class=\"feature__banners__content\">\n            <h1 class=\"hero\">Simplifying the way you deliver</h1>\n            <div class=\"feature__banners--border\">\n                <div class=\"dot\"></div>\n                <div class=\"line\"></div>\n            </div>\n            <p class=\"b2\"> We bring the industry experts, thought leaders and hands-on practitioners to innovate faster and scale smarter.</p>\n\n        </div>\n    </div>\n\n    <div class=\"feature__dropdown\">\n        <div></div>\n    </div>\n    <div class=\"feature__tabs__scroller\">\n        <div class=\"feature__tabs\">\n            <div class=\"feature__tabs__list\">\n                <div>\n                    <div class=\"feature__tabs__list--border\" (click)=\"listClick($event, '1')\">\n                        <img src=\"../../assets/img/features/commit.svg\" alt=\"\">\n                    </div>\n                    <p class=\"b2\">Commit</p>\n                </div>\n                <div>\n                    <div class=\"feature__tabs__list--border\" (click)=\"listClick($event, '2')\">\n                        <img src=\"../../assets/img/features/build.svg\" alt=\"\">\n                    </div>\n                    <p class=\"b2\">Build</p>\n                </div>\n\n                <div>\n                    <div class=\"feature__tabs__list--border\" (click)=\"listClick($event, '3')\">\n                        <img src=\"../../assets/img/features/deploy.svg\" alt=\"\">\n                    </div>\n                    <p class=\"b2\">Deploy</p>\n                </div>\n                <div>\n                    <div class=\"feature__tabs__list--border\" (click)=\"listClick($event, '4')\">\n                        <img src=\"../../assets/img/features/release.svg\" alt=\"\">\n                    </div>\n                    <p class=\"b2\">Release</p>\n                </div>\n                <div>\n                    <div class=\"feature__tabs__list--border header \" (click)=\"listClick($event, '5')\">\n                        <h1 class=\"h3\">Swordfish</h1>\n                        <div class=\"circle\"></div>\n                        <img src=\"../../assets/img/features/test.svg\" alt=\"\">\n                    </div>\n                    <p class=\"b2\">Test</p>\n                </div>\n                <div>\n                    <div class=\"feature__tabs__list--border header\" (click)=\"listClick($event, '6')\">\n                        <h1 class=\"h3\">Enigma</h1>\n                        <div class=\"circle1\"></div>\n                        <img src=\"../../assets/img/features/Monitor.svg\" alt=\"\">\n                    </div>\n                    <p class=\"b2\">Monitor</p>\n                </div>\n            </div>\n            <div class=\"feature__tabs--hercules\">\n                <h1 class=\"h3\">Hercules</h1>\n                <div class=\"border1\"></div>\n                <div class=\"border2\"></div>\n                <div class=\"border2\"></div>\n                <div class=\"border3\"></div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"feature__details default\" [ngClass]=\"{'active': selectedItem1 == '1' }\">\n        <div class=\"row\">\n            <div class=\"col-xs-12 col-sm-6 end-sm nopadding \">\n                <img src=\"../../assets/img/features/commit1.png\" alt=\"\">\n            </div>\n            <div class=\"col-xs-12 first-xs col-sm-6 last-sm nopadding content\">\n                <div>\n                    <h3 class=\"h3\">Automatically trigger application builds on every code commit</h3>\n                    <p class=\"b2\">Connect your preferred source control repository with the click of a button and automatically trigger\n                        application builds and continuous integration workflows on any code commit or pull request.</p>\n                </div>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-xs-12 col-sm-6 nopadding content\">\n                <div>\n                    <h3 class=\"h3\">Auto Create delivery pipelines in minutes</h3>\n                    <p class=\"b2\">Build continuous delivery pipelines in a few clicks and visualize your entire software delivery lifecycle\n                        through a single dashboard as your applications move from development to production.</p>\n                </div>\n            </div>\n            <div class=\"col-xs-12 col-sm-6 last-sm nopadding\">\n                <img src=\"../../assets/img/features/commit2.png\" alt=\"\">\n            </div>\n        </div>\n    </div>\n\n    <div class=\"feature__details default\" [ngClass]=\"{'active': selectedItem1 == '2' }\">\n        <div class=\"row\">\n            <div class=\"col-xs-12 col-sm-6 end-sm nopadding \">\n                <img src=\"../../assets/img/features/build1.jpg\" alt=\"\">\n            </div>\n            <div class=\"col-xs-12 first-xs col-sm-6 last-sm nopadding content\">\n                <div>\n                    <h3 class=\"h3\">Automate the way you build and deploy applications</h3>\n                    <p class=\"b2\">You get end-to-end continuous delivery and automation for your entire software delivery lifecycle, from\n                        the time your developers commit application code to the deployment of those apps wherever they run.</p>\n                </div>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-xs-12 col-sm-6 nopadding content\">\n                <div>\n                    <h3 class=\"h3\">Automatically trigger application builds on every code commit</h3>\n                    <p class=\"b2\">Connect your preferred source control repository with the click of a button and automatically trigger\n                        application builds and continuous integration workflows on any code commit or pull request.</p>\n                </div>\n            </div>\n            <div class=\"col-xs-12 col-sm-6 last-sm nopadding\">\n                <img src=\"../../assets/img/features/build2.jpg\" alt=\"\">\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-xs-12 col-sm-6 nopadding content\">\n                <div>\n                    <h3 class=\"h3\">Auto Create delivery pipelines in minutest</h3>\n                    <p class=\"b2\">Build continuous delivery pipelines in a few clicks and visualize your entire software delivery lifecycle\n                        through a single dashboard as your applications move from development to production.</p>\n                </div>\n            </div>\n            <div class=\"col-xs-12 col-sm-6 first-sm nopadding\">\n                <img src=\"../../assets/img/features/build3.jpg\" alt=\"\">\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-xs-12 col-sm-6 nopadding content\">\n                <div>\n                    <h3 class=\"h3\">Build and deploy containers to Cloud</h3>\n                    <p class=\"b2\">Build Docker images directly from your source repository in a few clicks, and deploy containers to any\n                        cloud or on-premises.</p>\n                </div>\n            </div>\n            <div class=\"col-xs-12 col-sm-6 last-sm nopadding\">\n                <img src=\"../../assets/img/features/build4.jpg\" alt=\"\">\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-xs-12 col-sm-6 nopadding content\">\n                <div>\n                    <h3 class=\"h3\">Built-in Deployment Best Practices</h3>\n                    <p class=\"b2\">Create and deploy immutable images for faster rollouts, easier rollbacks, and the elimination of hard\n                        to debug configuration drift issues. Leverage an immutable infrastructure in the cloud with built-in\n                        deployment strategies such as red/black and canary deployments.</p>\n                </div>\n            </div>\n            <div class=\"col-xs-12 col-sm-6 first-sm nopadding\">\n                <img src=\"../../assets/img/features/build5.jpg\" alt=\"\">\n            </div>\n        </div>\n    </div>\n    <div class=\"feature__details default\" [ngClass]=\"{'active': selectedItem1 == '3' }\">\n        <div class=\"row\">\n            <div class=\"col-xs-12 col-sm-6 end-sm nopadding \">\n                <img src=\"../../assets/img/features/deploy1.jpg\" alt=\"\">\n            </div>\n            <div class=\"col-xs-12 first-xs col-sm-6 last-sm nopadding content\">\n                <div>\n                    <h3 class=\"h3\">Automate the way you build and deploy applications</h3>\n                    <p class=\"b2\">You get end-to-end continuous delivery and automation for your entire software delivery lifecycle, from\n                        the time your developers commit application code to the deployment of those apps wherever they run.</p>\n                </div>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-xs-12 col-sm-6 nopadding content\">\n                <div>\n                    <h3 class=\"h3\">Auto Create delivery pipelines in minutes</h3>\n                    <p class=\"b2\">Build continuous delivery pipelines in a few clicks and visualize your entire software delivery lifecycle\n                        through a single dashboard as your applications move from development to production.</p>\n                </div>\n            </div>\n            <div class=\"col-xs-12 col-sm-6 last-sm nopadding\">\n                <img src=\"../../assets/img/features/deploy2.jpg\" alt=\"\">\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-xs-12 col-sm-6 nopadding content\">\n                <div>\n                    <h3 class=\"h3\">Easily automate application deployments</h3>\n                    <p class=\"b2\">Automatically deploy applications to VMs and servers running on any cloud and in your data center with\n                        role-based access control and audit trails for deep visibility into every build and deployment.</p>\n                </div>\n            </div>\n            <div class=\"col-xs-12 col-sm-6 first-sm nopadding\">\n                <img src=\"../../assets/img/features/deploy3.jpg\" alt=\"\">\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-xs-12 col-sm-6 nopadding content\">\n                <div>\n                    <h3 class=\"h3\">Build and deploy containers to Cloud</h3>\n                    <p class=\"b2\">Build Docker images directly from your source repository in a few clicks, and deploy containers to any\n                        cloud or on-premises.</p>\n                </div>\n            </div>\n            <div class=\"col-xs-12 col-sm-6 last-sm nopadding\">\n                <img src=\"../../assets/img/features/deploy4.jpg\" alt=\"\">\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-xs-12 col-sm-6 nopadding content\">\n                <div>\n                    <h3 class=\"h3\">Built-in Deployment Best Practices</h3>\n                    <p class=\"b2\">Create and deploy immutable images for faster rollouts, easier rollbacks, and the elimination of hard\n                        to debug configuration drift issues. Leverage an immutable infrastructure in the cloud with built-in\n                        deployment strategies such as red/black and canary deployments.</p>\n                </div>\n            </div>\n            <div class=\"col-xs-12 col-sm-6 first-sm nopadding\">\n                <img src=\"../../assets/img/features/deploy5.jpg\" alt=\"\">\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-xs-12 col-sm-6 nopadding content\">\n                <div>\n                    <h3 class=\"h3\">Automated Releases</h3>\n                    <p class=\"b2\"> Create deployment pipelines that run integration and system tests, spin up and down server groups, and\n                        monitor your rollouts. Trigger pipelines via git events, Jenkins, Docker.</p>\n                </div>\n            </div>\n            <div class=\"col-xs-12 col-sm-6 last-sm nopadding\">\n                <img src=\"../../assets/img/features/deploy6.jpg\" alt=\"\">\n            </div>\n        </div>\n\n    </div>\n    <div class=\"feature__details default release\" [ngClass]=\"{'active': selectedItem1 == '4' }\">\n        <div class=\"row\">\n            <div class=\"col-xs-12 col-sm-7  nopadding \">\n                <img src=\"../../assets/img/features/release1.jpg\" alt=\"\">\n            </div>\n            <div class=\"col-xs-12 first-xs col-sm-5 first-sm nopadding content\">\n                <div>\n                    <h3 class=\"h3\">Fast. Secure. Scalable.</h3>\n                           <h2 class=\"b2\">Operates at < 1% overhead.</h2>\n                            <h2 class=\"b2\">Low network and storage overhead.</h2>\n                            <h2 class=\"b2\">No changes to code or build.</h2>\n                            <h2 class=\"b2\">Built for microservices. 5-min deploy.</h2>\n                            <h2 class=\"b2\">Enterprise security.</h2>\n                            <h2 class=\"b2\">On-premises and in the Cloud.</h2>\n                </div>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-xs-12 col-sm-5 nopadding content\">\n                <div>\n                    <h3 class=\"h3\">Choose Your Configuration</h3>\n                    <h4 class=\"b2\">Access Control</h4>\n                    <p class=\"b2\">Hybrid mode enables you to leverage our AWS infrastructure without sending out sensitive data. Perfect\n                        for PII, PCI and HIPAA compliant applications.</p>\n                </div>\n            </div>\n            <div class=\"col-xs-12 col-sm-7 first-sm nopadding\">\n                <img src=\"../../assets/img/features/release2.jpg\" alt=\"\">\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-xs-12 col-sm-5 nopadding content\">\n                <div>\n                    <h3 class=\"h3\">Extreme Performance</h3>\n                    <p class=\"b2\">Runs in the World’s Most Demanding Environments</p>\n                    <h2 class=\"b2\">CPU overhead</h2>\n                    <h2 class=\"b2\">No GC overhead</h2>\n                    <h2 class=\"b2\">No Throughput Overhead</h2>\n                    <h2 class=\"b2\">Network overhead ( < 50mb per hour)</h2>\n                    <h2 class=\"b2\">No reliance on logs</h2>\n                    <h2 class=\"b2\">No dependency on OverOps</h2>\n                </div>\n            </div>\n            <div class=\"col-xs-12 col-sm-7 last-sm nopadding\">\n                <img src=\"../../assets/img/features/release3.jpg\" alt=\"\">\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-xs-12 col-sm-5 nopadding content\">\n                <div>\n                    <h3 class=\"h3\">Enterprise Security</h3>\n                    <h4 class=\"b2\">Access Control</h4>\n                    <p class=\"b2\">Robust support for two-factor authentication with OAuth (e.g Google Apps and GitHub), LDAP and SAML.\n                        Administrators can limit access to OverOps to a specific VPN or network. Communication between all\n                        OverOps components is made over outbound HTTPS port 443.</p>\n                </div>\n            </div>\n            <div class=\"col-xs-12 col-sm-7 first-sm nopadding\">\n                <img src=\"../../assets/img/features/release4.jpg\" alt=\"\">\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-xs-12 col-sm-5 col-lg-4  nopadding content\">\n                <div>\n                    <h3 class=\"h3\">Easy to Deploy</h3>\n                    <h2 class=\"b2\">A Simple JVM Agent</h2>\n                    <h2 class=\"b2\">No changes to code or build</h2>\n                    <h2 class=\"b2\">All JVM Languages</h2>\n                </div>\n            </div>\n            <div class=\"col-xs-12 col-sm-7 last-sm col-lg-8 nopadding\">\n                <img src=\"../../assets/img/features/release5.jpg\" alt=\"\">\n            </div>\n        </div>\n    </div>\n   \n    <div class=\"feature__details default\" [ngClass]=\"{'active': selectedItem1 == '5' }\">\n            <div class=\"row\">\n                <div class=\"col-xs-12 col-sm-6 end-sm nopadding \">\n                    <img src=\"../../assets/img/features/test1.jpg\" alt=\"\">\n                </div>\n                <div class=\"col-xs-12 first-xs col-sm-6 last-sm nopadding content\">\n                    <div>\n                        <h3 class=\"h3\">Cross browser testing</h3>\n                        <p class=\"b2\">Testing across a wide variety of browsers is critical to your customers’ online experience. That’s why we offer Live and Continuous testing on over 800 operating system and browser combinations that are instantly available in the Cloud. We are fast to market with Beta and new browser versions so you can ensure your app works as designed upon release.</p>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-xs-12 col-sm-6 nopadding content\">\n                    <div>\n                        <h3 class=\"h3\">Live web testing</h3>\n                        <p class=\"b2\">Right out of the box you can connect to Git or your choice of version control system, easily integrate with Jenkins and other continuous integration tools, and get automatic deployment notifications via email, Slack or HipChat.</p>\n                    </div>\n                </div>\n                <div class=\"col-xs-12 col-sm-6 last-sm nopadding\">\n                    <img src=\"../../assets/img/features/test2.jpg\" alt=\"\">\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-xs-12 col-sm-6 nopadding content\">\n                    <div>\n                        <h3 class=\"h3\">Multi-level reporting and analysis</h3>\n                        <p class=\"b2\">Multi-level reporting and analysis with failed screenshots help to quickly pinpoint the errors. Reports can be emailed automatically or saved to a local folder after each run. Reports are available in multiple file formats, including PDF, Excel, HTML, XML or CSV.</p>\n                    </div>\n                </div>\n                <div class=\"col-xs-12 col-sm-6 first-sm nopadding\">\n                    <img src=\"../../assets/img/features/test3.jpg\" alt=\"\">\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-xs-12 col-sm-6 nopadding content\">\n                    <div>\n                        <h3 class=\"h3\">Platform Agnostic Automation</h3>\n                        <p class=\"b2\">Automate once and run on various combinations of platforms. Run the same tests in parallel across combination of browsers and operating systems. The Test Execution module helps to scale and configure test suites, data sets, test machines for automated execution in few minutes.</p>\n                    </div>\n                </div>\n                <div class=\"col-xs-12 col-sm-6 last-sm nopadding\">\n                    <img src=\"../../assets/img/features/test4.jpg\" alt=\"\">\n                </div>\n            </div>\n    \n        </div>\n        <div class=\"feature__details default release\" [ngClass]=\"{'active': selectedItem1 == '6' }\">\n                <div class=\"row\">\n                    <div class=\"col-xs-12 col-sm-7  nopadding \">\n                        <img src=\"../../assets/img/features/release1.jpg\" alt=\"\">\n                    </div>\n                    <div class=\"col-xs-12 first-xs col-sm-5 first-sm nopadding content\">\n                        <div>\n                            <h3 class=\"h3\">Fast. Secure. Scalable.</h3>\n                                   <h2 class=\"b2\">Operates at < 1% overhead.</h2>\n                                    <h2 class=\"b2\">Low network and storage overhead.</h2>\n                                    <h2 class=\"b2\">No changes to code or build.</h2>\n                                    <h2 class=\"b2\">Built for microservices. 5-min deploy.</h2>\n                                    <h2 class=\"b2\">Enterprise security.</h2>\n                                    <h2 class=\"b2\">On-premises and in the Cloud.</h2>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-xs-12 col-sm-5 nopadding content\">\n                        <div>\n                            <h3 class=\"h3\">Choose Your Configuration</h3>\n                            <h4 class=\"b2\">Access Control</h4>\n                            <p class=\"b2\">Hybrid mode enables you to leverage our AWS infrastructure without sending out sensitive data. Perfect\n                                for PII, PCI and HIPAA compliant applications.</p>\n                        </div>\n                    </div>\n                    <div class=\"col-xs-12 col-sm-7 first-sm nopadding\">\n                        <img src=\"../../assets/img/features/release2.jpg\" alt=\"\">\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-xs-12 col-sm-5 nopadding content\">\n                        <div>\n                            <h3 class=\"h3\">Extreme Performance</h3>\n                            <p class=\"b2\">Runs in the World’s Most Demanding Environments</p>\n                            <h2 class=\"b2\">CPU overhead</h2>\n                            <h2 class=\"b2\">No GC overhead</h2>\n                            <h2 class=\"b2\">No Throughput Overhead</h2>\n                            <h2 class=\"b2\">Network overhead (\n                                < 50mb per hour)</h2>\n                                    <h2 class=\"b2\">No reliance on logs</h2>\n                                    <h2 class=\"b2\">No dependency on OverOps</h2>\n                        </div>\n                    </div>\n                    <div class=\"col-xs-12 col-sm-7 last-sm nopadding\">\n                        <img src=\"../../assets/img/features/release3.jpg\" alt=\"\">\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-xs-12 col-sm-5 nopadding content\">\n                        <div>\n                            <h3 class=\"h3\">Enterprise Security</h3>\n                            <h4 class=\"b2\">Access Control</h4>\n                            <p class=\"b2\">Robust support for two-factor authentication with OAuth (e.g Google Apps and GitHub), LDAP and SAML.\n                                Administrators can limit access to OverOps to a specific VPN or network. Communication between all\n                                OverOps components is made over outbound HTTPS port 443.</p>\n                        </div>\n                    </div>\n                    <div class=\"col-xs-12 col-sm-7 first-sm nopadding\">\n                        <img src=\"../../assets/img/features/release4.jpg\" alt=\"\">\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-xs-12 col-sm-5 col-lg-4  nopadding content\">\n                        <div>\n                            <h3 class=\"h3\">Easy to Deploy</h3>\n                            <h2 class=\"b2\">A Simple JVM Agent</h2>\n                            <h2 class=\"b2\">No changes to code or build</h2>\n                            <h2 class=\"b2\">All JVM Languages</h2>\n                        </div>\n                    </div>\n                    <div class=\"col-xs-12 col-sm-7 last-sm col-lg-8 nopadding\">\n                        <img src=\"../../assets/img/features/release5.jpg\" alt=\"\">\n                    </div>\n                </div>\n            </div>\n\n</div>\n<app-suits></app-suits>"

/***/ }),

/***/ "./src/app/features/features.component.scss":
/*!**************************************************!*\
  !*** ./src/app/features/features.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.feature .nopadding {\n  padding: 0px; }\n.feature .default {\n  display: none; }\n.feature .active {\n  display: block; }\n.feature .selected {\n  border-bottom: 4px solid #da2222; }\n.feature__banners {\n  width: 100%;\n  height: 436px;\n  background-color: #1a1a1a;\n  background-image: url('features.png');\n  background-repeat: no-repeat;\n  background-position: bottom right;\n  background-size: 236px 201px; }\n.feature__banners__content {\n    width: 250px;\n    margin: 0 auto;\n    padding: 66px 0px 0px;\n    position: relative; }\n.feature__banners h1 {\n    width: 250px;\n    margin: 0 auto; }\n.feature__banners p {\n    width: 249px;\n    margin: 0 auto;\n    padding: 17px 0px 0px;\n    color: #ffffff; }\n.feature__banners--border {\n    display: flex;\n    justify-content: space-around;\n    width: 50px;\n    position: absolute;\n    bottom: 83px;\n    right: 60px; }\n.feature__banners--border .dot {\n      width: 5px;\n      height: 5px;\n      background-color: #41a1fa;\n      border-radius: 50px; }\n.feature__banners--border .line {\n      width: 38px;\n      height: 5px;\n      background-color: #41a1fa;\n      border-radius: 50px; }\n.feature__dropdown {\n  background-image: linear-gradient(to right, #523d93, #41a1fa);\n  height: 60px; }\n.feature__tabs {\n  width: 700px;\n  margin: 0 auto;\n  position: relative; }\n.feature__tabs__list {\n    display: flex;\n    justify-content: space-between;\n    position: relative;\n    margin: 164px 0px 20px; }\n.feature__tabs__list--border {\n      background-color: #ffffff;\n      border: solid 2px #e0e0e0;\n      width: 50px;\n      height: 50px;\n      border-radius: 50%;\n      display: flex;\n      justify-content: center;\n      cursor: pointer; }\n.feature__tabs__list img {\n      width: 20px; }\n.feature__tabs__list p {\n      text-align: center;\n      padding-top: 17px; }\n.feature__tabs__list .header h1 {\n      position: absolute;\n      bottom: 192px;\n      color: #000052;\n      cursor: default; }\n.feature__tabs__list .header .circle {\n      width: 13px;\n      height: 13px;\n      background-color: #4b65bc;\n      position: absolute;\n      bottom: 167px;\n      border-radius: 50px;\n      cursor: default; }\n.feature__tabs__list .header .circle1 {\n      width: 13px;\n      height: 13px;\n      background-color: #41a1fa;\n      position: absolute;\n      bottom: 167px;\n      border-radius: 50px;\n      cursor: default; }\n.feature__tabs__list .header::after {\n      content: '';\n      width: 83px;\n      border-bottom: solid 2px #e0e0e0;\n      top: -41px;\n      position: absolute;\n      -webkit-transform: rotate(90deg);\n      transform: rotate(90deg);\n      cursor: default; }\n.feature__tabs__list::after {\n    content: '';\n    width: 700px;\n    height: 3px;\n    border-bottom: solid 2px #e0e0e0;\n    z-index: -1;\n    top: 21px;\n    position: absolute; }\n.feature__tabs--hercules {\n    width: 392px;\n    height: 78px;\n    border: solid 2px #e0e0e0;\n    position: absolute;\n    top: -52px;\n    border-radius: 6px;\n    left: 23px;\n    z-index: -1;\n    display: flex;\n    justify-content: space-between; }\n.feature__tabs--hercules .border1 {\n      width: 3px;\n      height: 72px; }\n.feature__tabs--hercules .border2 {\n      width: 3px;\n      height: 72px;\n      border-left: solid 2px #e0e0e0; }\n.feature__tabs--hercules .border3 {\n      width: 3px;\n      height: 72px; }\n.feature__tabs--hercules .h3 {\n      position: absolute;\n      bottom: 130px;\n      left: 174px;\n      color: #000052; }\n.feature__tabs--hercules::after {\n    content: '';\n    width: 44px;\n    border-bottom: solid 2px #e0e0e0;\n    top: -23px;\n    left: 175px;\n    position: absolute;\n    -webkit-transform: rotate(90deg);\n            transform: rotate(90deg); }\n.feature__tabs::after {\n  content: '';\n  width: 13px;\n  position: absolute;\n  height: 13px;\n  background-color: #523d93;\n  top: -96px;\n  left: 216px;\n  border-radius: 50px; }\n.feature .feature__tabs__scroller {\n  width: 100%;\n  overflow: auto; }\n.feature .feature__tabs__scroller::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  background-color: #ffffff; }\n.feature .feature__tabs__scroller::-webkit-scrollbar {\n  height: 6px;\n  background-color: #f5f5f5; }\n.feature .feature__tabs__scroller::-webkit-scrollbar-thumb {\n  background-color: #d0d5d8;\n  border-radius: 10px; }\n.feature__details {\n  width: 262px;\n  margin: 0 auto; }\n.feature__details h2:before {\n    content: '✓';\n    padding-right: 7px; }\n.feature__details h4 {\n    color: #000052; }\n.feature__details .content {\n    display: flex;\n    justify-content: center;\n    align-items: center; }\n.feature__details .row:nth-child(1) {\n    margin: 64px 0px 0px; }\n.feature__details .row:nth-child(2) {\n    margin: 79px 0px 52px; }\n.feature__details .row:nth-child(3) {\n    margin: 79px 0px 52px; }\n.feature__details .row:nth-child(4) {\n    margin: 79px 0px 52px; }\n.feature__details .row:nth-child(5) {\n    margin: 79px 0px 52px; }\n.feature__details .row:nth-child(6) {\n    margin: 79px 0px 52px; }\n.feature__details img {\n    width: 100%;\n    margin-top: 20px; }\n.feature__details h3 {\n    text-align: center; }\n.feature__details p {\n    text-align: center;\n    padding-top: 9px; }\n.feature__details h2 {\n    text-align: left;\n    padding-top: 9px; }\n.feature .release h3, .feature .release h2, .feature .release p {\n  text-align: left; }\n@media only screen and (min-width: 768px) {\n  .feature__banners {\n    height: 401px;\n    background-position: right;\n    background-size: contain; }\n    .feature__banners__content {\n      width: 700px;\n      padding: 125px 0px 0px; }\n    .feature__banners h1 {\n      width: 321px;\n      margin: 0; }\n    .feature__banners p {\n      width: 279px;\n      margin: 0;\n      padding: 14px 0px 0px; }\n    .feature__banners--border {\n      width: 145px;\n      bottom: 78px;\n      right: 54%; }\n      .feature__banners--border .line {\n        width: 129px;\n        height: 5px; }\n  .feature__dropdown {\n    height: 90px; }\n  .feature__tabs {\n    width: 700px;\n    margin: 0 auto;\n    position: relative; }\n    .feature__tabs__list {\n      margin: 194px 0px 0px; }\n  .feature__details {\n    width: 100%; }\n    .feature__details h3 {\n      width: 240px;\n      text-align: left; }\n    .feature__details p, .feature__details h2 {\n      width: 240px;\n      line-height: 1.43;\n      text-align: left; }\n    .feature__details .row:nth-child(1) {\n      margin: 62px 0px 0px; }\n    .feature__details .row:nth-child(2) {\n      margin: 94px 0px 64px; }\n    .feature__details .row:nth-child(3) {\n      margin: 94px 0px 64px; }\n    .feature__details .row:nth-child(4) {\n      margin: 94px 0px 64px; }\n    .feature__details .row:nth-child(5) {\n      margin: 94px 0px 64px; }\n    .feature__details .row:nth-child(6) {\n      margin: 94px 0px 64px; } }\n@media only screen and (min-width: 1025px) {\n  .feature__banners {\n    height: 458px; }\n    .feature__banners__content {\n      width: 933px;\n      padding: 156px 0px 0px; }\n    .feature__banners h1 {\n      width: 570px; }\n    .feature__banners p {\n      width: 369px;\n      padding: 14px 0px 0px; }\n    .feature__banners--border {\n      width: 217px;\n      bottom: 103px;\n      right: 61%; }\n      .feature__banners--border .dot {\n        width: 10px;\n        height: 10px; }\n      .feature__banners--border .line {\n        width: 188px;\n        height: 10px; }\n  .feature__dropdown {\n    height: 93px; }\n  .feature__tabs {\n    width: 933px; }\n    .feature__tabs__list {\n      margin: 173px 0px 0px; }\n    .feature__tabs__list::after {\n      width: 910px; }\n    .feature__tabs--hercules {\n      width: 528px; }\n      .feature__tabs--hercules .h3 {\n        left: 232px;\n        bottom: 129px; }\n    .feature__tabs--hercules::after {\n      left: 240px; }\n    .feature__tabs .header h1 {\n      bottom: 195px; }\n    .feature__tabs .header .circle {\n      bottom: 173px; }\n    .feature__tabs .header .circle1 {\n      bottom: 173px; }\n  .feature__tabs::after {\n    left: 280px; }\n  .feature__details h3 {\n    width: 287px; }\n  .feature__details p, .feature__details h2 {\n    width: 289px;\n    padding-top: 17px; }\n  .feature__details .row:nth-child(1) {\n    margin: 70px 0px 0px; }\n  .feature__details .row:nth-child(2) {\n    margin: 82px 0px; }\n  .feature__details .row:nth-child(3) {\n    margin: 82px 0px; }\n  .feature__details .row:nth-child(4) {\n    margin: 82px 0px; }\n  .feature__details .row:nth-child(5) {\n    margin: 82px 0px; }\n  .feature__details .row:nth-child(6) {\n    margin: 82px 0px; } }\n@media only screen and (min-width: 1440px) {\n  .feature__banners {\n    height: 660px; }\n    .feature__banners__content {\n      width: 1110px;\n      padding: 178px 0px 0px; }\n    .feature__banners h1 {\n      width: 570px; }\n    .feature__banners p {\n      width: 570px;\n      padding: 17px 0px 0px; }\n    .feature__banners--border {\n      width: 225px;\n      bottom: 79px;\n      right: 65%; }\n      .feature__banners--border .line {\n        width: 200px; }\n  .feature__tabs {\n    width: 1110px; }\n    .feature__tabs__list {\n      margin: 168px 0px 64px; }\n    .feature__tabs__list::after {\n      width: 1100px; }\n    .feature__tabs--hercules {\n      width: 645px; }\n      .feature__tabs--hercules .h3 {\n        left: 290px; }\n    .feature__tabs--hercules::after {\n      left: 298px; }\n  .feature__tabs::after {\n    left: 338px; }\n  .feature__details h3 {\n    width: 475px; }\n  .feature__details p, .feature__details h2 {\n    width: 475px;\n    padding-top: 16px; }\n  .feature__details .row:nth-child(1) {\n    margin: 70px 0px 0px; }\n  .feature__details .row:nth-child(2) {\n    margin: 82px 0px; }\n  .feature__details .row:nth-child(3) {\n    margin: 82px 0px; }\n  .feature__details .row:nth-child(4) {\n    margin: 82px 0px; }\n  .feature__details .row:nth-child(5) {\n    margin: 82px 0px; }\n  .feature__details .row:nth-child(6) {\n    margin: 82px 0px; } }\n"

/***/ }),

/***/ "./src/app/features/features.component.ts":
/*!************************************************!*\
  !*** ./src/app/features/features.component.ts ***!
  \************************************************/
/*! exports provided: FeaturesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturesComponent", function() { return FeaturesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FeaturesComponent = /** @class */ (function () {
    function FeaturesComponent() {
        this.showHide = true;
    }
    FeaturesComponent.prototype.ngOnInit = function () {
        this.selectedItem1 = 1;
    };
    FeaturesComponent.prototype.listClick = function (event, newValue) {
        this.selectedItem1 = newValue;
    };
    FeaturesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-features',
            template: __webpack_require__(/*! ./features.component.html */ "./src/app/features/features.component.html"),
            styles: [__webpack_require__(/*! ./features.component.scss */ "./src/app/features/features.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FeaturesComponent);
    return FeaturesComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  home works!\n</p>\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/partners/partners.component.html":
/*!**************************************************!*\
  !*** ./src/app/partners/partners.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"partners\">\n  <div class=\"partners__banners\">\n    <div class=\"partners__banners__content\">\n      <h1 class=\"hero\">DevOps deserves the freedom of choice</h1>\n      <div class=\"partners__banners--border\">\n        <div class=\"dot\"></div>\n        <div class=\"line\"></div>\n      </div>\n      <h2 class=\"b2\"> We bring the industry experts, thought leaders and hands-on practitioners to innovate faster and scale smarter.</h2>\n\n    </div>\n  </div>\n\n\n  <div class=\"partners__tabs\">\n    <div class=\"partners__tabs__list\">\n      <h1 class=\"h3\" [ngClass]=\"{'selected': selectedItem1 == '1' }\" (click)=\"listClick($event, '1')\">Technology</h1>\n      <h1 class=\"h3\" [ngClass]=\"{'selected': selectedItem1 == '2' }\" (click)=\"listClick($event, '2')\">Reseller</h1>\n      <h1 class=\"h3\" [ngClass]=\"{'selected': selectedItem1 == '3' }\" (click)=\"listClick($event, '3')\">Infrastructure</h1>\n      <h1 class=\"h3\" [ngClass]=\"{'selected': selectedItem1 == '4' }\" (click)=\"listClick($event, '4')\">Tech Integrations</h1>\n    </div>\n  </div>\n  <div class=\"firsttabs default\" [ngClass]=\"{'active': selectedItem1 == '1' }\">\n    <div class=\"row\">\n      <div class=\"col-xs-6 col-sm-3\">\n        <div class=\"imageBorder\">\n          <img src=\"../../assets/img/patners/download1.png\" alt=\"paketo\">\n        </div>\n      </div>\n      <div class=\"col-xs-6 col-sm-3\">\n        <div class=\"imageBorder\">\n          <img src=\"../../assets/img/patners/download2.png\" alt=\"paketo\">\n        </div>\n      </div>\n      <div class=\"col-xs-6 col-sm-3\">\n        <div class=\"imageBorder\">\n          <img src=\"../../assets/img/patners/download3.png\" alt=\"paketo\">\n        </div>\n      </div>\n      <div class=\"col-xs-6 col-sm-3\">\n        <div class=\"imageBorder\">\n          <img src=\"../../assets/img/patners/download4.png\" alt=\"paketo\">\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"secondtabs default\" [ngClass]=\"{'active': selectedItem1 == '2' }\">\n    <div class=\"row\">\n      <div class=\"col-xs-6 col-sm-3\">\n        <div class=\"imageBorder\">\n          <img src=\"../../assets/img/patners/download3.png\" alt=\"paketo\">\n        </div>\n      </div>\n      <div class=\"col-xs-6 col-sm-3\">\n        <div class=\"imageBorder\">\n          <img src=\"../../assets/img/patners/download3.png\" alt=\"paketo\">\n        </div>\n      </div>\n      <div class=\"col-xs-6 col-sm-3\">\n        <div class=\"imageBorder\">\n          <img src=\"../../assets/img/patners/download3.png\" alt=\"paketo\">\n        </div>\n      </div>\n      <div class=\"col-xs-6 col-sm-3\">\n        <div class=\"imageBorder\">\n          <img src=\"../../assets/img/patners/download3.png\" alt=\"paketo\">\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"thirdtabs default\" [ngClass]=\"{'active': selectedItem1 == '3' }\">\n    <div class=\"infrastructure\">\n      <h1 class=\"h2\">Infrastructure</h1>\n      <h2 class=\"b2\">We understand the beauty of cloud and the importance of being cloud enabled, hence we have built Paketo cloud friendly.\n        You can deploy any of the Paketo suite products on the leading cloud provider platforms.</h2>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-xs-6 col-sm-3\">\n        <div class=\"imageBorder\">\n          <img src=\"../../assets/img/patners/download3.png\" alt=\"paketo\">\n        </div>\n      </div>\n      <div class=\"col-xs-6 col-sm-3\">\n        <div class=\"imageBorder\">\n          <img src=\"../../assets/img/patners/download3.png\" alt=\"paketo\">\n        </div>\n      </div>\n      <div class=\"col-xs-6 col-sm-3\">\n        <div class=\"imageBorder\">\n          <img src=\"../../assets/img/patners/download3.png\" alt=\"paketo\">\n        </div>\n      </div>\n      <div class=\"col-xs-6 col-sm-3\">\n        <div class=\"imageBorder\">\n          <img src=\"../../assets/img/patners/download3.png\" alt=\"paketo\">\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"fourthtabs default\" [ngClass]=\"{'active': selectedItem1 == '4'}\">\n    <div class=\"infrastructure\">\n      <h1 class=\"h2\">Tech Integrations</h1>\n      <h2 class=\"b2\">We enable third-party integration with Paketo products through available APIs, placing your DevOps processes in one.\n        Releasing software faster has never been easier.</h2>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-xs-6 col-sm-3\">\n        <div class=\"imageBorder\">\n          <img src=\"../../assets/img/patners/download3.png\" alt=\"paketo\">\n        </div>\n      </div>\n      <div class=\"col-xs-6 col-sm-3\">\n        <div class=\"imageBorder\">\n          <img src=\"../../assets/img/patners/download3.png\" alt=\"paketo\">\n        </div>\n      </div>\n      <div class=\"col-xs-6 col-sm-3\">\n        <div class=\"imageBorder\">\n          <img src=\"../../assets/img/patners/download3.png\" alt=\"paketo\">\n        </div>\n      </div>\n      <div class=\"col-xs-6 col-sm-3\">\n        <div class=\"imageBorder\">\n          <img src=\"../../assets/img/patners/download3.png\" alt=\"paketo\">\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<app-suits></app-suits>"

/***/ }),

/***/ "./src/app/partners/partners.component.scss":
/*!**************************************************!*\
  !*** ./src/app/partners/partners.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".partners .row {\n  width: 210px;\n  margin: 43px auto 48px; }\n\n.partners__banners {\n  width: 100%;\n  height: 564px;\n  background-color: #1a1a1a;\n  background-image: url('banner.png');\n  background-repeat: no-repeat;\n  background-position: bottom right;\n  background-size: 307px 295px; }\n\n.partners__banners__content {\n    width: 265px;\n    margin: 0 auto;\n    padding: 60px 0px 0px;\n    position: relative; }\n\n.partners__banners h1 {\n    width: 259px;\n    margin: 0 auto; }\n\n.partners__banners h2 {\n    width: 259px;\n    margin: 0 auto;\n    padding: 22px 0px 0px;\n    color: #ffffff; }\n\n.partners__banners--border {\n    display: flex;\n    justify-content: space-around;\n    width: 30px;\n    position: absolute;\n    bottom: 83px;\n    right: 0; }\n\n.partners__banners--border .dot {\n      width: 4px;\n      height: 4px;\n      background-color: #41a1fa;\n      border-radius: 50px; }\n\n.partners__banners--border .line {\n      width: 19px;\n      height: 4px;\n      background-color: #41a1fa;\n      border-radius: 50px; }\n\n.partners__tabs {\n  height: 341px;\n  background-image: linear-gradient(to right, #523d93, #41a1fa);\n  padding: 0px; }\n\n.partners__tabs h1 {\n    color: #ffffff;\n    text-align: center;\n    padding: 41px 0px 5px;\n    cursor: pointer;\n    margin: 0 auto;\n    position: relative; }\n\n.partners img {\n  height: 20px; }\n\n.partners .selected {\n  border-bottom: 4px solid #ffffff; }\n\n.partners .default {\n  display: none; }\n\n.partners .active {\n  display: block; }\n\n.partners .imageBorder {\n  height: 60px;\n  border-radius: 4px;\n  background-color: #ffffff;\n  box-shadow: 1px 1px 6px 2px rgba(0, 0, 0, 0.048);\n  -webkit-box-shadow: 1px 1px 6px 2px rgba(0, 0, 0, 0.048);\n  -moz-box-shadow: 1px 1px 6px 2px rgba(0, 0, 0, 0.048);\n  display: flex;\n  justify-content: center;\n  justify-content: center;\n  align-items: center;\n  margin-top: 5px; }\n\n.infrastructure {\n  text-align: center; }\n\n.infrastructure h1 {\n    width: 260px;\n    margin: 0 auto;\n    padding: 48px 0px 24px; }\n\n.infrastructure h2 {\n    width: 260px;\n    margin: 0 auto; }\n\n@media only screen and (min-width: 768px) {\n  .partners__banners {\n    height: 405px;\n    background-position: right;\n    background-size: contain; }\n    .partners__banners__content {\n      width: 700px;\n      padding: 74px 0px 0px; }\n    .partners__banners h1 {\n      width: 394px;\n      margin: 0; }\n    .partners__banners h2 {\n      width: 394px;\n      margin: 0;\n      padding: 25px 0px 0px; }\n    .partners__banners--border {\n      width: 47px;\n      bottom: 70px;\n      right: 52%; }\n      .partners__banners--border .dot {\n        width: 5px;\n        height: 5px; }\n      .partners__banners--border .line {\n        width: 36px;\n        height: 5px; }\n  .partners__tabs {\n    height: 93px; }\n    .partners__tabs__list {\n      display: flex;\n      justify-content: space-between;\n      width: 700px;\n      margin: 0 auto;\n      height: 94px;\n      align-items: center; }\n    .partners__tabs h1 {\n      padding: 0px;\n      padding-bottom: 5px; }\n  .partners img {\n    height: 20px; }\n  .partners .row {\n    width: 694px;\n    margin: 12px auto 48px; }\n  .partners .imageBorder {\n    margin-top: 36px; }\n  .infrastructure h1 {\n    width: 555px;\n    padding: 41px 0px 19px; }\n  .infrastructure h2 {\n    width: 555px; } }\n\n@media only screen and (min-width: 1025px) {\n  .partners__banners {\n    height: 458px; }\n    .partners__banners__content {\n      width: 931px; }\n    .partners__banners h1 {\n      width: 500px; }\n    .partners__banners h2 {\n      width: 500px;\n      padding: 30px 0px 0px; }\n    .partners__banners--border {\n      width: 87px;\n      bottom: 93px;\n      right: 49%; }\n      .partners__banners--border .dot {\n        width: 7px;\n        height: 7px; }\n      .partners__banners--border .line {\n        width: 60px;\n        height: 7px; }\n  .partners__tabs__list {\n    width: 700px;\n    height: 94px; }\n  .partners img {\n    height: 50px; }\n  .partners .row {\n    width: 929px;\n    margin: 28px auto 64px; }\n  .partners .imageBorder {\n    margin-top: 36px;\n    height: 112px; }\n  .infrastructure h1 {\n    width: 700px;\n    padding: 41px 0px 19px; }\n  .infrastructure h2 {\n    width: 730px; } }\n\n@media only screen and (min-width: 1440px) {\n  .partners__banners {\n    height: 660px; }\n    .partners__banners__content {\n      width: 1110px;\n      padding: 178px 0px 0px; }\n    .partners__banners h1 {\n      width: 571px; }\n    .partners__banners h2 {\n      width: 571px;\n      padding: 18px 0px 0px; }\n    .partners__banners--border {\n      width: 110px;\n      bottom: 82px;\n      right: 50%; }\n      .partners__banners--border .dot {\n        width: 10px;\n        height: 10px; }\n      .partners__banners--border .line {\n        width: 80px;\n        height: 10px; }\n  .partners__tabs__list {\n    width: 780px; }\n  .partners img {\n    height: 60px; }\n  .partners .row {\n    width: 929px;\n    margin: 50px auto 80px; }\n  .partners .imageBorder {\n    margin-top: 30px;\n    height: 142px; } }\n"

/***/ }),

/***/ "./src/app/partners/partners.component.ts":
/*!************************************************!*\
  !*** ./src/app/partners/partners.component.ts ***!
  \************************************************/
/*! exports provided: PartnersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartnersComponent", function() { return PartnersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PartnersComponent = /** @class */ (function () {
    function PartnersComponent() {
        this.showHide = true;
    }
    PartnersComponent.prototype.ngOnInit = function () {
        this.selectedItem1 = 1;
    };
    PartnersComponent.prototype.listClick = function (event, newValue) {
        this.selectedItem1 = newValue;
    };
    PartnersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-partners',
            template: __webpack_require__(/*! ./partners.component.html */ "./src/app/partners/partners.component.html"),
            styles: [__webpack_require__(/*! ./partners.component.scss */ "./src/app/partners/partners.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PartnersComponent);
    return PartnersComponent;
}());



/***/ }),

/***/ "./src/app/product/enigma/enigma.component.html":
/*!******************************************************!*\
  !*** ./src/app/product/enigma/enigma.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  enigma works!\n</p>\n"

/***/ }),

/***/ "./src/app/product/enigma/enigma.component.scss":
/*!******************************************************!*\
  !*** ./src/app/product/enigma/enigma.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/product/enigma/enigma.component.ts":
/*!****************************************************!*\
  !*** ./src/app/product/enigma/enigma.component.ts ***!
  \****************************************************/
/*! exports provided: EnigmaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnigmaComponent", function() { return EnigmaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EnigmaComponent = /** @class */ (function () {
    function EnigmaComponent() {
    }
    EnigmaComponent.prototype.ngOnInit = function () {
    };
    EnigmaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-enigma',
            template: __webpack_require__(/*! ./enigma.component.html */ "./src/app/product/enigma/enigma.component.html"),
            styles: [__webpack_require__(/*! ./enigma.component.scss */ "./src/app/product/enigma/enigma.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], EnigmaComponent);
    return EnigmaComponent;
}());



/***/ }),

/***/ "./src/app/product/herculis/herculis.component.html":
/*!**********************************************************!*\
  !*** ./src/app/product/herculis/herculis.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  herculis works!\n</p>\n"

/***/ }),

/***/ "./src/app/product/herculis/herculis.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/product/herculis/herculis.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/product/herculis/herculis.component.ts":
/*!********************************************************!*\
  !*** ./src/app/product/herculis/herculis.component.ts ***!
  \********************************************************/
/*! exports provided: HerculisComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HerculisComponent", function() { return HerculisComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HerculisComponent = /** @class */ (function () {
    function HerculisComponent() {
    }
    HerculisComponent.prototype.ngOnInit = function () {
    };
    HerculisComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-herculis',
            template: __webpack_require__(/*! ./herculis.component.html */ "./src/app/product/herculis/herculis.component.html"),
            styles: [__webpack_require__(/*! ./herculis.component.scss */ "./src/app/product/herculis/herculis.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HerculisComponent);
    return HerculisComponent;
}());



/***/ }),

/***/ "./src/app/product/product.component.html":
/*!************************************************!*\
  !*** ./src/app/product/product.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  product works!\n</p>\n"

/***/ }),

/***/ "./src/app/product/product.component.scss":
/*!************************************************!*\
  !*** ./src/app/product/product.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/product/product.component.ts":
/*!**********************************************!*\
  !*** ./src/app/product/product.component.ts ***!
  \**********************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProductComponent = /** @class */ (function () {
    function ProductComponent() {
    }
    ProductComponent.prototype.ngOnInit = function () {
    };
    ProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product',
            template: __webpack_require__(/*! ./product.component.html */ "./src/app/product/product.component.html"),
            styles: [__webpack_require__(/*! ./product.component.scss */ "./src/app/product/product.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductComponent);
    return ProductComponent;
}());



/***/ }),

/***/ "./src/app/product/product.module.ts":
/*!*******************************************!*\
  !*** ./src/app/product/product.module.ts ***!
  \*******************************************/
/*! exports provided: ProductModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductModule", function() { return ProductModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _enigma_enigma_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enigma/enigma.component */ "./src/app/product/enigma/enigma.component.ts");
/* harmony import */ var _herculis_herculis_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./herculis/herculis.component */ "./src/app/product/herculis/herculis.component.ts");
/* harmony import */ var _swordfish_swordfish_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./swordfish/swordfish.component */ "./src/app/product/swordfish/swordfish.component.ts");
/* harmony import */ var _product_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product.component */ "./src/app/product/product.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ProductModule = /** @class */ (function () {
    function ProductModule() {
    }
    ProductModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _enigma_enigma_component__WEBPACK_IMPORTED_MODULE_1__["EnigmaComponent"],
                _herculis_herculis_component__WEBPACK_IMPORTED_MODULE_2__["HerculisComponent"],
                _swordfish_swordfish_component__WEBPACK_IMPORTED_MODULE_3__["SwordfishComponent"],
                _product_component__WEBPACK_IMPORTED_MODULE_4__["ProductComponent"]
            ],
            imports: [],
            exports: []
        })
    ], ProductModule);
    return ProductModule;
}());



/***/ }),

/***/ "./src/app/product/swordfish/swordfish.component.html":
/*!************************************************************!*\
  !*** ./src/app/product/swordfish/swordfish.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  swordfish works!\n</p>\n"

/***/ }),

/***/ "./src/app/product/swordfish/swordfish.component.scss":
/*!************************************************************!*\
  !*** ./src/app/product/swordfish/swordfish.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/product/swordfish/swordfish.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/product/swordfish/swordfish.component.ts ***!
  \**********************************************************/
/*! exports provided: SwordfishComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwordfishComponent", function() { return SwordfishComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SwordfishComponent = /** @class */ (function () {
    function SwordfishComponent() {
    }
    SwordfishComponent.prototype.ngOnInit = function () {
    };
    SwordfishComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-swordfish',
            template: __webpack_require__(/*! ./swordfish.component.html */ "./src/app/product/swordfish/swordfish.component.html"),
            styles: [__webpack_require__(/*! ./swordfish.component.scss */ "./src/app/product/swordfish/swordfish.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SwordfishComponent);
    return SwordfishComponent;
}());



/***/ }),

/***/ "./src/app/service/service.component.html":
/*!************************************************!*\
  !*** ./src/app/service/service.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  service works!\n</p>\n"

/***/ }),

/***/ "./src/app/service/service.component.scss":
/*!************************************************!*\
  !*** ./src/app/service/service.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/service/service.component.ts":
/*!**********************************************!*\
  !*** ./src/app/service/service.component.ts ***!
  \**********************************************/
/*! exports provided: ServiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceComponent", function() { return ServiceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ServiceComponent = /** @class */ (function () {
    function ServiceComponent() {
    }
    ServiceComponent.prototype.ngOnInit = function () {
    };
    ServiceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-service',
            template: __webpack_require__(/*! ./service.component.html */ "./src/app/service/service.component.html"),
            styles: [__webpack_require__(/*! ./service.component.scss */ "./src/app/service/service.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ServiceComponent);
    return ServiceComponent;
}());



/***/ }),

/***/ "./src/app/signup/signup.component.html":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"signup\">\n  \n  <div class=\"row\">\n\n    <div class=\"signup__image col-xs-12 col-sm-4\">\n        <div class=\"signup__image__logo\">\n        </div>\n        <div class=\"signup__image__content b1\">\n            Go from code to running app in minutes. Deploy, scale, and deliver your app to the world.\n        </div>\n          <div class=\"signup__image__copyright b3\">\n              Copyright © 2018 Paketo.\n            </div>\n    </div>\n\n    <div *ngIf=\"counter\" class=\"signup__form col-xs-12 col-sm-8\">\n        <div class=\"signup__form__header h1\">\n            Get started absolutely free\n        </div>\n        <div class=\"signup__form__content b2\">\n            Free account + 14 day free trial for all the premium features. No credit card required.\n        </div>\n        <div *ngIf = \"errorMsgCounter\" class=\"signup__form__errorMsg b3\">\n            Please fill all the mandatory fields\n        </div>\n        <div class=\"signup__form__container\">\n        <form [formGroup]=\"signupform\" name=\"signupform\" (ngSubmit)=\"onSignup(signupform.value)\">\n        <div class=\"row\">\n          <div class=\"signup__form__container__input signup__form__container__fname col-xs-12 col-sm-6\">\n            <div   class=\"signup__form__container__input__label h2\">\n                First Name\n            </div>\n            <input  [class.errorClassField]=\"errorMsgCounter\" type=\"text\" formControlName=\"firstname\" name=\"firstname\" class=\"signup__form__container__input__field b3\"/>\n          </div>\n\n          <div class=\"signup__form__container__input signup__form__container__lname col-xs-12 col-sm-6\">\n              <div class=\"signup__form__container__input__label h2\">\n                  Last Name\n              </div>\n              <input  class=\"signup__form__container__input__field b3\"  [class.errorClassField]=\"errorMsgCounter\" type=\"text\" formControlName=\"lastname\" name=\"lastname\" />\n            </div>\n        </div>\n\n            <div class=\"signup__form__container__input\">\n                <div class=\"signup__form__container__input__label h2\">\n                    Company Name\n                </div>\n                <input  class=\"signup__form__container__input__field b3\" [class.errorClassField]=\"errorMsgCounter\" type=\"text\" formControlName=\"companyname\" name=\"companyname\" />\n            </div>\n\n              <div class=\"signup__form__container__input\">\n                  <div class=\"signup__form__container__input__label h2\">\n                      Role\n                  </div>\n                  <input class=\"signup__form__container__input__field b3\" [class.errorClassField]=\"errorMsgCounter\" type=\"text\" formControlName=\"role\" name=\"role\"/>\n               </div>\n\n                <div class=\"signup__form__container__input\">\n                    <div class=\"signup__form__container__input__label h2\">\n                        Work Email\n                    </div>\n                    <input  class=\"signup__form__container__input__field b3\"  [pattern]=\"emailPattern\" [class.errorClassField]=\"errorMsgCounter\" type=\"email\" formControlName=\"email\" name=\"email\"/>\n                </div>\n\n                <div class=\"signup__form__container__checkBox\">\n                    <label>\n                  <input type=\"checkbox\" name=\"informOffers\" />\n                  <div class=\"signup__form__container__checkBox__text b3\">\n                      Please keep me informed of products, services and offerings from Paketo and Hashworks.\n                  </div>\n                </label>\n                </div>\n\n                <button id=\"signup\" class=\"signup__form__container__button button--color\">Sign up</button>\n         </form>\n        </div>\n\n    </div>\n\n    <div *ngIf=\"!counter\" class=\"signup__reply col-xs-12 col-sm-8\">\n            <div class=\"signup__reply__header h1\">\n                    Thanks for signing up!\n             </div>\n             <div class=\"signup__reply__content b2\">\n                        Our team will be mailing you the credentials for the Paketo trail suite.\n             </div>\n             <div class=\"signup__reply__img\">\n\n             </div>\n    </div>\n\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/signup/signup.component.scss":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer, .header {\n  display: none; }\n\n.signup__image {\n  background-image: url('signupImgMobile.jpg');\n  width: 100%;\n  height: 176px;\n  background-repeat: no-repeat;\n  background-size: cover;\n  padding: 13px 25px;\n  display: -ms-grid;\n  display: grid; }\n\n.signup__image__copyright {\n    -ms-grid-row-align: end;\n        align-self: end; }\n\n.signup__image__logo {\n    background-image: url(\"data:image/png;base64,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\");\n    width: 111px;\n    height: 29px; }\n\n.signup__image__content {\n    color: #ffffff; }\n\n.signup__image__copyright {\n    color: #ffffff; }\n\n.signup__form {\n  display: block;\n  width: 320px;\n  text-align: center;\n  margin: 30px 0px; }\n\n.signup__form__content {\n    margin-top: 5px;\n    padding: 0px 25px; }\n\n.signup__form__errorMsg {\n    color: red;\n    margin-top: 15px; }\n\n.signup__form__container {\n    width: 220px;\n    margin: 0 auto;\n    margin-top: 20px; }\n\n.signup__form__container__input {\n      margin-top: 10px;\n      text-align: left;\n      padding: 0px; }\n\n.signup__form__container__input__label {\n        font-size: 13px; }\n\n.signup__form__container__input__field {\n        margin-top: 3px;\n        width: 100%;\n        height: 30px;\n        border-radius: 4px;\n        background-color: #ffffff;\n        border: solid 1px #e0e0e0;\n        outline: none;\n        padding-left: 10px; }\n\n.signup__form__container__input .errorClass {\n        color: red; }\n\n.signup__form__container__input .errorClassField {\n        border: 1px solid red; }\n\n.signup__form__container__input .ng-valid {\n        border: solid 1px #e0e0e0; }\n\n.signup__form__container__checkBox {\n      text-align: left;\n      margin-top: 15px; }\n\n.signup__form__container__checkBox input {\n        float: left;\n        cursor: pointer; }\n\n.signup__form__container__checkBox__text {\n        width: 193px;\n        margin-left: 27px;\n        cursor: pointer; }\n\n.signup__form__container__button {\n      margin-top: 30px;\n      outline: none; }\n\n.signup__reply {\n  display: block;\n  text-align: center;\n  padding: 70px 0px; }\n\n.signup__reply__content {\n    padding: 20px 25px; }\n\n.signup__reply__img {\n    width: 234px;\n    height: 132px;\n    background-image: url('signUpReplyMobile.jpg');\n    margin: 0 auto; }\n\n@media only screen and (min-width: 768px) {\n  .signup__image {\n    background-image: url('signupImgTab.jpg');\n    height: 542px;\n    background-repeat: no-repeat;\n    padding: 32px 25px;\n    display: -ms-grid;\n    display: grid; }\n  .signup__form__container {\n    width: 300px; }\n    .signup__form__container__input__label {\n      font-size: 17px; }\n    .signup__form__container__fname {\n      padding-right: 5px; }\n    .signup__form__container__lname {\n      padding-left: 5px; }\n    .signup__form__container__checkBox__text {\n      width: 255px; }\n  .signup__reply {\n    padding: 130px 0px; } }\n\n@media only screen and (min-width: 1025px) {\n  .signup__image {\n    background-image: url('signupImgDesk.jpg');\n    height: 682px;\n    background-repeat: no-repeat;\n    padding: 32px 25px; }\n  .signup__form__container {\n    width: 421px; }\n    .signup__form__container__checkBox__text {\n      width: 377px; }\n  .signup__reply {\n    padding: 180px 0px; } }\n\n@media only screen and (min-width: 1440px) {\n  .signup__image {\n    background-image: url('signupImgHD.jpg');\n    height: 768px; } }\n"

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SignupComponent = /** @class */ (function () {
    function SignupComponent(fb) {
        this.fb = fb;
        this.emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
        this.counter = true;
        this.errorMsgCounter = false;
        this.signObj = {};
        this.signupform = fb.group({
            'firstname': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'lastname': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'companyname': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'role': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'email': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.onSignup = function (value) {
        console.log(this.signupform.valid);
        if (!this.signupform.valid) {
            this.errorMsgCounter = true;
        }
        else {
            this.counter = false;
        }
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.scss */ "./src/app/signup/signup.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/hashworks/Desktop/projects/paketo-web/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map