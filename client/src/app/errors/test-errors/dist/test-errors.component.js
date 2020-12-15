"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TestErrorsComponent = void 0;
var core_1 = require("@angular/core");
var TestErrorsComponent = /** @class */ (function () {
    function TestErrorsComponent(http) {
        this.http = http;
        this.baseUrl = 'https://localhost:5001/api/';
        this.validationErrors = [];
    }
    TestErrorsComponent.prototype.ngOnInit = function () { };
    TestErrorsComponent.prototype.get404Error = function () {
        this.http.get(this.baseUrl + 'buggy/not-found').subscribe(function (response) {
            console.log(response);
        }, function (error) {
            console.log(error);
        });
    };
    TestErrorsComponent.prototype.get400Error = function () {
        this.http.get(this.baseUrl + 'buggy/bad-request').subscribe(function (response) {
            console.log(response);
        }, function (error) {
            console.log(error);
        });
    };
    TestErrorsComponent.prototype.get500Error = function () {
        this.http.get(this.baseUrl + 'buggy/server-error').subscribe(function (response) {
            console.log(response);
        }, function (error) {
            console.log(error);
        });
    };
    TestErrorsComponent.prototype.get401Error = function () {
        this.http.get(this.baseUrl + 'buggy/auth').subscribe(function (response) {
            console.log(response);
        }, function (error) {
            console.log(error);
        });
    };
    TestErrorsComponent.prototype.get400ValidationError = function () {
        var _this = this;
        this.http.post(this.baseUrl + 'account/register', {}).subscribe(function (response) {
            console.log(response);
        }, function (error) {
            console.log(error);
            _this.validationErrors = error;
        });
    };
    TestErrorsComponent = __decorate([
        core_1.Component({
            selector: 'app-test-errors',
            templateUrl: './test-errors.component.html',
            styleUrls: ['./test-errors.component.css']
        })
    ], TestErrorsComponent);
    return TestErrorsComponent;
}());
exports.TestErrorsComponent = TestErrorsComponent;
