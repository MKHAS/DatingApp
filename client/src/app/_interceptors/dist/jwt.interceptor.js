"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.JwtInterceptor = void 0;
var core_1 = require("@angular/core");
var operators_1 = require("rxjs/operators");
var JwtInterceptor = /** @class */ (function () {
    function JwtInterceptor(accountService) {
        this.accountService = accountService;
    }
    JwtInterceptor.prototype.intercept = function (request, next) {
        var currentUser;
        this.accountService.currentUser$.pipe(operators_1.take(1)).subscribe(function (user) { return currentUser = user; });
        if (currentUser) {
            request = request.clone({
                setHeaders: {
                    // attach our token for every request when we're
                    // logged in and send that up with our request
                    Authorization: "Bearer " + currentUser.token
                }
            });
        }
        // and because we've cloned that request here when we return from this, it's that request
        // if we're logged in that's gonna receive our authorization header and send this up with our request
        return next.handle(request);
    };
    JwtInterceptor = __decorate([
        core_1.Injectable()
    ], JwtInterceptor);
    return JwtInterceptor;
}());
exports.JwtInterceptor = JwtInterceptor;
