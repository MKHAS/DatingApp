"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MemberEditComponent = void 0;
var core_1 = require("@angular/core");
var operators_1 = require("rxjs/operators");
var MemberEditComponent = /** @class */ (function () {
    function MemberEditComponent(accountService, memberService, toastr) {
        var _this = this;
        this.accountService = accountService;
        this.memberService = memberService;
        this.toastr = toastr;
        this.accountService.currentUser$
            .pipe(operators_1.take(1))
            .subscribe(function (user) { return (_this.user = user); });
    }
    MemberEditComponent.prototype.unloadNotification = function ($event) {
        if (this.editForm.dirty) {
            $event.returnValue = true;
        }
    };
    MemberEditComponent.prototype.ngOnInit = function () {
        this.loadMember();
    };
    MemberEditComponent.prototype.loadMember = function () {
        var _this = this;
        this.memberService.getMember(this.user.username).subscribe(function (member) {
            _this.member = member;
        });
    };
    MemberEditComponent.prototype.updateMember = function () {
        var _this = this;
        this.memberService.updateMember(this.member).subscribe(function () {
            _this.toastr.success('Profile Updated Successfully');
            _this.editForm.reset(_this.member);
        });
    };
    __decorate([
        core_1.ViewChild('editForm')
    ], MemberEditComponent.prototype, "editForm");
    __decorate([
        core_1.HostListener('window:beforeunload', ['$event'])
    ], MemberEditComponent.prototype, "unloadNotification");
    MemberEditComponent = __decorate([
        core_1.Component({
            selector: 'app-member-edit',
            templateUrl: './member-edit.component.html',
            styleUrls: ['./member-edit.component.css']
        })
    ], MemberEditComponent);
    return MemberEditComponent;
}());
exports.MemberEditComponent = MemberEditComponent;
