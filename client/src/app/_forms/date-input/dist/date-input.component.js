"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
exports.DateInputComponent = void 0;
var core_1 = require("@angular/core");
var DateInputComponent = /** @class */ (function () {
    // use Self so that dependencies are injected locally
    function DateInputComponent(ngControl) {
        this.ngControl = ngControl;
        this.ngControl.valueAccessor = this;
        this.bsConfig = {
            containerClass: 'theme-red',
            dateInputFormat: 'DD MMMM YYYY'
        };
    }
    DateInputComponent.prototype.writeValue = function (obj) {
    };
    DateInputComponent.prototype.registerOnChange = function (fn) {
    };
    DateInputComponent.prototype.registerOnTouched = function (fn) {
    };
    __decorate([
        core_1.Input()
    ], DateInputComponent.prototype, "label");
    __decorate([
        core_1.Input()
    ], DateInputComponent.prototype, "maxDate");
    DateInputComponent = __decorate([
        core_1.Component({
            selector: 'app-date-input',
            templateUrl: './date-input.component.html',
            styleUrls: ['./date-input.component.css']
        }),
        __param(0, core_1.Self())
    ], DateInputComponent);
    return DateInputComponent;
}());
exports.DateInputComponent = DateInputComponent;
