"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SharedModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var dropdown_1 = require("ngx-bootstrap/dropdown");
var ngx_toastr_1 = require("ngx-toastr");
var tabs_1 = require("ngx-bootstrap/tabs");
var ngx_gallery_1 = require("@kolkov/ngx-gallery");
var ng2_file_upload_1 = require("ng2-file-upload");
var datepicker_1 = require("ngx-bootstrap/datepicker");
var pagination_1 = require("ngx-bootstrap/pagination");
var buttons_1 = require("ngx-bootstrap/buttons");
var ngx_timeago_1 = require("ngx-timeago");
var modal_1 = require("ngx-bootstrap/modal");
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        core_1.NgModule({
            declarations: [],
            imports: [
                common_1.CommonModule,
                dropdown_1.BsDropdownModule.forRoot(),
                ngx_toastr_1.ToastrModule.forRoot({
                    positionClass: 'toast-bottom-right'
                }),
                tabs_1.TabsModule.forRoot(),
                ngx_gallery_1.NgxGalleryModule,
                ng2_file_upload_1.FileUploadModule,
                datepicker_1.BsDatepickerModule.forRoot(),
                // for any angular bootstrap component we need to user forRoot()
                pagination_1.PaginationModule.forRoot(),
                buttons_1.ButtonsModule.forRoot(),
                ngx_timeago_1.TimeagoModule.forRoot(),
                modal_1.ModalModule.forRoot()
            ],
            exports: [
                dropdown_1.BsDropdownModule,
                ngx_toastr_1.ToastrModule,
                tabs_1.TabsModule,
                ngx_gallery_1.NgxGalleryModule,
                ng2_file_upload_1.FileUploadModule,
                datepicker_1.BsDatepickerModule,
                pagination_1.PaginationModule,
                buttons_1.ButtonsModule,
                ngx_timeago_1.TimeagoModule,
                modal_1.ModalModule
            ]
        })
    ], SharedModule);
    return SharedModule;
}());
exports.SharedModule = SharedModule;
