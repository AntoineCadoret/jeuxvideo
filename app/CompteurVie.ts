import {ObjetVisible} from "./ObjetVisible";
export class CompteurVie extends ObjetVisible{
    private vieRestante =null;
    public constructor(refScene, unX:number, unY:number){
        super(refScene, unX, unY);
        this.vieRestante= this['vieRestant_mc'];
    }
    protected dessiner(){
        window.lib.mcvieVie.call(this);
        this.frameBounds = window.lib.mcvieVie.prototype.frameBounds;
    }
    public majEnergie(refEnergie:number)
    {
        this.vieRestante.gotoAndStop("vie"+refEnergie);
    }
    public majCompteur(refVie:number):void{
        this['compteurVie_txt'].text = refVie;
    }
    public arreterCompteur():void{
        this.arreterObjVisible();
    }
}
