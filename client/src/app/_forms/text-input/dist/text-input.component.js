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
exports.TextInputComponent = void 0;
var core_1 = require("@angular/core");
var TextInputComponent = /** @class */ (function () {
    function TextInputComponent(ngControl
    // this makes sure that angular doesn't wrap this injector
    ) {
        this.ngControl = ngControl;
        this.type = 'text';
        this.ngControl.valueAccessor = this;
        // by adding 'this' we now have access to our control inside this component when we use it inside our register form
    }
    TextInputComponent.prototype.writeValue = function (obj) { };
    TextInputComponent.prototype.registerOnChange = function (fn) { };
    TextInputComponent.prototype.registerOnTouched = function (fn) { };
    __decorate([
        core_1.Input()
    ], TextInputComponent.prototype, "label");
    __decorate([
        core_1.Input()
    ], TextInputComponent.prototype, "type");
    TextInputComponent = __decorate([
        core_1.Component({
            selector: 'app-text-input',
            templateUrl: './text-input.component.html',
            styleUrls: ['./text-input.component.css']
        }),
        __param(0, core_1.Self())
    ], TextInputComponent);
    return TextInputComponent;
}());
exports.TextInputComponent = TextInputComponent;
