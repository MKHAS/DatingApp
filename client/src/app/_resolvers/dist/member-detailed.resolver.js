"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MemberDetailedResolver = void 0;
var core_1 = require("@angular/core");
var MemberDetailedResolver = /** @class */ (function () {
    function MemberDetailedResolver(memberService) {
        this.memberService = memberService;
    }
    // we dont need to subscribe inside of root resolvers, the rooter does it automatically
    // it also deals with the unsub
    MemberDetailedResolver.prototype.resolve = function (route) {
        // you can use this to get any data you want
        // if you want your data before you construct the template
        return this.memberService.getMember(route.paramMap.get('username'));
    };
    MemberDetailedResolver = __decorate([
        core_1.Injectable({
            providedIn: 'root'
            // resolvers are instantiated the same way as services
        })
    ], MemberDetailedResolver);
    return MemberDetailedResolver;
}());
exports.MemberDetailedResolver = MemberDetailedResolver;
