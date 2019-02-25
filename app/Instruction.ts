import {ObjetVisible} from "./ObjetVisible";
import {Jeu} from "./Jeu";
export class Instruction extends ObjetVisible{
    private monJeu:Jeu = null;
    private debuterJeu_lier:any= null;
    public constructor(refScene,unX:number, unY:number, refJeu:Jeu){
        super(refScene, unX, unY);
        this.monJeu=refJeu;
        this.debuterJeu_lier = this.debuterJeu.bind(this);
        this['btPlay_mc'].addEventListener("click",this.debuterJeu_lier);
    }
    protected dessiner():void{
        window.lib.mcinstructionInstruction.call(this);
        this.frameBounds = window.lib.mcinstructionInstruction.prototype.frameBounds;
    }
    private debuterJeu():void{
        this.monJeu.creerNiveau1();
        this.monJeu.supprimerInstruction();
    }
    public arreterInstruction():void{
        this['btPlay_mc'].removeEventListener("click",this.debuterJeu_lier);
        this.arreterObjVisible();
    }
}
