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
		var e = new Error("Cannot find module '" + req + "'");
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
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/settings/settings.component.ts");





var routes = [
    { path: '', component: _search_search_component__WEBPACK_IMPORTED_MODULE_3__["SearchComponent"] },
    { path: 'Search', component: _search_search_component__WEBPACK_IMPORTED_MODULE_3__["SearchComponent"] },
    { path: 'search', component: _search_search_component__WEBPACK_IMPORTED_MODULE_3__["SearchComponent"] },
    { path: 'Settings', component: _settings_settings_component__WEBPACK_IMPORTED_MODULE_4__["SettingsComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'SMMWebApp';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/settings/settings.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _search_search_component__WEBPACK_IMPORTED_MODULE_5__["SearchComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                _settings_settings_component__WEBPACK_IMPORTED_MODULE_7__["SettingsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"]
            ],
            providers: [_angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  login works!\n</p>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/models/result.model.ts":
/*!****************************************!*\
  !*** ./src/app/models/result.model.ts ***!
  \****************************************/
/*! exports provided: Result */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Result", function() { return Result; });
var Result = /** @class */ (function () {
    function Result() {
    }
    return Result;
}());



/***/ }),

/***/ "./src/app/search/search.component.css":
/*!*********************************************!*\
  !*** ./src/app/search/search.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/search/search.component.html":
/*!**********************************************!*\
  !*** ./src/app/search/search.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n  <title>SMMWebApp | Dashboard</title>\n  <!-- Tell the browser to be responsive to screen width -->\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <!-- Font Awesome -->\n  <link rel=\"stylesheet\" href=\"assets/plugins/fontawesome-free/css/all.min.css\">\n  <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.css\" integrity=\"sha256-46qynGAkLSFpVbEBog43gvNhfrOj+BmwXdxFgVK/Kvc=\" crossorigin=\"anonymous\" />\n  <!-- Ionicons -->\n  <link rel=\"stylesheet\" type=\"text/css\" href=\"https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css\">\n  <!-- Theme style -->\n  <link rel=\"stylesheet\" type=\"text/css\" href=\"assets/css/adminlte.min.css\">\n  <!-- overlayScrollbars -->\n  <link rel=\"stylesheet\" type=\"text/css\" href=\"assets/plugins/overlayScrollbars/css/OverlayScrollbars.min.css\">\n\n  <!-- Google Font: Source Sans Pro -->\n  <link href=\"https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700\" rel=\"stylesheet\">\n</head>\n\n<body class=\"hold-transition sidebar-mini layout-fixed\">\n<div class=\"wrapper\">\n  <!-- Navbar -->\n  <nav class=\"main-header navbar navbar-expand navbar-white navbar-light\" style=\"margin-left: 0px !important;\">\n    <!-- Left navbar links -->\n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item d-none d-sm-inline-block\">\n        <a routerLink=\"/Search\" class=\"nav-link\"><b>Home</b></a>\n      </li>\n      <li class=\"nav-item d-none d-sm-inline-block\">\n        <a routerLink=\"/Settings\" class=\"nav-link\">Settings</a>\n      </li>\n    </ul>\n\n    <!-- Right navbar links -->\n    <ul class=\"navbar-nav ml-auto\">\n      <!-- SEARCH FORM -->\n      <div class=\"input-group input-group-sm\">\n        <input #searchTerm class=\"form-control form-control-navbar\"  (keyup.enter)=\"GetResults(searchTerm.value)\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\n        <div class=\"input-group-append\">\n          <button class=\"btn btn-navbar\" type=\"submit\" (click)=\"GetResults(searchTerm.value)\">\n            <i class=\"fas fa-search\"></i>\n          </button>\n        </div>\n      </div>\n    </ul>\n  </nav>\n  <!-- /.navbar -->\n\n  <!-- Content Wrapper. Contains page content -->\n  <div class=\"content-wrapper\" style=\"margin-left: 0px !important;\">\n    <!-- Content Header (Page header) -->\n    <div class=\"content-header\">\n      <div class=\"container-fluid\">\n        <div class=\"row mb-2\">\n            <div class=\"col-sm-6\">\n            <h1 class=\"m-0 text-dark\" [innerHtml]=\"displayHeading\"></h1>\n          </div><!-- /.col -->\n        </div><!-- /.row -->\n      </div><!-- /.container-fluid -->\n    </div>\n    <!-- /.content-header -->\n\n    <!-- Main content -->\n    <section class=\"content\">\n      <div class=\"container-fluid\">\n        <!-- Small boxes (Stat box) -->\n        <div class=\"row\" *ngIf=\"noresults==false\">\n            <div class=\"card\" style=\"width: 18rem;\" *ngFor=\"let result of results\">\n                <img class=\"card-img-top\" src=\"{{ result.IconUrl }}\" alt=\"Card image cap\">\n                <div class=\"card-body\">\n                  <a href=\"{{ result.PostUrl }}\" target=\"_blank\"><h5 class=\"card-title\">{{ result.Caption }}</h5></a>\n                  <p class=\"card-text\">{{ result.UserName }}</p>\n                  <p class=\"card-text\">{{ result.PostedTime }}</p>\n                  <p class=\"card-text\">#{{ result.Keyword }}</p>\n                </div>\n            </div>\n        </div>\n        <!-- /.row -->\n      </div><!-- /.container-fluid -->\n    </section>\n    <!-- /.content -->\n  </div>\n  <!-- /.content-wrapper -->\n  <footer class=\"main-footer\">\n    <strong>Social Media Monitoring Web App.</strong>\n  </footer>\n\n  <!-- Control Sidebar -->\n  <aside class=\"control-sidebar control-sidebar-dark\">\n    <!-- Control sidebar content goes here -->\n  </aside>\n  <!-- /.control-sidebar -->\n</div>\n<!-- ./wrapper -->\n\n<!-- jQuery -->\n<script src=\"plugins/jquery/jquery.min.js\"></script>\n<!-- jQuery UI 1.11.4 -->\n<script src=\"plugins/jquery-ui/jquery-ui.min.js\"></script>\n<!-- Resolve conflict in jQuery UI tooltip with Bootstrap tooltip -->\n<script>\n  $.widget.bridge('uibutton', $.ui.button)\n</script>\n<!-- Bootstrap 4 -->\n<script src=\"assets/plugins/bootstrap/js/bootstrap.bundle.min.js\"></script>\n<!-- ChartJS -->\n<script src=\"assets/plugins/chart.js/Chart.min.js\"></script>\n<!-- Sparkline -->\n<script src=\"assets/plugins/sparklines/sparkline.js\"></script>\n<!-- JQVMap -->\n<script src=\"assets/plugins/jqvmap/jquery.vmap.min.js\"></script>\n<script src=\"assets/plugins/jqvmap/maps/jquery.vmap.usa.js\"></script>\n<!-- jQuery Knob Chart -->\n<script src=\"assets/plugins/jquery-knob/jquery.knob.min.js\"></script>\n<!-- daterangepicker -->\n<script src=\"assets/plugins/moment/moment.min.js\"></script>\n<script src=\"assets/plugins/daterangepicker/daterangepicker.js\"></script>\n<!-- Tempusdominus Bootstrap 4 -->\n<script src=\"assets/plugins/tempusdominus-bootstrap-4/js/tempusdominus-bootstrap-4.min.js\"></script>\n<!-- Summernote -->\n<script src=\"assets/plugins/summernote/summernote-bs4.min.js\"></script>\n<!-- overlayScrollbars -->\n<script src=\"assets/plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js\"></script>\n<!-- AdminLTE App -->\n<script src=\"assets/js/adminlte.js\"></script>\n<!-- AdminLTE dashboard demo (This is only for demo purposes) -->\n<script src=\"assets/js/pages/dashboard.js\"></script>\n<!-- AdminLTE for demo purposes -->\n<script src=\"assets/js/demo.js\"></script>\n</body>\n</html>\n"

/***/ }),

