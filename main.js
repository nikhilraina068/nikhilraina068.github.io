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

module.exports = "\n<div class=\"paketo\"  [ngClass]=\"{hideHeaderFooter: !showHeaderFooter}\">\n<app-header *ngIf=\"showHeaderFooter\"></app-header>\n<router-outlet></router-outlet>\n<app-footer *ngIf=\"showHeaderFooter\"></app-footer>\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".paketo {\n  margin-top: 72px; }\n\n.hideHeaderFooter {\n  margin-top: 0px; }\n\n@media only screen and (min-width: 1025px) {\n  .paketo {\n    margin-top: 107px; }\n  .hideHeaderFooter {\n    margin-top: 0px; } }\n"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        var _this = this;
        this.router = router;
        // router: any;
        this.title = 'app';
        this.showHeaderFooter = true;
        router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                console.log('current url', event.url);
                var currentUrl = event.url;
                if (currentUrl === '/signup') {
                    _this.showHeaderFooter = false;
                }
                else if (currentUrl === '/contact') {
                    _this.showHeaderFooter = false;
                }
                else {
                    _this.showHeaderFooter = true;
                }
            }
        });
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
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

module.exports = "<div class=\"caseStudy\">\n\n<div class=\"caseStudy__banner\">\n\n  <div class=\"caseStudy__banner__outer\">\n    <h1 class=\"hero\">Case Studies</h1>\n    <div class=\"caseStudy__banner__outer__line\">\n      <div class=\"dot\"></div>\n      <div class=\"line\"></div>\n    </div>\n  </div>\n  \n</div>\n\n\n<div class=\"caseStudy__container\">\n  <div class=\"row\">\n  <div class=\"caseStudy__container__card col-xs-12 col-sm-4\">\n    \n    <div class=\"caseStudy__container__card__img caseStudy__container__card__card1\"></div>\n    <div class=\"caseStudy__container__card__text h3\">Explore the future of design and creativity.</div>\n</div>\n  <div class=\"caseStudy__container__card col-xs-12 col-sm-4\">\n      \n    <div class=\"caseStudy__container__card__img caseStudy__container__card__card2\"></div>\n    <div class=\"caseStudy__container__card__text h3\">Explore the future of design and creativity.</div>\n\n</div>\n  <div class=\"caseStudy__container__card col-xs-12 col-sm-4\">\n      \n    <div class=\"caseStudy__container__card__img caseStudy__container__card__card3\"></div>\n    <div class=\"caseStudy__container__card__text h3\">Explore the future of design and creativity.</div>\n  \n</div>\n  <div class=\"caseStudy__container__card col-xs-12 col-sm-4\">\n    <div class=\"caseStudy__container__card__img caseStudy__container__card__card4\"></div>\n    <div class=\"caseStudy__container__card__text h3\">Explore the future of design and creativity.</div>\n  </div>\n  <div class=\"caseStudy__container__card col-xs-12 col-sm-4\">\n    <div class=\"caseStudy__container__card__img caseStudy__container__card__card5\"></div>\n    <div class=\"caseStudy__container__card__text h3\">Explore the future of design and creativity.</div>\n  </div>\n  <div class=\"caseStudy__container__card col-xs-12 col-sm-4\">\n    <div class=\"caseStudy__container__card__img caseStudy__container__card__card6\"></div>\n    <div class=\"caseStudy__container__card__text h3\">Explore the future of design and creativity.</div>\n  </div>\n  </div>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/casestudy/casestudy.component.scss":
/*!****************************************************!*\
  !*** ./src/app/casestudy/casestudy.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".caseStudy__banner {\n  width: 100%;\n  height: 464px;\n  background-color: #1a1a1a;\n  display: flex;\n  justify-content: center;\n  /* align horizontal */\n  align-items: center;\n  background-image: url(\"data:image/png;base64,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\");\n  background-repeat: no-repeat;\n  background-position: right top;\n  background-size: 141px 210px; }\n  .caseStudy__banner__outer {\n    width: 164px; }\n  .caseStudy__banner__outer h1 {\n      color: white;\n      margin: 0px; }\n  .caseStudy__banner__outer__line {\n      width: 103px;\n      float: right; }\n  .caseStudy__banner__outer__line .dot {\n        width: 8px;\n        height: 8px;\n        background-color: #41a1fa;\n        border-radius: 50%;\n        display: inline-block; }\n  .caseStudy__banner__outer__line .line {\n        width: 90px;\n        height: 7px;\n        background-color: #41a1fa;\n        display: inline-block;\n        border-radius: 10px;\n        margin-left: 3px;\n        display: inline-block; }\n  .caseStudy__container {\n  width: 220px;\n  margin: 0 auto;\n  margin-bottom: 32px; }\n  .caseStudy__container__card {\n    margin-top: 32px;\n    transition: all .5s ease;\n    cursor: pointer;\n    width: 220px;\n    padding: 0px; }\n  .caseStudy__container__card__img {\n      width: 220px;\n      height: 156px;\n      background-repeat: no-repeat;\n      margin: 0 auto;\n      background-size: cover; }\n  .caseStudy__container__card:hover {\n      box-shadow: 2px 8px 20px 0 rgba(31, 32, 68, 0.25), 0px -1px 9px 0 rgba(31, 32, 68, 0.25);\n      -webkit-transform: scale(1.01);\n      transform: scale(1.01); }\n  .caseStudy__container__card__card1 {\n      background-image: url('caseStudyItemMob1.jpg'); }\n  .caseStudy__container__card__card2 {\n      background-image: url('caseStudyItemMob2.jpg'); }\n  .caseStudy__container__card__card3 {\n      background-image: url('caseStudyItemMob3.jpg'); }\n  .caseStudy__container__card__card4 {\n      background-image: url('caseStudyItemMob1.jpg'); }\n  .caseStudy__container__card__card5 {\n      background-image: url('caseStudyItemMob2.jpg'); }\n  .caseStudy__container__card__card6 {\n      background-image: url('caseStudyItemMob3.jpg'); }\n  .caseStudy__container__card__text {\n      color: #323648;\n      padding-top: 15px;\n      width: 220px;\n      margin: 0 auto; }\n  @media only screen and (min-width: 768px) {\n  .caseStudy__banner {\n    background-image: url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%22415%22 height%3D%22409%22 viewBox%3D%220 0 415 409%22%3E    %3Cg fill%3D%22none%22 fill-rule%3D%22evenodd%22%3E        %3Cpath fill%3D%22%23523D93%22 d%3D%22M0 0h415v410z%22%2F%3E        %3Cpath stroke%3D%22%2341A1FA%22 stroke-width%3D%2280%22 d%3D%22M431.5 562C544.995 562 637 469.995 637 356.5S544.995 151 431.5 151 226 243.005 226 356.5 318.005 562 431.5 562zm-.882 13.887c-120.677 0-218.505-97.828-218.505-218.505 0-120.678 97.828-218.506 218.505-218.506 120.678 0 218.506 97.828 218.506 218.506 0 120.677-97.828 218.505-218.506 218.505z%22%2F%3E    %3C%2Fg%3E%3C%2Fsvg%3E\");\n    background-position: right bottom;\n    background-size: contain; }\n    .caseStudy__banner__outer {\n      width: 698px; }\n      .caseStudy__banner__outer h1 {\n        display: inline-block; }\n      .caseStudy__banner__outer__line {\n        display: inline-block;\n        float: none;\n        margin-left: 12px;\n        width: 140px; }\n        .caseStudy__banner__outer__line .line {\n          width: 125px; }\n  .caseStudy__container {\n    width: 698px; }\n    .caseStudy__container__card {\n      width: 220px;\n      padding: 7px 0px; } }\n  @media only screen and (min-width: 1025px) {\n  .caseStudy__banner__outer {\n    width: 930px; }\n  .caseStudy__container {\n    width: 950px; }\n    .caseStudy__container__card {\n      width: 290px;\n      padding: 14px 0px; }\n      .caseStudy__container__card__img {\n        width: 290px;\n        height: 207px;\n        background-size: cover; }\n      .caseStudy__container__card__card1 {\n        background-image: url('caseStudyItem1.jpg'); }\n      .caseStudy__container__card__card2 {\n        background-image: url('caseStudyItem2.jpg'); }\n      .caseStudy__container__card__card3 {\n        background-image: url('caseStudyItem3.jpg'); }\n      .caseStudy__container__card__card4 {\n        background-image: url('caseStudyItem1.jpg'); }\n      .caseStudy__container__card__card5 {\n        background-image: url('caseStudyItem2.jpg'); }\n      .caseStudy__container__card__card6 {\n        background-image: url('caseStudyItem3.jpg'); }\n      .caseStudy__container__card__text {\n        width: 290px; } }\n  @media only screen and (min-width: 1440px) {\n  .caseStudy__banner__outer {\n    width: 1110px; }\n  .caseStudy__container {\n    width: 1110px; }\n    .caseStudy__container__card {\n      width: 350px; }\n      .caseStudy__container__card__img {\n        width: 350px;\n        height: 250px; }\n      .caseStudy__container__card__text {\n        width: 350px; } }\n"

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

module.exports = ".footer {\n  background-color: #1a1a1a;\n  padding: 20px;\n  text-align: center; }\n  .footer .b2, .footer .b3, .footer .h3 {\n    color: #fff; }\n  .footer .h3 {\n    margin-bottom: 18px; }\n  .footer a {\n    text-decoration: none;\n    display: block; }\n  .footer__div1 button {\n    background: transparent;\n    border: none;\n    outline: none;\n    display: block;\n    margin: 0 auto; }\n  .footer__div1 button img {\n      cursor: pointer;\n      width: 110px;\n      height: 28px; }\n  .footer__div1 .custom-button {\n    text-decoration: none;\n    padding: 2px;\n    border-radius: 30px;\n    background: linear-gradient(to right, #523d93, #41a1fa);\n    display: inline-block;\n    margin: 23px 0px 35px; }\n  .footer__div1 .custom-button__text {\n      background: #1a1a1a;\n      color: #fff;\n      display: block;\n      padding: 10px 20px;\n      font-size: 10px;\n      font-family: 'RobotoMedium';\n      border-radius: 30px; }\n  .footer__div2 {\n    margin-bottom: 46px; }\n  .footer__div2 .b2 {\n      margin-bottom: 7px; }\n  .footer__div5 .b2 {\n    margin-bottom: 5px; }\n  @media only screen and (min-width: 768px) {\n  .footer {\n    padding: 65px 20px 63px; }\n    .footer__all {\n      width: 701px;\n      margin: 0 auto;\n      display: flex; }\n      .footer__all div {\n        margin-right: 70px;\n        text-align: left; }\n    .footer__div1 button {\n      margin: 0px; }\n      .footer__div1 button img {\n        width: 140px;\n        height: 34px; }\n    .footer__div1 .custom-button {\n      margin: 43px 0px 0px; }\n    .footer__div2 {\n      margin-bottom: 0px; }\n    .footer__div5 {\n      width: 701px;\n      margin: 50px auto 0px;\n      text-align: right; } }\n  @media only screen and (min-width: 1025px) {\n  .footer__all {\n    width: 930px; }\n    .footer__all div {\n      margin-right: 105px; }\n  .footer__div1 button {\n    margin: 0px; }\n    .footer__div1 button img {\n      width: 180px;\n      height: 44px; }\n  .footer__div1 .custom-button {\n    margin: 39px 0px 0px; }\n    .footer__div1 .custom-button__text {\n      font-size: 14px;\n      padding: 10px 22px; }\n  .footer__div5 {\n    width: 930px; } }\n  @media only screen and (min-width: 1440px) {\n  .footer__all {\n    width: 1110px; }\n    .footer__all div {\n      margin-right: 140px; }\n  .footer__div1 button {\n    margin: 0px; }\n    .footer__div1 button img {\n      width: 215px;\n      height: 52px; }\n  .footer__div1 .custom-button {\n    margin: 39px 0px 0px; }\n    .footer__div1 .custom-button__text {\n      font-size: 17px;\n      padding: 11px 30px;\n      font-family: 'RobotoRegular'; }\n  .footer__div5 {\n    width: 1110px; } }\n"

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

module.exports = "<header class=\"header\">\n  <img class=\"header__img\" [routerLink]=\"['/']\" src=\"../../../assets/img/headerfooter/logo.svg\" alt=\"paketo_image\">\n  <div class=\"header__tab\"  [ngClass]=\"{menuAnimation: mobileMenu}\">\n    <div class=\"header__tab__all\" *ngIf=\"mobileMenu\">\n      <div class=\"header__tab-temp\">\n          <img class=\"header__img\" (click)=\"hideMenu()\" [routerLink]=\"['/']\" src=\"../../../assets/img/headerfooter/logo_mobile.svg\" alt=\"paketo_image\">\n          <img class=\"\" (click)=\"hideMenu()\" src=\"../../../assets/img/headerfooter/close.svg\" alt=\"paketo_image\">\n      </div>\n      <button class=\"header__tab__button b2\" (click)=\"hideMenu()\" [routerLink]=\"['/product']\" [routerLinkActive]=\"['selected']\">Products</button>\n      <button class=\"header__tab__button b2\" (click)=\"hideMenu()\" [routerLink]=\"['/services']\" [routerLinkActive]=\"['selected']\">Services</button>\n      <button class=\"header__tab__button b2\" (click)=\"hideMenu()\" [routerLink]=\"['/features']\" [routerLinkActive]=\"['selected']\">Features</button>\n      <button class=\"header__tab__button b2\" (click)=\"hideMenu()\" [routerLink]=\"['/pricing']\" [routerLinkActive]=\"['selected']\">Pricing</button>\n      <button class=\"header__tab__button b2\" (click)=\"hideMenu()\" [routerLink]=\"['/casestudy']\" [routerLinkActive]=\"['selected']\">Case studies</button>\n      <button class=\"header__tab__button b2\" (click)=\"hideMenu()\" [routerLink]=\"['/partners']\" [routerLinkActive]=\"['selected']\">Partners</button>\n\n    </div>\n    <a [routerLink]=\"['/signup']\" *ngIf=\"mobileMenu\" (click)=\"hideMenu()\" target=\"_blank\" class=\"custom-button\"><span class=\"custom-button__text\">Sign up for Free Trail</span></a>    \n  </div>\n  <div class=\"header__img--hamberger\" (click)=\"showMenu()\">\n    <img  src=\"../../../assets/img/headerfooter/paketo_hamberger.svg\" alt=\"paketo_hamberger\">\n  </div>\n</header>\n"

/***/ }),

