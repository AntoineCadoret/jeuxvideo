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
    /**
     * Created by etu08 on 18-04-19.
     */
    var Meteorite = (function (_super) {
        __extends(Meteorite, _super);
        function Meteorite(refScene, unX, unY, departX, refXwing, refJeu) {
            var _this = _super.call(this, refScene, unX, unY, refJeu) || this;
            _this.sens = null;
            _this.monXwing = null;
            _this.avancer_lier = null;
            _this.verifier_lier = null;
            _this.sens = departX;
            _this.monXwing = refXwing;
            _this.vitesse = Math.floor(Math.random() * 70) + 50;
            _this.avancer_lier = _this.avancer.bind(_this);
            _this.verifier_lier = _this.verifierCollision.bind(_this);
            _this.sensDeplacement();
            return _this;
        }
        Meteorite.prototype.dessiner = function () {
            window.lib.mcmeteoriteMeteorite.call(this);
            this.frameBounds = window.lib.mcmeteoriteMeteorite.prototype.frameBounds;
        };
        Meteorite.prototype.sensDeplacement = function () {
            var departY = 0;
            if (this.sens == 1) {
                this.sensX = 1;
            }
            else {
                this.sensX = -1;
            }
            departY = Math.floor((Math.random() * 2) + 1);
            if (departY == 1) {
                this.sensY = 1;
            }
            else {
                this.sensY = -1;
            }
            this.addEventListener("tick", this.avancer_lier);
            this.addEventListener("tick", this.verifier_lier);
        };
        Meteorite.prototype.verifierCollision = function (evenement) {
            if (this.monXwing.invincible() == false) {
                if (this.monXwing.enCollisionGrossiere(this) == true) {
                    console.log(this);
                    var indexPoint = this.monXwing.enCollisionFine(this);
                    if (indexPoint != -1) {
                        createjs.Sound.play("sonsToucher");
                        this.monXwing.majVie();
                    }
                }
            }
        };
        Meteorite.prototype.gererFinDeScene = function () {
            var largeurScene = window.lib.properties.width;
            var hauteurScene = window.lib.properties.height;
            if (this.x > largeurScene || this.x < -40 || this.y > hauteurScene + 10 || this.y < -70) {
                return true;
            }
            else {
                return false;
            }
        };
        Meteorite.prototype.envoyerArreter = function () {
            this.monJeu.supprimerUneMeteorite(this);
        };
        Meteorite.prototype.arreterMeteorite = function () {
            this.removeEventListener("tick", this.avancer_lier);
            this.removeEventListener("tick", this.verifier_lier);
            this.arreterObjVisible();
        };
        return Meteorite;
    }(ObjetMobile_1.ObjetMobile));
    exports.Meteorite = Meteorite;
});
//# sourceMappingURL=Meteorite.js.map