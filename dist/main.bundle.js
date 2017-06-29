webpackJsonp([1,4],{

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_mangas_service__ = __webpack_require__(56);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MangaResolver; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MangaResolver = (function () {
    function MangaResolver(mangaService, router) {
        this.mangaService = mangaService;
        this.router = router;
    }
    MangaResolver.prototype.resolve = function (route, state) {
        var _this = this;
        return this.mangaService.getMangaWithSlug(route.params['slug'])
            .catch(function (err) {
            _this.router.navigateByUrl('/');
        });
    };
    return MangaResolver;
}());
MangaResolver = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_mangas_service__["a" /* MangaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_mangas_service__["a" /* MangaService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], MangaResolver);

var _a, _b;
//# sourceMappingURL=manga-resolver.service.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User() {
        this.isAdmin = false;
    }
    return User;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_search_service__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__(19);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainNavComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MainNavComponent = (function () {
    function MainNavComponent(userService, router, searchService) {
        this.userService = userService;
        this.router = router;
        this.searchService = searchService;
        this.searchTerm = "";
    }
    MainNavComponent.prototype.ngOnInit = function () {
    };
    MainNavComponent.prototype.navigateToSearch = function () {
        this.router.navigate(['/search']);
    };
    MainNavComponent.prototype.search = function () {
        this.searchService.search(this.searchTerm);
    };
    MainNavComponent.prototype.logOut = function () {
        this.userService.purgeAuth();
        this.router.navigateByUrl("/");
    };
    return MainNavComponent;
}());
MainNavComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-main-nav',
        template: __webpack_require__(316),
        styles: [__webpack_require__(284)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_search_service__["a" /* SearchService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_search_service__["a" /* SearchService */]) === "function" && _c || Object])
], MainNavComponent);

var _a, _b, _c;
//# sourceMappingURL=main-nav.component.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2____ = __webpack_require__(30);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoverPickerDialog; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CoverPickerDialog = (function () {
    function CoverPickerDialog(dialogRef, coverdbservice) {
        this.dialogRef = dialogRef;
        this.coverdbservice = coverdbservice;
        this.imgUrlSearchField = "";
        this.idSearchField = "";
        this.titleSearchField = "";
        this.searchResults = [];
        this.covers = [];
        this.isSelectedCover = false;
    }
    CoverPickerDialog.prototype.ngOnInit = function () {
        var _this = this;
        if (this.title && this.title !== "") {
            this.titleSearchField = this.title;
            this.coverdbservice.searchMangaCoverDBWithTitle(this.title).then(function (res) {
                _this.searchResults = res;
            });
        }
    };
    CoverPickerDialog.prototype.resetCoversArrays = function (event) {
        var _this = this;
        this.covers = [];
        if (this.title && this.title !== "" && event.index == 0) {
            this.titleSearchField = this.title;
            this.coverdbservice.searchMangaCoverDBWithTitle(this.title).then(function (res) {
                _this.searchResults = res;
            });
        }
        if (this.id && this.id !== "" && event.index == 2) {
            this.idSearchField = this.id;
            this.coverdbservice.getCoversFromuID(this.id).then(function (res) {
                _this.covers = res;
            });
        }
    };
    CoverPickerDialog.prototype.searchForImgUrl = function () {
        this.covers.push(this.imgUrlSearchField);
    };
    CoverPickerDialog.prototype.searchForIdOrLink = function () {
        var _this = this;
        var filteredId = this.idSearchField.split('id=').length > 1 ? this.idSearchField.split('id=')[1] : this.idSearchField;
        this.coverdbservice.getCoversFromuID(filteredId).then(function (res) {
            _this.covers = res;
            console.log(res);
        });
    };
    CoverPickerDialog.prototype.searchForTitle = function () {
        var _this = this;
        this.coverdbservice.searchMangaCoverDBWithTitle(this.titleSearchField).then(function (res) {
            _this.selectedTitleIndex = undefined;
            _this.covers = [];
            _this.searchResults = res;
        });
    };
    CoverPickerDialog.prototype.toggleSelectTitle = function (id, index) {
        var _this = this;
        console.log(id, index);
        if (this.selectedTitleIndex == undefined) {
            this.selectedTitleIndex = index;
            this.coverdbservice.getCoversFromuID(id).then(function (res) {
                _this.covers = res;
            });
        }
        else {
            this.selectedTitleIndex = undefined;
            this.covers = [];
        }
    };
    CoverPickerDialog.prototype.toggleSelectCover = function (cover) {
        console.log(cover);
        var el = event.srcElement;
        if (cover === this.selectedCover) {
            this.selectedCover = null;
            this.isSelectedCover = false;
        }
        else {
            this.selectedCover = cover;
            this.isSelectedCover = true;
        }
    };
    CoverPickerDialog.prototype.cancelDialog = function () {
        this.dialogRef.close();
    };
    CoverPickerDialog.prototype.submitDialog = function () {
        this.dialogRef.close(this.selectedCover);
    };
    return CoverPickerDialog;
}());
CoverPickerDialog = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'cover-picker-dialog',
        template: __webpack_require__(317),
        styles: [__webpack_require__(130), __webpack_require__(285)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdDialogRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2____["b" /* MangaCoversDBService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2____["b" /* MangaCoversDBService */]) === "function" && _b || Object])
], CoverPickerDialog);

var _a, _b;
//# sourceMappingURL=cover-picker.component.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cover_picker_component__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__import_from_mu_component__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__yes_no_component__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dialogs_service__ = __webpack_require__(77);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var DialogsModule = (function () {
    function DialogsModule() {
    }
    return DialogsModule;
}());
DialogsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__cover_picker_component__["a" /* CoverPickerDialog */],
            __WEBPACK_IMPORTED_MODULE_5__import_from_mu_component__["a" /* ImportFromMangaUpdatesComponent */],
            __WEBPACK_IMPORTED_MODULE_6__yes_no_component__["a" /* YesNoDialogComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MaterialModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_4__cover_picker_component__["a" /* CoverPickerDialog */],
            __WEBPACK_IMPORTED_MODULE_5__import_from_mu_component__["a" /* ImportFromMangaUpdatesComponent */],
            __WEBPACK_IMPORTED_MODULE_6__yes_no_component__["a" /* YesNoDialogComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_7__dialogs_service__["a" /* DialogsService */],
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_4__cover_picker_component__["a" /* CoverPickerDialog */],
            __WEBPACK_IMPORTED_MODULE_5__import_from_mu_component__["a" /* ImportFromMangaUpdatesComponent */],
            __WEBPACK_IMPORTED_MODULE_6__yes_no_component__["a" /* YesNoDialogComponent */]
        ]
    })
], DialogsModule);

//# sourceMappingURL=dialogs.module.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_shared__ = __webpack_require__(30);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImportFromMangaUpdatesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ImportFromMangaUpdatesComponent = (function () {
    function ImportFromMangaUpdatesComponent(dialogRef, mangaUpdatesService) {
        this.dialogRef = dialogRef;
        this.mangaUpdatesService = mangaUpdatesService;
        this.searchResults = [];
    }
    ImportFromMangaUpdatesComponent.prototype.ngOnInit = function () { };
    ImportFromMangaUpdatesComponent.prototype.searchForTitle = function () {
        var _this = this;
        this.mangaUpdatesService.getMangaIdsMatchingSearch(this.titleSearchField).then(function (mangas) {
            _this.searchResults = mangas;
        });
    };
    ImportFromMangaUpdatesComponent.prototype.toggleSelectTitle = function (index) {
        this.selectedIndex = index;
        this.selectedId = this.searchResults[index].id;
    };
    ImportFromMangaUpdatesComponent.prototype.cancelDialog = function () {
        this.dialogRef.close();
    };
    ImportFromMangaUpdatesComponent.prototype.submitDialog = function () {
        console.log(this.selectedId);
        this.dialogRef.close(this.selectedId);
    };
    return ImportFromMangaUpdatesComponent;
}());
ImportFromMangaUpdatesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'import-mu',
        template: __webpack_require__(318),
        styles: [__webpack_require__(130), __webpack_require__(286)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdDialogRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_shared__["d" /* MangaUpdatesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_shared__["d" /* MangaUpdatesService */]) === "function" && _b || Object])
], ImportFromMangaUpdatesComponent);

var _a, _b;
//# sourceMappingURL=import-from-mu.component.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(18);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YesNoDialogComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var YesNoDialogComponent = (function () {
    function YesNoDialogComponent(dialogRef) {
        this.dialogRef = dialogRef;
        this.dialogTitle = "";
        this.dialogContent = "";
    }
    return YesNoDialogComponent;
}());
YesNoDialogComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'yes-no-dialog',
        template: __webpack_require__(319),
        styles: [__webpack_require__(287)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdDialogRef */]) === "function" && _a || Object])
], YesNoDialogComponent);

var _a;
//# sourceMappingURL=yes-no.component.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__(19);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminGuardService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminGuardService = (function () {
    function AdminGuardService(router, userService) {
        this.router = router;
        this.userService = userService;
    }
    AdminGuardService.prototype.canActivate = function (route, state) {
        return this.userService.isAdmin.take(1).toPromise();
    };
    return AdminGuardService;
}());
AdminGuardService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */]) === "function" && _b || Object])
], AdminGuardService);

var _a, _b;
//# sourceMappingURL=admin-guard.service.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_service__ = __webpack_require__(36);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MangaCoversDBService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MangaCoversDBService = (function () {
    function MangaCoversDBService(apiService) {
        this.apiService = apiService;
    }
    MangaCoversDBService.prototype.searchMangaCoverDBWithTitle = function (searchterm) {
        return this.apiService.post('/mangacoverdb/search/', {
            "Title": searchterm
        }).toPromise();
    };
    MangaCoversDBService.prototype.getCoversFromuID = function (id) {
        return this.apiService.get('/mangacoverdb/muId/' + id).toPromise().then(function (res) { return res.covers; });
    };
    return MangaCoversDBService;
}());
MangaCoversDBService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */]) === "function" && _a || Object])
], MangaCoversDBService);

var _a;
//# sourceMappingURL=mangacoverdb.service.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_service__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__classes_manga__ = __webpack_require__(76);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MangaUpdatesService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MangaUpdatesService = (function () {
    function MangaUpdatesService(apiService) {
        this.apiService = apiService;
    }
    MangaUpdatesService.prototype.getMangaInfoFromId = function (id) {
        return this.apiService.get("/mangaupdates/findId/" + id).toPromise().then(function (res) {
            var manga = new __WEBPACK_IMPORTED_MODULE_2__classes_manga__["a" /* Manga */]();
            manga.alternativeTitles = res.manga.associatedNames;
            manga.artist = res.manga.artist;
            manga.author = res.manga.author;
            manga.categories = res.manga.categories;
            manga.genres = res.manga.genres;
            manga.coverUrl = res.manga.imgUrl;
            manga.isCompleted = res.manga.scanlated;
            manga.synopsis = res.manga.synopsis;
            manga.title = res.manga.title;
            manga.type = res.manga.type;
            return manga;
        });
    };
    MangaUpdatesService.prototype.getMangaIdsMatchingSearch = function (searchterm) {
        return this.apiService.get("/mangaupdates/search/" + searchterm).toPromise();
    };
    return MangaUpdatesService;
}());
MangaUpdatesService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */]) === "function" && _a || Object])
], MangaUpdatesService);

