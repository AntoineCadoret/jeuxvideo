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
    var Defaite = (function (_super) {
        __extends(Defaite, _super);
        function Defaite(refScene, unX, unY, refJeu, refPointage) {
            var _this = _super.call(this, refScene, unX, unY) || this;
            _this.monJeu = null;
            _this.debuterJeu_lier = null;
            _this.monJeu = refJeu;
            _this.debuterJeu_lier = _this.debuterJeu.bind(_this);
            _this['btRejouer_mc'].addEventListener("click", _this.debuterJeu_lier);
            _this['texteDefait_txt'].text = "Vous avez fait " + refPointage + " points!";
            return _this;
        }
        Defaite.prototype.dessiner = function () {
            window.lib.mcdefaiteDefaite.call(this);
            this.frameBounds = window.lib.mcdefaiteDefaite.prototype.frameBounds;
        };
        Defaite.prototype.debuterJeu = function () {
            this.monJeu.creerNiveau1();
            this.monJeu.supprimerDefaite();
        };
        Defaite.prototype.arreterDefaite = function () {
            this['btRejouer_mc'].removeEventListener("click", this.debuterJeu_lier);
            this.arreterObjVisible();
        };
        return Defaite;
    }(ObjetVisible_1.ObjetVisible));
    exports.Defaite = Defaite;
});
//# sourceMappingURL=Defaite.js.map