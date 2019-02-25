import {ObjetMobile} from "./ObjetMobile";
import {Jeu} from "./Jeu";
export class TirXwing extends ObjetMobile{
    private avancer_lier:any=null;
    public constructor(refScene, unX:number,unY:number, refJeu:Jeu){
        super(refScene, unX, unY,refJeu);
        this.sensY=-1;
        this.vitesse=100;
        createjs.Sound.play("sonsTir");
        this.avancer_lier=this.avancer.bind(this);
        this.addEventListener("tick",this.avancer_lier);
    }
    protected dessiner(){
        window.lib.mctiravatarTirAvatar.call(this);
        this.frameBounds = window.lib.mctiravatarTirAvatar.prototype.frameBounds;
    }
    public enCollisionGrossiere(refDemandeur:createjs.MovieClip):boolean {
        //console.log(refDemandeur);
        let monRect = this.getTransformedBounds();
        let rectDemandeur = refDemandeur.getTransformedBounds();
        let enCollision = monRect.intersects(rectDemandeur);
        return enCollision;
    }
    protected envoyerArreter():void{
        this.monJeu.supprimerUnTir(this);
    }
    protected gererFinDeScene():boolean{
        if(this.y<=0){
            return true;
        }
        else
        {
            return false;
        }
    }
    public arreterTir():void{
        this.removeEventListener("tick",this.avancer_lier);
        this.arreterObjMobile();
    }
}