var _a;
//# sourceMappingURL=mangaupdates.service.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_service__ = __webpack_require__(36);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MetadataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MetadataService = (function () {
    function MetadataService(apiService) {
        this.apiService = apiService;
        this.types = ["Manga", "Artbook", "Doujinshi", "Drama CD", "Manhwa", "Manhua", "Thai", "Indonesian", "Novel", "OEL", "Filipino"];
    }
    MetadataService.prototype.getAllAuthors = function (from, to) {
        if (from === void 0) { from = 0; }
        if (to === void 0) { to = 100; }
        return this.apiService.get('/meta/authors').toPromise().then(function (data) { return data.authors; });
    };
    MetadataService.prototype.getAllArtists = function (from, to) {
        if (from === void 0) { from = 0; }
        if (to === void 0) { to = 100; }
        return this.apiService.get('/meta/artists').toPromise().then(function (data) { return data.artists; });
    };
    MetadataService.prototype.getAllTypes = function () {
        return Promise.resolve(this.types);
    };
    MetadataService.prototype.getAllGenres = function (from, to) {
        if (from === void 0) { from = 0; }
        if (to === void 0) { to = 100; }
        return this.apiService.get('/meta/genres').toPromise().then(function (data) { return data.genres; });
    };
    MetadataService.prototype.getAllCategories = function (from, to) {
        if (from === void 0) { from = 0; }
        if (to === void 0) { to = 100; }
        return this.apiService.get('/meta/categories').toPromise().then(function (data) { return data.categories; });
    };
    return MetadataService;
}());
MetadataService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */]) === "function" && _a || Object])
], MetadataService);

var _a;
//# sourceMappingURL=metadata.service.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_shared__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SnackbarsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SnackbarsService = (function () {
    function SnackbarsService(mangaService, router, snackBar) {
        this.mangaService = mangaService;
        this.router = router;
        this.snackBar = snackBar;
    }
    SnackbarsService.prototype.undoDeleteMangaSnackBar = function (deletedManga) {
        var _this = this;
        this.snackBar.open("Deleted manga " + deletedManga.title, "Undo", { duration: 4000 })
            .onAction()
            .subscribe(function (val) {
            _this.mangaService.addManga(deletedManga).then(function (manga) {
                _this.router.navigateByUrl("/manga/" + manga.slug);
            }).catch(function (err) {
                console.log(err);
            });
        });
    };
    return SnackbarsService;
}());
SnackbarsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_shared__["a" /* MangaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_shared__["a" /* MangaService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MdSnackBar */]) === "function" && _c || Object])
], SnackbarsService);

var _a, _b, _c;
//# sourceMappingURL=snackbars.service.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    api_url: "http://localhost:3000/api"
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 130:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(false);
// imports


// module
exports.push([module.i, ".dialog {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  max-width: 90vw;\n  max-height: 97vh;\n  height: 100%;\n  overflow-y: auto;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n  .dialog /deep/ md-tab-header {\n    margin-bottom: 1rem; }\n  .dialog /deep/ md-tab-group {\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1; }\n    .dialog /deep/ md-tab-group .tab-content {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      height: 100%;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column; }\n      .dialog /deep/ md-tab-group .tab-content .searchbar {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -ms-flex-negative: 0;\n            flex-shrink: 0; }\n        .dialog /deep/ md-tab-group .tab-content .searchbar > *:first-child {\n          margin-right: 1em;\n          -webkit-box-flex: 1;\n              -ms-flex-positive: 1;\n                  flex-grow: 1; }\n      .dialog /deep/ md-tab-group .tab-content .search-results {\n        margin: 0 0.5rem 0.5rem;\n        box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12); }\n        .dialog /deep/ md-tab-group .tab-content .search-results__result {\n          padding: 0.5rem;\n          transition: background-color 200ms;\n          cursor: pointer; }\n          .dialog /deep/ md-tab-group .tab-content .search-results__result small {\n            display: block; }\n          .dialog /deep/ md-tab-group .tab-content .search-results__result:not(:last-child) {\n            border-bottom: 1px solid #BDBDBD; }\n          .dialog /deep/ md-tab-group .tab-content .search-results__result:hover {\n            background-color: #FFE0B2; }\n      .dialog /deep/ md-tab-group .tab-content .cover-results {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -ms-flex-wrap: wrap;\n            flex-wrap: wrap;\n        overflow-y: auto; }\n        .dialog /deep/ md-tab-group .tab-content .cover-results .cover-results__result {\n          box-sizing: border-box;\n          width: calc(50% - 0.4rem);\n          margin: 0.2rem 0.2rem;\n          border: 3px solid transparent;\n          background-size: cover;\n          background-repeat: no-repeat;\n          background-position: center; }\n          .dialog /deep/ md-tab-group .tab-content .cover-results .cover-results__result::before {\n            display: block;\n            content: \"\";\n            width: 100%;\n            padding-top: 157%; }\n          .dialog /deep/ md-tab-group .tab-content .cover-results .cover-results__result.selected {\n            border: 3px solid #FF9800; }\n  .dialog .dialog-buttons {\n    margin-top: 0.5rem;\n    text-align: right; }\n  @media only screen and (min-width: 570px) {\n    .dialog .cover-results__result {\n      width: calc(33% - 0.4rem) !important; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 19:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_ReplaySubject__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_ReplaySubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_ReplaySubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__classes_user__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__api_service__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__jwt_service__ = __webpack_require__(78);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UserService = (function () {
    function UserService(apiService, jwtService) {
        this.apiService = apiService;
        this.jwtService = jwtService;
        this.currentUserSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](new __WEBPACK_IMPORTED_MODULE_3__classes_user__["a" /* User */]());
        this.currentUser = this.currentUserSubject.asObservable().distinctUntilChanged();
        this.isAuthenticatedSubject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_ReplaySubject__["ReplaySubject"](1);
        this.isAuthenticated = this.isAuthenticatedSubject.asObservable();
        this.isAdminSubject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_ReplaySubject__["ReplaySubject"](1);
        this.isAdmin = this.isAdminSubject.asObservable();
    }
    // Verify JWT in localstorage with server & load user's info.
    // This runs once on application startup.
    UserService.prototype.populate = function () {
        var _this = this;
        // If JWT detected, attempt to get & store user's info
        if (this.jwtService.getToken()) {
            this.apiService.get('/user')
                .subscribe(function (data) { return _this.setAuth(data.user); }, function (err) { return _this.purgeAuth(); });
        }
        else {
            // Remove any potential remnants of previous auth states
            this.purgeAuth();
        }
    };
    UserService.prototype.setAuth = function (user) {
        // Save JWT sent from server in localstorage
        this.jwtService.saveToken(user.token);
        // Set current user data into observable
        this.currentUserSubject.next(user);
        // Set isAuthenticated to true
        this.isAuthenticatedSubject.next(true);
        // Set is admin
        this.isAdminSubject.next(user.isAdmin);
    };
    UserService.prototype.purgeAuth = function () {
        // Remove JWT from localstorage
        this.jwtService.destroyToken();
        // Set current user to an empty object
        this.currentUserSubject.next(new __WEBPACK_IMPORTED_MODULE_3__classes_user__["a" /* User */]());
        // Set auth status to false
        this.isAuthenticatedSubject.next(false);
        // Set is admin to false
        this.isAdminSubject.next(false);
    };
    UserService.prototype.loginOrRegister = function (type, credentials) {
        var _this = this;
        var path = type === "login" ? "/login" : "";
        return this.apiService.post('/users' + path, { user: credentials })
            .map(function (data) {
            _this.setAuth(data.user);
            /*this.currentUser.take(1).subscribe(
                data => {
                    console.log(data);
                },
                err => {
                    console.log(err);
                }
            )*/
            return data;
        }).toPromise();
    };
    return UserService;
}());
UserService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__api_service__["a" /* ApiService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__jwt_service__["a" /* JwtService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__jwt_service__["a" /* JwtService */]) === "function" && _b || Object])
], UserService);

var _a, _b;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ 190:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 190;


/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(118);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_shared__ = __webpack_require__(30);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddMangaComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddMangaComponent = (function () {
    function AddMangaComponent(dialogsService, fb, mangaUpdatesService, mangaService, metadataService, route, router) {
        this.dialogsService = dialogsService;
        this.fb = fb;
        this.mangaUpdatesService = mangaUpdatesService;
        this.mangaService = mangaService;
        this.metadataService = metadataService;
        this.route = route;
        this.router = router;
        this.muId = "";
        this.artists = [];
        this.types = [];
        this.mangaForm = fb.group({
            'title': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            'alternativeTitles': [''],
            'author': [''],
            'artist': [''],
            'coverUrl': [''],
            'type': [''],
            'isCompleted': [''],
            'synopsis': [''],
            'genres': [''],
            'categories': ['']
        });
    }
    AddMangaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.metadataService.getAllAuthors().then(function (authors) { return _this.authors = authors; });
        this.metadataService.getAllArtists().then(function (artists) { return _this.artists = artists; });
        this.metadataService.getAllTypes().then(function (types) { return _this.types = types; });
        this.metadataService.getAllGenres().then(function (genres) { return _this.genres = genres; });
        this.metadataService.getAllCategories().then(function (categories) { return _this.categories = categories; });
        this.route.data.subscribe(function (data) {
            var editableManga = data.editableManga;
            if (editableManga) {
                _this.mangaForm.setValue({
                    alternativeTitles: editableManga.alternativeTitles,
                    author: editableManga.author,
                    artist: editableManga.artist,
                    categories: editableManga.categories,
                    coverUrl: editableManga.coverUrl,
                    genres: editableManga.genres,
                    isCompleted: editableManga.isCompleted,
                    synopsis: editableManga.synopsis,
                    title: editableManga.title,
                    type: editableManga.type,
                });
                _this.slug = data.editableManga.slug;
            }
            _this.editType = data.type;
        });
    };
    AddMangaComponent.prototype.isInAddMode = function () {
        return this.editType === "add";
    };
    AddMangaComponent.prototype.transformLowerCasedCapitalized = function (item) {
        return item.charAt(0).toUpperCase() + item.toLowerCase().slice(1);
    };
    AddMangaComponent.prototype.openSelectCoverDialog = function () {
        var _this = this;
        this.dialogsService.openCoverPickerDialog(this.muId, this.mangaForm.controls['title'].value).then(function (res) {
            if (res) {
                _this.mangaForm.patchValue({
                    coverUrl: res
                });
            }
        });
    };
    AddMangaComponent.prototype.openImportFromMuDialog = function () {
        var _this = this;
        this.dialogsService.openImportFromMangaUpdatesDialog().then(function (res) {
            var id = res;
            _this.mangaUpdatesService.getMangaInfoFromId(id).then(function (mangaInfo) {
                var nullSafeMangaInfo = mangaInfo.toNullSafe();
                _this.mangaForm.setValue({
                    alternativeTitles: nullSafeMangaInfo.alternativeTitles,
                    author: nullSafeMangaInfo.author,
                    artist: nullSafeMangaInfo.artist,
                    categories: nullSafeMangaInfo.categories,
                    coverUrl: nullSafeMangaInfo.coverUrl,
                    genres: nullSafeMangaInfo.genres,
                    isCompleted: nullSafeMangaInfo.isCompleted,
                    synopsis: nullSafeMangaInfo.synopsis,
                    title: nullSafeMangaInfo.title,
                    type: nullSafeMangaInfo.type,
                });
                _this.muId = id;
            });
        });
    };
    AddMangaComponent.prototype.formValuesToManga = function () {
        var manga = new __WEBPACK_IMPORTED_MODULE_3_app_shared__["c" /* Manga */]();
        var formValues = this.mangaForm.value;
        manga.alternativeTitles = formValues.alternativeTitles;
        manga.artist = formValues.artist;
        manga.author = formValues.author;
        manga.categories = formValues.categories;
        manga.coverUrl = formValues.coverUrl;
        manga.genres = formValues.genres;
        manga.isCompleted = formValues.isCompleted;
        manga.synopsis = formValues.synopsis;
        manga.title = formValues.title;
        manga.type = formValues.type;
        return manga;
    };
    AddMangaComponent.prototype.submit = function () {
        var _this = this;
        var manga = this.formValuesToManga();
        if (this.isInAddMode()) {
            this.mangaService.addManga(manga).then(function (res) {
                console.log(res);
                _this.router.navigateByUrl("/manga/" + res.slug);
            }).catch(function (err) {
                //console.log(err);
            });
        }
        else {
            manga.slug = this.slug;
            this.mangaService.editMangaWithSlug(manga).then(function (res) {
                //console.log(res);
                _this.router.navigateByUrl("/manga/" + res.slug);
            }).catch(function (err) {
                //console.log(err);
            });
        }
    };
    return AddMangaComponent;
}());
AddMangaComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-addmanga',
        template: __webpack_require__(309),
        styles: [__webpack_require__(277), __webpack_require__(278)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_app_shared__["e" /* DialogsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_shared__["e" /* DialogsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_app_shared__["d" /* MangaUpdatesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_shared__["d" /* MangaUpdatesService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_app_shared__["a" /* MangaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_shared__["a" /* MangaService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3_app_shared__["f" /* MetadataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_shared__["f" /* MetadataService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _g || Object])
], AddMangaComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=add-manga.component.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_tag_input__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_tag_input___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_tag_input__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__add_manga_component__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_services_admin_guard_service__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__manga_detail_manga_resolver_service__ = __webpack_require__(106);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddMangaModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var addMangaRouting = __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forChild([
    {
        path: "edit",
        canActivate: [__WEBPACK_IMPORTED_MODULE_8__shared_services_admin_guard_service__["a" /* AdminGuardService */]],
        children: [
            {
                path: "",
                redirectTo: "add",
                pathMatch: "full"
            },
            {
                path: "add",
                component: __WEBPACK_IMPORTED_MODULE_7__add_manga_component__["a" /* AddMangaComponent */],
                data: { type: "add" }
            },
            {
                path: ":slug",
                component: __WEBPACK_IMPORTED_MODULE_7__add_manga_component__["a" /* AddMangaComponent */],
                data: { type: "edit" },
                resolve: {
                    editableManga: __WEBPACK_IMPORTED_MODULE_9__manga_detail_manga_resolver_service__["a" /* MangaResolver */]
                }
            }
        ]
    }
]);
var AddMangaModule = (function () {
    function AddMangaModule() {
    }
    return AddMangaModule;
}());
AddMangaModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            addMangaRouting,
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["i" /* MdAutocompleteModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["g" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["j" /* MdCheckboxModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["h" /* MdInputModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["k" /* MdSelectModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_6_ng2_tag_input__["TagInputModule"]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__add_manga_component__["a" /* AddMangaComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_9__manga_detail_manga_resolver_service__["a" /* MangaResolver */]
        ]
    })
], AddMangaModule);

