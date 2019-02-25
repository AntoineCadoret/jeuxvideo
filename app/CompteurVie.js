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
    var CompteurVie = (function (_super) {
        __extends(CompteurVie, _super);
        function CompteurVie(refScene, unX, unY) {
            var _this = _super.call(this, refScene, unX, unY) || this;
            _this.vieRestante = null;
            _this.vieRestante = _this['vieRestant_mc'];
            return _this;
        }
        CompteurVie.prototype.dessiner = function () {
            window.lib.mcvieVie.call(this);
            this.frameBounds = window.lib.mcvieVie.prototype.frameBounds;
        };
        CompteurVie.prototype.majEnergie = function (refEnergie) {
            this.vieRestante.gotoAndStop("vie" + refEnergie);
        };
        CompteurVie.prototype.majCompteur = function (refVie) {
            this['compteurVie_txt'].text = refVie;
        };
        CompteurVie.prototype.arreterCompteur = function () {
            this.arreterObjVisible();
        };
        return CompteurVie;
    }(ObjetVisible_1.ObjetVisible));
    exports.CompteurVie = CompteurVie;
});
//# sourceMappingURL=CompteurVie.js.map