/***/ "./src/app/common/header/header.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/common/header/header.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n  height: 72px;\n  z-index: 2;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0px 27px 0px 17px;\n  border-bottom: solid 1px #737373;\n  background-color: #1a1a1a;\n  position: fixed;\n  top: 0px; }\n  .header__img {\n    width: 100px;\n    height: 26px;\n    cursor: pointer;\n    outline: none; }\n  .header__img--hamberger {\n      display: block;\n      cursor: pointer;\n      width: 24px;\n      height: 13px; }\n  .header__tab {\n    display: block;\n    position: fixed;\n    width: 100%;\n    background-color: #fff;\n    top: 0px;\n    left: 0px;\n    height: 0vh;\n    align-items: center;\n    text-align: center;\n    transition: all .15s; }\n  .header__tab-temp {\n      display: flex;\n      justify-content: space-between;\n      height: 72px;\n      align-items: center;\n      padding: 0px 27px 0px 17px;\n      margin-bottom: 50px; }\n  .header__tab .custom-button {\n      text-decoration: none;\n      padding: 2px;\n      border-radius: 30px;\n      background: linear-gradient(to right, #523d93, #41a1fa);\n      display: inline-block; }\n  .header__tab .custom-button__text {\n        background: linear-gradient(to right, #523d93, #41a1fa);\n        color: #fff;\n        display: block;\n        padding: 10px 20px;\n        font-size: 10px;\n        font-family: 'RobotoMedium';\n        border-radius: 30px; }\n  .header__tab__button {\n      padding: 0px;\n      position: relative;\n      background-color: transparent;\n      margin-right: 12px;\n      color: #fff;\n      border: none;\n      outline: none;\n      cursor: pointer;\n      display: block;\n      margin: 0 auto 24px;\n      font-family: 'RobotoMedium';\n      font-size: 20px;\n      color: #000052; }\n  .header .menuAnimation {\n    height: 100vh; }\n  .header .selected::before {\n    content: '';\n    width: 5px;\n    height: 5px;\n    background-color: #41a1fa;\n    border-radius: 50%;\n    position: absolute;\n    bottom: -10px; }\n  .header .selected::after {\n    content: '';\n    width: 81%;\n    height: 5px;\n    background-color: #41a1fa;\n    border-radius: 20px;\n    position: absolute;\n    bottom: -10px;\n    left: 11px; }\n  @media only screen and (min-width: 768px) {\n  .header {\n    padding: 0px 34px 0px 34px; }\n    .header__img {\n      width: 120px;\n      height: 31px; }\n      .header__img--hamberger {\n        display: none; }\n    .header .menuAnimation {\n      height: 0vh; }\n    .header__tab {\n      display: flex;\n      align-items: center;\n      position: static;\n      width: unset;\n      background-color: transparent;\n      height: inherit;\n      text-align: initial; }\n      .header__tab .custom-button {\n        text-decoration: none;\n        padding: 2px;\n        border-radius: 30px;\n        background: linear-gradient(to right, #523d93, #41a1fa);\n        display: inline-block; }\n        .header__tab .custom-button__text {\n          background: #1a1a1a;\n          color: #fff;\n          display: block;\n          padding: 10px 20px;\n          font-size: 10px;\n          font-family: 'RobotoMedium';\n          border-radius: 30px; }\n      .header__tab__button {\n        padding: 0px;\n        position: relative;\n        background-color: transparent;\n        color: #fff;\n        border: none;\n        outline: none;\n        display: inline-block;\n        margin: 0px 12px 0px 0px;\n        font-family: 'RobotoRegular';\n        font-size: 14px;\n        cursor: pointer; }\n        .header__tab__button::after {\n          content: '';\n          width: 0px;\n          transition: all .5s; }\n      .header__tab-temp {\n        display: none; } }\n  @media only screen and (min-width: 1025px) {\n  .header {\n    height: 107px; }\n    .header__tab .custom-button__text {\n      font-size: 14px;\n      padding: 10px 22px; }\n    .header__tab__button {\n      margin-right: 20px;\n      font-size: 16px; } }\n  @media only screen and (min-width: 1440px) {\n  .header__tab .custom-button__text {\n    font-size: 17px;\n    padding: 11px 30px;\n    font-family: 'RobotoRegular'; }\n  .header__tab__button {\n    margin-right: 20px;\n    font-size: 17px; }\n  .header .selected::before {\n    content: '';\n    width: 6px;\n    height: 6px;\n    bottom: -14px; }\n  .header .selected::after {\n    content: '';\n    width: 83%;\n    height: 6px;\n    background-color: #41a1fa;\n    border-radius: 20px;\n    position: absolute;\n    bottom: -14px;\n    left: 12px; } }\n"

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
        this.mobileMenu = false;
    }
    HeaderComponent.prototype.showMenu = function () {
        this.mobileMenu = true;
    };
    HeaderComponent.prototype.hideMenu = function () {
        if (screen.width < 768) {
            this.mobileMenu = false;
        }
    };
    HeaderComponent.prototype.ngOnInit = function () {
        console.log(screen.width);
        if (screen.width > 767) {
            this.mobileMenu = true;
        }
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

module.exports = "<div class=\"contact\">\n  \n    <div class=\"row\">\n  \n      <div class=\"contact__image col-xs-12 col-sm-4\">\n            <div class=\"signup__image__logo\">\n                    <a href=\"/\">  <img src=\"../../assets/img/signup/paketoLogo.png\"/></a>\n                </div>\n          <div class=\"contact__image__content b1\">\n              Go from code to running app in minutes. Deploy, scale, and deliver your app to the world.\n          </div>\n            <div class=\"contact__image__copyright b3\">\n                Copyright © 2018 Paketo.\n              </div>\n      </div>\n  \n      <div *ngIf=\"counter\" class=\"contact__form col-xs-12 col-sm-8\">\n          <div>\n          <div class=\"contact__form__header h1\">\n              Contact\n          </div>\n          <div class=\"contact__form__content b2\">\n              Hi, can we help you transform your organization?\n          </div>\n         \n          <div class=\"contact__form__container\">\n            <div [class.errortopmsg] = \"!errorMsgCounter\" class=\"contact__form__container__errorMsg b3\">\n                    All the fields are mandatory\n             </div>\n          <form [formGroup]=\"contactform\" name=\"contactform\" (ngSubmit)=\"onSignup(contactform.value)\" autocomplete=\"off\">\n          <div class=\"row\">\n            <div class=\"contact__form__container__input contact__form__container__fname col-xs-12 col-sm-6\">\n              <div   class=\"contact__form__container__input__label h2\">\n                  First Name\n              </div>\n              <input  [class.errorClassField]=\"errorMsgCounter\" type=\"text\" formControlName=\"firstname\" name=\"firstname\" class=\"contact__form__container__input__field b3\"/>\n            </div>\n  \n            <div class=\"contact__form__container__input contact__form__container__lname col-xs-12 col-sm-6\">\n                <div class=\"contact__form__container__input__label h2\">\n                    Last Name\n                </div>\n                <input  class=\"contact__form__container__input__field b3\"  [class.errorClassField]=\"errorMsgCounter\" type=\"text\" formControlName=\"lastname\" name=\"lastname\" />\n              </div>\n          </div>\n  \n              <div class=\"contact__form__container__input\">\n                  <div class=\"contact__form__container__input__label h2\">\n                      Company Name\n                  </div>\n                  <input  class=\"contact__form__container__input__field b3\" [class.errorClassField]=\"errorMsgCounter\" type=\"text\" formControlName=\"companyname\" name=\"companyname\" />\n              </div>\n  \n                <div class=\"contact__form__container__input\">\n                    <div class=\"contact__form__container__input__label h2\">\n                        Role\n                    </div>\n                    <input class=\"contact__form__container__input__field b3\" [class.errorClassField]=\"errorMsgCounter\" type=\"text\" formControlName=\"role\" name=\"role\"/>\n                 </div>\n  \n                  <div class=\"contact__form__container__input\">\n                      <div class=\"contact__form__container__input__label h2\">\n                          Work Email\n                      </div>\n                      <input  class=\"contact__form__container__input__field b3\"  pattern=\"[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}\" [class.errorClassField]=\"errorMsgCounter\" type=\"email\" formControlName=\"email\" name=\"email\"/>\n                  </div>\n\n                  <div class=\"contact__form__container__input\">\n                      <div class=\"contact__form__container__input__label h2\">\n                          Message\n                      </div>\n                      <!-- <input  class=\"contact__form__container__input__field b3\"   [class.errorClassField]=\"errorMsgCounter\" type=\"text\" formControlName=\"email\" name=\"email\"/> -->\n                    <textarea class=\"contact__form__container__input__field b3\"   [class.errorClassField]=\"errorMsgCounter\" formControlName=\"msg\" name=\"msg\"></textarea>\n                    </div>\n  \n                  <div class=\"contact__form__container__checkBox\">\n                      <label>\n                    <input type=\"checkbox\" name=\"informOffers\" formControlName=\"checkSubscribe\" name=\"checkSubscribe\"/>\n                    <div class=\"contact__form__container__checkBox__text b3\">\n                        Please keep me informed of products, services and offerings from Paketo and Hashworks.\n                    </div>\n                  </label>\n                  </div>\n  \n                  <button id=\"signup\" class=\"contact__form__container__button button--color\">Sign up</button>\n           </form>\n          </div>\n        </div>\n      </div>\n  \n      <div *ngIf=\"!counter\" class=\"contact__reply col-xs-12 col-sm-8\">\n            <div>\n              <div class=\"contact__reply__header h1\">\n                    Thanks for reaching out to us!\n               </div>\n               <div class=\"contact__reply__content b2\">\n                    Our concern team will be getting back to you very soon.\n               </div>\n               <div class=\"contact__reply__img\">\n                </div>\n               </div>\n      </div>\n  \n    </div>\n  \n  </div>"

/***/ }),

