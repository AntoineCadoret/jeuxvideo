import {ObjetMobile} from "./ObjetMobile";
import {Jeu} from "./Jeu";
import  {TirXwing} from "./TirXwing";
import {Xwing} from "./Xwing";
import {Pointage} from "./Pointage";
/**
 * Created by etu08 on 18-04-18.
 */
export class Tie_fighter extends ObjetMobile{
    private avancer_lier:any=null;
    private monXwing:Xwing = null;
    private monPointage:Pointage=null;
    private tProjectile:Array<TirXwing> = null;
    private verifierCollision_lier:any=null;
    private verifierProjectile_lier:any =null;
    private minuterieSons = null;
    private minuterieMort = null;
    private estEnVie:boolean= true;
    public constructor(refStage, unX:number, unY:number, refXwing:Xwing, reftProj:Array<TirXwing>, refPoint:Pointage, refJeu:Jeu){
        super(refStage,unX,unY, refJeu);
        this.sensY = 1;
        this.sensX = 0;
        this.monXwing=refXwing;
        this.tProjectile= reftProj;
        this.monPointage= refPoint;
        this.vitesse = Math.floor(Math.random()*80)+50;
        this.avancer_lier=this.avancer.bind(this);
        this.verifierCollision_lier=this.verifierCollision.bind(this);
        this.verifierProjectile_lier = this.verifierCollisionProjectile.bind(this);
        this.addEventListener("tick",this.avancer_lier);
        this.addEventListener("tick",this.verifierCollision_lier);
        this.addEventListener("tick",this.verifierProjectile_lier);


    }
    protected dessiner(){
        window.lib.mctiefighterTiefighter.call(this);
        this.frameBounds = window.lib.mctiefighterTiefighter.prototype.frameBounds;
    }
    private verifierCollision(evenement:createjs.Event):void {

        if(this.monXwing.enCollisionGrossiere(this) == true) {
            let indexPoint: number = this.monXwing.enCollisionFine(this);
            if (indexPoint != -1) {
                if(this.estEnVie==true)
                {
                    this.estEnVie =false;
                    createjs.Sound.play("sonsToucher");
                    this.monXwing.majVie();
                    this.monJeu.supprimerUnTie(this);
                }

            }
        }
    }
    private verifierCollisionProjectile(evenement:createjs.Event): void{

        for(let indexProj:number=0; indexProj<this.tProjectile.length; indexProj++){
            if( this.tProjectile[indexProj].enCollisionGrossiere(this)==true){
                createjs.Sound.play("sonsToucher");
                console.log("collision projectile");

                this.monJeu.supprimerUnTir(this.tProjectile[indexProj]);
                if (this.estEnVie == true) {
                    //this.gotoAndPlay("exploser");
                    this.estEnVie=false;
                    this.minuterieSons= window.setInterval(this.debuterAgonie.bind(this),150);

                }


            }
        }

    }
    private debuterAgonie():void{
        createjs.Sound.play("sonsExplosion");
        this.gotoAndPlay("exploser");
        this.minuterieMort= window.setInterval(this.arreterAgonie.bind(this),300);
        window.clearInterval(this.minuterieSons);
        this.minuterieSons = null;
    }
    private arreterAgonie():void{
        this.monJeu.supprimerUnTie(this);
        window.clearInterval(this.minuterieMort);
        this.minuterieMort = null;
        this.monPointage.majPointage();
    }
    protected gererFinDeScene():boolean{
        if(this.y>=800){
            return true;
        }
        else
        {
            return false;
        }
    }
    protected envoyerArreter():void{
        this.monJeu.supprimerUnTie(this);
    }
    public arreterTie():void{

        this.removeEventListener("tick",this.verifierCollision_lier);
        this.removeEventListener("tick",this.verifierProjectile_lier);
        this.removeEventListener("tick",this.avancer_lier);
        this.arreterObjMobile();
    }
}