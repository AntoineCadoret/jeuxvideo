import {ObjetVisible} from "./ObjetVisible";
export class Victoire extends ObjetVisible{
    private monJeu=null;
    private debuterJeu_lier =null;
    public constructor(refScene, unX, unY, refJeu){
        super(refScene, unX, unY);
        this.monJeu = refJeu;
        this.debuterJeu_lier = this.debuterJeu.bind(this);
        this['btVictoire_mc'].addEventListener("click",this.debuterJeu_lier);
    }
    protected dessiner(){
        window.lib.mcvictoireVictoire.call(this);
        this.frameBounds = window.lib.mcvictoireVictoire.prototype.frameBounds;
    }
    private debuterJeu(){
        this.monJeu.creerNiveau1();
        this.monJeu.supprimerVictoire();
    }
    public arreterVictoire(){
        this['btVictoire_mc'].removeEventListener("click",this.debuterJeu_lier);
        this.arreterObjVisible();
    }

}