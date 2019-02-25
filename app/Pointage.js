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
    var Pointage = (function (_super) {
        __extends(Pointage, _super);
        function Pointage(refScene, unX, unY, refNiveau, refJeu) {
            var _this = _super.call(this, refScene, unX, unY) || this;
            _this.score = 0;
            _this.monJeu = null;
            _this.monNiveau = null;
            _this.monJeu = refJeu;
            _this.monNiveau = refNiveau;
            return _this;
        }
        Pointage.prototype.dessiner = function () {
            window.lib.mcpointagePointage.call(this);
            this.frameBounds = window.lib.mcpointagePointage.prototype.frameBounds;
        };
        Pointage.prototype.majPointage = function () {
            this.score = this.score + 200;
            var textPointage = null;
            if (this.score < 1000) {
                //0000100
                textPointage = "0000" + this.score;
            }
            else {
                if (this.score < 10000) {
                    textPointage = "000" + this.score;
                }
                else {
                    if (this.score < 100000) {
                        textPointage = "000" + this.score;
                    }
                    else {
                        textPointage = "000" + this.score;
                    }
                }
            }
            this['pointage_txt'].text = textPointage;
            if (this.monNiveau == 1) {
                if (this.score == 4000) {
                    this.monJeu.supprimerJeu();
                    this.monJeu.creerNiveau2();
                }
            }
            else {
                if (this.score == 10000) {
                    createjs.Sound.play("sonsVictoire");
                    this.monJeu.supprimerJeu();
                    this.monJeu.creerVictoire();
                }
            }
        };
        Pointage.prototype.retournerPointage = function () {
            return this.score;
        };
        Pointage.prototype.arreterPointage = function () {
            this.arreterObjVisible();
        };
        return Pointage;
    }(ObjetVisible_1.ObjetVisible));
    exports.Pointage = Pointage;
});
//# sourceMappingURL=Pointage.js.map