import {ObjetMobile} from "./ObjetMobile";
import {Xwing} from "./Xwing";
import {Jeu} from "./Jeu";
/**
 * Created by etu08 on 18-04-19.
 */
export class Meteorite extends ObjetMobile{
    private sens:number = null;
    private monXwing = null;
    private avancer_lier:any =null;
    private verifier_lier:any = null;

    public constructor(refScene, unX, unY, departX, refXwing, refJeu:Jeu){
        super(refScene,unX, unY, refJeu);
        this.sens=departX;
        this.monXwing=refXwing;
        this.vitesse=Math.floor(Math.random()*70)+50;
        this.avancer_lier =this.avancer.bind(this);
        this.verifier_lier = this.verifierCollision.bind(this);
        this.sensDeplacement();
    }
    protected dessiner(){
        window.lib.mcmeteoriteMeteorite.call(this);
        this.frameBounds = window.lib.mcmeteoriteMeteorite.prototype.frameBounds;
    }
    private sensDeplacement():void{
        let departY:number =0;
        if(this.sens == 1){
            this.sensX = 1;
        }
        else
        {
            this.sensX = -1;
        }
        departY = Math.floor((Math.random()*2)+1);
        if(departY == 1){
            this.sensY = 1;
        }
        else
        {
            this.sensY = -1;
        }
        this.addEventListener("tick",this.avancer_lier);
        this.addEventListener("tick",this.verifier_lier);
    }
    private verifierCollision(evenement:createjs.Event):void {
        if(this.monXwing.invincible()==false) {
            if (this.monXwing.enCollisionGrossiere(this) == true) {
                console.log(this);

                let indexPoint: number = this.monXwing.enCollisionFine(this);
                if (indexPoint != -1) {
                    createjs.Sound.play("sonsToucher");
                    this.monXwing.majVie();
                }
            }
        }
    }
    protected gererFinDeScene():boolean{
        let largeurScene:number=window.lib.properties.width;
        let hauteurScene:number=window.lib.properties.height;
        if(this.x > largeurScene || this.x< -40 || this.y > hauteurScene+10 || this.y < -70){
            return true;
        }
        else
        {
            return false;
        }
    }
    protected envoyerArreter():void{
        this.monJeu.supprimerUneMeteorite(this);
    }
    public arreterMeteorite():void{
        this.removeEventListener("tick",this.avancer_lier);
        this.removeEventListener("tick",this.verifier_lier);
        this.arreterObjVisible();
    }
}