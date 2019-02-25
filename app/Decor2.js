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
    var Decor2 = (function (_super) {
        __extends(Decor2, _super);
        function Decor2(refScene, unX, unY) {
            var _this = _super.call(this, refScene, unX, unY) || this;
            _this.vitesse = 2;
            _this.addEventListener("tick", _this.avancer.bind(_this));
            return _this;
        }
        Decor2.prototype.dessiner = function () {
            window.lib.mcdecor2Decor2.call(this);
            this.frameBounds = window.lib.mcdecor2Decor2.prototype.frameBounds;
        };
        Decor2.prototype.avancer = function (evenement) {
            if (this.y == 800) {
                this.y = -400;
            }
            else {
                this.y = this.y + this.vitesse;
            }
        };
        Decor2.prototype.arreterDecor2 = function () {
            this.removeEventListener("tick", this.avancer.bind(this));
            this.arreterObjVisible();
        };
        return Decor2;
    }(ObjetVisible_1.ObjetVisible));
    exports.Decor2 = Decor2;
});
//# sourceMappingURL=Decor2.js.map