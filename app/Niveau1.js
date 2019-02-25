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
    var Niveau1 = (function (_super) {
        __extends(Niveau1, _super);
        function Niveau1(refScene, unX, unY, refJeu) {
            var _this = _super.call(this, refScene, unX, unY) || this;
            _this.monJeu = null;
            _this.maMinuterie = null;
            _this.monJeu = refJeu;
            _this.maMinuterie = setInterval(_this.debuterJeu.bind(_this), 2000);
            return _this;
        }
        Niveau1.prototype.dessiner = function () {
            window.lib.mcniveau1Niveau1.call(this);
            this.frameBounds = window.lib.mcniveau1Niveau1.prototype.frameBounds;
        };
        Niveau1.prototype.debuterJeu = function () {
            this.monJeu.debuterNiveau1();
            this.monJeu.supprimerNiveau1();
        };
        Niveau1.prototype.arreterNiveau1 = function () {
            window.clearInterval(this.maMinuterie);
            this.maMinuterie = null;
            this.arreterObjVisible();
        };
        return Niveau1;
    }(ObjetVisible_1.ObjetVisible));
    exports.Niveau1 = Niveau1;
});
//# sourceMappingURL=Niveau1.js.map