import {ObjetVisible} from "./ObjetVisible";
import {Jeu} from "./Jeu";
export class Intro extends ObjetVisible{
    private monJeu:Jeu = null;
    private debuterInstruction_lier:any= null;
    public constructor(refScene,unX:number, unY:number, refJeu:Jeu){
        super(refScene, unX, unY);
        this.monJeu=refJeu;
        this.debuterInstruction_lier = this.debuterInstruction.bind(this);
        this['btSuite_mc'].addEventListener("click",this.debuterInstruction_lier);
    }
    protected dessiner():void{
        window.lib.mcintroIntro.call(this);
        this.frameBounds = window.lib.mcintroIntro.prototype.frameBounds;
    }
    private debuterInstruction():void{
        this.monJeu.creerInstruction();
        this.monJeu.supprimerIntro();
    }
    public arreterIntro():void{
        this['btSuite_mc'].removeEventListener("click",this.debuterInstruction_lier);
        this.arreterObjVisible();
    }
}