//# sourceMappingURL=add-manga.module.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_user_service__ = __webpack_require__(19);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(userService) {
        this.userService = userService;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.userService.populate();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(310),
        styles: [__webpack_require__(276)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_user_service__["a" /* UserService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_components_main_nav_main_nav_component__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_services_admin_guard_service__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_services_api_service__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_services_auth_guard_service__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_app_shared__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_services_metadata_service__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shared_services_jwt_service__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shared_services_mangacoverdb_service__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__shared_services_mangaupdates_service__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__shared_services_no_auth_guard_service__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__shared_services_search_service__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__shared_services_user_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__auth_auth_module__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__add_manga_add_manga_module__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__shared_dialogs_dialogs_module__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__home_home_module__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__manga_detail_manga_detail_module__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__shared_shared_module__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__shared_snackbars_snackbars_module__ = __webpack_require__(219);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























var rootRouting = __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot([], { useHash: true });
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__shared_components_main_nav_main_nav_component__["a" /* MainNavComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_19__add_manga_add_manga_module__["a" /* AddMangaModule */],
            __WEBPACK_IMPORTED_MODULE_18__auth_auth_module__["a" /* AuthModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_20__shared_dialogs_dialogs_module__["a" /* DialogsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_21__home_home_module__["a" /* HomeModule */],
            __WEBPACK_IMPORTED_MODULE_22__manga_detail_manga_detail_module__["a" /* MangaDetailModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_23__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_24__shared_snackbars_snackbars_module__["a" /* SnackbarsModule */],
            rootRouting
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_7__shared_services_admin_guard_service__["a" /* AdminGuardService */],
            __WEBPACK_IMPORTED_MODULE_8__shared_services_api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_9__shared_services_auth_guard_service__["a" /* AuthGuardService */],
            __WEBPACK_IMPORTED_MODULE_12__shared_services_jwt_service__["a" /* JwtService */],
            __WEBPACK_IMPORTED_MODULE_13__shared_services_mangacoverdb_service__["a" /* MangaCoversDBService */],
            __WEBPACK_IMPORTED_MODULE_10_app_shared__["a" /* MangaService */],
            __WEBPACK_IMPORTED_MODULE_14__shared_services_mangaupdates_service__["a" /* MangaUpdatesService */],
            __WEBPACK_IMPORTED_MODULE_11__shared_services_metadata_service__["a" /* MetadataService */],
            __WEBPACK_IMPORTED_MODULE_15__shared_services_no_auth_guard_service__["a" /* NoAuthGuardService */],
            __WEBPACK_IMPORTED_MODULE_16__shared_services_search_service__["a" /* SearchService */],
            __WEBPACK_IMPORTED_MODULE_17__shared_services_user_service__["a" /* UserService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_user_service__ = __webpack_require__(19);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthComponent = (function () {
    function AuthComponent(route, router, fb, userService) {
        this.route = route;
        this.router = router;
        this.fb = fb;
        this.userService = userService;
        this.isSubmitting = false;
        this.title = '';
        this.authForm = this.fb.group({
            'email': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].email, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])],
            'password': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]
        });
    }
    AuthComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.url.subscribe(function (data) {
            // Get the last piece of the URL (it's either 'login' or 'register')
            _this.authType = data[data.length - 1].path;
            // Set a title for the page accordingly
            _this.title = (_this.authType === 'login') ? 'Sign in' : 'Sign up';
            // add form control for username if this is the register page
            if (_this.authType === 'register') {
                _this.authForm.addControl('username', new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]());
            }
        });
    };
    AuthComponent.prototype.submitForm = function () {
        var _this = this;
        this.isSubmitting = true;
        var credentials = this.authForm.value;
        this.userService.loginOrRegister(this.authType, credentials).then(function (res) {
            _this.router.navigate(['/home']);
        }).catch(function (err) {
            console.log(err);
            _this.isSubmitting = false;
        });
    };
    return AuthComponent;
}());
AuthComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'auth',
        template: __webpack_require__(311),
        styles: [__webpack_require__(279)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_services_user_service__["a" /* UserService */]) === "function" && _d || Object])
], AuthComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=auth.component.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__auth_component__ = __webpack_require__(203);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var authRouting = __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forChild([
    {
        path: 'auth',
        redirectTo: "auth/login",
        pathMatch: "full"
    },
    {
        path: 'auth/login',
        component: __WEBPACK_IMPORTED_MODULE_5__auth_component__["a" /* AuthComponent */],
    },
    {
        path: 'auth/register',
        component: __WEBPACK_IMPORTED_MODULE_5__auth_component__["a" /* AuthComponent */],
    }
]);
var AuthModule = (function () {
    function AuthModule() {
    }
    return AuthModule;
}());
AuthModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__auth_component__["a" /* AuthComponent */]
        ],
        imports: [
            authRouting,
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["g" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["h" /* MdInputModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"]
        ],
        providers: []
    })
], AuthModule);

//# sourceMappingURL=auth.module.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_perfect_scrollbar__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_perfect_scrollbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ngx_perfect_scrollbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__manga_cover_manga_cover_component__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__manga_cover_grid_manga_cover_grid_component__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_shared__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_shared_module__ = __webpack_require__(58);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var homeRouting = __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forChild([
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_5__manga_cover_grid_manga_cover_grid_component__["a" /* MangaCoverGridComponent */]
    },
    {
        path: 'search',
        component: __WEBPACK_IMPORTED_MODULE_5__manga_cover_grid_manga_cover_grid_component__["a" /* MangaCoverGridComponent */]
    }
]);
var HomeModule = (function () {
    function HomeModule() {
    }
    return HomeModule;
}());
HomeModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__manga_cover_manga_cover_component__["a" /* MangaCoverComponent */],
            __WEBPACK_IMPORTED_MODULE_5__manga_cover_grid_manga_cover_grid_component__["a" /* MangaCoverGridComponent */]
        ],
        imports: [
            homeRouting,
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["e" /* MdProgressSpinnerModule */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_perfect_scrollbar__["PerfectScrollbarModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_8__shared_shared_module__["a" /* SharedModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_6_app_shared__["a" /* MangaService */]
        ]
    })
], HomeModule);

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_shared__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_search_service__ = __webpack_require__(57);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MangaCoverGridComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MangaCoverGridComponent = (function () {
    function MangaCoverGridComponent(route, mangaService, router, searchService) {
        this.route = route;
        this.mangaService = mangaService;
        this.router = router;
        this.searchService = searchService;
        this.loading = true;
        this.isHome = true;
    }
    MangaCoverGridComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.url.subscribe(function (data) {
            if (data[data.length - 1].path === "home") {
                _this.getAllMangas();
            }
            else {
                _this.route.queryParams.subscribe(function (params) {
                    _this.getAllMangasWithParams(params);
                });
            }
        });
        this.searchService.searchResults.subscribe(function (searchTerm) {
            _this.loading = true;
            if (searchTerm === "") {
                _this.mangaService.getAllMangas().then(function (mangas) {
                    _this.mangas = mangas;
                    _this.loading = false;
                });
            }
            else {
                _this.mangaService.getMangasMatching(searchTerm).then(function (mangas) {
                    _this.mangas = mangas;
                    _this.loading = false;
                });
            }
        });
    };
    MangaCoverGridComponent.prototype.getAllMangas = function () {
        var _this = this;
        this.loading = true;
        this.mangaService.getAllMangas().then(function (mangas) {
            _this.mangas = mangas;
            _this.loading = false;
        });
    };
    MangaCoverGridComponent.prototype.getAllMangasWithParams = function (params) {
        var _this = this;
        if (Object.keys(params).length === 0) {
            this.getAllMangas();
        }
        else {
            this.mangaService.getAllMangasWithParams(params).then(function (mangas) {
                console.log(mangas);
                _this.mangas = mangas;
                _this.loading = false;
            });
        }
    };
    return MangaCoverGridComponent;
}());
MangaCoverGridComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-manga-cover-grid',
        template: __webpack_require__(312),
        styles: [__webpack_require__(280)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_shared__["a" /* MangaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_shared__["a" /* MangaService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_search_service__["a" /* SearchService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_services_search_service__["a" /* SearchService */]) === "function" && _d || Object])
], MangaCoverGridComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=manga-cover-grid.component.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MangaCoverComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MangaCoverComponent = (function () {
    function MangaCoverComponent(router) {
        this.router = router;
    }
    MangaCoverComponent.prototype.ngOnInit = function () {
    };
    MangaCoverComponent.prototype.openDetail = function () {
        this.router.navigateByUrl('/manga/' + this.mangaSlug);
    };
    return MangaCoverComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], MangaCoverComponent.prototype, "mangaSlug", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], MangaCoverComponent.prototype, "mangaName", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], MangaCoverComponent.prototype, "mangaCoverUrl", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], MangaCoverComponent.prototype, "mangaSynopsis", void 0);
MangaCoverComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-manga-cover',
        template: __webpack_require__(313),
        styles: [__webpack_require__(281)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], MangaCoverComponent);

var _a;
//# sourceMappingURL=manga-cover.component.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_services_mangas_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_dialogs_dialogs_service__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_classes_manga__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_snackbars_snackbars_service__ = __webpack_require__(117);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MangaDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MangaDetailComponent = (function () {
    function MangaDetailComponent(dialogsService, mangaService, route, router, snackbarsService) {
        this.dialogsService = dialogsService;
        this.mangaService = mangaService;
        this.route = route;
        this.router = router;
        this.snackbarsService = snackbarsService;
        this.manga = new __WEBPACK_IMPORTED_MODULE_4__shared_classes_manga__["a" /* Manga */]();
    }
    MangaDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (data) {
            _this.manga = data.manga;
        });
    };
    MangaDetailComponent.prototype.deleteManga = function () {
        var _this = this;
        this.dialogsService.openYesNoDialog('Delete manga', 'Are you really sure that you want to permanently delete this manga').then(function (result) {
            if (result) {
                _this.mangaService.deleteMangaWithSlug(_this.manga.slug)
                    .then(function (deletedManga) {
                    _this.router.navigateByUrl('/');
                    _this.snackbarsService.undoDeleteMangaSnackBar(deletedManga);
                })
                    .catch(function (err) {
                    console.log(err);
                });
            }
        });
    };
    return MangaDetailComponent;
}());
MangaDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'manga-detail',
        template: __webpack_require__(314),
        styles: [__webpack_require__(282)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_dialogs_dialogs_service__["a" /* DialogsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_dialogs_dialogs_service__["a" /* DialogsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__shared_services_mangas_service__["a" /* MangaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__shared_services_mangas_service__["a" /* MangaService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__shared_snackbars_snackbars_service__["a" /* SnackbarsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared_snackbars_snackbars_service__["a" /* SnackbarsService */]) === "function" && _e || Object])
], MangaDetailComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=manga-detail.component.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_perfect_scrollbar__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_perfect_scrollbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ngx_perfect_scrollbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__manga_detail_component__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__manga_resolver_service__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_shared_module__ = __webpack_require__(58);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MangaDetailModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var homeRouting = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forChild([
    {
        path: 'manga/:slug',
        component: __WEBPACK_IMPORTED_MODULE_5__manga_detail_component__["a" /* MangaDetailComponent */],
        resolve: {
            manga: __WEBPACK_IMPORTED_MODULE_6__manga_resolver_service__["a" /* MangaResolver */]
        }
    } /*,
    {
      path: '',
      redirectTo: 'manga',
      pathMatch: 'full'
    }*/
]);
var MangaDetailModule = (function () {
    function MangaDetailModule() {
    }
    return MangaDetailModule;
}());
MangaDetailModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [__WEBPACK_IMPORTED_MODULE_5__manga_detail_component__["a" /* MangaDetailComponent */]],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
            homeRouting,
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["d" /* MdSnackBarModule */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_perfect_scrollbar__["PerfectScrollbarModule"],
            __WEBPACK_IMPORTED_MODULE_7__shared_shared_module__["a" /* SharedModule */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_6__manga_resolver_service__["a" /* MangaResolver */]
        ]
    })
], MangaDetailModule);

//# sourceMappingURL=manga-detail.module.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__manga__ = __webpack_require__(76);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__manga__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user__ = __webpack_require__(107);
/* unused harmony namespace reexport */


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_mangas_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__(19);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoriteButtonComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FavoriteButtonComponent = (function () {
    function FavoriteButtonComponent(mangaService, router, userService) {
        this.mangaService = mangaService;
        this.router = router;
        this.userService = userService;
        this.onToggle = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.isSubmitting = false;
        this.favorited = false;
    }
    FavoriteButtonComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.isAuthenticated.subscribe(function (auth) {
            if (auth) {
                _this.mangaService.isMangaWithSlugFavorited(_this.mangaSlug)
                    .then(function (isFavorited) {
                    _this.favorited = isFavorited;
                })
                    .catch(function (err) {
                    console.log("Problem with auth");
                });
            }
        });
    };
    FavoriteButtonComponent.prototype.toggleFavorite = function (event) {
        var _this = this;
        if (event) {
            event.stopPropagation();
        }
        this.isSubmitting = true;
        if (this.favorited) {
            this.mangaService.unfavoriteMangaWithSlug(this.mangaSlug)
                .then(function (result) {
                _this.favorited = false;
                _this.isSubmitting = false;
            }).catch(function (err) {
                _this.isSubmitting = false;
                console.log(err);
            });
        }
        else {
            this.mangaService.favoriteMangaWithSlug(this.mangaSlug)
                .then(function (result) {
                _this.favorited = true;
                _this.isSubmitting = false;
            }).catch(function (err) {
                _this.isSubmitting = false;
                console.log(err);
            });
        }
    };
    return FavoriteButtonComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], FavoriteButtonComponent.prototype, "mangaSlug", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], FavoriteButtonComponent.prototype, "onToggle", void 0);
FavoriteButtonComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'favorite-btn',
        template: __webpack_require__(315),
        styles: [__webpack_require__(283)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_mangas_service__["a" /* MangaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_mangas_service__["a" /* MangaService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */]) === "function" && _c || Object])
], FavoriteButtonComponent);

var _a, _b, _c;
//# sourceMappingURL=favorite-btn.component.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__main_nav_main_nav_component__ = __webpack_require__(108);
/* unused harmony namespace reexport */

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dialogs_service__ = __webpack_require__(77);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__dialogs_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dialogs_module__ = __webpack_require__(110);
/* unused harmony reexport DialogsModule */


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__(19);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowToAdminDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ShowToAdminDirective = (function () {
    function ShowToAdminDirective(templateRef, userService, viewContainer) {
        this.templateRef = templateRef;
        this.userService = userService;
        this.viewContainer = viewContainer;
    }
    ShowToAdminDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.isAdmin.subscribe(function (isAdmin) {
            if (isAdmin) {
                _this.viewContainer.createEmbeddedView(_this.templateRef);
            }
            else {
                _this.viewContainer.clear();
            }
        });
    };
    return ShowToAdminDirective;
}());
ShowToAdminDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[showToAdmin]',
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _c || Object])
], ShowToAdminDirective);

var _a, _b, _c;
//# sourceMappingURL=show-admin.directive.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__(19);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowToLoggedInDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ShowToLoggedInDirective = (function () {
    function ShowToLoggedInDirective(templateRef, userService, viewContainer) {
        this.templateRef = templateRef;
        this.userService = userService;
        this.viewContainer = viewContainer;
        this.condition = true;
    }
    ShowToLoggedInDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.isAuthenticated.subscribe(function (isLoggedIn) {
            if (isLoggedIn && _this.condition || !isLoggedIn && !_this.condition) {
                _this.viewContainer.createEmbeddedView(_this.templateRef);
            }
            else {
                _this.viewContainer.clear();
            }
        });
    };
    Object.defineProperty(ShowToLoggedInDirective.prototype, "showToLoggedIn", {
        set: function (condition) {
            this.condition = condition;
        },
        enumerable: true,
        configurable: true
    });
    return ShowToLoggedInDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], ShowToLoggedInDirective.prototype, "showToLoggedIn", null);
ShowToLoggedInDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[showToLoggedIn]',
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _c || Object])
], ShowToLoggedInDirective);

var _a, _b, _c;
//# sourceMappingURL=show-logged-in.directive.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__(19);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuardService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuardService = (function () {
    function AuthGuardService(router, userService) {
        this.router = router;
        this.userService = userService;
    }
    AuthGuardService.prototype.canActivate = function (route, state) {
        return this.userService.isAuthenticated.take(1).toPromise();
    };
    return AuthGuardService;
}());
AuthGuardService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */]) === "function" && _b || Object])
], AuthGuardService);

var _a, _b;
//# sourceMappingURL=auth-guard.service.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_service__ = __webpack_require__(36);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mangas_service__ = __webpack_require__(56);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__mangas_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__metadata_service__ = __webpack_require__(116);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_2__metadata_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mangacoverdb_service__ = __webpack_require__(114);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_3__mangacoverdb_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mangaupdates_service__ = __webpack_require__(115);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_4__mangaupdates_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_service__ = __webpack_require__(19);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__search_service__ = __webpack_require__(57);
/* unused harmony namespace reexport */







//# sourceMappingURL=index.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__(19);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoAuthGuardService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NoAuthGuardService = (function () {
    function NoAuthGuardService(router, userService) {
        this.router = router;
        this.userService = userService;
    }
    NoAuthGuardService.prototype.canActivate = function (route, state) {
        return this.userService.isAuthenticated.take(1).map(function (bool) { return !bool; }).toPromise();
    };
    return NoAuthGuardService;
}());
NoAuthGuardService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */]) === "function" && _b || Object])
], NoAuthGuardService);

var _a, _b;
//# sourceMappingURL=no-auth-guard.service.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__snackbars_service__ = __webpack_require__(117);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SnackbarsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var SnackbarsModule = (function () {
    function SnackbarsModule() {
    }
    return SnackbarsModule;
}());
SnackbarsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        providers: [__WEBPACK_IMPORTED_MODULE_1__snackbars_service__["a" /* SnackbarsService */]],
    })
], SnackbarsModule);

//# sourceMappingURL=snackbars.module.js.map

/***/ }),

/***/ 276:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 277:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(false);
// imports


