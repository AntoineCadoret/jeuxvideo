import {ObjetVisible} from "./ObjetVisible";
export class Fond2 extends ObjetVisible{
    public constructor(refScene, unX:number, unY:number){
        super(refScene, unX, unY);
    }
    protected dessiner():void{
        window.lib.mcfond2Fond2.call(this);
        this.frameBounds = window.lib.mcfond1Fond1.prototype.frameBounds;
    }
    public arreterFond2():void{
        this.arreterObjVisible();
    }
}
