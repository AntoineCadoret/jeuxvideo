/**
 * Created by etu08 on 18-04-13.
 */
export abstract class ObjetVisible extends createjs.MovieClip {
    protected maScene:createjs.Stage=null;
    protected enMvt:boolean=false;


    //constructeur
    public constructor(refStage:createjs.Stage, unX:number, unY:number){
        super();
        this.dessiner();
        this.gotoAndStop(0);
        this.maScene = refStage;
        this.maScene.addChild(this);
        this.x = unX;
        this.y = unY;
    }
    protected abstract dessiner():void;

    public arreterObjVisible():void{
        this.maScene.removeChild(this);
    }
}