import {ObjetVisible} from "./ObjetVisible";
import {Jeu} from "./Jeu";
export class Niveau2 extends ObjetVisible{
    private monJeu:Jeu = null;
    private maMinuterie =null;
    public constructor(refScene,unX:number, unY:number, refJeu:Jeu){
        super(refScene, unX, unY);
        this.monJeu=refJeu;
        this.maMinuterie = setInterval(this.debuterJeu.bind(this),2000);

    }
    protected dessiner(){
        window.lib.mcniveau2Niveau2.call(this);
        this.frameBounds = window.lib.mcniveau2Niveau2.prototype.frameBounds;
    }
    private debuterJeu(){
        this.monJeu.debuterNiveau2();
        this.monJeu.supprimerNiveau2();
    }
    public arreterNiveau2(){
        window.clearInterval(this.maMinuterie);
        this.maMinuterie = null;
        this.arreterObjVisible();
    }
}
