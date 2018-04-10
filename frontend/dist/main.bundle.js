webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_heroes_mg_heroes_mg_component__ = __webpack_require__("../../../../../src/app/components/heroes-mg/heroes-mg.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_hero_details_mg_hero_details_mg_component__ = __webpack_require__("../../../../../src/app/components/hero-details-mg/hero-details-mg.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_heroes_pg_heroes_pg_component__ = __webpack_require__("../../../../../src/app/components/heroes-pg/heroes-pg.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_hero_details_pg_hero_details_pg_component__ = __webpack_require__("../../../../../src/app/components/hero-details-pg/hero-details-pg.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var appRoutes = [
    { path: 'heroes-mg', component: __WEBPACK_IMPORTED_MODULE_3__components_heroes_mg_heroes_mg_component__["a" /* HeroesMGComponent */] },
    { path: 'hero-detail-mg/:id', component: __WEBPACK_IMPORTED_MODULE_4__components_hero_details_mg_hero_details_mg_component__["a" /* HeroDetailsMGComponent */] },
    { path: 'heroes-pg', component: __WEBPACK_IMPORTED_MODULE_5__components_heroes_pg_heroes_pg_component__["a" /* HeroesPGComponent */] },
    { path: 'hero-detail-pg/:id', component: __WEBPACK_IMPORTED_MODULE_6__components_hero_details_pg_hero_details_pg_component__["a" /* HeroDetailsPGComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_2__components_dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(appRoutes)],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
            ],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class='col-sm-10 col-sm-offset-1'>\n  <app-navbar></app-navbar>\n  <h1>   Welcome to {{ title }}! </h1>\n  <router-outlet></router-outlet>\n  <!-- <app-messages></app-messages> -->\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'NG Heroes';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_heroes_pg_heroes_pg_component__ = __webpack_require__("../../../../../src/app/components/heroes-pg/heroes-pg.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_hero_details_pg_hero_details_pg_component__ = __webpack_require__("../../../../../src/app/components/hero-details-pg/hero-details-pg.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_heroes_search_pg_heroes_search_pg_component__ = __webpack_require__("../../../../../src/app/components/heroes-search-pg/heroes-search-pg.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_heroes_mg_heroes_mg_component__ = __webpack_require__("../../../../../src/app/components/heroes-mg/heroes-mg.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_hero_details_mg_hero_details_mg_component__ = __webpack_require__("../../../../../src/app/components/hero-details-mg/hero-details-mg.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_heroes_search_mg_heroes_search_mg_component__ = __webpack_require__("../../../../../src/app/components/heroes-search-mg/heroes-search-mg.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_messages_messages_component__ = __webpack_require__("../../../../../src/app/components/messages/messages.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_hero_mongo_service__ = __webpack_require__("../../../../../src/app/services/hero.mongo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_hero_pg_service__ = __webpack_require__("../../../../../src/app/services/hero.pg.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_message_service__ = __webpack_require__("../../../../../src/app/services/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_pagination_service__ = __webpack_require__("../../../../../src/app/services/pagination.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__components_heroes_pg_heroes_pg_component__["a" /* HeroesPGComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_hero_details_pg_hero_details_pg_component__["a" /* HeroDetailsPGComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_messages_messages_component__["a" /* MessagesComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_heroes_search_pg_heroes_search_pg_component__["a" /* HeroSearchPGComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_heroes_mg_heroes_mg_component__["a" /* HeroesMGComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_hero_details_mg_hero_details_mg_component__["a" /* HeroDetailsMGComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_heroes_search_mg_heroes_search_mg_component__["a" /* HeroSearchMGComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_18__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_15__services_hero_pg_service__["a" /* HeroPGService */], __WEBPACK_IMPORTED_MODULE_16__services_message_service__["a" /* MessageService */], __WEBPACK_IMPORTED_MODULE_17__services_pagination_service__["a" /* PaginationService */], __WEBPACK_IMPORTED_MODULE_14__services_hero_mongo_service__["a" /* HeroMongoService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mb24{\n   margin-bottom: 24px;\n}\n.padzero{\n   padding: 0;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='col-sm-6 padzero'>\n  <h3 class='mb24'> Top Heroes PGDB</h3>\n  <div class='col-sm-2 padzero' *ngFor='let dashHero of dashboardPGHeroes'>\n    <a routerLink='/hero-detail-pg/{{dashHero.id}}'> {{ dashHero.name }} </a> \n  </div>\n</div>\n<div class='col-sm-6 padzero'>\n  <h3 class='mb24'> Top Heroes MGDB</h3>\n  <div class='col-sm-2 padzero' *ngFor='let dashHero of dashboardMGHeroes'>\n    <a routerLink='/hero-detail-mg/{{dashHero._id}}'> {{ dashHero.name }} </a> \n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_hero_pg_service__ = __webpack_require__("../../../../../src/app/services/hero.pg.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_hero_mongo_service__ = __webpack_require__("../../../../../src/app/services/hero.mongo.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(heroPgService, activatedRoute, heroMongoService) {
        this.heroPgService = heroPgService;
        this.activatedRoute = activatedRoute;
        this.heroMongoService = heroMongoService;
    }
    DashboardComponent.prototype.retrieveRecentHeroes = function () {
        var _this = this;
        this.heroPgService.getHeroes().subscribe(function (data) { return _this.dashboardPGHeroes = data.slice(1, 4); });
        this.heroMongoService.getHeroes().subscribe(function (data) { return _this.dashboardMGHeroes = data.slice(1, 4); });
    };
    DashboardComponent.prototype.ngOnInit = function () {
        this.retrieveRecentHeroes();
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_hero_pg_service__["a" /* HeroPGService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_3__services_hero_mongo_service__["a" /* HeroMongoService */]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/hero-details-mg/hero-details-mg.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btn{\n   border-radius: 0px;\n}\n.padzero{\n   padding: 0px !important;\n}\n.mt32{\n   margin-top: 32px;\n}\n.mb32{\n   margin-bottom: 32px;\n}\n.form-control{\n   border-radius: 0;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/hero-details-mg/hero-details-mg.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='col-sm-12 padzero' *ngIf='hero'>\n  <div class='col-sm-6 padzero'>\n    <h3 class='mb32'> {{hero.name | uppercase}} Details </h3>\n    <p> <strong> ID:</strong> {{ hero._id}} </p>\n    <p> <strong> Name: </strong> {{hero.name}} </p>\n    <p> <strong> Age: </strong> {{hero.age}} </p>\n  </div>\n  <div class='col-sm-4 padzero'>\n    <div class='mb32'> <h3>Edit Hero {{hero.name}} </h3> </div>\n    <div class='form-group'>\n      <div class='col-sm-3 padzero'> <label> Name: </label> </div>\n      <div class='col-sm-9 padzero'> <input [(ngModel)]=\"hero.name\" class='form-control' placeholder='Name' /> </div>\n    </div>\n    <div class='form-group'>\n      <div class='col-sm-3 padzero'> <label> Age: </label> </div>\n      <div class='col-sm-9 padzero'> <input [(ngModel)]=\"hero.age\" class=\"form-control\" placeholder='Age' /> </div>\n    </div>\n    <div class='col-sm-12 padzero mt32'>\n      <button class='btn btn-success' (click)='updateHero()'> Save</button>\n      <button class='btn btn-primary' (click)=\"goBack()\">Cancel</button>\n      <button class='btn btn-danger pull-right' (click)=\"deleteHero()\">Delete</button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/hero-details-mg/hero-details-mg.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeroDetailsMGComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_hero_mongo_service__ = __webpack_require__("../../../../../src/app/services/hero.mongo.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HeroDetailsMGComponent = /** @class */ (function () {
    function HeroDetailsMGComponent(activatedRoute, location, heroMongoService) {
        this.activatedRoute = activatedRoute;
        this.location = location;
        this.heroMongoService = heroMongoService;
    }
    HeroDetailsMGComponent.prototype.getHero = function () {
        var _this = this;
        var heroID = this.activatedRoute.snapshot.paramMap.get('id');
        this.heroMongoService.getHeroByID(heroID).subscribe(function (data) { return _this.hero = data; });
    };
    HeroDetailsMGComponent.prototype.ngOnInit = function () {
        this.getHero();
    };
    HeroDetailsMGComponent.prototype.goBack = function () {
        this.location.back();
    };
    HeroDetailsMGComponent.prototype.updateHero = function () {
        var _this = this;
        this.heroMongoService.updateHeroByID(this.hero).subscribe(function () { return _this.goBack(); });
    };
    HeroDetailsMGComponent.prototype.deleteHero = function () {
        var _this = this;
        this.heroMongoService.deleteHeroByID(this.hero).subscribe(function () { return _this.goBack(); });
    };
    HeroDetailsMGComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-hero-details-mg',
            template: __webpack_require__("../../../../../src/app/components/hero-details-mg/hero-details-mg.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/hero-details-mg/hero-details-mg.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */], __WEBPACK_IMPORTED_MODULE_3__services_hero_mongo_service__["a" /* HeroMongoService */]])
    ], HeroDetailsMGComponent);
    return HeroDetailsMGComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/hero-details-pg/hero-details-pg.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btn{\n   border-radius: 0px;\n}\n.padzero{\n   padding: 0px !important;\n}\n.mt32{\n   margin-top: 32px;\n}\n.mb32{\n   margin-bottom: 32px;\n}\n.form-control{\n   border-radius: 0;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/hero-details-pg/hero-details-pg.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='col-sm-12 padzero' *ngIf='hero'>\n  <div class='col-sm-6 padzero'>\n    <h3 class='mb32'> {{hero.name | uppercase}} Details </h3>\n    <p> <strong> ID:</strong> {{ hero.id}} </p>\n    <p> <strong> Name: </strong> {{hero.name}} </p>\n    <p> <strong> Age: </strong> {{hero.age}} </p>\n  </div>\n  <div class='col-sm-4 padzero'>\n    <div class='mb32'> <h3>Edit Hero {{hero.name}} </h3> </div>\n    <div class='form-group'>\n      <div class='col-sm-3 padzero'> <label> Name: </label> </div>\n      <div class='col-sm-9 padzero'> <input [(ngModel)]=\"hero.name\" class='form-control' placeholder='Name' /> </div>\n    </div>\n    <div class='form-group'>\n      <div class='col-sm-3 padzero'> <label> Age: </label> </div>\n      <div class='col-sm-9 padzero'> <input [(ngModel)]=\"hero.age\" class=\"form-control\" placeholder='Age' /> </div>\n    </div>\n    <div class='col-sm-12 padzero mt32'>\n      <button class='btn btn-success' (click)='updateHero()'> Save</button>\n      <button class='btn btn-primary' (click)=\"goBack()\">Cancel</button>\n      <button class='btn btn-danger pull-right' (click)=\"deleteHero()\">Delete</button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/hero-details-pg/hero-details-pg.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeroDetailsPGComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modelStructures_hero__ = __webpack_require__("../../../../../src/app/modelStructures/hero.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_hero_pg_service__ = __webpack_require__("../../../../../src/app/services/hero.pg.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HeroDetailsPGComponent = /** @class */ (function () {
    function HeroDetailsPGComponent(activatedRoute, heroPgService, location, router) {
        this.activatedRoute = activatedRoute;
        this.heroPgService = heroPgService;
        this.location = location;
        this.router = router;
    }
    HeroDetailsPGComponent.prototype.getHero = function () {
        var _this = this;
        var heroID = +this.activatedRoute.snapshot.paramMap.get('id');
        this.heroPgService.getHeroByID(heroID).subscribe(function (data) { return _this.hero = data; });
    };
    HeroDetailsPGComponent.prototype.ngOnInit = function () {
        this.getHero();
    };
    HeroDetailsPGComponent.prototype.goBack = function () {
        this.location.back();
    };
    HeroDetailsPGComponent.prototype.updateHero = function () {
        var _this = this;
        this.heroPgService.updateHeroByID(this.hero).subscribe(function () { return _this.goBack(); });
    };
    HeroDetailsPGComponent.prototype.deleteHero = function () {
        var _this = this;
        this.heroPgService.deleteHeroByID(this.hero).subscribe(function () { return _this.router.navigate(['/heroes-pg']); });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__modelStructures_hero__["a" /* Hero */])
    ], HeroDetailsPGComponent.prototype, "hero", void 0);
    HeroDetailsPGComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-hero-details-pg',
            template: __webpack_require__("../../../../../src/app/components/hero-details-pg/hero-details-pg.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/hero-details-pg/hero-details-pg.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_4__services_hero_pg_service__["a" /* HeroPGService */], __WEBPACK_IMPORTED_MODULE_3__angular_common__["f" /* Location */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], HeroDetailsPGComponent);
    return HeroDetailsPGComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/heroes-mg/heroes-mg.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".cust-li{\n   cursor:pointer\n}\n.cust-li:hover{\n   color: green;\n}\n.heroSelectedCSS{\n   font-weight: bold;\n   color: green;\n}\n.padzero{\n   padding: 0px !important;\n}\n.mb24{\n   margin-bottom:24px;\n}\n.mt24{\n   margin-top:24px;\n}\n.mt16{\n   margin-top:16px;\n}\n.btn{\n   border-radius: 0;\n}\n.pagination> li> a{\n   cursor: pointer;\n   border-radius:0;\n}\n.ml16{\n   margin-left:16px;\n}\n.inline{\n   display:inline\n}\n.form-control{\n   border-radius:0;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/heroes-mg/heroes-mg.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='col-sm-12 padzero'>\n  <div class='col-sm-6 mt24 mb24 padzero' *ngIf='showHeroes'>\n    <h3 class='inline' > HeroList </h3>\n    <button class='btn btn-success ml16' (click)='toggleForm()'> Add Hero</button>\n  </div>\n\n  <div class='col-sm-4 mt24 mb24 padzero'>\n    <!-- <app-heroes-search-mg></app-heroes-search-mg> -->\n  </div>\n\n  <div class='col-sm-12 padzero' *ngIf='heroes && showHeroes'> \n    <div class='col-sm-2 mt16 padzero' *ngFor='let heroElem of pagedHeroes' (click)='onHeroSelect(heroElem)' [class.heroSelectedCSS]=\"heroElem === clickedHero\">\n      <a class='' routerLink='/hero-detail-mg/{{heroElem._id}}'> {{heroElem.name}} </a>\n    </div>\n  </div>\n\n  <div class='col-sm-12 padzero mt24' *ngIf='heroes && showHeroes'>\n    <ul class='pagination' *ngIf=\"heroPagination.pages && heroPagination.pages.length\">\n        <li [ngClass]=\"{disabled:heroPagination.currentPage === 1}\"> \n           <a (click)=\"setPaginationPg(1)\"> First</a>\n        </li>\n        <li [ngClass]=\"{disabled:heroPagination.currentPage ===1}\"> \n           <a (click)=\"setPaginationPg(heroPagination.currentPage -1)\"> Previous</a>\n        </li>\n        <li *ngFor=\"let pageNum of heroPagination.pages\" [ngClass]=\"{active:heroPagination.currentPage === pageNum}\"> \n           <a (click)=\"setPaginationPg(pageNum)\"> {{pageNum}}</a>\n        </li>\n        <li [ngClass]=\"{disabled:heroPagination.currentPage === heroPagination.totalPages}\">\n           <a (click)=\"setPaginationPg(heroPagination.currentPage + 1)\"> Next </a>\n        </li>\n        <li [ngClass]=\"{disabled: heroPagination.currentPage === heroPagination.totalPages}\">\n           <a (click)=\"setPaginationPg(heroPagination.totalPages)\"> Last</a> \n        </li> \n     </ul>\n  </div>\n\n  <div class='col-sm-12 padzero ' *ngIf='!showHeroes'>\n    <div class='col-sm-4 padzero'>\n      <div class='mb24'> <h3>Create Hero </h3> </div>\n      <div class='form-group'>\n        <div class='col-sm-3 padzero'> <label> Name: </label> </div>\n        <div class='col-sm-9 padzero'> <input #heroName class='form-control' placeholder='Name' /> </div>\n      </div>\n      <div class='form-group'>\n        <div class='col-sm-3 padzero'> <label> Age: </label> </div>\n        <div class='col-sm-9 padzero'> <input #heroAge class=\"form-control\" placeholder='Age' /> </div>\n      </div>\n      <div class='col-sm-12 padzero mt24'>\n        <div class='col-sm-6 padzero'> \n          <button class='btn btn-block btn-success' (click)='createHero(heroName.value, heroAge.value); heroName.value=\"\";heroAge.value=\"\"'>Create</button> \n        </div>\n        <div class='col-sm-6 padzero'> \n          <button class='btn btn-block btn-default' (click)='toggleForm()'>Cancel</button> \n        </div>\n      </div>\n    </div>\n  </div>\n  \n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/heroes-mg/heroes-mg.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeroesMGComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_hero_mongo_service__ = __webpack_require__("../../../../../src/app/services/hero.mongo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_pagination_service__ = __webpack_require__("../../../../../src/app/services/pagination.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HeroesMGComponent = /** @class */ (function () {
    function HeroesMGComponent(paginationService, activatedRoute, heroMongoService) {
        this.paginationService = paginationService;
        this.activatedRoute = activatedRoute;
        this.heroMongoService = heroMongoService;
        this.heroPagination = {};
        this.showHeroes = true;
    }
    HeroesMGComponent.prototype.ngOnInit = function () {
        this.retrieveAllHeroes();
    };
    HeroesMGComponent.prototype.retrieveAllHeroes = function () {
        var _this = this;
        this.heroMongoService.getHeroes().subscribe(function (data) {
            _this.heroes = data;
            _this.setPaginationPg(1);
        });
    };
    HeroesMGComponent.prototype.setPaginationPg = function (pgNum) {
        if (pgNum < 1 || pgNum > this.heroPagination.totalPages)
            return;
        this.heroPagination = this.paginationService.getPagination(this.heroes.length, pgNum);
        this.pagedHeroes = this.heroes.slice(this.heroPagination.startIndex, this.heroPagination.endIndex + 1);
    };
    HeroesMGComponent.prototype.toggleForm = function () {
        this.showHeroes = !this.showHeroes;
    };
    HeroesMGComponent.prototype.createHero = function (nameVal, ageVal) {
        var _this = this;
        var dbName = this.activatedRoute.snapshot.paramMap.get('dbName');
        nameVal = nameVal.trim();
        if (!nameVal || !ageVal)
            return;
        var newHero = { id: 0, name: nameVal, age: ageVal };
        this.heroMongoService.createHero(newHero).subscribe(function (data) {
            _this.heroes.push(data);
            _this.setPaginationPg(_this.heroPagination.currentPage);
        });
        this.toggleForm();
    };
    HeroesMGComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-heroes-mg',
            template: __webpack_require__("../../../../../src/app/components/heroes-mg/heroes-mg.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/heroes-mg/heroes-mg.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_pagination_service__["a" /* PaginationService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__services_hero_mongo_service__["a" /* HeroMongoService */]])
    ], HeroesMGComponent);
    return HeroesMGComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/heroes-pg/heroes-pg.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".cust-li{\n   cursor:pointer\n}\n.cust-li:hover{\n   color: green;\n}\n.heroSelectedCSS{\n   font-weight: bold;\n   color: green;\n}\n.padzero{\n   padding: 0px !important;\n}\n.mb24{\n   margin-bottom:24px;\n}\n.mt24{\n   margin-top:24px;\n}\n.mt16{\n   margin-top:16px;\n}\n.btn{\n   border-radius: 0;\n}\n.pagination> li> a{\n   cursor: pointer;\n   border-radius:0;\n}\n.ml16{\n   margin-left:16px;\n}\n.inline{\n   display:inline\n}\n.form-control{\n   border-radius:0;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/heroes-pg/heroes-pg.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='col-sm-12 padzero'>\n  <div class='col-sm-6 mt24 mb24 padzero' *ngIf='showHeroes'>\n    <h3 class='inline' > HeroList </h3>\n    <button class='btn btn-success ml16' (click)='toggleForm()'> Add Hero</button>\n  </div>\n\n  <div class='col-sm-4 mt24 mb24 padzero'>\n    <app-heroes-search-pg></app-heroes-search-pg>\n  </div>\n\n  <div class='col-sm-12 padzero' *ngIf='heroes && showHeroes'> \n    <div class='col-sm-2 mt16 padzero' *ngFor='let heroElem of pagedHeroes' (click)='onHeroSelect(heroElem)' [class.heroSelectedCSS]=\"heroElem === clickedHero\">\n      <a class='' routerLink='/hero-detail-pg/{{heroElem.id}}'> {{heroElem.name}} </a>\n    </div>\n  </div>\n\n  <div class='col-sm-12 padzero mt24' *ngIf='heroes && showHeroes'>\n    <ul class='pagination' *ngIf=\"heroPagination.pages && heroPagination.pages.length\">\n        <li [ngClass]=\"{disabled:heroPagination.currentPage === 1}\"> \n           <a (click)=\"setPaginationPg(1)\"> First</a>\n        </li>\n        <li [ngClass]=\"{disabled:heroPagination.currentPage ===1}\"> \n           <a (click)=\"setPaginationPg(heroPagination.currentPage -1)\"> Previous</a>\n        </li>\n        <li *ngFor=\"let pageNum of heroPagination.pages\" [ngClass]=\"{active:heroPagination.currentPage === pageNum}\"> \n           <a (click)=\"setPaginationPg(pageNum)\"> {{pageNum}}</a>\n        </li>\n        <li [ngClass]=\"{disabled:heroPagination.currentPage === heroPagination.totalPages}\">\n           <a (click)=\"setPaginationPg(heroPagination.currentPage + 1)\"> Next </a>\n        </li>\n        <li [ngClass]=\"{disabled: heroPagination.currentPage === heroPagination.totalPages}\">\n           <a (click)=\"setPaginationPg(heroPagination.totalPages)\"> Last</a> \n        </li> \n     </ul>\n  </div>\n\n  <div class='col-sm-12 padzero ' *ngIf='!showHeroes'>\n    <div class='col-sm-4 padzero'>\n      <div class='mb24'> <h3>Create Hero </h3> </div>\n      <div class='form-group'>\n        <div class='col-sm-3 padzero'> <label> Name: </label> </div>\n        <div class='col-sm-9 padzero'> <input #heroName class='form-control' placeholder='Name' /> </div>\n      </div>\n      <div class='form-group'>\n        <div class='col-sm-3 padzero'> <label> Age: </label> </div>\n        <div class='col-sm-9 padzero'> <input #heroAge class=\"form-control\" placeholder='Age' /> </div>\n      </div>\n      <div class='col-sm-12 padzero mt24'>\n        <div class='col-sm-6 padzero'> \n          <button class='btn btn-block btn-success' (click)='createHero(heroName.value, heroAge.value); heroName.value=\"\";heroAge.value=\"\"'>Create</button> \n        </div>\n        <div class='col-sm-6 padzero'> \n          <button class='btn btn-block btn-default' (click)='toggleForm()'>Cancel</button> \n        </div>\n      </div>\n    </div>\n  </div>\n  \n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/heroes-pg/heroes-pg.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeroesPGComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_hero_pg_service__ = __webpack_require__("../../../../../src/app/services/hero.pg.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_pagination_service__ = __webpack_require__("../../../../../src/app/services/pagination.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HeroesPGComponent = /** @class */ (function () {
    function HeroesPGComponent(heroPgService, paginationService, activatedRoute) {
        this.heroPgService = heroPgService;
        this.paginationService = paginationService;
        this.activatedRoute = activatedRoute;
        this.heroPagination = {};
        this.showHeroes = true;
    }
    HeroesPGComponent.prototype.ngOnInit = function () {
        this.retrieveAllHeroes();
    };
    HeroesPGComponent.prototype.retrieveAllHeroes = function () {
        var _this = this;
        this.heroPgService.getHeroes().subscribe(function (data) {
            _this.heroes = data;
            _this.setPaginationPg(1);
        });
    };
    HeroesPGComponent.prototype.setPaginationPg = function (pgNum) {
        if (pgNum < 1 || pgNum > this.heroPagination.totalPages)
            return;
        this.heroPagination = this.paginationService.getPagination(this.heroes.length, pgNum);
        this.pagedHeroes = this.heroes.slice(this.heroPagination.startIndex, this.heroPagination.endIndex + 1);
    };
    HeroesPGComponent.prototype.toggleForm = function () {
        this.showHeroes = !this.showHeroes;
    };
    HeroesPGComponent.prototype.createHero = function (nameVal, ageVal) {
        var _this = this;
        nameVal = nameVal.trim();
        if (!nameVal || !ageVal)
            return;
        var newHero = { id: 0, name: nameVal, age: ageVal };
        this.heroPgService.createHero(newHero).subscribe(function (data) {
            _this.heroes.push(data);
            _this.setPaginationPg(_this.heroPagination.currentPage);
        });
        this.toggleForm();
    };
    HeroesPGComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-heroes-pg',
            template: __webpack_require__("../../../../../src/app/components/heroes-pg/heroes-pg.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/heroes-pg/heroes-pg.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_hero_pg_service__["a" /* HeroPGService */], __WEBPACK_IMPORTED_MODULE_2__services_pagination_service__["a" /* PaginationService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]])
    ], HeroesPGComponent);
    return HeroesPGComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/heroes-search-mg/heroes-search-mg.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".padzero{\n   padding: 0;\n}\n.form-control, .btn{\n   border-radius: 0;\n}\n.inline{\n   display: inline;\n}\n.cust-li{\n   list-style: none\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/heroes-search-mg/heroes-search-mg.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='col-sm-12 padzero'>\n  <!-- <div class='col-sm-4 padzero'> -->\n    <div class=\"input-group\">\n      <input #searchText class='form-control' placeholder='Search Heroes' (keyup)=\"searchHero(searchText.value)\" />\n      <span class=\"input-group-btn\">\n        <button class=\"btn btn-default\" type=\"submit\" (click)=\"searchHero(searchText.value)\">\n          <i class='fa fa-search'></i>\n        </button>\n      </span>\n    </div>\n    <ul>\n      <li class='cust-li' *ngFor='let hero of searchResults'>\n        <a routerLink='/hero-detail-mg/{{hero.id}}'> {{hero.name}} </a>\n      </li>\n    </ul>\n  <!-- </div> -->\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/heroes-search-mg/heroes-search-mg.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeroSearchMGComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_hero_mongo_service__ = __webpack_require__("../../../../../src/app/services/hero.mongo.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeroSearchMGComponent = /** @class */ (function () {
    function HeroSearchMGComponent(activatedRoute, heroMongoService) {
        this.activatedRoute = activatedRoute;
        this.heroMongoService = heroMongoService;
    }
    HeroSearchMGComponent.prototype.searchHero = function (queryString) {
        var _this = this;
        if (!queryString) {
            this.searchResults = [];
            return;
        }
        this.heroMongoService.searchHeroesByName(queryString).subscribe(function (data) { return _this.searchResults = data; });
    };
    HeroSearchMGComponent.prototype.ngOnInit = function () {
    };
    HeroSearchMGComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-heroes-search-mg',
            template: __webpack_require__("../../../../../src/app/components/heroes-search-mg/heroes-search-mg.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/heroes-search-mg/heroes-search-mg.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__services_hero_mongo_service__["a" /* HeroMongoService */]])
    ], HeroSearchMGComponent);
    return HeroSearchMGComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/heroes-search-pg/heroes-search-pg.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".padzero{\n   padding: 0;\n}\n.form-control, .btn{\n   border-radius: 0;\n}\n.inline{\n   display: inline;\n}\n.cust-li{\n   list-style: none\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/heroes-search-pg/heroes-search-pg.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='col-sm-12 padzero'>\n  <!-- <div class='col-sm-4 padzero'> -->\n    <div class=\"input-group\">\n      <input #searchText class='form-control' placeholder='Search Heroes' (keyup)=\"searchHero(searchText.value)\" />\n      <span class=\"input-group-btn\">\n        <button class=\"btn btn-default\" type=\"submit\" (click)=\"searchHero(searchText.value)\">\n          <i class='fa fa-search'></i>\n        </button>\n      </span>\n    </div>\n    <ul>\n      <li class='cust-li' *ngFor='let hero of searchResults'>\n        <a routerLink='/hero-detail-pg/{{hero.id}}'> {{hero.name}} </a>\n      </li>\n    </ul>\n  <!-- </div> -->\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/heroes-search-pg/heroes-search-pg.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeroSearchPGComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_hero_pg_service__ = __webpack_require__("../../../../../src/app/services/hero.pg.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeroSearchPGComponent = /** @class */ (function () {
    function HeroSearchPGComponent(heroPgService, activatedRoute) {
        this.heroPgService = heroPgService;
        this.activatedRoute = activatedRoute;
    }
    HeroSearchPGComponent.prototype.searchHero = function (queryString) {
        var _this = this;
        if (!queryString) {
            this.searchResults = [];
            return;
        }
        this.heroPgService.searchHeroesByName(queryString).subscribe(function (data) { return _this.searchResults = data; });
    };
    HeroSearchPGComponent.prototype.ngOnInit = function () {
    };
    HeroSearchPGComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-heroes-search-pg',
            template: __webpack_require__("../../../../../src/app/components/heroes-search-pg/heroes-search-pg.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/heroes-search-pg/heroes-search-pg.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_hero_pg_service__["a" /* HeroPGService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], HeroSearchPGComponent);
    return HeroSearchPGComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/messages/messages.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btn{\n   border-radius: 0px;\n}\n.padzero{\n   padding: 0px;\n}\n.mt32{\n   margin-top: 32px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/messages/messages.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='col-sm-12 padzero mt32' *ngIf='messageService.messages.length'>\n  <h2> Messages </h2>\n  <button class='btn btn-danger' (click)=\"messageService.clear()\"> Clear </button>\n  <div *ngFor='let msg of messageService.messages'>\n    <p> {{ msg}} </p> \n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/messages/messages.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_message_service__ = __webpack_require__("../../../../../src/app/services/message.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessagesComponent = /** @class */ (function () {
    function MessagesComponent(messageService) {
        this.messageService = messageService;
    }
    MessagesComponent.prototype.ngOnInit = function () {
    };
    MessagesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-messages',
            template: __webpack_require__("../../../../../src/app/components/messages/messages.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/messages/messages.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_message_service__["a" /* MessageService */]])
    ], MessagesComponent);
    return MessagesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class='navbar navbar-default'>\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar-div\" aria-expanded=\"false\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" routerLink='/'>NG5OffDocs</a>\n    </div>\n    <div class=\"collapse navbar-collapse\" id=\"navbar-div\">\n      <ul class=\"nav navbar-nav\">\n        <li> <a routerLink='/heroes-pg'> Heroes PG</a> </li>\n        <li> <a routerLink='/heroes-mg'> Heroes MG</a> </li>\n        <li> <a routerLink='/dashboard'> Dashboard</a> </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modelStructures/hero.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Hero; });
var Hero = /** @class */ (function () {
    function Hero() {
    }
    return Hero;
}());



/***/ }),

/***/ "../../../../../src/app/services/hero.mongo.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeroMongoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HeroMongoService = /** @class */ (function () {
    function HeroMongoService(http) {
        this.http = http;
        this.heroesAPIURL = 'http://localhost:3000/api/mongo/heroes';
    }
    HeroMongoService.prototype.handleServerError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            console.error(error);
            return Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__["a" /* of */])(result);
        };
    };
    HeroMongoService.prototype.getHeroes = function () {
        return this.http.get(this.heroesAPIURL).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleServerError('getHeroes', [])));
    };
    HeroMongoService.prototype.getHeroByID = function (id) {
        var getHeroByIDURL = this.heroesAPIURL + "/" + id;
        return this.http.get(getHeroByIDURL).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleServerError("getHeroByID: " + id)));
    };
    HeroMongoService.prototype.updateHeroByID = function (heroObj) {
        var httpPUTOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' })
        };
        var updateHeroByIDURL = this.heroesAPIURL + "/" + heroObj._id;
        return this.http.patch(updateHeroByIDURL, heroObj, httpPUTOptions).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleServerError("updateHeroByID: " + heroObj.id)));
    };
    HeroMongoService.prototype.createHero = function (hero) {
        return this.http.post(this.heroesAPIURL, hero).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleServerError('addHero')));
    };
    HeroMongoService.prototype.deleteHeroByID = function (hero) {
        var httpDELOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' })
        };
        var deleteHeroByIDURL = this.heroesAPIURL + "/" + hero._id;
        return this.http.delete(deleteHeroByIDURL, httpDELOptions).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleServerError('Delete Hero')));
    };
    HeroMongoService.prototype.searchHeroesByName = function (term) {
        // if (!term.trim()) return of([]);
        return this.http.get(this.heroesAPIURL + "/search/?name=" + term).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleServerError('searchHeroes', [])));
    };
    HeroMongoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], HeroMongoService);
    return HeroMongoService;
}());



