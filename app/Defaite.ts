import {ObjetVisible} from "./ObjetVisible";
import {Jeu} from "./Jeu";
import {Pointage} from "./Pointage";
export class Defaite extends ObjetVisible{
    private monJeu:Jeu=null;
    private debuterJeu_lier:any =null;
    public constructor(refScene, unX:number, unY:number, refJeu:Jeu,refPointage){
        super(refScene, unX, unY);
        this.monJeu = refJeu;
        this.debuterJeu_lier = this.debuterJeu.bind(this);
        this['btRejouer_mc'].addEventListener("click",this.debuterJeu_lier);
        this['texteDefait_txt'].text= "Vous avez fait "+refPointage+" points!";
    }
    protected dessiner(){
        window.lib.mcdefaiteDefaite.call(this);
        this.frameBounds = window.lib.mcdefaiteDefaite.prototype.frameBounds;
    }
    private debuterJeu():void{
        this.monJeu.creerNiveau1();
        this.monJeu.supprimerDefaite();
    }
    public arreterDefaite():void{
        this['btRejouer_mc'].removeEventListener("click",this.debuterJeu_lier);
        this.arreterObjVisible();
    }

}

