/**
 * Created by etu08 on 18-04-13.
 */
import {ObjetVisible} from"./ObjetVisible";
import {Jeu} from"./Jeu";
import{CompteurVie} from "./CompteurVie";
export class Xwing extends ObjetVisible{
    private tTouche:Array<boolean> = new Array(false, false, false, false);
    private monJeu: Jeu = null;
    private estInvincible : boolean = false;
    private minuterieInvincible = null;
    private monEnergie: number = 5;
    private monCompteurVie:CompteurVie = null;
    private tourneg:boolean =false;
    private tourned:boolean = false;
    private vie:number = 3;
    private tourTir:number = 0;
    private enTir:boolean = false;
    private minuterieTir = null;
    private refMinuterie = null;
    private tPointCollision:Array<this>=null;
    private tPointTir:Array<this>=null;
    private static limite:{haut:number,bas:number,gauche:number,droite:number} = {haut:0,bas:750,gauche:10,droite:550};
    private minuterieMort = null;

    public constructor(refStage, unX:number, unY:number, refCompteurVie:CompteurVie, refJeu:Jeu){
        super(refStage,unX,unY);
        this.monJeu = refJeu;
        this.monCompteurVie =refCompteurVie;
        this.tPointCollision = new Array();
        this.tPointCollision[0] = this['vaisseau_mc']['p0_mc'];
        this.tPointCollision[1] = this['vaisseau_mc']['p1_mc'];
        this.tPointCollision[2] = this['vaisseau_mc']['p2_mc'];
        this.tPointTir = new Array();
        this.tPointTir[0] = this['vaisseau_mc']['t0_mc'];
        this.tPointTir[1] = this['vaisseau_mc']['t1_mc'];
        window.onkeydown = this.faireBougerXwing.bind(this);
        window.onkeyup = this.desactiverTouche.bind(this);
    }
    protected dessiner(){
        window.lib.mcxwingXwing.call(this);
        this.frameBounds = window.lib.mcxwingXwing.prototype.frameBounds;
    }
    private faireBougerXwing(evenement:KeyboardEvent):void{
        // ESPACE = 32; FLECHE_HAUT = 38; FLECHE_BAS = 40; FLECHE_GAUCHE = 37; FLECHE_DROITE = 39;
        console.log(evenement.keyCode);

        switch (evenement.keyCode)
        {
            case 39 :
            case 68 :
                //flèche droite
                this.tTouche[0]=true;
                if(this.tourned==false){
                    this.tourned=true;
                    this.gotoAndPlay("tourner_d");
                }

                event.preventDefault();
                break;
            case 65:
            case 37:
                //flèchegauche
                this.tTouche[1]=true;
                if(this.tourneg==false){
                    this.tourneg=true;
                    this.gotoAndPlay("tourner_g");
                }

                evenement.preventDefault();
                break;

            case 87:
            case 38:
                //flèche haut
                this.tTouche[2]=true;
                this['vaisseau_mc'].gotoAndPlay("avancer");
                evenement.preventDefault();
                break;
            case 83:
            case 40:
                //flèche bas
                this.tTouche[3]=true;
                evenement.preventDefault();
                break;
            case 32:
                 //espace
                this.debuterTir();
               evenement.preventDefault();
                 break;

        }
        if(this.tTouche.indexOf(true)!=-1 && this.refMinuterie == null){
            this.refMinuterie = window.setInterval(this.bouger.bind(this), 25);
        }

    }
    private
    private desactiverTouche(evenement:KeyboardEvent):void{
        switch (evenement.keyCode)
        {
            case 39 :
            case 68 :
                //flèche droite
                this.tTouche[0]=false;
                this.gotoAndPlay("retour_d");
                this.tourned=false;
                break;
            case 37:
            case 65:
                //flèchegauche
                this.tTouche[1]=false;
                this.gotoAndPlay("retour_g");
                this.tourneg=false;
                break;

            case 38:
            case 87:
                //flèche haut
                this.tTouche[2]=false;
                this['vaisseau_mc'].gotoAndPlay("normal");
                break;
            case 83:
            case 40:
                //flèche bas
                this.tTouche[3]=false;
                break;
            case 32:
                //espace
                this.arreterTir();
                break;

        }
        if(this.tTouche.indexOf(true)==-1)
        {
            window.clearInterval(this.refMinuterie);
            this.refMinuterie = null;
        }

    }
    private bouger(evenement:createjs.Event):void{
        if(this.tTouche[0]==true){
            if(this.x < Xwing.limite.droite)
            this.x=this.x+5;
            // evenement.preventDefault();
        }
        if(this.tTouche[1]==true)
        {
            if(this.x > Xwing.limite.gauche)
            {
                this.x= this.x-5;
            }

            // evenement.preventDefault();
        }
        if(this.tTouche[2]==true)
        {
            if(this.y > Xwing.limite.haut){
                this.y = this.y-5;
            }

            // evenement.preventDefault();
        }
        if(this.tTouche[3]==true)
        {
            if(this.y < Xwing.limite.bas)
            this.y = this.y+5;
            // evenement.preventDefault();
        }

    }
    private debuterTir():void{
        let positionDepart = null;
        positionDepart = this.tPointTir[0];
        this.tourTir = 1;
        console.log(this.tPointTir);
        let monPointLocalAuDemandeur: createjs.Point = positionDepart.parent.localToLocal(positionDepart.x, positionDepart.y, this.maScene);

        if(this.enTir == false){
            this.monJeu.creerTir(monPointLocalAuDemandeur["x"],monPointLocalAuDemandeur["y"]);
            this.minuterieTir=window.setInterval(this.tirer.bind(this),800);
            this.enTir = true;
        }

    }
    private tirer():void{
        let unX:number = 0;
        let unY:number = 0;
        let positionDepart = null;
        if(this.tourTir==0){
            positionDepart = this.tPointTir[0];
            this.tourTir = 1;
        }
        else
        {
            positionDepart = this.tPointTir[1];
            this.tourTir = 0;
        }
       console.log(this.tPointTir);
        let monPointLocalAuDemandeur: createjs.Point = positionDepart.parent.localToLocal(positionDepart.x, positionDepart.y, this.maScene);
        this.monJeu.creerTir(monPointLocalAuDemandeur["x"],monPointLocalAuDemandeur["y"]);

    }
    private arreterTir():void{
        this.enTir = false;
        window.clearInterval(this.minuterieTir);
        this.minuterieTir = null;
    }
    public enCollisionGrossiere(refDemandeur) {
        let monRect = this.getTransformedBounds();
        let rectDemandeur = refDemandeur.getTransformedBounds();
        let enCollision = monRect.intersects(rectDemandeur);
        return enCollision;
    }
    public enCollisionFine(refDemandeur:createjs.MovieClip){
        let indexPoint:number = -1;
        // Pour chacun de mes points de contact
        for (let intCpt: number = 0; intCpt < this.tPointCollision.length && indexPoint== -1; intCpt++) {
            let monPoint = this.tPointCollision[intCpt];
            // Convertir mon point en coordonnée local au demandeur
            let monPointLocalAuDemandeur:createjs.Point = monPoint.parent.localToLocal(monPoint.x, monPoint.y, refDemandeur);
            if (refDemandeur.hitTest(monPointLocalAuDemandeur.x, monPointLocalAuDemandeur.y)) {
                indexPoint = intCpt;
            }
        }
        return indexPoint;
    }
    public invincible(){
        return this.estInvincible;
    }
    public majVie():void{
        if(this.estInvincible==false) {
            if (this.monEnergie > 1) {
                this.monEnergie = this.monEnergie - 1;
                this.monCompteurVie.majEnergie(this.monEnergie);
            }
            else {
                if (this.vie > 1) {
                    this.vie = this.vie - 1;
                    this.monEnergie = 5;
                    this.monCompteurVie.majCompteur(this.vie);
                    this.monCompteurVie.majEnergie(this.monEnergie);
                }
                else {
                    this.debuterAgonie();
                }
            }
            this.activerInvincibilite();
        }
    }
    private debuterAgonie():void{
        this.gotoAndPlay("mort");
        createjs.Sound.play("sonsExplosion");
        this.minuterieMort= window.setInterval(this.arreterAgonie.bind(this),400);
    }
    private arreterAgonie():void{
        this.monJeu.creerDefaite();
        this.monJeu.supprimerJeu();
        window.clearInterval(this.minuterieMort);
        this.minuterieMort=null;
    }
    private activerInvincibilite():void{
        this.estInvincible=true;
        this.alpha = 0.6;
        console.log("estInvincible");
        this.minuterieInvincible = window.setInterval(this.desactiverInvincibilite.bind(this),1750);

    }
    private desactiverInvincibilite(evenement):void{
        this.estInvincible = false;
        this.alpha = 1;
        console.log("InvincibleDesactiver");
        window.clearInterval(this.minuterieInvincible);
        this.minuterieInvincible=null;
    }
    public arreterXwing():void{

        window.clearInterval(this.refMinuterie);
        this.refMinuterie = null;
        this.arreterObjVisible();
    }


}