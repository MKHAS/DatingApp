"use strict";
// SECTION 16 PART 191 NOTES:
// Messages is a child component of member detail page
// when our member detail page is constructed it also contructs the child inputs
// and because in our child inputs in the ngOnInit we've got a call to load messages
// that's what going in here
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
    // initializing this here lets us use messages.length (like on line 68)
    // \to check if the array is empty, we run into null pointer exception otherwise
    function MemberDetailComponent(memberService, route, messageService) {
        this.memberService = memberService;
        this.route = route;
        this.messageService = messageService;
        this.messages = [];
    }
    MemberDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (data) {
            _this.member = data.member;
        });
        this.route.queryParams.subscribe(function (params) {
            params.tab ? _this.selectTab(params.tab) : _this.selectTab(0);
        });
        this.galleryOptions = [
            {
                width: '500px',
                height: '500px',
                imagePercent: 100,
                thumbnailsColumns: 4,
                imageAnimation: ngx_gallery_1.NgxGalleryAnimation.Slide,
                preview: false
            },
        ];
        this.galleryImages = this.getImages();
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
    MemberDetailComponent.prototype.selectTab = function (tabId) {
        this.memberTabs.tabs[tabId].active = true;
    };
    MemberDetailComponent.prototype.loadMessages = function () {
        var _this = this;
        this.messageService
            .getMessageThread(this.member.username)
            .subscribe(function (messages) {
            _this.messages = messages;
        });
    };
    MemberDetailComponent.prototype.onTabActivated = function (data) {
        this.activeTab = data;
        if (this.activeTab.heading === 'Messages' && this.messages.length === 0) {
            this.loadMessages();
        }
    };
    __decorate([
        core_1.ViewChild('memberTabs', { static: true })
    ], MemberDetailComponent.prototype, "memberTabs");
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
