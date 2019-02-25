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
define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Created by etu08 on 18-04-13.
     */
    var ObjetVisible = (function (_super) {
        __extends(ObjetVisible, _super);
        //constructeur
        function ObjetVisible(refStage, unX, unY) {
            var _this = _super.call(this) || this;
            _this.maScene = null;
            _this.enMvt = false;
            _this.dessiner();
            _this.gotoAndStop(0);
            _this.maScene = refStage;
            _this.maScene.addChild(_this);
            _this.x = unX;
            _this.y = unY;
            return _this;
        }
        ObjetVisible.prototype.arreterObjVisible = function () {
            this.maScene.removeChild(this);
        };
        return ObjetVisible;
    }(createjs.MovieClip));
    exports.ObjetVisible = ObjetVisible;
});
//# sourceMappingURL=ObjetVisible.js.map