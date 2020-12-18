"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MembersService = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var environment_1 = require("src/environments/environment");
var MembersService = /** @class */ (function () {
    function MembersService(http) {
        this.http = http;
        this.baseUrl = environment_1.environment.apiUrl;
        this.members = [];
    }
    MembersService.prototype.getMembers = function () {
        var _this = this;
        if (this.members.length > 0) {
            return rxjs_1.of(this.members);
        }
        return this.http.get(this.baseUrl + 'users').pipe(operators_1.map(function (members) {
            _this.members = members;
            return members;
        }));
    };
    MembersService.prototype.getMember = function (username) {
        var member = this.members.find(function (x) { return x.username === username; });
        if (member !== undefined) {
            return rxjs_1.of(member);
        }
        return this.http.get(this.baseUrl + 'users/' + username);
    };
    MembersService.prototype.updateMember = function (member) {
        var _this = this;
        return this.http.put(this.baseUrl + 'users', member).pipe(operators_1.map(function () {
            var index = _this.members.indexOf(member);
            _this.members[index] = member;
        }));
    };
    MembersService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], MembersService);
    return MembersService;
}());
exports.MembersService = MembersService;
