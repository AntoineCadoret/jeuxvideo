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
    var Fond1 = (function (_super) {
        __extends(Fond1, _super);
        function Fond1(refScene, unX, unY) {
            return _super.call(this, refScene, unX, unY) || this;
        }
        Fond1.prototype.dessiner = function () {
            window.lib.mcfond1Fond1.call(this);
            this.frameBounds = window.lib.mcfond1Fond1.prototype.frameBounds;
        };
        Fond1.prototype.arreterFond1 = function () {
            this.arreterObjVisible();
        };
        return Fond1;
    }(ObjetVisible_1.ObjetVisible));
    exports.Fond1 = Fond1;
});
//# sourceMappingURL=Fond1.js.map