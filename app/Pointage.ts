import {ObjetVisible} from"./ObjetVisible";
import {Jeu} from "./Jeu"
export class Pointage extends ObjetVisible {
    private score:number =0;
    private monJeu:Jeu =null;
    private monNiveau:number = null;
    public constructor(refScene, unX:number,unY:number, refNiveau:number, refJeu:Jeu){
        super(refScene, unX, unY);
        this.monJeu = refJeu;
        this.monNiveau = refNiveau;
    }
    protected dessiner(){
        window.lib.mcpointagePointage.call(this);
        this.frameBounds = window.lib.mcpointagePointage.prototype.frameBounds;
    }
    public majPointage():void{
            this.score=this.score+200;
            let textPointage:string = null;
            if(this.score < 1000){
                //0000100
                textPointage="0000"+this.score;
            }
            else{
                if(this.score<10000)
                {
                    textPointage="000"+this.score;
                }
                else{
                    if(this.score<100000){
                        textPointage="000"+this.score;
                    }
                    else
                    {
                        textPointage="000"+this.score;
                    }
                }
            }
            this['pointage_txt'].text=textPointage;
            if(this.monNiveau==1){
                if(this.score == 4000){
                    this.monJeu.supprimerJeu();
                    this.monJeu.creerNiveau2();
                }
            }
            else{
                if(this.score == 10000){
                    createjs.Sound.play("sonsVictoire");
                    this.monJeu.supprimerJeu();
                    this.monJeu.creerVictoire();
                }
            }

    }
    public retournerPointage():number {
        return this.score;
    }
    public arreterPointage():void{
        this.arreterObjVisible();
    }
}
