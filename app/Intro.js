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
    var Intro = (function (_super) {
        __extends(Intro, _super);
        function Intro(refScene, unX, unY, refJeu) {
            var _this = _super.call(this, refScene, unX, unY) || this;
            _this.monJeu = null;
            _this.debuterInstruction_lier = null;
            _this.monJeu = refJeu;
            _this.debuterInstruction_lier = _this.debuterInstruction.bind(_this);
            _this['btSuite_mc'].addEventListener("click", _this.debuterInstruction_lier);
            return _this;
        }
        Intro.prototype.dessiner = function () {
            window.lib.mcintroIntro.call(this);
            this.frameBounds = window.lib.mcintroIntro.prototype.frameBounds;
        };
        Intro.prototype.debuterInstruction = function () {
            this.monJeu.creerInstruction();
            this.monJeu.supprimerIntro();
        };
        Intro.prototype.arreterIntro = function () {
            this['btSuite_mc'].removeEventListener("click", this.debuterInstruction_lier);
            this.arreterObjVisible();
        };
        return Intro;
    }(ObjetVisible_1.ObjetVisible));
    exports.Intro = Intro;
});
//# sourceMappingURL=Intro.js.map