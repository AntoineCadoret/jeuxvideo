define(["require", "exports", "./Jeu"], function (require, exports, Jeu_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var App = (function () {
        // Méthodes
        function App() {
            // Attributs
            this.stage = null;
            this.monJeu = null;
            window.init(this); // Initialiser l'animation avec le méthode générée par Animate CC.
        }
        App.prototype.initialiser = function (refScene) {
            // Initialisation des attributs relatifs à l'animation ------------------------------------------------------------------
            this.stage = refScene;
            createjs.Ticker.framerate = 30; // Récupérer la références de la scène nouvellement créée
            this.monJeu = new Jeu_1.Jeu(this.stage);
            // ----------------------------------------------------------------------------------------------------------------------
        };
        return App;
    }());
    exports.App = App;
});
//# sourceMappingURL=App.js.map