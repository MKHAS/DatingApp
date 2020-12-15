"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ErrorInterceptor = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var ErrorInterceptor = /** @class */ (function () {
    function ErrorInterceptor(router, toastr) {
        this.router = router;
        this.toastr = toastr;
    }
    ErrorInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        return next.handle(request).pipe(operators_1.catchError(function (error) {
            if (error) {
                switch (error.status) {
                    case 400:
                        if (error.error.errors) {
                            var modalStateErrors = [];
                            for (var key in error.error.errors) {
                                if (error.error.errors[key]) {
                                    modalStateErrors.push(error.error.errors[key]);
                                }
                            }
                            throw modalStateErrors.flat();
                        }
                        else {
                            _this.toastr.error(error.statusText, error.status);
                        }
                        break;
                    case 401:
                        _this.toastr.error(error.statusText, error.status);
                        break;
                    case 404:
                        _this.router.navigateByUrl('/not-found');
                        break;
                    case 500:
                        var navigationExtras = {
                            state: { error: error.error }
                        };
                        _this.router.navigateByUrl('/server-error', navigationExtras);
                        break;
                    default:
                        _this.toastr.error('Something Unexpected Went Wrong');
                        console.log(error);
                        break;
                }
            }
            return rxjs_1.throwError(error);
        }));
    };
    ErrorInterceptor = __decorate([
        core_1.Injectable()
    ], ErrorInterceptor);
    return ErrorInterceptor;
}());
exports.ErrorInterceptor = ErrorInterceptor;
