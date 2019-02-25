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
    var Niveau2 = (function (_super) {
        __extends(Niveau2, _super);
        function Niveau2(refScene, unX, unY, refJeu) {
            var _this = _super.call(this, refScene, unX, unY) || this;
            _this.monJeu = null;
            _this.maMinuterie = null;
            _this.monJeu = refJeu;
            _this.maMinuterie = setInterval(_this.debuterJeu.bind(_this), 2000);
            return _this;
        }
        Niveau2.prototype.dessiner = function () {
            window.lib.mcniveau2Niveau2.call(this);
            this.frameBounds = window.lib.mcniveau2Niveau2.prototype.frameBounds;
        };
        Niveau2.prototype.debuterJeu = function () {
            this.monJeu.debuterNiveau2();
            this.monJeu.supprimerNiveau2();
        };
        Niveau2.prototype.arreterNiveau2 = function () {
            window.clearInterval(this.maMinuterie);
            this.maMinuterie = null;
            this.arreterObjVisible();
        };
        return Niveau2;
    }(ObjetVisible_1.ObjetVisible));
    exports.Niveau2 = Niveau2;
});
//# sourceMappingURL=Niveau2.js.map