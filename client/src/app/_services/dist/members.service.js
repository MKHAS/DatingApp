"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.MembersService = void 0;
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var environment_1 = require("src/environments/environment");
var pagination_1 = require("../_models/pagination");
var userParams_1 = require("../_models/userParams");
var MembersService = /** @class */ (function () {
    function MembersService(http, accountService) {
        var _this = this;
        this.http = http;
        this.accountService = accountService;
        this.baseUrl = environment_1.environment.apiUrl;
        this.members = [];
        this.memberCache = new Map();
        this.accountService.currentUser$.pipe(operators_1.take(1)).subscribe(function (user) {
            _this.user = user;
            _this.userParams = new userParams_1.UserParams(user);
        });
    }
    MembersService.prototype.getUserParams = function () {
        return this.userParams;
    };
    MembersService.prototype.setUserParams = function (params) {
        this.userParams = params;
    };
    MembersService.prototype.resetUserParams = function () {
        this.userParams = new userParams_1.UserParams(this.user);
        return this.userParams;
    };
    MembersService.prototype.getMembers = function (userParams) {
        var _this = this;
        var response = this.memberCache.get(Object.values(userParams).join('-'));
        if (response) {
            return rxjs_1.of(response);
        }
        var params = this.getPaginationHeaders(userParams.pageNumber, userParams.pageSize);
        params = params.append('minAge', userParams.minAge.toString());
        params = params.append('maxAge', userParams.maxAge.toString());
        params = params.append('gender', userParams.gender);
        params = params.append('orderBy', userParams.orderBy);
        // when we're using HttpGet normally this is gonna give us the response body
        // when we're observing the response and we pass up the params that we created here
        // then we get the full response back, it goesn't get the body of the response for us
        return this.getPaginatedResult(this.baseUrl + 'users', params).
            pipe(operators_1.map(function (response) {
            _this.memberCache.set(Object.values(userParams).join('-'), response);
            return response;
        }));
    };
    MembersService.prototype.getMember = function (username) {
        var member = __spreadArrays(this.memberCache.values()).reduce(function (arr, elem) { return arr.concat(elem.result); }, [])
            .find(function (member) { return member.username === username; });
        if (member) {
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
    MembersService.prototype.setMainPhoto = function (photoId) {
        return this.http.put(this.baseUrl + 'users/set-main-photo/' + photoId, {});
    };
    MembersService.prototype.deletePhoto = function (photoId) {
        return this.http["delete"](this.baseUrl + 'users/delete-photo/' + photoId);
    };
    MembersService.prototype.addLike = function (username) {
        return this.http.post(this.baseUrl + 'likes/' + username, {});
    };
    MembersService.prototype.getLikes = function (predicate, pageNumber, pageSize) {
        var params = this.getPaginationHeaders(pageNumber, pageSize);
        params = params.append('predicate', predicate);
        return this.getPaginatedResult(this.baseUrl + 'likes', params);
    };
    MembersService.prototype.getPaginatedResult = function (url, params) {
        var paginatedResult = new pagination_1.PaginatedResult();
        return this.http.get(url, { observe: 'response', params: params }).pipe(operators_1.map(function (response) {
            paginatedResult.result = response.body;
            if (response.headers.get('Pagination') !== null) {
                paginatedResult.pagination = JSON.parse(response.headers.get('Pagination'));
            }
            return paginatedResult;
        }));
    };
    MembersService.prototype.getPaginationHeaders = function (pageNumber, pageSize) {
        var params = new http_1.HttpParams();
        params = params.append('pageNumber', pageNumber.toString());
        params = params.append('pageSize', pageSize.toString());
        return params;
    };
    MembersService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], MembersService);
    return MembersService;
}());
exports.MembersService = MembersService;