// module
exports.push([module.i, "form.add-manga-form {\n  padding: 1rem; }\n  form.add-manga-form .cover-with-detail-container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -ms-flex-line-pack: center;\n        align-content: center; }\n    form.add-manga-form .cover-with-detail-container__cover {\n      width: 18.75rem;\n      max-width: 100%;\n      margin: 0 auto 1rem; }\n      form.add-manga-form .cover-with-detail-container__cover .cover-img {\n        position: relative;\n        height: 0;\n        padding-bottom: 140%;\n        background-size: cover;\n        background-color: #BDBDBD; }\n        form.add-manga-form .cover-with-detail-container__cover .cover-img__edit-menu {\n          position: absolute;\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-pack: center;\n              -ms-flex-pack: center;\n                  justify-content: center;\n          -webkit-box-align: center;\n              -ms-flex-align: center;\n                  align-items: center;\n          top: 0;\n          left: 0;\n          right: 0;\n          bottom: 0;\n          background-color: rgba(0, 0, 0, 0.8);\n          opacity: 0;\n          transition: opacity 400ms; }\n        form.add-manga-form .cover-with-detail-container__cover .cover-img:hover .cover-img__edit-menu {\n          opacity: 1; }\n    form.add-manga-form .cover-with-detail-container__detail {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      -webkit-box-flex: 1;\n          -ms-flex-positive: 1;\n              flex-grow: 1; }\n      form.add-manga-form .cover-with-detail-container__detail textarea {\n        height: 9rem; }\n  form.add-manga-form .mu-import-container {\n    margin: 1rem 3rem;\n    padding: 1rem;\n    border-radius: 3px;\n    background-color: rgba(189, 189, 189, 0.3);\n    text-align: center; }\n    form.add-manga-form .mu-import-container span {\n      display: block;\n      margin-bottom: 1rem; }\n  form.add-manga-form .submit-btn {\n    display: block;\n    margin: 2rem 0 1rem auto;\n    font-weight: 700;\n    text-transform: uppercase;\n    color: white; }\n  @media only screen and (min-width: 768px) {\n    form.add-manga-form {\n      padding: 2rem; }\n      form.add-manga-form .cover-with-detail-container {\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: row;\n                flex-direction: row; }\n        form.add-manga-form .cover-with-detail-container__cover {\n          width: 30%;\n          min-width: 15rem;\n          max-width: 22rem;\n          padding: 0;\n          margin-right: 5%; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 278:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(false);
// imports


// module
exports.push([module.i, "/deep/ .ng2-tag-input.weeb-theme {\n  display: block;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  position: relative;\n  cursor: text;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12) !important;\n  margin-bottom: 16px; }\n  /deep/ .ng2-tag-input.weeb-theme:focus {\n    outline: 0; }\n  /deep/ .ng2-tag-input.weeb-theme.ng2-tag-input--dropping {\n    opacity: 0.7; }\n  /deep/ .ng2-tag-input.weeb-theme.ng2-tag-input--focused {\n    border-bottom: 2px solid #FF9800 !important; }\n  /deep/ .ng2-tag-input.weeb-theme.ng2-tag-input--loading {\n    border: none; }\n  /deep/ .ng2-tag-input.weeb-theme.ng2-tag-input--disabled {\n    opacity: 0.5;\n    cursor: not-allowed; }\n  /deep/ .ng2-tag-input.weeb-theme .ng2-tags-container {\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex; }\n\n/deep/ .ng2-tag-input.weeb-theme tag {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  color: #fff;\n  border-radius: 2px;\n  background: #FF9800;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  overflow: hidden;\n  outline: 0;\n  cursor: pointer;\n  position: relative; }\n  /deep/ .ng2-tag-input.weeb-theme tag:not(.readonly):not(.tag--editing):focus {\n    background: #F57C00; }\n  /deep/ .ng2-tag-input.weeb-theme tag:not(.readonly):not(.tag--editing):active {\n    background: #F57C00; }\n  /deep/ .ng2-tag-input.weeb-theme tag:not(:focus):not(.tag--editing):not(:active):not(.readonly):hover {\n    background: #F57C00;\n    color: #fff; }\n  /deep/ .ng2-tag-input.weeb-theme tag.readonly {\n    cursor: default; }\n  /deep/ .ng2-tag-input.weeb-theme tag.readonly:focus, /deep/ .ng2-tag-input.weeb-theme tag:focus {\n    outline: 0; }\n  /deep/ .ng2-tag-input.weeb-theme tag.tag--editing {\n    cursor: text; }\n\n/deep/ .ng2-tag-input.weeb-theme tag delete-icon {\n  transition: all 0.35s;\n  text-align: right; }\n  /deep/ .ng2-tag-input.weeb-theme tag delete-icon path {\n    fill: #fff; }\n  /deep/ .ng2-tag-input.weeb-theme tag delete-icon svg {\n    vertical-align: bottom;\n    height: 34px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 279:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 280:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(false);
// imports


// module
exports.push([module.i, ".loading-mangas {\n  margin: 1.5rem auto; }\n\n.manga-cover-grid {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap; }\n  .manga-cover-grid__cover {\n    width: calc(100% - (2 * 5px));\n    margin: 5px 5px;\n    z-index: 1; }\n    @media screen and (min-width: 200px) {\n      .manga-cover-grid__cover {\n        width: calc(100% / 1 - (2 * 5px)); } }\n    @media screen and (min-width: 400px) {\n      .manga-cover-grid__cover {\n        width: calc(100% / 2 - (2 * 5px)); } }\n    @media screen and (min-width: 600px) {\n      .manga-cover-grid__cover {\n        width: calc(100% / 3 - (2 * 5px)); } }\n    @media screen and (min-width: 800px) {\n      .manga-cover-grid__cover {\n        width: calc(100% / 4 - (2 * 5px)); } }\n    @media screen and (min-width: 1000px) {\n      .manga-cover-grid__cover {\n        width: calc(100% / 5 - (2 * 5px)); } }\n    @media screen and (min-width: 1200px) {\n      .manga-cover-grid__cover {\n        width: calc(100% / 6 - (2 * 5px)); } }\n    @media screen and (min-width: 1400px) {\n      .manga-cover-grid__cover {\n        width: calc(100% / 7 - (2 * 5px)); } }\n    @media screen and (min-width: 1600px) {\n      .manga-cover-grid__cover {\n        width: calc(100% / 8 - (2 * 5px)); } }\n    @media screen and (min-width: 1800px) {\n      .manga-cover-grid__cover {\n        width: calc(100% / 9 - (2 * 5px)); } }\n    @media screen and (min-width: 2000px) {\n      .manga-cover-grid__cover {\n        width: calc(100% / 10 - (2 * 5px)); } }\n    @media screen and (min-width: 2200px) {\n      .manga-cover-grid__cover {\n        width: calc(100% / 11 - (2 * 5px)); } }\n    @media screen and (min-width: 2400px) {\n      .manga-cover-grid__cover {\n        width: calc(100% / 12 - (2 * 5px)); } }\n    @media screen and (min-width: 2600px) {\n      .manga-cover-grid__cover {\n        width: calc(100% / 13 - (2 * 5px)); } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 281:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(false);
// imports


// module
exports.push([module.i, ".mangaCover {\n  box-shadow: 1px 1px 5px 0px #5c5c5c;\n  overflow: hidden; }\n  .mangaCover__container {\n    position: relative;\n    width: 100%;\n    height: 0;\n    padding-top: 140%;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column; }\n    .mangaCover__container .mangaCover_content {\n      position: absolute;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column; }\n    .mangaCover__container .mangaCover__actions {\n      display: none;\n      margin: 0.5rem 0.5rem 0;\n      text-align: right;\n      z-index: 5; }\n    .mangaCover__container .mangaCover__img {\n      position: absolute;\n      width: 100%;\n      height: auto;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0;\n      z-index: -1; }\n    .mangaCover__container .mangaCover__synopsis {\n      margin: 0.8rem 0.5rem;\n      padding: 0.3rem;\n      border-radius: 3px;\n      overflow: hidden;\n      -ms-flex-negative: 1;\n          flex-shrink: 1;\n      -webkit-box-flex: 1;\n          -ms-flex-positive: 1;\n              flex-grow: 1;\n      background: rgba(89, 89, 89, 0.7);\n      background-repeat: no-repeat;\n      background-size: 50% 50%;\n      background-position: center;\n      color: white;\n      opacity: 0;\n      transition: opacity 200ms; }\n    .mangaCover__container .mangaCover__title {\n      display: block;\n      box-sizing: border-box;\n      width: 100%;\n      padding: 1rem 0.5rem 0.5rem;\n      -ms-flex-item-align: end;\n          align-self: flex-end;\n      background-image: linear-gradient(180deg, transparent, rgba(0, 0, 0, 0.7));\n      color: white;\n      font-weight: 700; }\n    .mangaCover__container::before {\n      display: block;\n      content: '';\n      position: absolute;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0;\n      opacity: 0;\n      background: linear-gradient(45deg, rgba(219, 155, 79, 0.5), rgba(252, 153, 32, 0.9));\n      transition: opacity 200ms; }\n    .mangaCover__container:hover::before {\n      opacity: 1; }\n    .mangaCover__container:hover .mangaCover__actions {\n      display: block; }\n    .mangaCover__container:hover .mangaCover__synopsis {\n      opacity: 1; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 282:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(false);
// imports


// module
exports.push([module.i, ".manga-detail-root {\n  max-width: 1400px;\n  padding: 1rem;\n  margin: 0 auto; }\n  .manga-detail-root .label {\n    display: block;\n    margin: 0.5rem 0; }\n  .manga-detail-root .chip {\n    display: inline-block;\n    padding: 0.5rem;\n    margin-bottom: 0.2rem;\n    border-radius: 5px;\n    background-color: #FF9800;\n    color: white; }\n    .manga-detail-root .chip:not(:last-of-type) {\n      margin-right: 0.3rem; }\n    .manga-detail-root .chip--link a {\n      color: white; }\n    .manga-detail-root .chip--link:hover {\n      background-color: #FF5722;\n      text-decoration: none; }\n  .manga-detail-root .admin-actions {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    margin: 1rem;\n    padding: 1rem;\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    background-color: #f2f2f2; }\n    .manga-detail-root .admin-actions a {\n      margin: 0 1rem; }\n      .manga-detail-root .admin-actions a i {\n        font-size: 30px;\n        color: #212121;\n        transition: color 100ms; }\n        .manga-detail-root .admin-actions a i:hover {\n          color: #FF5722; }\n  .manga-detail-root .img-info-cols {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column; }\n    .manga-detail-root .img-info-cols__img {\n      margin: 0 auto;\n      width: 25rem;\n      max-width: 50%; }\n    .manga-detail-root .img-info-cols__info {\n      -webkit-box-flex: 1;\n          -ms-flex-positive: 1;\n              flex-grow: 1; }\n  .manga-detail-root .manga__title {\n    margin-bottom: 1rem; }\n  .manga-detail-root .manga__synopsis {\n    padding: 1rem;\n    border-radius: 2px;\n    background-color: #f2f2f2;\n    line-height: 1.4; }\n  .manga-detail-root .manga__completed {\n    width: 1.3rem;\n    height: 1.3rem;\n    border: 2px solid #BDBDBD;\n    border-radius: 5px; }\n    .manga-detail-root .manga__completed.is-completed {\n      position: relative; }\n      .manga-detail-root .manga__completed.is-completed::after {\n        content: '';\n        position: absolute;\n        top: 10%;\n        left: 50%;\n        width: 65%;\n        height: 30%;\n        border-left: 5px solid #FF5722;\n        border-bottom: 5px solid #FF5722;\n        border-radius: 3px;\n        -webkit-transform: translateX(-50%) rotate(-45deg);\n                transform: translateX(-50%) rotate(-45deg); }\n  @media only screen and (min-width: 590px) {\n    .manga-detail-root {\n      padding: calc($page-padding * 2); }\n      .manga-detail-root .img-info-cols {\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: row;\n                flex-direction: row; }\n        .manga-detail-root .img-info-cols__img {\n          width: 30%;\n          max-width: 25rem;\n          min-width: 12.5rem;\n          margin-right: 2rem;\n          -ms-flex-negative: 0;\n              flex-shrink: 0; }\n        .manga-detail-root .img-info-cols__info {\n          -webkit-box-flex: 1;\n              -ms-flex-positive: 1;\n                  flex-grow: 1; }\n      .manga-detail-root .manga__synopsis {\n        max-height: 9rem; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 283:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(false);
// imports


// module
exports.push([module.i, ".favorite-btn {\n  display: inline-block;\n  font-size: 30px;\n  color: rgba(33, 33, 33, 0.6);\n  cursor: pointer; }\n  .favorite-btn.favorited {\n    color: rgba(255, 0, 0, 0.9); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 284:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(false);
// imports


// module
exports.push([module.i, ".main-nav {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding: 1rem;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  background-color: #ea9801;\n  color: white; }\n  .main-nav__logo img {\n    height: 50px; }\n  .main-nav__searchbar {\n    position: relative;\n    margin: 0 5%;\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    color: white; }\n    .main-nav__searchbar__search-icon {\n      position: absolute;\n      width: auto;\n      top: 0.3rem;\n      left: 0.3rem;\n      right: 0.3rem; }\n    .main-nav__searchbar__input {\n      width: 100%;\n      padding: 0.5rem 0.8rem;\n      border: none;\n      border-radius: 5px;\n      background-color: rgba(0, 0, 0, 0.3);\n      font-size: 20px;\n      transition: background-color 150ms; }\n      .main-nav__searchbar__input:focus {\n        border: none;\n        background-color: white;\n        color: #212121; }\n  .main-nav__menu {\n    margin: 0;\n    text-align: right;\n    list-style: none;\n    -webkit-padding-start: 0;\n    -webkit-margin-before: 0;\n    -webkit-margin-after: 0; }\n    .main-nav__menu a {\n      display: inline-block;\n      border: 1px solid transparent;\n      border-radius: 3px;\n      text-decoration: none;\n      color: inherit; }\n      .main-nav__menu a li {\n        display: inline-block;\n        padding: 0.5rem 0.8rem;\n        text-transform: uppercase;\n        font-weight: 700; }\n      .main-nav__menu a:hover {\n        border: 1px solid #ffc957;\n        background-color: rgba(255, 255, 255, 0.2);\n        box-shadow: 0px 0px 5px rgba(128, 128, 128, 0.8); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 285:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(false);
// imports


// module
exports.push([module.i, ".search-results.itemSelected .search-results__result.selected {\n  position: relative;\n  background-color: white; }\n  .search-results.itemSelected .search-results__result.selected::after {\n    position: absolute;\n    display: block;\n    content: '';\n    width: 1.5rem;\n    top: 0;\n    right: 0.5rem;\n    bottom: 0;\n    background-image: url(" + __webpack_require__(288) + ");\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: contain; }\n  .search-results.itemSelected .search-results__result.selected:hover {\n    background-color: #f0f0f0; }\n\n.search-results.itemSelected .search-results__result:not(.selected) {\n  display: none; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 286:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(false);
// imports


// module
exports.push([module.i, ".search-results__result.selected {\n  background-color: #FFE0B2; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 287:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(false);
// imports


// module
exports.push([module.i, "/deep/ md-dialog-actions {\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end; }\n\nbutton .mat-button-wrapper {\n  color: #212121; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 288:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "edit_icon.70f20b9d7eece32a2c39.svg";

/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_module__ = __webpack_require__(58);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components__ = __webpack_require__(212);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__(217);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__services__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__services__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_2__services__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_2__services__["d"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dialogs__ = __webpack_require__(213);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_3__dialogs__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__classes__ = __webpack_require__(210);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_4__classes__["a"]; });





//# sourceMappingURL=index.js.map

/***/ }),

/***/ 309:
/***/ (function(module, exports) {

module.exports = "<form class=\"add-manga-form\"\r\n      [formGroup]=\"mangaForm\"\r\n      (ngSubmit)=\"submit()\">\r\n    <div class=\"cover-with-detail-container\">\r\n        <div class=\"cover-with-detail-container__cover\">\r\n            <div class=\"cover-img\"\r\n                 [ngStyle]=\"{'background-image': 'url(' + mangaForm.controls['coverUrl'].value + ')'}\">\r\n                <div class=\"cover-img__edit-menu\">\r\n                    <button [color]=\"'accent'\"\r\n                            (click)='openSelectCoverDialog()'\r\n                            md-raised-button\r\n                            type=\"button\">EDIT</button>\r\n                </div>\r\n                <input type=\"url\"\r\n                       name=\"coverUrl\"\r\n                       hidden\r\n                       formControlName='coverUrl'>\r\n            </div>\r\n        </div>\r\n        <div class=\"cover-with-detail-container__detail\">\r\n            <md-input-container>\r\n                <input mdInput\r\n                       formControlName=\"title\"\r\n                       name=\"title\"\r\n                       placeholder=\"Title\">\r\n                <md-error>Title is required</md-error>\r\n            </md-input-container>\r\n\r\n            <tag-input formControlName='alternativeTitles'\r\n                       name=\"alternative titles\"\r\n                       theme='weeb-theme'\r\n                       [modelAsStrings]='true'\r\n                       [placeholder]='\"Add more\"'\r\n                       [secondaryPlaceholder]='\"Add some alternative names\"'>\r\n            </tag-input>\r\n\r\n            <md-input-container>\r\n                <input mdInput\r\n                       formControlName=\"author\"\r\n                       name=\"author\"\r\n                       [mdAutocomplete]=\"authorAuto\"\r\n                       placeholder=\"Author\">\r\n            </md-input-container>\r\n\r\n            <md-autocomplete #authorAuto=\"mdAutocomplete\">\r\n                <md-option *ngFor=\"let author of authors\"\r\n                           [value]=\"author\">\r\n                    {{ author }}\r\n                </md-option>\r\n            </md-autocomplete>\r\n\r\n            <md-input-container>\r\n                <input mdInput\r\n                       formControlName=\"artist\"\r\n                       name=\"artist\"\r\n                       [mdAutocomplete]=\"artistAuto\"\r\n                       placeholder=\"Artist\">\r\n            </md-input-container>\r\n\r\n            <md-autocomplete #artistAuto=\"mdAutocomplete\">\r\n                <md-option *ngFor=\"let artist of artists\"\r\n                           [value]=\"artist\">\r\n                    {{ artist }}\r\n                </md-option>\r\n            </md-autocomplete>\r\n\r\n            <md-select formControlName=\"type\"\r\n                       name=\"type\"\r\n                       placeholder=\"Type\">\r\n                <md-option *ngFor=\"let type of types\"\r\n                           [value]=\"type\">{{type}}</md-option>\r\n            </md-select>\r\n\r\n            <md-checkbox name=\"isCompleted\"\r\n                         formControlName=\"isCompleted\">\r\n                Completely Scanlated?\r\n            </md-checkbox>\r\n\r\n            <md-input-container>\r\n                <textarea mdInput\r\n                          formControlName=\"synopsis\"\r\n                          name=\"synopsis\"\r\n                          placeholder=\"Synopsys\"></textarea>\r\n            </md-input-container>\r\n        </div>\r\n    </div>\r\n    <div>\r\n        <tag-input formControlName='genres'\r\n                   name=\"genres\"\r\n                   theme='weeb-theme'\r\n                   [onlyFromAutocomplete]=\"true\"\r\n                   [modelAsStrings]='true'\r\n                   [placeholder]='\"Add more\"'\r\n                   [secondaryPlaceholder]='\"Add some genres\"'>\r\n            <tag-input-dropdown [autocompleteItems]=\"genres\"\r\n                                [showDropdownIfEmpty]=\"true\">\r\n            </tag-input-dropdown>\r\n        </tag-input>\r\n\r\n        <tag-input formControlName='categories'\r\n                   name=\"categories\"\r\n                   theme='weeb-theme'\r\n                   [modelAsStrings]='true'\r\n                   [placeholder]='\"Add more\"'\r\n                   [secondaryPlaceholder]='\"Add some categories\"'\r\n                   [transform]=\"transformLowerCasedCapitalized\">\r\n            <tag-input-dropdown [showDropdownIfEmpty]=\"true\"\r\n                                [autocompleteItems]=\"categories\">\r\n            </tag-input-dropdown>\r\n        </tag-input>\r\n    </div>\r\n    <div class=\"mu-import-container\">\r\n        <span>OR</span>\r\n        <button class=\"\"\r\n                md-raised-button\r\n                [color]=\"'primary'\"\r\n                (click)=\"openImportFromMuDialog()\">IMPORT</button>\r\n    </div>\r\n    <button class=\"submit-btn\"\r\n            [disabled]=\"!mangaForm.valid\"\r\n            md-raised-button\r\n            [color]=\"'accent'\"\r\n            (click)=\"submit()\">Submit</button>\r\n</form>"

/***/ }),

/***/ 310:
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <app-main-nav></app-main-nav>\r\n  <main class=\"mat-app-background\">\r\n    <router-outlet></router-outlet>\r\n  </main>\r\n</div>\r\n"

/***/ }),

/***/ 311:
/***/ (function(module, exports) {

module.exports = "<div class=\"auth-container\">\r\n    <h1>{{title}}</h1>\r\n\r\n    <form [formGroup]=\"authForm\"\r\n          (ngSubmit)=\"submitForm()\">\r\n        <fieldset [disabled]=\"isSubmitting\">\r\n            <md-input-container class=\"full-width\"\r\n                                *ngIf=\"authType === 'register'\">\r\n                <input formControlName=\"username\"\r\n                       mdInput\r\n                       placeholder=\"Username\"\r\n                       type=\"text\">\r\n            </md-input-container>\r\n            <md-input-container class=\"full-width\">\r\n                <input formControlName=\"email\"\r\n                       mdInput\r\n                       placeholder=\"Email\"\r\n                       type=\"email\">\r\n                <md-error>\r\n                    <span *ngIf=\"authForm.controls['email'].hasError('required'); else emailFormatError\">Email is required</span>\r\n                    <ng-template #emailFormatError>\r\n                        <span>Email is invalid</span>\r\n                    </ng-template>\r\n                </md-error>\r\n            </md-input-container>\r\n            <md-input-container class=\"full-width\">\r\n                <input formControlName=\"password\"\r\n                       mdInput\r\n                       placeholder=\"Password\"\r\n                       type=\"password\">\r\n                <md-error>\r\n                    <span>Email is required</span>\r\n                </md-error>\r\n            </md-input-container>\r\n\r\n            <button class=\"\"\r\n                    color='primary'\r\n                    [disabled]=\"!authForm.valid\"\r\n                    md-raised-button\r\n                    type=\"submit\">\r\n              {{ title }}\r\n            </button>\r\n            <a *ngIf=\"authType === 'register'\"\r\n               routerLink=\"/auth/login\">\r\n                Already have an account?\r\n               </a>\r\n            <a *ngIf=\"authType === 'login'\"\r\n               routerLink=\"/auth/register\">\r\n                Make an account\r\n               </a>\r\n        </fieldset>\r\n    </form>\r\n</div>"

/***/ }),

/***/ 312:
/***/ (function(module, exports) {

module.exports = "<div class=\"manga-cover-grid\">\r\n  <div class=\"loading-mangas\"\r\n       *ngIf=\"loading; else mangacovers\">\r\n    <md-spinner></md-spinner>\r\n  </div>\r\n  <ng-template #mangacovers>\r\n    <app-manga-cover *ngFor=\"let manga of mangas\"\r\n                     class=\"manga-cover-grid__cover\"\r\n                     [mangaSlug]=\"manga.slug\"\r\n                     [mangaName]=\"manga.title\"\r\n                     [mangaCoverUrl]=\"manga.coverUrl\"\r\n                     [mangaSynopsis]=\"manga.synopsis\"></app-manga-cover>\r\n  </ng-template>\r\n</div>"

/***/ }),

/***/ 313:
/***/ (function(module, exports) {

module.exports = "<div class=\"mangaCover\"\r\n     (click)=\"openDetail()\">\r\n  <div class=\"mangaCover__container\">\r\n    <img src={{mangaCoverUrl}}\r\n         alt=\"\"\r\n         class=\"mangaCover__img\">\r\n    <div class=\"mangaCover_content\">\r\n      <div class=\"mangaCover__actions\">\r\n        <favorite-btn class=\"mangaCover__actions__favorite\" mangaSlug=\"{{mangaSlug}}\"></favorite-btn>\r\n      </div>\r\n      <perfect-scrollbar class=\"mangaCover__synopsis\">\r\n        {{mangaSynopsis}}\r\n      </perfect-scrollbar>\r\n      <span class=\"mangaCover__title\">{{mangaName}}</span>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ 314:
/***/ (function(module, exports) {

module.exports = "<div class=\"manga-detail-root\">\r\n    <div class=\"img-info-cols\">\r\n        <div class=\"img-info-cols__img\">\r\n            <img src=\"{{manga.coverUrl}}\"\r\n                 alt=\"\">\r\n        </div>\r\n        <div class=\"img-info-cols__info\">\r\n            <h1 class=\"manga__title\">{{manga.title}}</h1>\r\n            <small class=\"label\">Also known as</small>\r\n            <div class=\"manga__alternative-titles\">\r\n                <div class=\"chip\"\r\n                     *ngFor=\"let title of manga.alternativeTitles\">{{title}}</div>\r\n            </div>\r\n            <small class=\"label\">Synopsis</small>\r\n            <perfect-scrollbar class=\"manga__synopsis\">\r\n                {{manga.synopsis}}\r\n            </perfect-scrollbar>\r\n            <small class=\"label\">Author</small>\r\n            <a href=\"#\"\r\n               class=\"chip chip--link\"\r\n               [routerLink]=\"['/search']\"\r\n               [queryParams]=\"{ author: manga.author }\">{{manga.author}}</a>\r\n            <small class=\"label\">Artist</small>\r\n            <a href=\"#\"\r\n               class=\"chip chip--link\"\r\n               [routerLink]=\"['/search']\"\r\n               [queryParams]=\"{ artist: manga.artist }\">{{manga.artist}}</a>\r\n            <small class=\"label\">Type</small>\r\n            <span>{{manga.type}}</span>\r\n            <small class=\"label\">Completely scanlated</small>\r\n            <div class=\"manga__completed\"\r\n                 [ngClass]=\"{'is-completed': manga.isCompleted}\">\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div>\r\n        <small class=\"label\">Genres</small>\r\n        <div class=\"manga__genres\">\r\n            <a href=\"\"\r\n               class=\"chip chip--link\"\r\n               *ngFor=\"let genre of manga.genres\"\r\n               [routerLink]=\"['/search']\"\r\n               [queryParams]=\"{ genres: [genre] }\">{{genre}}</a>\r\n        </div>\r\n        <small class=\"label\">Categories</small>\r\n        <div class=\"manga__categories\">\r\n            <a href=\"\"\r\n               class=\"chip chip--link\"\r\n               *ngFor=\"let category of manga.categories\"\r\n               [routerLink]=\"['/search']\"\r\n               [queryParams]=\"{ categories: [category] }\">{{category}}</a>\r\n        </div>\r\n    </div>\r\n    <div class=\"admin-actions\"\r\n         *showToLoggedIn=\"true\">\r\n        <favorite-btn mangaSlug=\"{{manga.slug}}\"></favorite-btn>\r\n        <a *showToAdmin\r\n           [routerLink]=\"['/edit', manga.slug]\">\r\n             <i class=\"ion-edit\"></i>\r\n         </a>\r\n        <a (click)=\"deleteManga()\"\r\n           *showToAdmin\r\n           href=\"javascript:void(null)\">\r\n            <i class=\"ion-trash-b\"></i>\r\n        </a>\r\n    </div>\r\n</div>"

/***/ }),

/***/ 315:
/***/ (function(module, exports) {

module.exports = "<div class=\"favorite-btn\"\r\n     (click)=\"toggleFavorite($event)\"\r\n     [ngClass]=\"{'favorited': favorited}\"\r\n     *showToLoggedIn=\"true\">\r\n    <i class=\"ion-heart\"></i>\r\n</div>"

/***/ }),

/***/ 316:
/***/ (function(module, exports) {

module.exports = "<nav class=\"main-nav\">\r\n  <div class=\"main-nav__logo\">\r\n    <a routerLink=\"/\">\r\n      <img src=\"../../assets/logo.png\" alt=\"\">\r\n    </a>\r\n  </div>\r\n  <div class=\"main-nav__searchbar\">\r\n    <input class=\"main-nav__searchbar__input\"\r\n           type=\"search\"\r\n           name=\"search\"\r\n           value=\"\"\r\n           [(ngModel)]=\"searchTerm\"\r\n           (click)=\"navigateToSearch()\"\r\n           (keyup)=\"search()\"\r\n           (keyup.enter)=\"search()\">\r\n  </div>\r\n  <ul class=\"main-nav__menu\">\r\n    <a routerLink=\"/\"\r\n       routerLinkActive=\"active\">\r\n      <li>Home</li>\r\n    </a>\r\n    <a routerLink=\"edit/add\"\r\n       routerLinkActive=\"active\"\r\n       *showToAdmin>\r\n      <li>Add a manga</li>\r\n    </a>\r\n    <a routerLink=\"auth\"\r\n       routerLinkActive=\"active\"\r\n       *showToLoggedIn=\"false\">\r\n      <li>Log in</li>\r\n    </a>\r\n    <a (click)=\"logOut()\"\r\n       href=\"javascript:void(0)\"\r\n       *showToLoggedIn=\"true\">\r\n      <li>Log out</li>\r\n    </a>\r\n  </ul>\r\n  <div class=\"main-nav__user-avatar\">\r\n\r\n  </div>\r\n</nav>"

/***/ }),

/***/ 317:
/***/ (function(module, exports) {

module.exports = "<div class=\"dialog\">\r\n    <md-tab-group (selectChange)=\"resetCoversArrays($event)\">\r\n        <!--SEARCH BY TITLE-->\r\n        <md-tab label=\"MangacoverDB search\">\r\n            <div class=\"tab-content\">\r\n                <div class=\"searchbar\">\r\n                    <md-input-container>\r\n                        <input mdInput\r\n                               placeholder=\"Search for title\"\r\n                               [(ngModel)]=\"titleSearchField\"\r\n                               (keyup.enter)=\"searchForTitle()\">\r\n                    </md-input-container>\r\n                    <button type=\"button\"\r\n                            md-button\r\n                            (click)=\"searchForTitle()\">Search</button>\r\n                </div>\r\n                <div class=\"search-results\"\r\n                     [ngClass]=\"{'itemSelected': selectedTitleIndex != undefined}\">\r\n                    <div *ngFor=\"let searchResult of searchResults; let i = index\"\r\n                         class=\"search-results__result\"\r\n                         [ngClass]=\"{'selected': i == selectedTitleIndex }\"\r\n                         (click)=\"toggleSelectTitle(searchResult.id, i)\">\r\n                        <span>{{searchResult.title}}</span>\r\n                    </div>\r\n                </div>\r\n                <div class=\"cover-results\">\r\n                    <div *ngFor=\"let cover of covers\"\r\n                         class=\"cover-results__result\"\r\n                         [ngClass]=\"{'selected': cover === selectedCover}\"\r\n                         [ngStyle]=\"{'background-image': 'url(' + cover + ')'}\"\r\n                         (click)=\"toggleSelectCover(cover)\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </md-tab>\r\n\r\n        <!--SEARCH BY IMG URL-->\r\n        <md-tab label=\"Image URL\">\r\n            <div class=\"tab-content\">\r\n                <div class=\"tab-content__searchbar\">\r\n                    <md-input-container>\r\n                        <input mdInput\r\n                               placeholder=\"Image url\"\r\n                               [(ngModel)]=\"imgUrlSearchField\"\r\n                               (keyup.enter)=\"searchForImgUrl()\">\r\n                    </md-input-container>\r\n                    <button type=\"button\"\r\n                            md-button\r\n                            (click)=\"searchForImgUrl()\">Search</button>\r\n                </div>\r\n                <div class=\"cover-results\">\r\n                    <div class=\"cover-results__result\"\r\n                         *ngFor=\"let cover of covers\"\r\n                         [ngClass]=\"{'selected': cover === selectedCover}\"\r\n                         [ngStyle]=\"{'background-image': 'url(' + cover + ')'}\"\r\n                         (click)=\"toggleSelectCover(cover)\"></div>\r\n                </div>\r\n            </div>\r\n        </md-tab>\r\n\r\n        <!--SEARCH BY ID-->\r\n        <md-tab label=\"MangacoverDB ID\">\r\n            <div class=\"tab-content\">\r\n                <div class=\"tab-content__searchbar\">\r\n                    <md-input-container>\r\n                        <input mdInput\r\n                               placeholder=\"Id or https://\"\r\n                               [(ngModel)]=\"idSearchField\"\r\n                               (keyup.enter)=\"searchForIdOrLink()\">\r\n                    </md-input-container>\r\n                    <button type=\"button\"\r\n                            md-button\r\n                            (click)=\"searchForIdOrLink()\">Search</button>\r\n                </div>\r\n                <div class=\"cover-results\">\r\n                    <div class=\"cover-results__result\"\r\n                         *ngFor=\"let cover of covers\"\r\n                         [ngClass]=\"{'selected': cover === selectedCover}\"\r\n                         [ngStyle]=\"{'background-image': 'url(' + cover + ')'}\"\r\n                         (click)=\"toggleSelectCover(cover)\"></div>\r\n                </div>\r\n            </div>\r\n        </md-tab>\r\n    </md-tab-group>\r\n    <div class=\"dialog-buttons\">\r\n        <button type=\"button\"\r\n                md-button\r\n                (click)=\"cancelDialog()\">Cancel</button>\r\n        <button type=\"button\"\r\n                md-raised-button\r\n                [disabled]=\"!isSelectedCover\"\r\n                (click)=\"submitDialog()\">OK</button>\r\n    </div>\r\n</div>"

/***/ }),

/***/ 318:
/***/ (function(module, exports) {

module.exports = "<div class=\"dialog\">\r\n    <md-tab-group>\r\n        <md-tab label=\"Search\">\r\n            <div class=\"tab-content\">\r\n                <div class=\"searchbar\">\r\n                <md-input-container>\r\n                    <input mdInput\r\n                           placeholder=\"Search for title\"\r\n                           [(ngModel)]=\"titleSearchField\"\r\n                           (keyup.enter)=\"searchForTitle()\">\r\n                </md-input-container>\r\n                <button type=\"button\"\r\n                        md-button\r\n                        (click)=\"searchForTitle()\">Search</button>\r\n            </div>\r\n            <div class=\"search-results\">\r\n                <div *ngFor=\"let searchResult of searchResults; let i = index\"\r\n                     class=\"search-results__result\"\r\n                     [ngClass]=\"{'selected': i == selectedIndex}\"\r\n                     (click)=\"toggleSelectTitle(i)\">\r\n                    <span>{{searchResult.title}}</span>\r\n                    <small>{{searchResult.genres}}</small>\r\n                </div>\r\n            </div>\r\n            </div>\r\n        </md-tab>\r\n        <md-tab label=\"With ID or URL\">\r\n\r\n        </md-tab>\r\n    </md-tab-group>\r\n    <div class=\"dialog-buttons\">\r\n        <button type=\"button\"\r\n                md-button\r\n                (click)=\"cancelDialog()\">Cancel</button>\r\n        <button type=\"button\"\r\n                md-raised-button\r\n                [disabled]=\"selectedId == undefined\"\r\n                (click)=\"submitDialog()\">OK</button>\r\n    </div>\r\n</div>"

/***/ }),

/***/ 319:
/***/ (function(module, exports) {

module.exports = "<div class=\"yes-no-dialog dialog\">\r\n    <h2 md-dialog-title>{{dialogTitle}}</h2>\r\n    <md-dialog-content>{{dialogContent}}</md-dialog-content>\r\n    <md-dialog-actions class=\"dialog-button\">\r\n        <button md-button\r\n                md-dialog-close\r\n                type=\"button\">No</button>\r\n        <button md-button\r\n                md-button-raised\r\n                [md-dialog-close]=\"true\"\r\n                type=\"button\">Yes</button>\r\n    </md-dialog-actions>\r\n</div>"

/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__jwt_service__ = __webpack_require__(78);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







//import { JwtService } from './jwt.service';
var ApiService = (function () {
    function ApiService(http, jwtService) {
        this.http = http;
        this.jwtService = jwtService;
    }
    ApiService.prototype.setHeaders = function () {
        var headersConfig = {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        };
        if (this.jwtService.getToken()) {
            headersConfig['Authorization'] = "Token " + this.jwtService.getToken();
        }
        return new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Headers */](headersConfig);
    };
    ApiService.prototype.formatErrors = function (error) {
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].throw(error.json());
    };
    ApiService.prototype.get = function (path, params) {
        if (params === void 0) { params = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* URLSearchParams */](); }
        return this.http.get("" + __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].api_url + path, { headers: this.setHeaders(), search: params })
            .catch(this.formatErrors)
            .map(function (res) { return res.json(); });
    };
    ApiService.prototype.put = function (path, body) {
        if (body === void 0) { body = {}; }
        return this.http.put("" + __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].api_url + path, JSON.stringify(body), { headers: this.setHeaders() })
            .catch(this.formatErrors)
            .map(function (res) { return res.json(); });
    };
    ApiService.prototype.post = function (path, body) {
        if (body === void 0) { body = {}; }
        return this.http.post("" + __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].api_url + path, JSON.stringify(body), { headers: this.setHeaders() })
            .catch(this.formatErrors)
            .map(function (res) { return res.json(); });
    };
    ApiService.prototype.delete = function (path) {
        return this.http.delete("" + __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].api_url + path, { headers: this.setHeaders() })
            .catch(this.formatErrors)
            .map(function (res) { return res.json(); });
    };
    return ApiService;
}());
ApiService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__jwt_service__["a" /* JwtService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__jwt_service__["a" /* JwtService */]) === "function" && _b || Object])
], ApiService);

var _a, _b;
//# sourceMappingURL=api.service.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_service__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3____ = __webpack_require__(30);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MangaService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MangaService = (function () {
    function MangaService(apiService) {
        this.apiService = apiService;
    }
    MangaService.prototype.getMangaWithSlug = function (slug) {
        var _this = this;
        return this.apiService.get('/mangas/' + slug).toPromise().then(function (res) {
            return _this.responseToManga(res.manga);
        });
    };
    MangaService.prototype.getAllMangas = function (from, to) {
        if (from === void 0) { from = 0; }
        if (to === void 0) { to = 100; }
        return this.apiService.get('/mangas').toPromise().then(function (res) { return res.mangas; });
    };
    MangaService.prototype.getMangasMatching = function (searchTerm) {
        return this.apiService.get('/mangas/search/' + searchTerm).toPromise();
    };
    MangaService.prototype.getAllMangasWithParams = function (params) {
        return this.apiService.post('/mangas/advanced-search', params).toPromise().then(function (res) {
            return res.mangas;
        });
    };
    MangaService.prototype.addManga = function (manga) {
        var _this = this;
        return this.apiService.post('/mangas', {
            "manga": manga.toJSON()
        }).toPromise().then(function (res) {
            return _this.responseToManga(res.manga);
        });
    };
    MangaService.prototype.editMangaWithSlug = function (manga) {
        var _this = this;
        return this.apiService.put('/mangas/' + manga.slug, {
            "manga": manga.toJSON()
        }).toPromise()
            .then(function (res) {
            return _this.responseToManga(res.manga);
        });
    };
    MangaService.prototype.deleteMangaWithSlug = function (slug) {
        var _this = this;
        return this.apiService.delete('/mangas/' + slug).toPromise().then(function (res) {
            return _this.responseToManga(res.manga);
        });
    };
    MangaService.prototype.isMangaWithSlugFavorited = function (slug) {
        return this.apiService.get('/mangas/' + slug + "/isfavorited").toPromise().then(function (res) {
            return res.isFavorite;
        });
    };
    MangaService.prototype.favoriteMangaWithSlug = function (slug) {
        return this.apiService.put('/mangas/' + slug + "/favorite").toPromise().then(function (res) {
        });
    };
    MangaService.prototype.unfavoriteMangaWithSlug = function (slug) {
        return this.apiService.put('/mangas/' + slug + "/unfavorite").toPromise().then(function (res) {
        });
    };
    MangaService.prototype.responseToManga = function (responseManga) {
        var manga = new __WEBPACK_IMPORTED_MODULE_3____["c" /* Manga */]();
        manga.alternativeTitles = responseManga.alternativeTitles;
        manga.artist = responseManga.artist;
        manga.author = responseManga.author;
        manga.categories = responseManga.categories;
        manga.coverUrl = responseManga.coverUrl;
        manga.genres = responseManga.genres;
        manga.isCompleted = responseManga.isCompleted;
        manga.slug = responseManga.slug;
        manga.synopsis = responseManga.synopsis;
        manga.title = responseManga.title;
        manga.type = responseManga.type;
        return manga;
    };
    return MangaService;
}());
MangaService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */]) === "function" && _a || Object])
], MangaService);

