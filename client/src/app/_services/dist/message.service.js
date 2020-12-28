"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MessageService = void 0;
var core_1 = require("@angular/core");
var environment_1 = require("src/environments/environment");
var paginationhelper_1 = require("./paginationhelper");
var MessageService = /** @class */ (function () {
    function MessageService(http) {
        this.http = http;
        this.baseUrl = environment_1.environment.apiUrl;
    }
    MessageService.prototype.getMessages = function (pageNumber, pageSize, container) {
        var params = paginationhelper_1.getPaginationHeaders(pageNumber, pageSize);
        params = params.append('Container', container);
        return paginationhelper_1.getPaginatedResult(this.baseUrl + 'messages', params, this.http);
    };
    MessageService.prototype.getMessageThread = function (username) {
        return this.http.get(this.baseUrl + 'messages/thread/' + username);
    };
    MessageService.prototype.sendMessage = function (username, content) {
        return this.http.post(this.baseUrl + 'messages', { recipientUsername: username, content: content });
    };
    MessageService.prototype.deleteMessage = function (id) {
        return this.http["delete"](this.baseUrl + 'messages/' + id);
    };
    MessageService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], MessageService);
    return MessageService;
}());
exports.MessageService = MessageService;
