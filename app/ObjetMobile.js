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
    var ObjetMobile = (function (_super) {
        __extends(ObjetMobile, _super);
        function ObjetMobile(refScene, unX, unY, refJeu) {
            var _this = _super.call(this, refScene, unX, unY) || this;
            _this.monJeu = null;
            _this.vitesse = null;
            _this.sensX = null;
            _this.sensY = null;
            _this.monJeu = refJeu;
            return _this;
        }
        ObjetMobile.prototype.avancer = function (evenement) {
            var estMort = false;
            this.x = this.x + (evenement.delta / 1000) * (this.vitesse * this.sensX);
            this.y = this.y + (evenement.delta / 1000) * (this.vitesse * this.sensY);
            estMort = this.gererFinDeScene();
            if (estMort == true) {
                this.envoyerArreter();
            }
        };
        ObjetMobile.prototype.arreterObjMobile = function () {
            this.arreterObjVisible();
        };
        return ObjetMobile;
    }(ObjetVisible_1.ObjetVisible));
    exports.ObjetMobile = ObjetMobile;
});
//# sourceMappingURL=ObjetMobile.js.map