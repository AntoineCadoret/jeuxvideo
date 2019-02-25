import {ObjetVisible} from "./ObjetVisible";
export class Niveau1 extends ObjetVisible{
    private monJeu = null;
    private maMinuterie =null;
    public constructor(refScene,unX, unY, refJeu){
        super(refScene, unX, unY);
        this.monJeu=refJeu;
        this.maMinuterie = setInterval(this.debuterJeu.bind(this),2000);

    }
    protected dessiner(){
        window.lib.mcniveau1Niveau1.call(this);
        this.frameBounds = window.lib.mcniveau1Niveau1.prototype.frameBounds;
    }
    private debuterJeu(){
        this.monJeu.debuterNiveau1();
        this.monJeu.supprimerNiveau1();
    }
    public arreterNiveau1(){
        window.clearInterval(this.maMinuterie);
        this.maMinuterie = null;
        this.arreterObjVisible();
    }
}