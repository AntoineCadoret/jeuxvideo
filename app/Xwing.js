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
    var Xwing = (function (_super) {
        __extends(Xwing, _super);
        function Xwing(refStage, unX, unY, refCompteurVie, refJeu) {
            var _this = _super.call(this, refStage, unX, unY) || this;
            _this.tTouche = new Array(false, false, false, false);
            _this.monJeu = null;
            _this.estInvincible = false;
            _this.minuterieInvincible = null;
            _this.monEnergie = 5;
            _this.monCompteurVie = null;
            _this.tourneg = false;
            _this.tourned = false;
            _this.vie = 3;
            _this.tourTir = 0;
            _this.enTir = false;
            _this.minuterieTir = null;
            _this.refMinuterie = null;
            _this.tPointCollision = null;
            _this.tPointTir = null;
            _this.minuterieMort = null;
            _this.monJeu = refJeu;
            _this.monCompteurVie = refCompteurVie;
            _this.tPointCollision = new Array();
            _this.tPointCollision[0] = _this['vaisseau_mc']['p0_mc'];
            _this.tPointCollision[1] = _this['vaisseau_mc']['p1_mc'];
            _this.tPointCollision[2] = _this['vaisseau_mc']['p2_mc'];
            _this.tPointTir = new Array();
            _this.tPointTir[0] = _this['vaisseau_mc']['t0_mc'];
            _this.tPointTir[1] = _this['vaisseau_mc']['t1_mc'];
            window.onkeydown = _this.faireBougerXwing.bind(_this);
            window.onkeyup = _this.desactiverTouche.bind(_this);
            return _this;
        }
        Xwing.prototype.dessiner = function () {
            window.lib.mcxwingXwing.call(this);
            this.frameBounds = window.lib.mcxwingXwing.prototype.frameBounds;
        };
        Xwing.prototype.faireBougerXwing = function (evenement) {
            // ESPACE = 32; FLECHE_HAUT = 38; FLECHE_BAS = 40; FLECHE_GAUCHE = 37; FLECHE_DROITE = 39;
            console.log(evenement.keyCode);
            switch (evenement.keyCode) {
                case 39:
                case 68:
                    //flèche droite
                    this.tTouche[0] = true;
                    if (this.tourned == false) {
                        this.tourned = true;
                        this.gotoAndPlay("tourner_d");
                    }
                    event.preventDefault();
                    break;
                case 65:
                case 37:
                    //flèchegauche
                    this.tTouche[1] = true;
                    if (this.tourneg == false) {
                        this.tourneg = true;
                        this.gotoAndPlay("tourner_g");
                    }
                    evenement.preventDefault();
                    break;
                case 87:
                case 38:
                    //flèche haut
                    this.tTouche[2] = true;
                    this['vaisseau_mc'].gotoAndPlay("avancer");
                    evenement.preventDefault();
                    break;
                case 83:
                case 40:
                    //flèche bas
                    this.tTouche[3] = true;
                    evenement.preventDefault();
                    break;
                case 32:
                    //espace
                    this.debuterTir();
                    evenement.preventDefault();
                    break;
            }
            if (this.tTouche.indexOf(true) != -1 && this.refMinuterie == null) {
                this.refMinuterie = window.setInterval(this.bouger.bind(this), 25);
            }
        };
        Xwing.prototype.desactiverTouche = function (evenement) {
            switch (evenement.keyCode) {
                case 39:
                case 68:
                    //flèche droite
                    this.tTouche[0] = false;
                    this.gotoAndPlay("retour_d");
                    this.tourned = false;
                    break;
                case 37:
                case 65:
                    //flèchegauche
                    this.tTouche[1] = false;
                    this.gotoAndPlay("retour_g");
                    this.tourneg = false;
                    break;
                case 38:
                case 87:
                    //flèche haut
                    this.tTouche[2] = false;
                    this['vaisseau_mc'].gotoAndPlay("normal");
                    break;
                case 83:
                case 40:
                    //flèche bas
                    this.tTouche[3] = false;
                    break;
                case 32:
                    //espace
                    this.arreterTir();
                    break;
            }
            if (this.tTouche.indexOf(true) == -1) {
                window.clearInterval(this.refMinuterie);
                this.refMinuterie = null;
            }
        };
        Xwing.prototype.bouger = function (evenement) {
            if (this.tTouche[0] == true) {
                if (this.x < Xwing.limite.droite)
                    this.x = this.x + 5;
                // evenement.preventDefault();
            }
            if (this.tTouche[1] == true) {
                if (this.x > Xwing.limite.gauche) {
                    this.x = this.x - 5;
                }
                // evenement.preventDefault();
            }
            if (this.tTouche[2] == true) {
                if (this.y > Xwing.limite.haut) {
                    this.y = this.y - 5;
                }
                // evenement.preventDefault();
            }
            if (this.tTouche[3] == true) {
                if (this.y < Xwing.limite.bas)
                    this.y = this.y + 5;
                // evenement.preventDefault();
            }
        };
        Xwing.prototype.debuterTir = function () {
            var positionDepart = null;
            positionDepart = this.tPointTir[0];
            this.tourTir = 1;
            console.log(this.tPointTir);
            var monPointLocalAuDemandeur = positionDepart.parent.localToLocal(positionDepart.x, positionDepart.y, this.maScene);
            if (this.enTir == false) {
                this.monJeu.creerTir(monPointLocalAuDemandeur["x"], monPointLocalAuDemandeur["y"]);
                this.minuterieTir = window.setInterval(this.tirer.bind(this), 800);
                this.enTir = true;
            }
        };
        Xwing.prototype.tirer = function () {
            var unX = 0;
            var unY = 0;
            var positionDepart = null;
            if (this.tourTir == 0) {
                positionDepart = this.tPointTir[0];
                this.tourTir = 1;
            }
            else {
                positionDepart = this.tPointTir[1];
                this.tourTir = 0;
            }
            console.log(this.tPointTir);
            var monPointLocalAuDemandeur = positionDepart.parent.localToLocal(positionDepart.x, positionDepart.y, this.maScene);
            this.monJeu.creerTir(monPointLocalAuDemandeur["x"], monPointLocalAuDemandeur["y"]);
        };
        Xwing.prototype.arreterTir = function () {
            this.enTir = false;
            window.clearInterval(this.minuterieTir);
            this.minuterieTir = null;
        };
        Xwing.prototype.enCollisionGrossiere = function (refDemandeur) {
            var monRect = this.getTransformedBounds();
            var rectDemandeur = refDemandeur.getTransformedBounds();
            var enCollision = monRect.intersects(rectDemandeur);
            return enCollision;
        };
        Xwing.prototype.enCollisionFine = function (refDemandeur) {
            var indexPoint = -1;
            // Pour chacun de mes points de contact
            for (var intCpt = 0; intCpt < this.tPointCollision.length && indexPoint == -1; intCpt++) {
                var monPoint = this.tPointCollision[intCpt];
                // Convertir mon point en coordonnée local au demandeur
                var monPointLocalAuDemandeur = monPoint.parent.localToLocal(monPoint.x, monPoint.y, refDemandeur);
                if (refDemandeur.hitTest(monPointLocalAuDemandeur.x, monPointLocalAuDemandeur.y)) {
                    indexPoint = intCpt;
                }
            }
            return indexPoint;
        };
        Xwing.prototype.invincible = function () {
            return this.estInvincible;
        };
        Xwing.prototype.majVie = function () {
            if (this.estInvincible == false) {
                if (this.monEnergie > 1) {
                    this.monEnergie = this.monEnergie - 1;
                    this.monCompteurVie.majEnergie(this.monEnergie);
                }
                else {
                    if (this.vie > 1) {
                        this.vie = this.vie - 1;
                        this.monEnergie = 5;
                        this.monCompteurVie.majCompteur(this.vie);
                        this.monCompteurVie.majEnergie(this.monEnergie);
                    }
                    else {
                        this.debuterAgonie();
                    }
                }
                this.activerInvincibilite();
            }
        };
        Xwing.prototype.debuterAgonie = function () {
            this.gotoAndPlay("mort");
            createjs.Sound.play("sonsExplosion");
            this.minuterieMort = window.setInterval(this.arreterAgonie.bind(this), 400);
        };
        Xwing.prototype.arreterAgonie = function () {
            this.monJeu.creerDefaite();
            this.monJeu.supprimerJeu();
            window.clearInterval(this.minuterieMort);
            this.minuterieMort = null;
        };
        Xwing.prototype.activerInvincibilite = function () {
            this.estInvincible = true;
            this.alpha = 0.6;
            console.log("estInvincible");
            this.minuterieInvincible = window.setInterval(this.desactiverInvincibilite.bind(this), 1750);
        };
        Xwing.prototype.desactiverInvincibilite = function (evenement) {
            this.estInvincible = false;
            this.alpha = 1;
            console.log("InvincibleDesactiver");
            window.clearInterval(this.minuterieInvincible);
            this.minuterieInvincible = null;
        };
        Xwing.prototype.arreterXwing = function () {
            window.clearInterval(this.refMinuterie);
            this.refMinuterie = null;
            this.arreterObjVisible();
        };
        Xwing.limite = { haut: 0, bas: 750, gauche: 10, droite: 550 };
        return Xwing;
    }(ObjetVisible_1.ObjetVisible));
    exports.Xwing = Xwing;
});
//# sourceMappingURL=Xwing.js.map