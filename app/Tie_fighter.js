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
     * Created by etu08 on 18-04-18.
     */
    var Tie_fighter = (function (_super) {
        __extends(Tie_fighter, _super);
        function Tie_fighter(refStage, unX, unY, refXwing, reftProj, refPoint, refJeu) {
            var _this = _super.call(this, refStage, unX, unY, refJeu) || this;
            _this.avancer_lier = null;
            _this.monXwing = null;
            _this.monPointage = null;
            _this.tProjectile = null;
            _this.verifierCollision_lier = null;
            _this.verifierProjectile_lier = null;
            _this.minuterieSons = null;
            _this.minuterieMort = null;
            _this.estEnVie = true;
            _this.sensY = 1;
            _this.sensX = 0;
            _this.monXwing = refXwing;
            _this.tProjectile = reftProj;
            _this.monPointage = refPoint;
            _this.vitesse = Math.floor(Math.random() * 80) + 50;
            _this.avancer_lier = _this.avancer.bind(_this);
            _this.verifierCollision_lier = _this.verifierCollision.bind(_this);
            _this.verifierProjectile_lier = _this.verifierCollisionProjectile.bind(_this);
            _this.addEventListener("tick", _this.avancer_lier);
            _this.addEventListener("tick", _this.verifierCollision_lier);
            _this.addEventListener("tick", _this.verifierProjectile_lier);
            return _this;
        }
        Tie_fighter.prototype.dessiner = function () {
            window.lib.mctiefighterTiefighter.call(this);
            this.frameBounds = window.lib.mctiefighterTiefighter.prototype.frameBounds;
        };
        Tie_fighter.prototype.verifierCollision = function (evenement) {
            if (this.monXwing.enCollisionGrossiere(this) == true) {
                var indexPoint = this.monXwing.enCollisionFine(this);
                if (indexPoint != -1) {
                    if (this.estEnVie == true) {
                        this.estEnVie = false;
                        createjs.Sound.play("sonsToucher");
                        this.monXwing.majVie();
                        this.monJeu.supprimerUnTie(this);
                    }
                }
            }
        };
        Tie_fighter.prototype.verifierCollisionProjectile = function (evenement) {
            for (var indexProj = 0; indexProj < this.tProjectile.length; indexProj++) {
                if (this.tProjectile[indexProj].enCollisionGrossiere(this) == true) {
                    createjs.Sound.play("sonsToucher");
                    console.log("collision projectile");
                    this.monJeu.supprimerUnTir(this.tProjectile[indexProj]);
                    if (this.estEnVie == true) {
                        //this.gotoAndPlay("exploser");
                        this.estEnVie = false;
                        this.minuterieSons = window.setInterval(this.debuterAgonie.bind(this), 150);
                    }
                }
            }
        };
        Tie_fighter.prototype.debuterAgonie = function () {
            createjs.Sound.play("sonsExplosion");
            this.gotoAndPlay("exploser");
            this.minuterieMort = window.setInterval(this.arreterAgonie.bind(this), 300);
            window.clearInterval(this.minuterieSons);
            this.minuterieSons = null;
        };
        Tie_fighter.prototype.arreterAgonie = function () {
            this.monJeu.supprimerUnTie(this);
            window.clearInterval(this.minuterieMort);
            this.minuterieMort = null;
            this.monPointage.majPointage();
        };
        Tie_fighter.prototype.gererFinDeScene = function () {
            if (this.y >= 800) {
                return true;
            }
            else {
                return false;
            }
        };
        Tie_fighter.prototype.envoyerArreter = function () {
            this.monJeu.supprimerUnTie(this);
        };
        Tie_fighter.prototype.arreterTie = function () {
            this.removeEventListener("tick", this.verifierCollision_lier);
            this.removeEventListener("tick", this.verifierProjectile_lier);
            this.removeEventListener("tick", this.avancer_lier);
            this.arreterObjMobile();
        };
        return Tie_fighter;
    }(ObjetMobile_1.ObjetMobile));
    exports.Tie_fighter = Tie_fighter;
});
//# sourceMappingURL=Tie_fighter.js.map