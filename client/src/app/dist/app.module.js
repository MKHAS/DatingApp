"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var animations_1 = require("@angular/platform-browser/animations");
var nav_component_1 = require("./nav/nav.component");
var forms_1 = require("@angular/forms");
var home_component_1 = require("./home/home.component");
var register_component_1 = require("./register/register.component");
var member_list_component_1 = require("./members/member-list/member-list.component");
var member_detail_component_1 = require("./members/member-detail/member-detail.component");
var lists_component_1 = require("./lists/lists.component");
var messages_component_1 = require("./messages/messages.component");
var shared_module_1 = require("./_modules/shared.module");
var test_errors_component_1 = require("./errors/test-errors/test-errors.component");
var error_interceptor_1 = require("./_interceptors/error.interceptor");
var not_found_component_1 = require("./errors/not-found/not-found.component");
var server_error_component_1 = require("./errors/server-error/server-error.component");
var member_card_component_1 = require("./members/member-card/member-card.component");
var jwt_interceptor_1 = require("./_interceptors/jwt.interceptor");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                nav_component_1.NavComponent,
                home_component_1.HomeComponent,
                register_component_1.RegisterComponent,
                member_list_component_1.MemberListComponent,
                member_detail_component_1.MemberDetailComponent,
                lists_component_1.ListsComponent,
                messages_component_1.MessagesComponent,
                test_errors_component_1.TestErrorsComponent,
                not_found_component_1.NotFoundComponent,
                server_error_component_1.ServerErrorComponent,
                member_card_component_1.MemberCardComponent,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                http_1.HttpClientModule,
                animations_1.BrowserAnimationsModule,
                forms_1.FormsModule,
                shared_module_1.SharedModule
            ],
            providers: [
                { provide: http_1.HTTP_INTERCEPTORS, useClass: error_interceptor_1.ErrorInterceptor, multi: true },
                { provide: http_1.HTTP_INTERCEPTORS, useClass: jwt_interceptor_1.JwtInterceptor, multi: true },
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
