/**
 * Created by etu08 on 18-04-13.
 */
import {Jeu} from "./Jeu";
export class App {

    // Attributs
    private stage: createjs.Stage = null;

    private monJeu: Jeu = null;


    // Méthodes

    public constructor() {
        window.init(this); 	// Initialiser l'animation avec le méthode générée par Animate CC.
    }

    public initialiser(refScene: createjs.Stage) {

        // Initialisation des attributs relatifs à l'animation ------------------------------------------------------------------
        this.stage = refScene;
        createjs.Ticker.framerate = 30;  // Récupérer la références de la scène nouvellement créée
        this.monJeu = new Jeu(this.stage);
        // ----------------------------------------------------------------------------------------------------------------------


    }
}