var _a;
//# sourceMappingURL=mangas.service.js.map

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var SearchService = (function () {
    function SearchService() {
        this.searches = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.searchResults = this.searches
            .debounceTime(300)
            .distinctUntilChanged();
    }
    SearchService.prototype.search = function (searchTerm) {
        this.searches.next(searchTerm);
    };
    return SearchService;
}());
SearchService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], SearchService);

//# sourceMappingURL=search.service.js.map

/***/ }),

/***/ 570:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(191);


/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_favorite_btn_favorite_btn_component__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__directives_show_admin_directive__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__directives_show_logged_in_directive__ = __webpack_require__(215);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__components_favorite_btn_favorite_btn_component__["a" /* FavoriteButtonComponent */],
            __WEBPACK_IMPORTED_MODULE_4__directives_show_admin_directive__["a" /* ShowToAdminDirective */],
            __WEBPACK_IMPORTED_MODULE_5__directives_show_logged_in_directive__["a" /* ShowToLoggedInDirective */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_3__components_favorite_btn_favorite_btn_component__["a" /* FavoriteButtonComponent */],
            __WEBPACK_IMPORTED_MODULE_4__directives_show_admin_directive__["a" /* ShowToAdminDirective */],
            __WEBPACK_IMPORTED_MODULE_5__directives_show_logged_in_directive__["a" /* ShowToLoggedInDirective */]
        ]
    })
], SharedModule);

