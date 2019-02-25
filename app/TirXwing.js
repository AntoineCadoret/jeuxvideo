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
define(["require", "exports", "./ObjetMobile"], function (require, exports, ObjetMobile_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var TirXwing = (function (_super) {
        __extends(TirXwing, _super);
        function TirXwing(refScene, unX, unY, refJeu) {
            var _this = _super.call(this, refScene, unX, unY, refJeu) || this;
            _this.avancer_lier = null;
            _this.sensY = -1;
            _this.vitesse = 100;
            createjs.Sound.play("sonsTir");
            _this.avancer_lier = _this.avancer.bind(_this);
            _this.addEventListener("tick", _this.avancer_lier);
            return _this;
        }
        TirXwing.prototype.dessiner = function () {
            window.lib.mctiravatarTirAvatar.call(this);
            this.frameBounds = window.lib.mctiravatarTirAvatar.prototype.frameBounds;
        };
        TirXwing.prototype.enCollisionGrossiere = function (refDemandeur) {
            //console.log(refDemandeur);
            var monRect = this.getTransformedBounds();
            var rectDemandeur = refDemandeur.getTransformedBounds();
            var enCollision = monRect.intersects(rectDemandeur);
            return enCollision;
        };
        TirXwing.prototype.envoyerArreter = function () {
            this.monJeu.supprimerUnTir(this);
        };
        TirXwing.prototype.gererFinDeScene = function () {
            if (this.y <= 0) {
                return true;
            }
            else {
                return false;
            }
        };
        TirXwing.prototype.arreterTir = function () {
            this.removeEventListener("tick", this.avancer_lier);
            this.arreterObjMobile();
        };
        return TirXwing;
    }(ObjetMobile_1.ObjetMobile));
    exports.TirXwing = TirXwing;
});
//# sourceMappingURL=TirXwing.js.map