/***/ "./src/app/contact-page/contact-page.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/contact-page/contact-page.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".contact__image {\n  background-image: url('signupImgMobile.jpg');\n  width: 100%;\n  height: 176px;\n  background-repeat: no-repeat;\n  background-size: cover;\n  padding: 13px 25px;\n  display: -ms-grid;\n  display: grid; }\n  .contact__image__copyright {\n    -ms-grid-row-align: end;\n        align-self: end; }\n  .contact__image__logo {\n    width: 111px;\n    height: 29px; }\n  .contact__image__content {\n    color: #ffffff; }\n  .contact__image__copyright {\n    color: #ffffff; }\n  .contact__form {\n  display: block;\n  width: 320px;\n  text-align: center;\n  margin: 30px 0px; }\n  .contact__form__content {\n    margin-top: 5px;\n    padding: 0px 25px; }\n  .contact__form .errortopmsg {\n    visibility: hidden; }\n  .contact__form__container {\n    width: 220px;\n    margin: 0 auto; }\n  .contact__form__container__errorMsg {\n      color: red;\n      margin-top: 15px;\n      text-align: left; }\n  .contact__form__container__input {\n      margin-top: 10px;\n      text-align: left;\n      padding: 0px; }\n  .contact__form__container__input__label {\n        font-size: 13px; }\n  .contact__form__container__input__field {\n        margin-top: 3px;\n        width: 100%;\n        height: 30px;\n        border-radius: 4px;\n        background-color: #ffffff;\n        border: solid 1px #e0e0e0;\n        outline: none;\n        padding-left: 10px; }\n  .contact__form__container__input > textarea {\n        height: 42px;\n        resize: none; }\n  .contact__form__container__input .errorClass {\n        color: red; }\n  .contact__form__container__input .errorClassField {\n        border: 1px solid red; }\n  .contact__form__container__input .ng-valid {\n        border: solid 1px #e0e0e0; }\n  .contact__form__container__checkBox {\n      text-align: left;\n      margin-top: 15px; }\n  .contact__form__container__checkBox input {\n        float: left;\n        cursor: pointer; }\n  .contact__form__container__checkBox__text {\n        width: 193px;\n        margin-left: 27px;\n        cursor: pointer; }\n  .contact__form__container__button {\n      margin-top: 30px;\n      outline: none; }\n  .contact__reply {\n  display: block;\n  text-align: center;\n  padding: 70px 0px; }\n  .contact__reply__content {\n    padding: 20px 25px; }\n  .contact__reply__img {\n    width: 216px;\n    height: 222px;\n    background-image: url('contactReplyMobile.jpg');\n    margin: 0 auto; }\n  @media only screen and (min-width: 768px) {\n  .contact {\n    height: 100vh; }\n    .contact__image {\n      background-image: url('signupImgTab.jpg');\n      height: 100vh;\n      background-repeat: no-repeat;\n      padding: 32px 25px;\n      display: -ms-grid;\n      display: grid; }\n    .contact__form {\n      display: flex;\n      align-items: center;\n      justify-content: center; }\n      .contact__form__container {\n        width: 300px; }\n        .contact__form__container__input__label {\n          font-size: 17px; }\n        .contact__form__container__input > textarea {\n          height: 56px; }\n        .contact__form__container__fname {\n          padding-right: 5px; }\n        .contact__form__container__lname {\n          padding-left: 5px; }\n        .contact__form__container__checkBox__text {\n          width: 255px; }\n    .contact__reply {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      padding: 130px 0px; } }\n  @media only screen and (min-width: 1025px) {\n  .contact__image {\n    background-image: url('signupImgDesk.jpg');\n    height: 100vh;\n    background-repeat: no-repeat;\n    padding: 32px 25px; }\n  .contact__form__container {\n    width: 421px; }\n    .contact__form__container__checkBox__text {\n      width: 377px; }\n    .contact__form__container__input > textarea {\n      height: 78px; }\n  .contact__reply {\n    padding: 180px 0px; } }\n  @media only screen and (min-width: 1440px) {\n  .contact__image {\n    background-image: url('signupImgHD.jpg');\n    height: 100vh; } }\n"

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
        // public emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
        this.emailPattern = "(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]";
        this.counter = true;
        this.errorMsgCounter = false;
        this.signObj = {};
        this.contactform = fb.group({
            'firstname': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'lastname': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'companyname': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'role': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'email': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'msg': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'checkSubscribe': [false]
        });
    }
    ContactPageComponent.prototype.ngOnInit = function () {
    };
    ContactPageComponent.prototype.onSignup = function (value) {
        if (!this.contactform.valid) {
            this.errorMsgCounter = true;
        }
        else {
            console.log(value);
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

module.exports = "<div class=\"feature\">\n    <div class=\"feature__banners\">\n        <div class=\"feature__banners__content\">\n            <h1 class=\"hero\">Simplifying the way you deliver</h1>\n            <div class=\"feature__banners--border\">\n                <div class=\"dot\"></div>\n                <div class=\"line\"></div>\n            </div>\n            <p class=\"b2\"> We bring the industry experts, thought leaders and hands-on practitioners to innovate faster and scale smarter.</p>\n\n        </div>\n    </div>\n\n    <div class=\"feature__dropdown\">\n        <div></div>\n    </div>\n    <div class=\"feature__tabs__scroller\">\n        <div class=\"feature__tabs\">\n            <div class=\"feature__tabs__list\">\n                <div class=\"activeTabs\" [ngClass]=\"{'selectBorder': selectedborder == '1' }\" (click)=\"listClicka($event, '1')\">\n                    <div class=\"feature__tabs__list--border\" [ngClass]=\"{'selected': selectedItem1 == '1' }\" (click)=\"listClick($event, '1')\">\n                        <img src=\"../../assets/img/features/commit.svg\" alt=\"paketo\">\n                    </div>\n                    <p class=\"b2\">Commit</p>\n                </div>\n                <div class=\"activeTabs\" [ngClass]=\"{'selectBorder': selectedborder == '2' }\" (click)=\"listClicka($event, '2')\">\n                    <div class=\"feature__tabs__list--border\"  [ngClass]=\"{'selected': selectedItem1 == '2' }\" (click)=\"listClick($event, '2')\">\n                        <img src=\"../../assets/img/features/build.svg\" alt=\"paketo\">\n                    </div>\n                    <p class=\"b2\">Build</p>\n                </div>\n\n                <div class=\"activeTabs\" [ngClass]=\"{'selectBorder': selectedborder == '3' }\" (click)=\"listClicka($event, '3')\">\n                    <div class=\"feature__tabs__list--border\"  [ngClass]=\"{'selected': selectedItem1 == '3' }\" (click)=\"listClick($event, '3')\">\n                        <img src=\"../../assets/img/features/deploy.svg\" alt=\"paketo\">\n                    </div>\n                    <p class=\"b2\">Deploy</p>\n                </div>\n                <div class=\"activeTabs\" [ngClass]=\"{'selectBorder': selectedborder == '4' }\" (click)=\"listClicka($event, '4')\">\n                    <div class=\"feature__tabs__list--border\"  [ngClass]=\"{'selected': selectedItem1 == '4' }\" (click)=\"listClick($event, '4')\">\n                        <img src=\"../../assets/img/features/release.svg\" alt=\"paketo\">\n                    </div>\n                    <p class=\"b2\">Release</p>\n                </div>\n                <div class=\"swordfish activeTabs\" [ngClass]=\"{'selectBorder': selectedborder == '5' }\" (click)=\"listClicka($event, '5')\" >\n                    <div class=\"feature__tabs__list--border header \"  [ngClass]=\"{'selected': selectedItem1 == '5' }\" (click)=\"listClick($event, '5')\">  \n                        <img src=\"../../assets/img/features/test.svg\" alt=\"paketo\">\n                    </div>\n                    <h1 class=\"h3\">Swordfish</h1>\n                    <div class=\"circle\"></div>\n                    <p class=\"b2\">Test</p>\n                </div>\n                <div class=\"swordfish activeTabs\" [ngClass]=\"{'selectBorder': selectedborder == '6' }\" (click)=\"listClicka($event, '6')\">\n                    <div class=\"feature__tabs__list--border header\"  [ngClass]=\"{'selected': selectedItem1 == '6' }\" (click)=\"listClick($event, '6')\">\n                        <img src=\"../../assets/img/features/Monitor.svg\" alt=\"paketo\">\n                    </div>\n                    <h1 class=\"h3\">Enigma</h1>\n                    <div class=\"circle1\"></div>\n                    <p class=\"b2\">Monitor</p>\n                </div>\n            </div>\n            <div class=\"feature__tabs--hercules\">\n                <h1 class=\"h3\">Hercules</h1>\n                <div class=\"border1\"></div>\n                <div class=\"border2\"></div>\n                <div class=\"border2\"></div>\n                <div class=\"border3\"></div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"feature__details default\" [ngClass]=\"{'active': selectedItem1 == '1' }\">\n        <div class=\"row\">\n            <div class=\"col-xs-12 col-sm-6 end-sm nopadding \">\n                <img src=\"../../assets/img/features/commit1.png\" alt=\"paketo\">\n            </div>\n            <div class=\"col-xs-12 first-xs col-sm-6 last-sm nopadding content\">\n                <div>\n                    <h3 class=\"h3\">Automatically trigger application builds on every code commit</h3>\n                    <p class=\"b2\">Connect your preferred source control repository with the click of a button and automatically trigger\n                        application builds and continuous integration workflows on any code commit or pull request.</p>\n                </div>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-xs-12 col-sm-6 nopadding content\">\n                <div>\n                    <h3 class=\"h3\">Auto Create delivery pipelines in minutes</h3>\n                    <p class=\"b2\">Build continuous delivery pipelines in a few clicks and visualize your entire software delivery lifecycle\n                        through a single dashboard as your applications move from development to production.</p>\n                </div>\n            </div>\n            <div class=\"col-xs-12 col-sm-6 last-sm nopadding\">\n                <img src=\"../../assets/img/features/commit2.png\" alt=\"paketo\">\n            </div>\n        </div>\n    </div>\n\n    <div class=\"feature__details default\" [ngClass]=\"{'active': selectedItem1 == '2' }\">\n        <div class=\"row\">\n            <div class=\"col-xs-12 col-sm-6 end-sm nopadding \">\n                <img src=\"../../assets/img/features/build1.jpg\" alt=\"paketo\">\n            </div>\n            <div class=\"col-xs-12 first-xs col-sm-6 last-sm nopadding content\">\n                <div>\n                    <h3 class=\"h3\">Automate the way you build and deploy applications</h3>\n                    <p class=\"b2\">You get end-to-end continuous delivery and automation for your entire software delivery lifecycle, from\n                        the time your developers commit application code to the deployment of those apps wherever they run.</p>\n                </div>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-xs-12 col-sm-6 nopadding content\">\n                <div>\n                    <h3 class=\"h3\">Automatically trigger application builds on every code commit</h3>\n                    <p class=\"b2\">Connect your preferred source control repository with the click of a button and automatically trigger\n                        application builds and continuous integration workflows on any code commit or pull request.</p>\n                </div>\n            </div>\n            <div class=\"col-xs-12 col-sm-6 last-sm nopadding\">\n                <img src=\"../../assets/img/features/build2.jpg\" alt=\"paketo\">\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-xs-12 col-sm-6 nopadding content\">\n                <div>\n                    <h3 class=\"h3\">Auto Create delivery pipelines in minutest</h3>\n                    <p class=\"b2\">Build continuous delivery pipelines in a few clicks and visualize your entire software delivery lifecycle\n                        through a single dashboard as your applications move from development to production.</p>\n                </div>\n            </div>\n            <div class=\"col-xs-12 col-sm-6 first-sm nopadding\">\n                <img src=\"../../assets/img/features/build3.jpg\" alt=\"paketo\">\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-xs-12 col-sm-6 nopadding content\">\n                <div>\n                    <h3 class=\"h3\">Build and deploy containers to Cloud</h3>\n                    <p class=\"b2\">Build Docker images directly from your source repository in a few clicks, and deploy containers to any\n                        cloud or on-premises.</p>\n                </div>\n            </div>\n            <div class=\"col-xs-12 col-sm-6 last-sm nopadding\">\n                <img src=\"../../assets/img/features/build4.jpg\" alt=\"paketo\">\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-xs-12 col-sm-6 nopadding content\">\n                <div>\n                    <h3 class=\"h3\">Built-in Deployment Best Practices</h3>\n                    <p class=\"b2\">Create and deploy immutable images for faster rollouts, easier rollbacks, and the elimination of hard\n                        to debug configuration drift issues. Leverage an immutable infrastructure in the cloud with built-in\n                        deployment strategies such as red/black and canary deployments.</p>\n                </div>\n            </div>\n            <div class=\"col-xs-12 col-sm-6 first-sm nopadding\">\n                <img src=\"../../assets/img/features/build5.jpg\" alt=\"paketo\">\n            </div>\n        </div>\n    </div>\n    <div class=\"feature__details default\" [ngClass]=\"{'active': selectedItem1 == '3' }\">\n        <div class=\"row\">\n            <div class=\"col-xs-12 col-sm-6 end-sm nopadding \">\n                <img src=\"../../assets/img/features/deploy1.jpg\" alt=\"paketo\">\n            </div>\n            <div class=\"col-xs-12 first-xs col-sm-6 last-sm nopadding content\">\n                <div>\n                    <h3 class=\"h3\">Automate the way you build and deploy applications</h3>\n                    <p class=\"b2\">You get end-to-end continuous delivery and automation for your entire software delivery lifecycle, from\n                        the time your developers commit application code to the deployment of those apps wherever they run.</p>\n                </div>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-xs-12 col-sm-6 nopadding content\">\n                <div>\n                    <h3 class=\"h3\">Auto Create delivery pipelines in minutes</h3>\n                    <p class=\"b2\">Build continuous delivery pipelines in a few clicks and visualize your entire software delivery lifecycle\n                        through a single dashboard as your applications move from development to production.</p>\n                </div>\n            </div>\n            <div class=\"col-xs-12 col-sm-6 last-sm nopadding\">\n                <img src=\"../../assets/img/features/deploy2.jpg\" alt=\"paketo\">\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-xs-12 col-sm-6 nopadding content\">\n                <div>\n                    <h3 class=\"h3\">Easily automate application deployments</h3>\n                    <p class=\"b2\">Automatically deploy applications to VMs and servers running on any cloud and in your data center with\n                        role-based access control and audit trails for deep visibility into every build and deployment.</p>\n                </div>\n            </div>\n            <div class=\"col-xs-12 col-sm-6 first-sm nopadding\">\n                <img src=\"../../assets/img/features/deploy3.jpg\" alt=\"paketo\">\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-xs-12 col-sm-6 nopadding content\">\n                <div>\n                    <h3 class=\"h3\">Build and deploy containers to Cloud</h3>\n                    <p class=\"b2\">Build Docker images directly from your source repository in a few clicks, and deploy containers to any\n                        cloud or on-premises.</p>\n                </div>\n            </div>\n            <div class=\"col-xs-12 col-sm-6 last-sm nopadding\">\n                <img src=\"../../assets/img/features/deploy4.jpg\" alt=\"paketo\">\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-xs-12 col-sm-6 nopadding content\">\n                <div>\n                    <h3 class=\"h3\">Built-in Deployment Best Practices</h3>\n                    <p class=\"b2\">Create and deploy immutable images for faster rollouts, easier rollbacks, and the elimination of hard\n                        to debug configuration drift issues. Leverage an immutable infrastructure in the cloud with built-in\n                        deployment strategies such as red/black and canary deployments.</p>\n                </div>\n            </div>\n            <div class=\"col-xs-12 col-sm-6 first-sm nopadding\">\n                <img src=\"../../assets/img/features/deploy5.jpg\" alt=\"paketo\">\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-xs-12 col-sm-6 nopadding content\">\n                <div>\n                    <h3 class=\"h3\">Automated Releases</h3>\n                    <p class=\"b2\"> Create deployment pipelines that run integration and system tests, spin up and down server groups, and\n                        monitor your rollouts. Trigger pipelines via git events, Jenkins, Docker.</p>\n                </div>\n            </div>\n            <div class=\"col-xs-12 col-sm-6 last-sm nopadding\">\n                <img src=\"../../assets/img/features/deploy6.jpg\" alt=\"paketo\">\n            </div>\n        </div>\n\n    </div>\n    <div class=\"feature__details default release\" [ngClass]=\"{'active': selectedItem1 == '4' }\">\n        <div class=\"row\">\n            <div class=\"col-xs-12 col-sm-7  nopadding \">\n                <img src=\"../../assets/img/features/release1.jpg\" alt=\"paketo\">\n            </div>\n            <div class=\"col-xs-12 first-xs col-sm-5 first-sm nopadding content\">\n                <div>\n                    <h3 class=\"h3\">Fast. Secure. Scalable.</h3>\n                           <h2 class=\"b2\">Operates at < 1% overhead.</h2>\n                            <h2 class=\"b2\">Low network and storage overhead.</h2>\n                            <h2 class=\"b2\">No changes to code or build.</h2>\n                            <h2 class=\"b2\">Built for microservices. 5-min deploy.</h2>\n                            <h2 class=\"b2\">Enterprise security.</h2>\n                            <h2 class=\"b2\">On-premises and in the Cloud.</h2>\n                </div>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-xs-12 col-sm-5 nopadding content\">\n                <div>\n                    <h3 class=\"h3\">Choose Your Configuration</h3>\n                    <h4 class=\"b2\">Access Control</h4>\n                    <p class=\"b2\">Hybrid mode enables you to leverage our AWS infrastructure without sending out sensitive data. Perfect\n                        for PII, PCI and HIPAA compliant applications.</p>\n                </div>\n            </div>\n            <div class=\"col-xs-12 col-sm-7 first-sm nopadding\">\n                <img src=\"../../assets/img/features/release2.jpg\" alt=\"paketo\">\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-xs-12 col-sm-5 nopadding content\">\n                <div>\n                    <h3 class=\"h3\">Extreme Performance</h3>\n                    <p class=\"b2\">Runs in the World’s Most Demanding Environments</p>\n                    <h2 class=\"b2\">CPU overhead</h2>\n                    <h2 class=\"b2\">No GC overhead</h2>\n                    <h2 class=\"b2\">No Throughput Overhead</h2>\n                    <h2 class=\"b2\">Network overhead ( < 50mb per hour)</h2>\n                    <h2 class=\"b2\">No reliance on logs</h2>\n                    <h2 class=\"b2\">No dependency on OverOps</h2>\n                </div>\n            </div>\n            <div class=\"col-xs-12 col-sm-7 last-sm nopadding\">\n                <img src=\"../../assets/img/features/release3.jpg\" alt=\"paketo\">\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-xs-12 col-sm-5 nopadding content\">\n                <div>\n                    <h3 class=\"h3\">Enterprise Security</h3>\n                    <h4 class=\"b2\">Access Control</h4>\n                    <p class=\"b2\">Robust support for two-factor authentication with OAuth (e.g Google Apps and GitHub), LDAP and SAML.\n                        Administrators can limit access to OverOps to a specific VPN or network. Communication between all\n                        OverOps components is made over outbound HTTPS port 443.</p>\n                </div>\n            </div>\n            <div class=\"col-xs-12 col-sm-7 first-sm nopadding\">\n                <img src=\"../../assets/img/features/release4.jpg\" alt=\"paketo\">\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-xs-12 col-sm-5 col-lg-4  nopadding content\">\n                <div>\n                    <h3 class=\"h3\">Easy to Deploy</h3>\n                    <h2 class=\"b2\">A Simple JVM Agent</h2>\n                    <h2 class=\"b2\">No changes to code or build</h2>\n                    <h2 class=\"b2\">All JVM Languages</h2>\n                </div>\n            </div>\n            <div class=\"col-xs-12 col-sm-7 last-sm col-lg-8 nopadding\">\n                <img src=\"../../assets/img/features/release5.jpg\" alt=\"paketo\">\n            </div>\n        </div>\n    </div>\n   \n    <div class=\"feature__details default\" [ngClass]=\"{'active': selectedItem1 == '5' }\">\n            <div class=\"row\">\n                <div class=\"col-xs-12 col-sm-6 end-sm nopadding \">\n                    <img src=\"../../assets/img/features/test1.jpg\" alt=\"paketo\">\n                </div>\n                <div class=\"col-xs-12 first-xs col-sm-6 last-sm nopadding content\">\n                    <div>\n                        <h3 class=\"h3\">Cross browser testing</h3>\n                        <p class=\"b2\">Testing across a wide variety of browsers is critical to your customers’ online experience. That’s why we offer Live and Continuous testing on over 800 operating system and browser combinations that are instantly available in the Cloud. We are fast to market with Beta and new browser versions so you can ensure your app works as designed upon release.</p>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-xs-12 col-sm-6 nopadding content\">\n                    <div>\n                        <h3 class=\"h3\">Live web testing</h3>\n                        <p class=\"b2\">Right out of the box you can connect to Git or your choice of version control system, easily integrate with Jenkins and other continuous integration tools, and get automatic deployment notifications via email, Slack or HipChat.</p>\n                    </div>\n                </div>\n                <div class=\"col-xs-12 col-sm-6 last-sm nopadding\">\n                    <img src=\"../../assets/img/features/test2.jpg\" alt=\"paketo\">\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-xs-12 col-sm-6 nopadding content\">\n                    <div>\n                        <h3 class=\"h3\">Multi-level reporting and analysis</h3>\n                        <p class=\"b2\">Multi-level reporting and analysis with failed screenshots help to quickly pinpoint the errors. Reports can be emailed automatically or saved to a local folder after each run. Reports are available in multiple file formats, including PDF, Excel, HTML, XML or CSV.</p>\n                    </div>\n                </div>\n                <div class=\"col-xs-12 col-sm-6 first-sm nopadding\">\n                    <img src=\"../../assets/img/features/test3.jpg\" alt=\"paketo\">\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-xs-12 col-sm-6 nopadding content\">\n                    <div>\n                        <h3 class=\"h3\">Platform Agnostic Automation</h3>\n                        <p class=\"b2\">Automate once and run on various combinations of platforms. Run the same tests in parallel across combination of browsers and operating systems. The Test Execution module helps to scale and configure test suites, data sets, test machines for automated execution in few minutes.</p>\n                    </div>\n                </div>\n                <div class=\"col-xs-12 col-sm-6 last-sm nopadding\">\n                    <img src=\"../../assets/img/features/test4.jpg\" alt=\"paketo\">\n                </div>\n            </div>\n    \n        </div>\n        <div class=\"feature__details default release\" [ngClass]=\"{'active': selectedItem1 == '6' }\">\n                <div class=\"row\">\n                    <div class=\"col-xs-12 col-sm-7  nopadding \">\n                        <img src=\"../../assets/img/features/release1.jpg\" alt=\"paketo\">\n                    </div>\n                    <div class=\"col-xs-12 first-xs col-sm-5 first-sm nopadding content\">\n                        <div>\n                            <h3 class=\"h3\">Fast. Secure. Scalable.</h3>\n                                   <h2 class=\"b2\">Operates at < 1% overhead.</h2>\n                                    <h2 class=\"b2\">Low network and storage overhead.</h2>\n                                    <h2 class=\"b2\">No changes to code or build.</h2>\n                                    <h2 class=\"b2\">Built for microservices. 5-min deploy.</h2>\n                                    <h2 class=\"b2\">Enterprise security.</h2>\n                                    <h2 class=\"b2\">On-premises and in the Cloud.</h2>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-xs-12 col-sm-5 nopadding content\">\n                        <div>\n                            <h3 class=\"h3\">Choose Your Configuration</h3>\n                            <h4 class=\"b2\">Access Control</h4>\n                            <p class=\"b2\">Hybrid mode enables you to leverage our AWS infrastructure without sending out sensitive data. Perfect\n                                for PII, PCI and HIPAA compliant applications.</p>\n                        </div>\n                    </div>\n                    <div class=\"col-xs-12 col-sm-7 first-sm nopadding\">\n                        <img src=\"../../assets/img/features/release2.jpg\" alt=\"paketo\">\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-xs-12 col-sm-5 nopadding content\">\n                        <div>\n                            <h3 class=\"h3\">Extreme Performance</h3>\n                            <p class=\"b2\">Runs in the World’s Most Demanding Environments</p>\n                            <h2 class=\"b2\">CPU overhead</h2>\n                            <h2 class=\"b2\">No GC overhead</h2>\n                            <h2 class=\"b2\">No Throughput Overhead</h2>\n                            <h2 class=\"b2\">Network overhead (\n                                < 50mb per hour)</h2>\n                                    <h2 class=\"b2\">No reliance on logs</h2>\n                                    <h2 class=\"b2\">No dependency on OverOps</h2>\n                        </div>\n                    </div>\n                    <div class=\"col-xs-12 col-sm-7 last-sm nopadding\">\n                        <img src=\"../../assets/img/features/release3.jpg\" alt=\"paketo\">\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-xs-12 col-sm-5 nopadding content\">\n                        <div>\n                            <h3 class=\"h3\">Enterprise Security</h3>\n                            <h4 class=\"b2\">Access Control</h4>\n                            <p class=\"b2\">Robust support for two-factor authentication with OAuth (e.g Google Apps and GitHub), LDAP and SAML.\n                                Administrators can limit access to OverOps to a specific VPN or network. Communication between all\n                                OverOps components is made over outbound HTTPS port 443.</p>\n                        </div>\n                    </div>\n                    <div class=\"col-xs-12 col-sm-7 first-sm nopadding\">\n                        <img src=\"../../assets/img/features/release4.jpg\" alt=\"paketo\">\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-xs-12 col-sm-5 col-lg-4  nopadding content\">\n                        <div>\n                            <h3 class=\"h3\">Easy to Deploy</h3>\n                            <h2 class=\"b2\">A Simple JVM Agent</h2>\n                            <h2 class=\"b2\">No changes to code or build</h2>\n                            <h2 class=\"b2\">All JVM Languages</h2>\n                        </div>\n                    </div>\n                    <div class=\"col-xs-12 col-sm-7 last-sm col-lg-8 nopadding\">\n                        <img src=\"../../assets/img/features/release5.jpg\" alt=\"paketo\">\n                    </div>\n                </div>\n            </div>\n\n</div>\n<app-suits></app-suits>"

/***/ }),