//# sourceMappingURL=shared.module.js.map

/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Manga; });
var Manga = (function () {
    function Manga() {
    }
    /**
     * Return the JSON equivalent of the object (for HTTP)
     */
    Manga.prototype.toJSON = function () {
        return {
            "alternativeTitles": this.alternativeTitles,
            "artist": this.artist,
            "author": this.author,
            "categories": this.categories,
            "coverUrl": this.coverUrl,
            "genres": this.genres,
            "isCompleted": this.isCompleted,
            "synopsis": this.synopsis,
            "title": this.title,
            "type": this.type
        };
    };
    Manga.prototype.toNullSafe = function () {
        var manga = this;
        manga.alternativeTitles = manga.alternativeTitles ? manga.alternativeTitles : [];
        manga.artist = manga.artist ? manga.artist : "";
        manga.author = manga.author ? manga.author : "";
        manga.categories = manga.categories ? manga.categories : [];
        manga.coverUrl = manga.coverUrl ? manga.coverUrl : "";
        manga.genres = manga.genres ? manga.genres : [];
        manga.isCompleted = manga.isCompleted ? manga.isCompleted : false;
        manga.slug = manga.slug ? manga.slug : "";
        manga.synopsis = manga.synopsis ? manga.synopsis : "";
        manga.title = manga.title ? manga.title : "";
        manga.type = manga.type ? manga.type : "";
        return manga;
    };
    return Manga;
}());

