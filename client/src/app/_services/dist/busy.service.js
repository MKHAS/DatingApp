"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.BusyService = void 0;
var core_1 = require("@angular/core");
var BusyService = /** @class */ (function () {
    function BusyService(spinnerService) {
        this.spinnerService = spinnerService;
        this.busyRequestCount = 0;
    }
    BusyService.prototype.busy = function () {
        this.busyRequestCount++;
        this.spinnerService.show(undefined, {
            type: 'line-scale-party',
            bdColor: 'rgba(255,255,255,0)',
            color: '#333333'
        });
    };
    BusyService.prototype.idle = function () {
        // safety mechanism to prevent it from going to -1
        this.busyRequestCount--;
        if (this.busyRequestCount <= 0) {
            this.busyRequestCount = 0;
            this.spinnerService.hide();
        }
    };
    BusyService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], BusyService);
    return BusyService;
}());
exports.BusyService = BusyService;