/***/ }),

/***/ "../../../../../src/app/services/hero.pg.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeroPGService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HeroPGService = /** @class */ (function () {
    function HeroPGService(http) {
        this.http = http;
        this.heroesAPIURL = 'http://localhost:3000/api/pg/heroes';
    }
    HeroPGService.prototype.handleServerError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            console.error(error);
            return Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__["a" /* of */])(result);
        };
    };
    HeroPGService.prototype.getHeroes = function () {
        return this.http.get(this.heroesAPIURL).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleServerError('getHeroes', [])));
    };
    HeroPGService.prototype.getHeroByID = function (id) {
        var getHeroByIDURL = this.heroesAPIURL + "/" + id;
        return this.http.get(getHeroByIDURL).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleServerError("getHeroByID: " + id)));
    };
    HeroPGService.prototype.updateHeroByID = function (heroObj) {
        var httpPUTOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' })
        };
        var updateHeroByIDURL = this.heroesAPIURL + "/" + heroObj.id;
        return this.http.patch(updateHeroByIDURL, heroObj, httpPUTOptions).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleServerError("updateHeroByID: " + heroObj.id)));
    };
    HeroPGService.prototype.createHero = function (hero) {
        return this.http.post(this.heroesAPIURL, hero).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleServerError('addHero')));
    };
    HeroPGService.prototype.deleteHeroByID = function (hero) {
        var deleteHeroByIDURL = this.heroesAPIURL + "/" + hero.id;
        return this.http.delete(deleteHeroByIDURL).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleServerError('Delete Hero')));
    };
    HeroPGService.prototype.searchHeroesByName = function (term) {
        // if (!term.trim()) return of([]);
        return this.http.get(this.heroesAPIURL + "/search/?name=" + term).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleServerError('searchHeroes', [])));
    };
    HeroPGService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], HeroPGService);
    return HeroPGService;
}());



