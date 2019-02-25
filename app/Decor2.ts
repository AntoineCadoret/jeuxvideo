import {ObjetVisible} from "./ObjetVisible";
export class Decor2 extends ObjetVisible{
    private vitesse:number = 2;
    public constructor(refScene, unX:number,unY:number){
        super(refScene, unX, unY);
        this.addEventListener("tick",this.avancer.bind(this));
    }
    protected dessiner(){
        window.lib.mcdecor2Decor2.call(this);
        this.frameBounds = window.lib.mcdecor2Decor2.prototype.frameBounds;
    }
    private avancer(evenement):void{
        if(this.y == 800){
            this.y = -400;
        }
        else
        {
            this.y= this.y + this.vitesse;
        }
    }
    public arreterDecor2():void{
        this.removeEventListener("tick",this.avancer.bind(this));
        this.arreterObjVisible();
    }

}
