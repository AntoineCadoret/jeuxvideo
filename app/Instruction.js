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
    var Instruction = (function (_super) {
        __extends(Instruction, _super);
        function Instruction(refScene, unX, unY, refJeu) {
            var _this = _super.call(this, refScene, unX, unY) || this;
            _this.monJeu = null;
            _this.debuterJeu_lier = null;
            _this.monJeu = refJeu;
            _this.debuterJeu_lier = _this.debuterJeu.bind(_this);
            _this['btPlay_mc'].addEventListener("click", _this.debuterJeu_lier);
            return _this;
        }
        Instruction.prototype.dessiner = function () {
            window.lib.mcinstructionInstruction.call(this);
            this.frameBounds = window.lib.mcinstructionInstruction.prototype.frameBounds;
        };
        Instruction.prototype.debuterJeu = function () {
            this.monJeu.creerNiveau1();
            this.monJeu.supprimerInstruction();
        };
        Instruction.prototype.arreterInstruction = function () {
            this['btPlay_mc'].removeEventListener("click", this.debuterJeu_lier);
            this.arreterObjVisible();
        };
        return Instruction;
    }(ObjetVisible_1.ObjetVisible));
    exports.Instruction = Instruction;
});
//# sourceMappingURL=Instruction.js.map