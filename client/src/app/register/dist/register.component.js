"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.RegisterComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(accountService, toastr, fb, router) {
        this.accountService = accountService;
        this.toastr = toastr;
        this.fb = fb;
        this.router = router;
        this.cancelRegister = new core_1.EventEmitter();
        this.validationErrors = [];
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.initializeForm();
        this.maxDate = new Date();
        this.maxDate.setFullYear(this.maxDate.getFullYear() - 18);
    };
    RegisterComponent.prototype.initializeForm = function () {
        this.registerForm = this.fb.group({
            gender: ['male'],
            username: ['', forms_1.Validators.required],
            knownAs: ['', forms_1.Validators.required],
            dateOfBirth: ['', forms_1.Validators.required],
            city: ['', forms_1.Validators.required],
            country: ['', forms_1.Validators.required],
            password: [
                '',
                [forms_1.Validators.required, forms_1.Validators.minLength(4), forms_1.Validators.maxLength(8)],
            ],
            confirmPassword: [
                '',
                [forms_1.Validators.required, this.matchValues('password')],
            ]
        });
    };
    RegisterComponent.prototype.matchValues = function (matchTo) {
        return function (control) {
            var _a;
            return (control === null || control === void 0 ? void 0 : control.value) === ((_a = control === null || control === void 0 ? void 0 : control.parent) === null || _a === void 0 ? void 0 : _a.controls[matchTo].value)
                ? null
                : { isMatching: true };
        };
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.accountService.register(this.registerForm.value).subscribe(function (response) {
            _this.router.navigateByUrl('/members');
        }, function (error) {
            _this.validationErrors = error;
        });
    };
    RegisterComponent.prototype.cancel = function () {
        this.cancelRegister.emit(false);
    };
    __decorate([
        core_1.Output()
    ], RegisterComponent.prototype, "cancelRegister");
    RegisterComponent = __decorate([
        core_1.Component({
            selector: 'app-register',
            templateUrl: './register.component.html',
            styleUrls: ['./register.component.css']
        })
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
