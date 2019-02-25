var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define(["require", "exports", "./ObjetVisible"], function (require, exports, ObjetVisible_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Decor1 = (function (_super) {
        __extends(Decor1, _super);
        function Decor1(refScene, unX, unY) {
            var _this = _super.call(this, refScene, unX, unY) || this;
            _this.vitesse = 2;
            _this.addEventListener("tick", _this.avancer.bind(_this));
            return _this;
        }
        Decor1.prototype.dessiner = function () {
            window.lib.mcdecor1Decor1.call(this);
            this.frameBounds = window.lib.mcdecor1Decor1.prototype.frameBounds;
        };
        Decor1.prototype.avancer = function (evenement) {
            if (this.y == 800) {
                this.y = -400;
            }
            else {
                this.y = this.y + this.vitesse;
            }
        };
        Decor1.prototype.arreterDecor1 = function () {
            this.removeEventListener("tick", this.avancer.bind(this));
            this.arreterObjVisible();
        };
        return Decor1;
    }(ObjetVisible_1.ObjetVisible));
    exports.Decor1 = Decor1;
});
//# sourceMappingURL=Decor1.js.map