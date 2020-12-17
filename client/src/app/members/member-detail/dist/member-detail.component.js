"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MemberDetailComponent = void 0;
var core_1 = require("@angular/core");
var ngx_gallery_1 = require("@kolkov/ngx-gallery");
var MemberDetailComponent = /** @class */ (function () {
    function MemberDetailComponent(memberService, route) {
        this.memberService = memberService;
        this.route = route;
    }
    MemberDetailComponent.prototype.ngOnInit = function () {
        this.loadMember();
        this.galleryOptions = [
            {
                width: '500px',
                height: '500px',
                imagePercent: 100,
                thumbnailsColumns: 4,
                imageAnimation: ngx_gallery_1.NgxGalleryAnimation.Slide,
                preview: false
            }
        ];
    };
    MemberDetailComponent.prototype.getImages = function () {
        var imageUrls = [];
        for (var _i = 0, _a = this.member.photos; _i < _a.length; _i++) {
            var photo = _a[_i];
            imageUrls.push({
                small: photo === null || photo === void 0 ? void 0 : photo.url,
                medium: photo === null || photo === void 0 ? void 0 : photo.url,
                big: photo === null || photo === void 0 ? void 0 : photo.url
            });
        }
        return imageUrls;
    };
    MemberDetailComponent.prototype.loadMember = function () {
        var _this = this;
        this.memberService.getMember(this.route.snapshot.paramMap.get('username')).subscribe(function (member) {
            _this.member = member;
            _this.galleryImages = _this.getImages();
        });
    };
    MemberDetailComponent = __decorate([
        core_1.Component({
            selector: 'app-member-detail',
            templateUrl: './member-detail.component.html',
            styleUrls: ['./member-detail.component.css']
        })
    ], MemberDetailComponent);
    return MemberDetailComponent;
}());
exports.MemberDetailComponent = MemberDetailComponent;
