"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MemberListComponent = void 0;
var core_1 = require("@angular/core");
var MemberListComponent = /** @class */ (function () {
    function MemberListComponent(memberService) {
        this.memberService = memberService;
        this.genderList = [{ value: 'male', display: 'Males' }, { value: 'female', display: 'Females' }];
        this.userParams = this.memberService.getUserParams();
    }
    MemberListComponent.prototype.ngOnInit = function () {
        this.loadMembers();
    };
    MemberListComponent.prototype.loadMembers = function () {
        var _this = this;
        this.memberService.setUserParams(this.userParams);
        this.memberService.getMembers(this.userParams).subscribe(function (response) {
            _this.members = response.result;
            _this.pagination = response.pagination;
        });
    };
    MemberListComponent.prototype.resetFilters = function () {
        this.userParams = this.memberService.resetUserParams();
        this.loadMembers();
    };
    MemberListComponent.prototype.pageChanged = function (event) {
        this.userParams.pageNumber = event.page;
        this.memberService.setUserParams(this.userParams);
        this.loadMembers();
    };
    MemberListComponent = __decorate([
        core_1.Component({
            selector: 'app-member-list',
            templateUrl: './member-list.component.html',
            styleUrls: ['./member-list.component.css']
        })
    ], MemberListComponent);
    return MemberListComponent;
}());
exports.MemberListComponent = MemberListComponent;
