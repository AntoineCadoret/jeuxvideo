import {ObjetVisible} from "./ObjetVisible";
export class Fond1 extends ObjetVisible{
    public constructor(refScene, unX:number, unY:number){
        super(refScene, unX, unY);
    }
    protected dessiner():void{
        window.lib.mcfond1Fond1.call(this);
        this.frameBounds = window.lib.mcfond1Fond1.prototype.frameBounds;
    }
    public arreterFond1():void{
        this.arreterObjVisible();
    }
}