/***/ "./src/app/search/search.component.ts":
/*!********************************************!*\
  !*** ./src/app/search/search.component.ts ***!
  \********************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _models_result_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/result.model */ "./src/app/models/result.model.ts");




var SearchComponent = /** @class */ (function () {
    function SearchComponent(http) {
        this.http = http;
        this.displayHeading = "Welcome to Social Media Monitoring App !";
        this.noresults = true;
    }
    SearchComponent.prototype.ngOnInit = function () {
    };
    SearchComponent.prototype.GetResults = function (keyword) {
        var _this = this;
        this.results = [];
        this.searchKeyword = keyword;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers = headers.set('Content-Type', 'application/json; charset=utf-8');
        var URL = "http://localhost:9200/igresults/_search?q=";
        URL += keyword;
        URL += "&size=100";
        this.http.get(URL, { headers: headers })
            .subscribe(function (res) {
            if (res["hits"]["total"]["value"] > 0) {
                _this.results = new Array();
                _this.noresults = false;
                _this.displayHeading = "Results for <b>" + keyword + "</b>";
                for (var i = 0; i < res["hits"]["total"]["value"]; i++) {
                    var resultTemp = new _models_result_model__WEBPACK_IMPORTED_MODULE_3__["Result"]();
                    resultTemp.UserName = res["hits"]["hits"][i]["_source"]["username"];
                    resultTemp.PostedTime = res["hits"]["hits"][i]["_source"]["postedtime"];
                    resultTemp.IconUrl = res["hits"]["hits"][i]["_source"]["iconurl"];
                    resultTemp.Keyword = res["hits"]["hits"][i]["_source"]["keyword"];
                    resultTemp.PostUrl = res["hits"]["hits"][i]["_source"]["posturl"];
                    resultTemp.Caption = decodeURI(res["hits"]["hits"][i]["_source"]["caption"]).substring(0, 20) + "...";
                    _this.results.push(resultTemp);
                }
            }
            else {
                _this.displayHeading = "No Results Found !";
            }
        });
    };
    SearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.css */ "./src/app/search/search.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/settings/settings.component.css":
/*!*************************************************!*\
  !*** ./src/app/settings/settings.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/settings/settings.component.html":
/*!**************************************************!*\
  !*** ./src/app/settings/settings.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n  <title>SMMWebApp | Settings</title>\n  <!-- Tell the browser to be responsive to screen width -->\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <!-- Font Awesome -->\n  <link rel=\"stylesheet\" href=\"assets/plugins/fontawesome-free/css/all.min.css\">\n  <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.css\" integrity=\"sha256-46qynGAkLSFpVbEBog43gvNhfrOj+BmwXdxFgVK/Kvc=\" crossorigin=\"anonymous\" />\n  <!-- Ionicons -->\n  <link rel=\"stylesheet\" type=\"text/css\" href=\"https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css\">\n  <!-- Theme style -->\n  <link rel=\"stylesheet\" type=\"text/css\" href=\"assets/css/adminlte.min.css\">\n  <!-- overlayScrollbars -->\n  <link rel=\"stylesheet\" type=\"text/css\" href=\"assets/plugins/overlayScrollbars/css/OverlayScrollbars.min.css\">\n\n  <!-- Google Font: Source Sans Pro -->\n  <link href=\"https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700\" rel=\"stylesheet\">\n</head>\n\n<body class=\"hold-transition sidebar-mini layout-fixed\">\n<div class=\"wrapper\">\n  <!-- Navbar -->\n  <nav class=\"main-header navbar navbar-expand navbar-white navbar-light\" style=\"margin-left: 0px !important;\">\n    <!-- Left navbar links -->\n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item d-none d-sm-inline-block\">\n        <a routerLink=\"/Search\" class=\"nav-link\">Home</a>\n      </li>\n      <li class=\"nav-item d-none d-sm-inline-block\">\n        <a routerLink=\"/Settings\" class=\"nav-link\"><b>Settings</b></a>\n      </li>\n    </ul>\n  </nav>\n  <!-- /.navbar -->\n\n  <!-- Content Wrapper. Contains page content -->\n  <div class=\"content-wrapper\" style=\"margin-left: 0px !important;\">\n    <!-- Main content -->\n    <section class=\"content\">\n      <div class=\"container-fluid\">\n        <!-- Small boxes (Stat box) -->\n        <br>\n        <h4>Index Creation</h4>\n        <div class=\"row\" style=\"margin: 20px;\">\n                <div class=\"col\">\n                    <button type=\"button\" class=\"btn btn-primary\" (click)=\"CreateKeywordIndex()\">Create KeywordIndex</button>\n                <br>\n                    <button type=\"button\" class=\"btn btn-primary\" style=\"margin-top: 10px;\" (click)=\"CreateIGResultsIndex()\">Create IGResultsIndex</button>\n                </div>\n        </div>\n        <h4>Keyword Insertion</h4>\n        <div class=\"row\" style=\"margin: 20px;\">\n            <div class=\"col\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"Enter Keyword\" #keywordInsert>\n            </div>\n            <div class=\"col\">\n                <button type=\"button\" class=\"btn btn-success\" (click)=\"InsertKeyword(keywordInsert.value)\">Insert Keyword</button>\n            </div>\n        </div>\n        <h4>Indexing</h4>\n        <button type=\"button\" class=\"btn btn-secondary\" style=\"margin: 20px;\" (click)=\"IndexResultsIntoES()\">Index Results</button>\n        <!-- /.row -->\n      </div><!-- /.container-fluid -->\n    </section>\n    <!-- /.content -->\n  </div>\n  <!-- /.content-wrapper -->\n  <footer class=\"main-footer\">\n    <strong>Social Media Monitoring Web App.</strong>\n  </footer>\n\n  <!-- Control Sidebar -->\n  <aside class=\"control-sidebar control-sidebar-dark\">\n    <!-- Control sidebar content goes here -->\n  </aside>\n  <!-- /.control-sidebar -->\n</div>\n<!-- ./wrapper -->\n\n<!-- jQuery -->\n<script src=\"plugins/jquery/jquery.min.js\"></script>\n<!-- jQuery UI 1.11.4 -->\n<script src=\"plugins/jquery-ui/jquery-ui.min.js\"></script>\n<!-- Resolve conflict in jQuery UI tooltip with Bootstrap tooltip -->\n<script>\n  $.widget.bridge('uibutton', $.ui.button)\n</script>\n<!-- Bootstrap 4 -->\n<script src=\"assets/plugins/bootstrap/js/bootstrap.bundle.min.js\"></script>\n<!-- ChartJS -->\n<script src=\"assets/plugins/chart.js/Chart.min.js\"></script>\n<!-- Sparkline -->\n<script src=\"assets/plugins/sparklines/sparkline.js\"></script>\n<!-- JQVMap -->\n<script src=\"assets/plugins/jqvmap/jquery.vmap.min.js\"></script>\n<script src=\"assets/plugins/jqvmap/maps/jquery.vmap.usa.js\"></script>\n<!-- jQuery Knob Chart -->\n<script src=\"assets/plugins/jquery-knob/jquery.knob.min.js\"></script>\n<!-- daterangepicker -->\n<script src=\"assets/plugins/moment/moment.min.js\"></script>\n<script src=\"assets/plugins/daterangepicker/daterangepicker.js\"></script>\n<!-- Tempusdominus Bootstrap 4 -->\n<script src=\"assets/plugins/tempusdominus-bootstrap-4/js/tempusdominus-bootstrap-4.min.js\"></script>\n<!-- Summernote -->\n<script src=\"assets/plugins/summernote/summernote-bs4.min.js\"></script>\n<!-- overlayScrollbars -->\n<script src=\"assets/plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js\"></script>\n<!-- AdminLTE App -->\n<script src=\"assets/js/adminlte.js\"></script>\n<!-- AdminLTE dashboard demo (This is only for demo purposes) -->\n<script src=\"assets/js/pages/dashboard.js\"></script>\n<!-- AdminLTE for demo purposes -->\n<script src=\"assets/js/demo.js\"></script>\n</body>\n</html>\n"

/***/ }),