//# sourceMappingURL=manga.js.map

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cover_picker_component__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__import_from_mu_component__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__yes_no_component__ = __webpack_require__(112);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DialogsService = (function () {
    function DialogsService(dialog) {
        this.dialog = dialog;
    }
    DialogsService.prototype.openImportFromMangaUpdatesDialog = function (height, width) {
        if (height === void 0) { height = 700; }
        if (width === void 0) { width = 600; }
        var dialogRef;
        dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__import_from_mu_component__["a" /* ImportFromMangaUpdatesComponent */], {
            height: height + 'px',
            width: width + 'px',
        });
        return dialogRef.afterClosed().toPromise();
    };
    DialogsService.prototype.openCoverPickerDialog = function (id, title, height, width) {
        if (id === void 0) { id = ""; }
        if (title === void 0) { title = ""; }
        if (height === void 0) { height = 700; }
        if (width === void 0) { width = 600; }
        var dialogRef;
        dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__cover_picker_component__["a" /* CoverPickerDialog */], {
            height: height + 'px',
            width: width + 'px',
        });
        dialogRef.componentInstance.id = id;
        dialogRef.componentInstance.title = title;
        return dialogRef.afterClosed().toPromise();
    };
    DialogsService.prototype.openYesNoDialog = function (title, body) {
        if (title === void 0) { title = ""; }
        if (body === void 0) { body = ""; }
        var dialogRef;
        dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__yes_no_component__["a" /* YesNoDialogComponent */], {
            height: '700 px',
            width: '600 px',
        });
        dialogRef.componentInstance.dialogTitle = title;
        dialogRef.componentInstance.dialogContent = body;
        return dialogRef.afterClosed().toPromise();
    };
    return DialogsService;
}());
DialogsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MdDialog */]) === "function" && _a || Object])
], DialogsService);

var _a;
//# sourceMappingURL=dialogs.service.js.map

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JwtService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var JwtService = (function () {
    function JwtService() {
        this.tokenName = "weebJwtToken";
    }
    JwtService.prototype.getToken = function () {
        return window.localStorage[this.tokenName];
    };
    JwtService.prototype.saveToken = function (token) {
        window.localStorage[this.tokenName] = token;
    };
    JwtService.prototype.destroyToken = function () {
        window.localStorage.removeItem(this.tokenName);
    };
    return JwtService;
}());
JwtService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], JwtService);

//# sourceMappingURL=jwt.service.js.map

/***/ })

},[570]);
//# sourceMappingURL=main.bundle.js.map