/***/ "./src/app/features/features.component.scss":
/*!**************************************************!*\
  !*** ./src/app/features/features.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.feature .activeTabs::after {\n  content: '';\n  width: 0px;\n  transition: all .5s; }\n.feature .selectBorder {\n  position: relative; }\n.feature .selectBorder::before {\n    content: '';\n    width: 5px;\n    height: 5px;\n    background-color: #523d93;\n    border-radius: 50%;\n    position: absolute;\n    bottom: -10px; }\n.feature .selectBorder::after {\n    content: '';\n    width: 40px;\n    height: 5px;\n    background-image: linear-gradient(to right, #523d93, #41a1fa);\n    border-radius: 20px;\n    position: absolute;\n    bottom: -10px;\n    left: 8px; }\n.feature .nopadding {\n  padding: 0px; }\n.feature .default {\n  display: none; }\n.feature .active {\n  display: block; }\n.feature .selected {\n  transition: all .5s linear;\n  background-color: #f3f5f9;\n  border-color: transparent;\n  box-shadow: 0 2px 4px rgba(3, 27, 78, 0.2);\n  -webkit-transform: scale(1.1);\n          transform: scale(1.1); }\n.feature__banners {\n  width: 100%;\n  height: 436px;\n  background-color: #1a1a1a;\n  background-image: url('features.png');\n  background-repeat: no-repeat;\n  background-position: bottom right;\n  background-size: 236px 201px; }\n.feature__banners__content {\n    width: 250px;\n    margin: 0 auto;\n    padding: 66px 0px 0px;\n    position: relative; }\n.feature__banners h1 {\n    width: 250px;\n    margin: 0 auto; }\n.feature__banners p {\n    width: 249px;\n    margin: 0 auto;\n    padding: 17px 0px 0px;\n    color: #ffffff; }\n.feature__banners--border {\n    display: flex;\n    justify-content: space-around;\n    width: 50px;\n    position: absolute;\n    bottom: 83px;\n    right: 60px; }\n.feature__banners--border .dot {\n      width: 5px;\n      height: 5px;\n      background-color: #41a1fa;\n      border-radius: 50px; }\n.feature__banners--border .line {\n      width: 38px;\n      height: 5px;\n      background-color: #41a1fa;\n      border-radius: 50px; }\n.feature__dropdown {\n  background-image: linear-gradient(to right, #523d93, #41a1fa);\n  height: 60px; }\n.feature__tabs {\n  width: 700px;\n  margin: 0 auto;\n  position: relative; }\n.feature__tabs__list {\n    display: flex;\n    justify-content: space-between;\n    position: relative;\n    margin: 164px 20px 20px; }\n.feature__tabs__list--border {\n      background-color: #ffffff;\n      border: solid 2px #e0e0e0;\n      width: 50px;\n      height: 50px;\n      border-radius: 50%;\n      display: flex;\n      justify-content: center;\n      cursor: pointer; }\n.feature__tabs__list img {\n      width: 20px; }\n.feature__tabs__list p {\n      text-align: center;\n      padding-top: 17px; }\n.feature__tabs__list .swordfish {\n      position: relative; }\n.feature__tabs__list .swordfish h1 {\n        position: absolute;\n        bottom: 192px;\n        color: #000052;\n        cursor: default; }\n.feature__tabs__list .swordfish .circle {\n        width: 13px;\n        height: 13px;\n        background-color: #4b65bc;\n        position: absolute;\n        bottom: 167px;\n        border-radius: 50px;\n        cursor: default;\n        position: absolute;\n        bottom: 166px;\n        right: 18px; }\n.feature__tabs__list .swordfish .circle1 {\n        width: 13px;\n        height: 13px;\n        background-color: #41a1fa;\n        position: absolute;\n        bottom: 168px;\n        border-radius: 50px;\n        cursor: default;\n        position: absolute;\n        right: 18px; }\n.feature__tabs__list .header::after {\n      content: '';\n      width: 83px;\n      border-bottom: solid 2px #e0e0e0;\n      top: -42px;\n      position: absolute;\n      -webkit-transform: rotate(90deg);\n      transform: rotate(90deg);\n      cursor: default;\n      z-index: -1; }\n.feature__tabs__list::after {\n    content: '';\n    width: 650px;\n    height: 3px;\n    border-bottom: solid 2px #e0e0e0;\n    z-index: -1;\n    top: 21px;\n    position: absolute; }\n.feature__tabs--hercules {\n    width: 368px;\n    height: 78px;\n    border: solid 2px #e0e0e0;\n    position: absolute;\n    top: -52px;\n    border-radius: 6px;\n    left: 42px;\n    margin: 0 auto;\n    z-index: -1;\n    display: flex;\n    justify-content: space-between; }\n.feature__tabs--hercules .border1 {\n      width: 3px;\n      height: 72px; }\n.feature__tabs--hercules .border2 {\n      width: 3px;\n      height: 72px;\n      border-left: solid 2px #e0e0e0; }\n.feature__tabs--hercules .border3 {\n      width: 3px;\n      height: 72px; }\n.feature__tabs--hercules .h3 {\n      position: absolute;\n      bottom: 130px;\n      left: 174px;\n      color: #000052; }\n.feature__tabs--hercules::after {\n    content: '';\n    width: 44px;\n    border-bottom: solid 2px #e0e0e0;\n    top: -23px;\n    left: 175px;\n    position: absolute;\n    -webkit-transform: rotate(90deg);\n            transform: rotate(90deg); }\n.feature__tabs::after {\n  content: '';\n  width: 13px;\n  position: absolute;\n  height: 13px;\n  background-color: #523d93;\n  top: -98px;\n  left: 235px;\n  border-radius: 50px; }\n.feature .feature__tabs__scroller {\n  width: 100%;\n  overflow: auto; }\n.feature .feature__tabs__scroller::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  background-color: #ffffff; }\n.feature .feature__tabs__scroller::-webkit-scrollbar {\n  height: 6px;\n  background-color: #f5f5f5; }\n.feature .feature__tabs__scroller::-webkit-scrollbar-thumb {\n  background-color: #d0d5d8;\n  border-radius: 10px; }\n.feature__details {\n  width: 262px;\n  margin: 0 auto; }\n.feature__details h2:before {\n    content: '✓';\n    padding-right: 7px; }\n.feature__details h4 {\n    color: #000052; }\n.feature__details .content {\n    display: flex;\n    justify-content: center;\n    align-items: center; }\n.feature__details .row:nth-child(1) {\n    margin: 64px 0px 0px; }\n.feature__details .row:nth-child(2) {\n    margin: 79px 0px 52px; }\n.feature__details .row:nth-child(3) {\n    margin: 79px 0px 52px; }\n.feature__details .row:nth-child(4) {\n    margin: 79px 0px 52px; }\n.feature__details .row:nth-child(5) {\n    margin: 79px 0px 52px; }\n.feature__details .row:nth-child(6) {\n    margin: 79px 0px 52px; }\n.feature__details img {\n    width: 100%;\n    margin-top: 20px; }\n.feature__details h3 {\n    text-align: center; }\n.feature__details p {\n    text-align: center;\n    padding-top: 9px; }\n.feature__details h2 {\n    text-align: left;\n    padding-top: 9px; }\n.feature .release h3, .feature .release h2, .feature .release p {\n  text-align: left; }\n@media only screen and (min-width: 768px) {\n  .feature__banners {\n    height: 401px;\n    background-position: right;\n    background-size: contain; }\n    .feature__banners__content {\n      width: 700px;\n      padding: 125px 0px 0px; }\n    .feature__banners h1 {\n      width: 321px;\n      margin: 0; }\n    .feature__banners p {\n      width: 279px;\n      margin: 0;\n      padding: 14px 0px 0px; }\n    .feature__banners--border {\n      width: 145px;\n      bottom: 88px;\n      right: 54%; }\n      .feature__banners--border .line {\n        width: 129px;\n        height: 5px; }\n  .feature__dropdown {\n    height: 90px; }\n  .feature__tabs {\n    width: 700px;\n    margin: 0 auto;\n    position: relative; }\n    .feature__tabs__list {\n      margin: 194px 0px 0px; }\n      .feature__tabs__list .swordfish h1 {\n        bottom: 192px; }\n      .feature__tabs__list .swordfish .circle {\n        right: 18px; }\n      .feature__tabs__list .header::after {\n        content: '';\n        width: 84px;\n        top: -43px; }\n    .feature__tabs--hercules {\n      width: 392px;\n      left: 25px; }\n      .feature__tabs--hercules .h3 {\n        left: 160px; }\n  .feature__tabs::after {\n    left: 217px; }\n  .feature__details {\n    width: 100%; }\n    .feature__details h3 {\n      width: 240px;\n      text-align: left; }\n    .feature__details p, .feature__details h2 {\n      width: 240px;\n      line-height: 1.43;\n      text-align: left; }\n    .feature__details .row:nth-child(1) {\n      margin: 62px 0px 0px; }\n    .feature__details .row:nth-child(2) {\n      margin: 94px 0px 64px; }\n    .feature__details .row:nth-child(3) {\n      margin: 94px 0px 64px; }\n    .feature__details .row:nth-child(4) {\n      margin: 94px 0px 64px; }\n    .feature__details .row:nth-child(5) {\n      margin: 94px 0px 64px; }\n    .feature__details .row:nth-child(6) {\n      margin: 94px 0px 64px; }\n  .feature .feature__tabs__scroller {\n    width: 100%;\n    overflow: unset; } }\n@media only screen and (min-width: 1025px) {\n  .feature__banners {\n    height: 458px; }\n    .feature__banners__content {\n      width: 933px;\n      padding: 156px 0px 0px; }\n    .feature__banners h1 {\n      width: 570px; }\n    .feature__banners p {\n      width: 369px;\n      padding: 14px 0px 0px; }\n    .feature__banners--border {\n      width: 217px;\n      bottom: 103px;\n      right: 61%; }\n      .feature__banners--border .dot {\n        width: 10px;\n        height: 10px; }\n      .feature__banners--border .line {\n        width: 188px;\n        height: 10px; }\n  .feature__dropdown {\n    height: 93px; }\n  .feature__tabs {\n    width: 933px; }\n    .feature__tabs__list {\n      margin: 173px 0px 0px; }\n      .feature__tabs__list .swordfish h1 {\n        bottom: 192px; }\n      .feature__tabs__list .swordfish .circle {\n        right: 18px;\n        bottom: 170px; }\n      .feature__tabs__list .swordfish .circle1 {\n        bottom: 170px;\n        right: 25px; }\n    .feature__tabs__list::after {\n      width: 910px; }\n    .feature__tabs--hercules {\n      width: 523px;\n      left: 28px; }\n      .feature__tabs--hercules .h3 {\n        left: 226px;\n        bottom: 129px; }\n    .feature__tabs--hercules::after {\n      left: 240px; }\n  .feature__tabs::after {\n    left: 285px; }\n  .feature__details h3 {\n    width: 287px; }\n  .feature__details p, .feature__details h2 {\n    width: 289px;\n    padding-top: 17px; }\n  .feature__details .row:nth-child(1) {\n    margin: 70px 0px 0px; }\n  .feature__details .row:nth-child(2) {\n    margin: 82px 0px; }\n  .feature__details .row:nth-child(3) {\n    margin: 82px 0px; }\n  .feature__details .row:nth-child(4) {\n    margin: 82px 0px; }\n  .feature__details .row:nth-child(5) {\n    margin: 82px 0px; }\n  .feature__details .row:nth-child(6) {\n    margin: 82px 0px; }\n  .feature .selectBorder::before {\n    width: 6px;\n    height: 6px;\n    bottom: -10px; }\n  .feature .selectBorder::after {\n    width: 45px;\n    height: 6px;\n    bottom: -10px;\n    left: 10px; } }\n@media only screen and (min-width: 1440px) {\n  .feature__banners {\n    height: 660px; }\n    .feature__banners__content {\n      width: 1110px;\n      padding: 178px 0px 0px; }\n    .feature__banners h1 {\n      width: 570px; }\n    .feature__banners p {\n      width: 570px;\n      padding: 17px 0px 0px; }\n    .feature__banners--border {\n      width: 225px;\n      bottom: 79px;\n      right: 65%; }\n      .feature__banners--border .line {\n        width: 200px; }\n  .feature__tabs {\n    width: 1110px; }\n    .feature__tabs__list {\n      margin: 168px 0px 64px; }\n      .feature__tabs__list .swordfish h1 {\n        bottom: 195px; }\n      .feature__tabs__list .swordfish .circle {\n        bottom: 170px; }\n      .feature__tabs__list .swordfish .circle1 {\n        right: 27px; }\n    .feature__tabs__list::after {\n      width: 1100px; }\n    .feature__tabs--hercules {\n      width: 631px;\n      left: 29px; }\n      .feature__tabs--hercules .h3 {\n        left: 270px; }\n    .feature__tabs--hercules::after {\n      left: 292px; }\n  .feature__tabs::after {\n    left: 338px; }\n  .feature__details h3 {\n    width: 475px; }\n  .feature__details p, .feature__details h2 {\n    width: 475px;\n    padding-top: 16px; }\n  .feature__details .row:nth-child(1) {\n    margin: 70px 0px 0px; }\n  .feature__details .row:nth-child(2) {\n    margin: 82px 0px; }\n  .feature__details .row:nth-child(3) {\n    margin: 82px 0px; }\n  .feature__details .row:nth-child(4) {\n    margin: 82px 0px; }\n  .feature__details .row:nth-child(5) {\n    margin: 82px 0px; }\n  .feature__details .row:nth-child(6) {\n    margin: 82px 0px; } }\n"

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
        this.selectedborder = 1;
    };
    FeaturesComponent.prototype.listClick = function (event, newValue) {
        this.selectedItem1 = newValue;
        this.selectedborder = newValue;
    };
    FeaturesComponent.prototype.listClicka = function (event, newValue) {
        this.selectedborder = newValue;
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

module.exports = "<div class=\"partners\">\n  <div class=\"partners__banners\">\n    <div class=\"partners__banners__content\">\n      <h1 class=\"hero\">DevOps deserves the freedom of choice</h1>\n      <div class=\"partners__banners--border\">\n        <div class=\"dot\"></div>\n        <div class=\"line\"></div>\n      </div>\n      <h2 class=\"b2\"> We bring the industry experts, thought leaders and hands-on practitioners to innovate faster and scale smarter.</h2>\n\n    </div>\n  </div>\n\n\n  <div class=\"partners__tabs\">\n    <div class=\"partners__tabs__list\">\n      <h1 class=\"h3\" [ngClass]=\"{'selected': selectedItem1 == '1' }\" (click)=\"listClick($event, '1')\">Technology</h1>\n      <h1 class=\"h3\" [ngClass]=\"{'selected': selectedItem1 == '2' }\" (click)=\"listClick($event, '2')\">Reseller</h1>\n      <h1 class=\"h3\" [ngClass]=\"{'selected': selectedItem1 == '3' }\" (click)=\"listClick($event, '3')\">Infrastructure</h1>\n      <h1 class=\"h3\" [ngClass]=\"{'selected': selectedItem1 == '4' }\" (click)=\"listClick($event, '4')\">Tech Integrations</h1>\n    </div>\n  </div>\n  <div class=\"partners__tech default\" [ngClass]=\"{'active': selectedItem1 == '1' }\">\n    <div class=\"partners__tech--row\">\n          <img src=\"../../assets/img/patners/tech/tech1.png\" alt=\"paketo\">\n          <img src=\"../../assets/img/patners/tech/tech2.png\" alt=\"paketo\">\n          <img src=\"../../assets/img/patners/tech/tech3.png\" alt=\"paketo\">\n          <img src=\"../../assets/img/patners/tech/tech4.png\" alt=\"paketo\">\n    </div>\n  </div>\n\n  <div class=\"partners__tech default\" [ngClass]=\"{'active': selectedItem1 == '2' }\">\n    <div class=\"partners__tech--row\">\n      <img src=\"../../assets/img/patners/reseller/reseller1.jpg\" alt=\"paketo\">\n      <img src=\"../../assets/img/patners/reseller/reseller2.jpg\" alt=\"paketo\">\n      <img src=\"../../assets/img/patners/reseller/reseller3.jpg\" alt=\"paketo\">\n      <img src=\"../../assets/img/patners/reseller/reseller4.jpg\" alt=\"paketo\">\n      <img src=\"../../assets/img/patners/reseller/reseller5.jpg\" alt=\"paketo\">\n      <img src=\"../../assets/img/patners/reseller/reseller6.jpg\" alt=\"paketo\">\n      <img src=\"../../assets/img/patners/reseller/reseller7.jpg\" alt=\"paketo\">\n      <img src=\"../../assets/img/patners/reseller/reseller8.jpg\" alt=\"paketo\">\n      <img src=\"../../assets/img/patners/reseller/reseller9.jpg\" alt=\"paketo\">\n      <img src=\"../../assets/img/patners/reseller/reseller10.jpg\" alt=\"paketo\">\n      <img src=\"../../assets/img/patners/reseller/reseller11.jpg\" alt=\"paketo\">\n      <img src=\"../../assets/img/patners/reseller/reseller12.jpg\" alt=\"paketo\">\n      <img src=\"../../assets/img/patners/reseller/reseller13.jpg\" alt=\"paketo\">\n      <img src=\"../../assets/img/patners/reseller/reseller14.jpg\" alt=\"paketo\">\n      <img src=\"../../assets/img/patners/reseller/reseller15.jpg\" alt=\"paketo\">\n      <img src=\"../../assets/img/patners/reseller/reseller16.jpg\" alt=\"paketo\">\n</div>\n  </div>\n\n  <div class=\"partners__tech default\" [ngClass]=\"{'active': selectedItem1 == '3' }\">\n    <div class=\"infrastructure\">\n      <h1 class=\"h2\">Infrastructure</h1>\n      <h2 class=\"b2\">We understand the beauty of cloud and the importance of being cloud enabled, hence we have built Paketo cloud friendly.\n        You can deploy any of the Paketo suite products on the leading cloud provider platforms.</h2>\n    </div>\n    <div class=\"partners__tech--row\">\n      <img src=\"../../assets/img/patners/infrastructure/Infra1.jpg\" alt=\"paketo\">\n      <img src=\"../../assets/img/patners/infrastructure/Infra2.jpg\" alt=\"paketo\">\n      <img src=\"../../assets/img/patners/infrastructure/Infra3.jpg\" alt=\"paketo\">\n     \n</div>\n  </div>\n  <div class=\"partners__tech default\" [ngClass]=\"{'active': selectedItem1 == '4'}\">\n    <div class=\"infrastructure\">\n      <h1 class=\"h2\">Tech Integrations</h1>\n      <h2 class=\"b2\">We enable third-party integration with Paketo products through available APIs, placing your DevOps processes in one.\n        Releasing software faster has never been easier.</h2>\n    </div>\n    <div class=\"partners__tech--row\">\n      <img src=\"../../assets/img/patners/integration/integrate1.jpg\" alt=\"paketo\">\n      <img src=\"../../assets/img/patners/integration/integrate2.jpg\" alt=\"paketo\">\n      <img src=\"../../assets/img/patners/integration/integrate3.jpg\" alt=\"paketo\">\n      <img src=\"../../assets/img/patners/integration/integrate4.jpg\" alt=\"paketo\">\n      <img src=\"../../assets/img/patners/integration/integrate5.jpg\" alt=\"paketo\">\n      <img src=\"../../assets/img/patners/integration/integrate6.jpg\" alt=\"paketo\">\n      <img src=\"../../assets/img/patners/integration/integrate7.jpg\" alt=\"paketo\">\n      <img src=\"../../assets/img/patners/integration/integrate8.jpg\" alt=\"paketo\">\n</div>\n  </div>\n</div>\n\n<app-suits></app-suits>"

/***/ }),