/***/ }),

/***/ "../../../../../src/app/services/message.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MessageService = /** @class */ (function () {
    function MessageService() {
        this.messages = [];
    }
    MessageService.prototype.addMsg = function (msg) {
        this.messages.push(msg);
    };
    MessageService.prototype.clear = function () {
        this.messages = [];
    };
    MessageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], MessageService);
    return MessageService;
}());



/***/ }),

/***/ "../../../../../src/app/services/pagination.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaginationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore__ = __webpack_require__("../../../../underscore/underscore.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_underscore__);

var PaginationService = /** @class */ (function () {
    function PaginationService() {
    }
    PaginationService.prototype.getPagination = function (totalItems, currentPage, pageSize) {
        if (currentPage === void 0) { currentPage = 1; }
        if (pageSize === void 0) { pageSize = 24; }
        var totalPages = Math.ceil(totalItems / pageSize);
        var startPage, endPage;
        if (totalPages <= 5) {
            startPage = 1;
            endPage = totalPages;
        }
        else {
            if (currentPage <= 3) {
                startPage = 1;
                endPage = 5;
            }
            else if (currentPage + 1 >= totalPages) {
                startPage = totalPages - 4;
                endPage = totalPages;
            }
            else {
                startPage = currentPage - 2;
                endPage = currentPage + 2;
            }
        }
        var startIndex = (currentPage - 1) * pageSize;
        var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
        var pages = __WEBPACK_IMPORTED_MODULE_0_underscore__["range"](startPage, endPage + 1);
        return { totalItems: totalItems, currentPage: currentPage, pageSize: pageSize, totalPages: totalPages, startPage: startPage, endPage: endPage, startIndex: startIndex, endIndex: endIndex, pages: pages };
    };
    return PaginationService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map