/***/ "./src/app/settings/settings.component.ts":
/*!************************************************!*\
  !*** ./src/app/settings/settings.component.ts ***!
  \************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _models_result_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/result.model */ "./src/app/models/result.model.ts");




var SettingsComponent = /** @class */ (function () {
    function SettingsComponent(http) {
        this.http = http;
    }
    SettingsComponent.prototype.ngOnInit = function () {
        this.JSONtoIndex = "";
        this.GetKeywordResults();
    };
    SettingsComponent.prototype.CreateKeywordIndex = function () {
        var _this = this;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers = headers.set('Content-Type', 'application/json; charset=utf-8');
        var URL = "http://localhost:9200/keywords";
        //Create Index
        this.http.put(URL, "", { headers: headers })
            .subscribe(function (res) {
            if (res["acknowledged"] == true) {
                _this.KeywordsIndexMapping();
                alert("Keywords Index has been created Successfully !");
            }
        });
    };
    SettingsComponent.prototype.CreateIGResultsIndex = function () {
        var _this = this;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers = headers.set('Content-Type', 'application/json; charset=utf-8');
        var URL = "http://localhost:9200/igresults";
        //Create Index
        this.http.put(URL, "", { headers: headers })
            .subscribe(function (res) {
            if (res["acknowledged"] == true) {
                _this.IGResultsIndexMapping();
                alert("IG Results Index has been created Successfully !");
            }
        });
    };
    SettingsComponent.prototype.IGResultsIndexMapping = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers = headers.set('Content-Type', 'application/json; charset=utf-8');
        var URL = "http://localhost:9200/keywords";
        URL += "/_mapping";
        var postData = {
            "properties": {
                "username": {
                    "type": "keyword"
                },
                "postedtime": {
                    "type": "keyword"
                },
                "posturl": {
                    "type": "keyword"
                },
                "keyword": {
                    "type": "keyword"
                },
                "iconurl": {
                    "type": "keyword"
                },
                "caption": {
                    "type": "keyword"
                }
            }
        };
        this.http.put(URL, postData, { headers: headers }).subscribe(function (res) { return console.log(res); });
    };
    SettingsComponent.prototype.KeywordsIndexMapping = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers = headers.set('Content-Type', 'application/json; charset=utf-8');
        var URL = "http://localhost:9200/keywords";
        URL += "/_mapping";
        var postData = {
            "properties": {
                "name": {
                    "type": "keyword"
                }
            }
        };
        this.http.put(URL, postData, { headers: headers }).subscribe(function (res) { return console.log(res); });
    };
    SettingsComponent.prototype.IndexResultsIntoES = function () {
        for (var i = 0; i < this.keywordList.length; i++) {
            this.GetIGResults(this.keywordList[i]);
        }
        alert("Results are getting Indexed to ES !");
    };
    SettingsComponent.prototype.InsertKeyword = function (keyword) {
        var _this = this;
        this.keywordList = [];
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers = headers.set('Content-Type', 'application/json; charset=utf-8');
        var URL = "http://localhost:9200/keywords/_doc";
        var postData = {
            "name": keyword
        };
        this.http.post(URL, postData, { headers: headers }).subscribe(function (res) {
            alert("Keyword has been inserted Successfully!");
            _this.GetKeywordResults();
        });
    };
    SettingsComponent.prototype.GetIGResults = function (keyword) {
        var _this = this;
        this.JSONtoIndex = "";
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        //headers = headers.set('User-Agent', 'Mozilla/5.0 (iPhone; CPU iPhone OS 12_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Instagram 105.0.0.11.118 (iPhone11,8; iOS 12_3_1; en_US; en-US; scale=2.00; 828x1792; 165586599)');
        var URL = "https://www.instagram.com/explore/tags/" + keyword + "/?__a=1";
        this.http.get(URL, { headers: headers })
            .subscribe(function (res) {
            console.log(res);
            for (var i = 0; i < res["graphql"]["hashtag"]["edge_hashtag_to_top_posts"]["edges"].length; i++) {
                var resultTemp = new _models_result_model__WEBPACK_IMPORTED_MODULE_3__["Result"]();
                var postedDateTime = new Date(res["graphql"]["hashtag"]["edge_hashtag_to_top_posts"]["edges"][i]["node"]["taken_at_timestamp"] * 1000);
                var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
                var year = postedDateTime.getFullYear();
                var month = months[postedDateTime.getMonth()];
                var date = postedDateTime.getDate();
                var hour = postedDateTime.getHours();
                var min = postedDateTime.getMinutes();
                var sec = postedDateTime.getSeconds();
                var postedOn = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec;
                resultTemp.UserName = res["graphql"]["hashtag"]["edge_hashtag_to_top_posts"]["edges"][i]["node"]["owner"]["id"];
                resultTemp.PostedTime = postedOn.toString();
                resultTemp.PostUrl = "https://www.instagram.com/p/" + res["graphql"]["hashtag"]["edge_hashtag_to_top_posts"]["edges"][i]["node"]["shortcode"];
                resultTemp.Caption = encodeURI(res["graphql"]["hashtag"]["edge_hashtag_to_top_posts"]["edges"][i]["node"]["edge_media_to_caption"]["edges"][0]["node"]["text"]);
                resultTemp.Keyword = keyword;
                resultTemp.IconUrl = res["graphql"]["hashtag"]["edge_hashtag_to_top_posts"]["edges"][i]["node"]["thumbnail_src"];
                var JSONTemp = "\n{ \"index\" : { \"_index\" : \"igresults\"}}\n{ \"username\" : \"" + resultTemp.UserName + "\",\"postedtime\" : \"" + resultTemp.PostedTime + "\",\"posturl\" : \"" + resultTemp.PostUrl + "\",\"keyword\" : \"" + resultTemp.Keyword + "\",\"iconurl\" : \"" + resultTemp.IconUrl + "\",\"caption\" : \"" + resultTemp.Caption + "\"}\n";
                _this.JSONtoIndex += JSONTemp;
            }
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
            headers = headers.set('Content-Type', 'application/json; charset=utf-8');
            var URL = "http://localhost:9200/igresults/_bulk";
            var postData = _this.JSONtoIndex;
            _this.http.post(URL, postData, { headers: headers }).subscribe(function (res) { return console.log(res); });
            _this.JSONtoIndex = "";
        });
    };
    SettingsComponent.prototype.FindUserNameFromID = function (userId) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers = headers.set('User-Agent', 'Mozilla/5.0 (iPhone; CPU iPhone OS 12_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Instagram 105.0.0.11.118 (iPhone11,8; iOS 12_3_1; en_US; en-US; scale=2.00; 828x1792; 165586599)');
        var URL = "https://i.instagram.com/api/v1/users/" + userId + "/info/";
        this.http.get(URL, { headers: headers })
            .subscribe(function (res) {
            console.log(res);
            return res["user"]["username"];
        });
    };
    SettingsComponent.prototype.GetKeywordResults = function () {
        var _this = this;
        this.keywordList = [];
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers = headers.set('Content-Type', 'application/json; charset=utf-8');
        var URL = "http://localhost:9200/keywords/_search?q=*";
        this.http.get(URL, { headers: headers })
            .subscribe(function (res) {
            console.log(res);
            for (var i = 0; i < res["hits"]["total"]["value"]; i++) {
                _this.keywordList.push(res["hits"]["hits"][i]._source.name);
            }
            console.log(_this.keywordList);
        });
    };
    SettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__(/*! ./settings.component.html */ "./src/app/settings/settings.component.html"),
            styles: [__webpack_require__(/*! ./settings.component.css */ "./src/app/settings/settings.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SettingsComponent);
    return SettingsComponent;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Hari\SMMWebApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map