/***/ "./src/app/partners/partners.component.scss":
/*!**************************************************!*\
  !*** ./src/app/partners/partners.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".partners__banners {\n  width: 100%;\n  height: 564px;\n  background-color: #1a1a1a;\n  background-image: url('banner.png');\n  background-repeat: no-repeat;\n  background-position: bottom right;\n  background-size: 307px 295px; }\n  .partners__banners__content {\n    width: 265px;\n    margin: 0 auto;\n    padding: 60px 0px 0px;\n    position: relative; }\n  .partners__banners h1 {\n    width: 259px;\n    margin: 0 auto; }\n  .partners__banners h2 {\n    width: 259px;\n    margin: 0 auto;\n    padding: 22px 0px 0px;\n    color: #ffffff; }\n  .partners__banners--border {\n    display: flex;\n    justify-content: space-around;\n    width: 30px;\n    position: absolute;\n    bottom: 83px;\n    right: 0; }\n  .partners__banners--border .dot {\n      width: 4px;\n      height: 4px;\n      background-color: #41a1fa;\n      border-radius: 50px; }\n  .partners__banners--border .line {\n      width: 19px;\n      height: 4px;\n      background-color: #41a1fa;\n      border-radius: 50px; }\n  .partners__tabs {\n  background-image: linear-gradient(to right, #523d93, #41a1fa);\n  padding: 14px 0px 66px; }\n  .partners__tabs__list {\n    margin: 0 auto; }\n  .partners__tabs h1 {\n    color: #ffffff;\n    text-align: center;\n    cursor: pointer;\n    margin: 41px auto 0px;\n    position: relative; }\n  .partners__tabs h1:nth-child(1) {\n    width: 86px; }\n  .partners__tabs h1:nth-child(2) {\n    width: 65px; }\n  .partners__tabs h1:nth-child(3) {\n    width: 100px; }\n  .partners__tabs h1:nth-child(4) {\n    width: 133px; }\n  .partners__tabs h1::after {\n    content: '';\n    width: 0px;\n    transition: all .5s; }\n  .partners__tech--row {\n  display: -ms-grid;\n  display: grid;\n  grid-gap: 5px;\n  -ms-grid-columns: (minmax(85px, 1fr))[auto-fit];\n      grid-template-columns: repeat(auto-fit, minmax(85px, 1fr));\n  margin: 48px auto;\n  width: 210px; }\n  .partners__tech--row img {\n    width: 102px;\n    height: 55px; }\n  .partners .selected::before {\n  content: '';\n  width: 5px;\n  height: 5px;\n  background-color: #ffffff;\n  border-radius: 50%;\n  position: absolute;\n  bottom: -10px; }\n  .partners .selected::after {\n  content: '';\n  width: 82%;\n  height: 5px;\n  background-color: #ffffff;\n  border-radius: 20px;\n  position: absolute;\n  bottom: -10px;\n  left: 14px; }\n  .partners .default {\n  display: none; }\n  .partners .active {\n  display: block; }\n  .partners .imageBorder img {\n  width: 102px;\n  height: 55px; }\n  .infrastructure {\n  text-align: center; }\n  .infrastructure h1 {\n    width: 260px;\n    margin: 0 auto;\n    padding: 48px 0px 24px; }\n  .infrastructure h2 {\n    width: 260px;\n    margin: 0 auto; }\n  @media only screen and (min-width: 768px) {\n  .partners .selected::after {\n    width: 91%;\n    height: 5px;\n    left: 11px; }\n  .partners__banners {\n    height: 405px;\n    background-position: right;\n    background-size: contain; }\n    .partners__banners__content {\n      width: 700px;\n      padding: 74px 0px 0px; }\n    .partners__banners h1 {\n      width: 394px;\n      margin: 0; }\n    .partners__banners h2 {\n      width: 394px;\n      margin: 0;\n      padding: 25px 0px 0px; }\n    .partners__banners--border {\n      width: 47px;\n      bottom: 75px;\n      right: 52%; }\n      .partners__banners--border .dot {\n        width: 5px;\n        height: 5px; }\n      .partners__banners--border .line {\n        width: 36px;\n        height: 5px; }\n  .partners__tabs {\n    height: 93px;\n    padding: 0px; }\n    .partners__tabs__list {\n      display: flex;\n      justify-content: space-between;\n      width: 700px;\n      margin: 0 auto;\n      height: 94px;\n      align-items: center; }\n    .partners__tabs h1 {\n      padding: 0px;\n      padding-bottom: 5px;\n      margin: 0px; }\n    .partners__tabs h1:nth-child(1) {\n      width: 111px; }\n    .partners__tabs h1:nth-child(2) {\n      width: 73px; }\n    .partners__tabs h1:nth-child(3) {\n      width: 129px; }\n    .partners__tabs h1:nth-child(4) {\n      width: 160px; }\n  .partners__tech--row {\n    grid-gap: 24px;\n    -ms-grid-columns: (minmax(125px, 1fr))[auto-fit];\n        grid-template-columns: repeat(auto-fit, minmax(125px, 1fr));\n    width: 694px; }\n    .partners__tech--row img {\n      width: 159px;\n      height: 86px; }\n  .infrastructure h1 {\n    width: 555px;\n    padding: 41px 0px 19px; }\n  .infrastructure h2 {\n    width: 555px; } }\n  @media only screen and (min-width: 1025px) {\n  .partners__banners {\n    height: 458px; }\n    .partners__banners__content {\n      width: 931px; }\n    .partners__banners h1 {\n      width: 500px; }\n    .partners__banners h2 {\n      width: 500px;\n      padding: 30px 0px 0px; }\n    .partners__banners--border {\n      width: 87px;\n      bottom: 93px;\n      right: 49%; }\n      .partners__banners--border .dot {\n        width: 7px;\n        height: 7px; }\n      .partners__banners--border .line {\n        width: 60px;\n        height: 7px; }\n  .partners__tabs__list {\n    width: 700px;\n    height: 94px; }\n    .partners__tabs__list h1:nth-child(1) {\n      width: 115px; }\n    .partners__tabs__list h1:nth-child(2) {\n      width: 73px; }\n    .partners__tabs__list h1:nth-child(3) {\n      width: 140px; }\n    .partners__tabs__list h1:nth-child(4) {\n      width: 175px; }\n  .partners__tech--row {\n    grid-gap: 24px;\n    -ms-grid-columns: (minmax(170px, 1fr))[auto-fit];\n        grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));\n    width: 933px; }\n    .partners__tech--row img {\n      width: 210px;\n      height: 112px; }\n  .infrastructure h1 {\n    width: 700px;\n    padding: 41px 0px 19px; }\n  .infrastructure h2 {\n    width: 730px; } }\n  @media only screen and (min-width: 1440px) {\n  .partners__banners {\n    height: 660px; }\n    .partners__banners__content {\n      width: 1110px;\n      padding: 178px 0px 0px; }\n    .partners__banners h1 {\n      width: 571px; }\n    .partners__banners h2 {\n      width: 571px;\n      padding: 18px 0px 0px; }\n    .partners__banners--border {\n      width: 110px;\n      bottom: 82px;\n      right: 50%; }\n      .partners__banners--border .dot {\n        width: 10px;\n        height: 10px; }\n      .partners__banners--border .line {\n        width: 80px;\n        height: 10px; }\n  .partners__tabs__list {\n    width: 780px; }\n    .partners__tabs__list h1:nth-child(1) {\n      width: 126px; }\n    .partners__tabs__list h1:nth-child(2) {\n      width: 87px; }\n    .partners__tabs__list h1:nth-child(3) {\n      width: 150px; }\n    .partners__tabs__list h1:nth-child(4) {\n      width: 190px; }\n  .partners__tech--row {\n    grid-gap: 30px;\n    -ms-grid-columns: (minmax(210px, 1fr))[auto-fit];\n        grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));\n    width: 1110px; }\n    .partners__tech--row img {\n      width: 255px;\n      height: 142px; } }\n"

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

module.exports = "<div class=\"signup\">\n  \n  <div class=\"row\">\n\n    <div class=\"signup__image col-xs-12 col-sm-4\">\n        <div class=\"signup__image__logo\">\n            <a href=\"/\">  <img src=\"../../assets/img/signup/paketoLogo.png\"/></a>\n        </div>\n        <div class=\"signup__image__content b1\">\n            Go from code to running app in minutes. Deploy, scale, and deliver your app to the world.\n        </div>\n          <div class=\"signup__image__copyright b3\">\n              Copyright © 2018 Paketo.\n            </div>\n    </div>\n\n    <div *ngIf=\"counter\" class=\"signup__form col-xs-12 col-sm-8\">\n       <div>\n        <div class=\"signup__form__header h1\">\n            Get started absolutely free\n        </div>\n        <div class=\"signup__form__content b2\">\n            Free account + 14 day free trial for all the premium features. No credit card required.\n        </div>\n       \n        <div class=\"signup__form__container\">\n        <div [class.errortopmsg] = \"!errorMsgCounter\" class=\"signup__form__container__errorMsg b3\">\n                        <!-- *ngIf = \"errorMsgCounter\" -->\n                        All the fields are mandatory\n        </div>\n        <form [formGroup]=\"signupform\" name=\"signupform\" (ngSubmit)=\"onSignup(signupform.value)\">\n        <div class=\"row\">\n          <div class=\"signup__form__container__input signup__form__container__fname col-xs-12 col-sm-6\">\n            <div   class=\"signup__form__container__input__label h2\">\n                First Name\n            </div>\n            <input  [class.errorClassField]=\"errorMsgCounter\" type=\"text\" formControlName=\"firstname\" name=\"firstname\" class=\"signup__form__container__input__field b3\"/>\n          </div>\n\n          <div class=\"signup__form__container__input signup__form__container__lname col-xs-12 col-sm-6\">\n              <div class=\"signup__form__container__input__label h2\">\n                  Last Name\n              </div>\n              <input  class=\"signup__form__container__input__field b3\"  [class.errorClassField]=\"errorMsgCounter\" type=\"text\" formControlName=\"lastname\" name=\"lastname\" />\n            </div>\n        </div>\n\n            <div class=\"signup__form__container__input\">\n                <div class=\"signup__form__container__input__label h2\">\n                    Company Name\n                </div>\n                <input  class=\"signup__form__container__input__field b3\" [class.errorClassField]=\"errorMsgCounter\" type=\"text\" formControlName=\"companyname\" name=\"companyname\" />\n            </div>\n\n              <div class=\"signup__form__container__input\">\n                  <div class=\"signup__form__container__input__label h2\">\n                      Role\n                  </div>\n                  <input class=\"signup__form__container__input__field b3\" [class.errorClassField]=\"errorMsgCounter\" type=\"text\" formControlName=\"role\" name=\"role\"/>\n               </div>\n\n                <div class=\"signup__form__container__input\">\n                    <div class=\"signup__form__container__input__label h2\">\n                        Work Email\n                    </div>\n                    <input  class=\"signup__form__container__input__field b3\"  [class.errorClassField]=\"errorMsgCounter\" pattern=\"[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}\" type=\"email\" formControlName=\"email\" name=\"email\"/>\n                </div>\n\n                <div class=\"signup__form__container__checkBox\">\n                    <label>\n                  <input type=\"checkbox\" name=\"informOffers\" formControlName=\"checkSubscribe\" name=\"checkSubscribe\"/>\n                  <div class=\"signup__form__container__checkBox__text b3\">\n                      Please keep me informed of products, services and offerings from Paketo and Hashworks.\n                  </div>\n                </label>\n                </div>\n\n                <button id=\"signup\" class=\"signup__form__container__button button--color\">Sign up</button>\n         </form>\n        </div>\n    </div>\n    </div>\n\n    <div *ngIf=\"!counter\" class=\"signup__reply col-xs-12 col-sm-8\">\n        <div>\n            <div class=\"signup__reply__header h1\">\n                    Thanks for signing up!\n             </div>\n             <div class=\"signup__reply__content b2\">\n                        Our team will be mailing you the credentials for the Paketo trail suite.\n             </div>\n             <div class=\"signup__reply__img\">\n\n             </div>\n            </div>\n    </div>\n\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/signup/signup.component.scss":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer, .header {\n  display: none; }\n\n.signup__image {\n  background-image: url('signupImgMobile.jpg');\n  width: 100%;\n  height: 176px;\n  background-repeat: no-repeat;\n  background-size: cover;\n  padding: 13px 25px;\n  display: -ms-grid;\n  display: grid; }\n\n.signup__image__copyright {\n    -ms-grid-row-align: end;\n        align-self: end; }\n\n.signup__image__logo {\n    width: 111px;\n    height: 29px; }\n\n.signup__image__content {\n    color: #ffffff; }\n\n.signup__image__copyright {\n    color: #ffffff; }\n\n.signup__form {\n  display: block;\n  width: 320px;\n  text-align: center;\n  margin: 30px 0px; }\n\n.signup__form__content {\n    margin-top: 5px;\n    padding: 0px 25px; }\n\n.signup__form .errortopmsg {\n    visibility: hidden; }\n\n.signup__form__container {\n    width: 220px;\n    margin: 0 auto; }\n\n.signup__form__container__errorMsg {\n      color: red;\n      margin-top: 15px;\n      text-align: left; }\n\n.signup__form__container__input {\n      margin-top: 10px;\n      text-align: left;\n      padding: 0px; }\n\n.signup__form__container__input__label {\n        font-size: 13px; }\n\n.signup__form__container__input__field {\n        margin-top: 3px;\n        width: 100%;\n        height: 30px;\n        border-radius: 4px;\n        background-color: #ffffff;\n        border: solid 1px #e0e0e0;\n        outline: none;\n        padding-left: 10px; }\n\n.signup__form__container__input .errorClass {\n        color: red; }\n\n.signup__form__container__input .errorClassField {\n        border: 1px solid red; }\n\n.signup__form__container__input .ng-valid {\n        border: solid 1px #e0e0e0; }\n\n.signup__form__container__checkBox {\n      text-align: left;\n      margin-top: 15px; }\n\n.signup__form__container__checkBox input {\n        float: left;\n        cursor: pointer; }\n\n.signup__form__container__checkBox__text {\n        width: 193px;\n        margin-left: 27px;\n        cursor: pointer; }\n\n.signup__form__container__button {\n      margin-top: 30px;\n      outline: none; }\n\n.signup__reply {\n  display: block;\n  text-align: center;\n  padding: 70px 0px; }\n\n.signup__reply__content {\n    padding: 20px 25px; }\n\n.signup__reply__img {\n    width: 234px;\n    height: 132px;\n    background-image: url('signUpReplyMobile.jpg');\n    margin: 0 auto; }\n\n@media only screen and (min-width: 768px) {\n  .signup {\n    height: 100vh; }\n    .signup__image {\n      background-image: url('signupImgTab.jpg');\n      height: 100vh;\n      background-repeat: no-repeat;\n      padding: 32px 25px;\n      display: -ms-grid;\n      display: grid; }\n    .signup__form {\n      display: flex;\n      align-items: center;\n      justify-content: center; }\n      .signup__form__container {\n        width: 300px; }\n        .signup__form__container__input__label {\n          font-size: 17px; }\n        .signup__form__container__fname {\n          padding-right: 5px; }\n        .signup__form__container__lname {\n          padding-left: 5px; }\n        .signup__form__container__checkBox__text {\n          width: 255px; }\n    .signup__reply {\n      display: flex;\n      align-items: center;\n      justify-content: center; } }\n\n@media only screen and (min-width: 1025px) {\n  .signup__image {\n    background-image: url('signupImgDesk.jpg');\n    height: 100vh;\n    background-repeat: no-repeat;\n    padding: 32px 25px; }\n  .signup__form__container {\n    width: 421px; }\n    .signup__form__container__checkBox__text {\n      width: 377px; }\n  .signup__reply {\n    padding: 180px 0px; } }\n\n@media only screen and (min-width: 1440px) {\n  .signup__image {\n    background-image: url('signupImgHD.jpg');\n    height: 100vh; } }\n"

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
        this.emailPattern = "^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$";
        this.counter = true;
        this.errorMsgCounter = false;
        this.signObj = {};
        this.signupform = fb.group({
            'firstname': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'lastname': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'companyname': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'role': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'email': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'checkSubscribe': [false]
        });
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.onSignup = function (value) {
        if (!this.signupform.valid) {
            this.errorMsgCounter = true;
        }
        else {
            console.log(value);
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