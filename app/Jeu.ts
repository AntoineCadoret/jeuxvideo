/**
 * Created by etu08 on 18-04-13.
 */
import{Xwing} from "./Xwing";
import {Tie_fighter} from "./Tie_fighter";
import {Meteorite} from "./Meteorite";
import {CompteurVie} from "./CompteurVie";
import {TirXwing} from "./TirXwing";
import {Pointage} from "./Pointage";
import {Intro} from "./Intro";
import {Instruction} from "./Instruction";
import {Niveau1} from "./Niveau1";
import {Niveau2} from "./Niveau2";
import {Fond1} from "./Fond1";
import {Fond2} from "./Fond2";
import {Decor1} from "./Decor1";
import {Decor2} from "./Decor2";
import {Victoire} from "./Victoire";
import {Defaite} from "./Defaite";
export class Jeu{
    private maScene = null;
    private monXwing:Xwing = null;
    private monPointage:Pointage = null;
    private tTiefighter= new Array();
    private tMeteorite = new Array();
    private tTirXwing:Array<TirXwing> = new Array();
    private monCompteurVie:CompteurVie = null;
    private monIntro:Intro = null;
    private monFond=null;
    private niveau:number = 0;
    private monInstruction:Instruction = null;
    private monNiveau1:Niveau1 = null;
    private monNiveau2:Niveau2 = null;
    private monDecor1_1= null;
    private monDecor1_2= null;
    private maVictoire:Victoire = null;
    private maDefaite:Defaite =null;
    private maMinuterie = null;
    private maMinuterieMeteorite = null;
    private sonsJeu = null;

    public constructor(refStage){
        this.maScene = refStage;
        this.monIntro= new Intro(this.maScene,0,0,this);
    }
    public creerNiveau1():void{
        this.monNiveau1= new Niveau1(this.maScene,0,0,this);
        this.niveau = 1;
    }
    public creerNiveau2():void{

        this.monNiveau2= new Niveau2(this.maScene,0,0,this);
        this.niveau = 2;
    }
    public creerInstruction():void{
        this.monInstruction= new Instruction(this.maScene,0,0,this);
    }
    public creerVictoire():void {
        this.maVictoire= new Victoire(this.maScene, 0,0,this);
    }
    public creerDefaite():void{
        createjs.Sound.play("sonsDefaite");
        let pointage = this.monPointage.retournerPointage();
        this.maDefaite = new Defaite(this.maScene, 0,0,this, pointage);
    }
    public debuterNiveau1():void{
        this.sonsJeu=createjs.Sound.play("sonsTrame", {loop:-1});
        this.sonsJeu.volume = this.sonsJeu.volume*0.5;
        this.monFond=new Fond1(this.maScene,0,0);
        this.monDecor1_1 = new Decor1(this.maScene,20,-400);
        this.monDecor1_2 = new Decor1(this.maScene,320,-900);
        this.monCompteurVie = new CompteurVie(this.maScene, 30, 30);
        this.monPointage = new Pointage(this.maScene, 560, 30, this.niveau, this);
        this.monXwing = new Xwing(this.maScene,300,600, this.monCompteurVie, this);
        this.maMinuterie= window.setInterval(this.creerAntagoniste.bind(this),Math.floor(Math.random()*500)+2000);
        this.maMinuterieMeteorite= window.setInterval(this.creerMeteorite.bind(this),Math.floor(Math.random()*2000)+3000);

    }
    public debuterNiveau2():void{
        this.monFond=new Fond2(this.maScene,0,0);
        this.sonsJeu=createjs.Sound.play("sonsTrame", {loop:-1});
        this.sonsJeu.volume = this.sonsJeu.volume*0.5;
        this.monDecor1_1 = new Decor2(this.maScene,20,-400);
        this.monDecor1_2 = new Decor2(this.maScene,320,-900);
        this.monCompteurVie = new CompteurVie(this.maScene, 30, 30);
        this.monPointage = new Pointage(this.maScene, 560, 30, this.niveau, this);
        this.monXwing = new Xwing(this.maScene,300,600, this.monCompteurVie, this);
        this.maMinuterie= window.setInterval(this.creerAntagoniste.bind(this),Math.floor(Math.random()*200)+1000);
        this.maMinuterieMeteorite= window.setInterval(this.creerMeteorite.bind(this),Math.floor(Math.random()*1000)+2000);

    }
    public creerTir(unX:number, unY:number):void{

        this.tTirXwing.push(new TirXwing(this.maScene, unX, unY, this));
        // new TirXwing(this.maScene, posX, posY, this)
    }
    private creerAntagoniste(evenement){
        let positionX:number = Math.floor((Math.random()*550)+5);
        this.tTiefighter.push(new Tie_fighter(this.maScene,positionX,0,this.monXwing,this.tTirXwing, this.monPointage, this));
    }
    private creerMeteorite(evenement){
        let positionX:number=0;
        let departX:number = Math.floor((Math.random()*2)+1);
        let positionY:number = Math.floor((Math.random()*550)+0);
        if(departX==1){
            positionX= 0;
        }
        else{
            positionX = 600;
        }
        this.tMeteorite.push(new Meteorite(this.maScene,positionX,positionY,departX, this.monXwing, this));
    }

    public supprimerUnTir(refTir:TirXwing):void{
        let indexTir = this.tTirXwing.indexOf(refTir);
        this.tTirXwing[indexTir].arreterTir();
        this.tTirXwing.splice(indexTir,1);

    }
    private supprimerDesTir():void{
        for(let intcpt = 0; intcpt < this.tTirXwing.length; intcpt++){
            this.tTirXwing[0].arreterTir();
            this.tTirXwing.splice(0,1);
        }
    }
    public supprimerUnTie(refTie:Tie_fighter):void{
        console.log(refTie);
        let indexTie:number= this.tTiefighter.indexOf(refTie);
        this.tTiefighter[indexTie].arreterTie();
        this.tTiefighter.splice(indexTie,1);
        refTie=null;
    }
    private supprimerDesTie():void{
        for(let intcpt:number = 0; intcpt < this.tTiefighter.length; intcpt++){
            this.tTiefighter[0].arreterTie();
            this.tTiefighter.splice(0,1);
        }
        window.clearInterval(this.maMinuterie);

    }
    public supprimerUneMeteorite(refMeteorite:Meteorite):void{
        let indexMeteorite:number= this.tMeteorite.indexOf(refMeteorite);
        this.tMeteorite[indexMeteorite].arreterMeteorite();
        this.tMeteorite.splice(indexMeteorite,1);
        console.log("arreterMeteorite");
    }
    private supprimerDesMeteorite():void{
        for(let intcpt:number = 0; intcpt < this.tMeteorite.length; intcpt++){
            this.tMeteorite[0].arreterMeteorite();
            this.tMeteorite.splice(0,1);
        }
        window.clearInterval(this.maMinuterieMeteorite);
    }

    public supprimerXwing():void{
        this.monXwing.arreterXwing();
        this.monXwing=null;
    }
    public supprimerIntro():void{
        this.monIntro.arreterIntro();
        this.monIntro=null;
    }
    public supprimerInstruction():void{
        this.monInstruction.arreterInstruction();
        this.monInstruction=null;
    }
    public supprimerNiveau1():void{
        this.monNiveau1.arreterNiveau1();
        this.monNiveau1=null;
    }
    public supprimerNiveau2():void{
        this.monNiveau2.arreterNiveau2();
        this.monNiveau2=null;
    }
    public supprimerVictoire():void{
        this.maVictoire.arreterVictoire();
        this.maVictoire=null;
    }
    public supprimerDefaite():void{
        this.maVictoire.arreterVictoire();
        this.maVictoire=null;
    }
    private supprimerPointage():void{
        this.monPointage.arreterPointage();
        this.monPointage=null;
    }
    private supprimerCompteurVie():void{
        this.monCompteurVie.arreterCompteur();
        this.monCompteurVie=null;
    }
    private supprimerDecor1():void{
        this.monDecor1_1.arreterDecor1();
        this.monDecor1_1 = null;
        this.monDecor1_2.arreterDecor1();
        this.monDecor1_2 = null;
    }
    private supprimerDecor2():void{
        this.monDecor1_1.arreterDecor2();
        this.monDecor1_1 = null;
        this.monDecor1_2.arreterDecor2();
        this.monDecor1_2 = null;
    }
    public supprimerJeu():void{
        console.log('supprimer jeu');
        this.supprimerXwing();
        if(this.niveau == 1){
            this.supprimerDecor1();
        }
        else
        {
            this.supprimerDecor2();
        }
        this.supprimerDesTie();
        this.supprimerDesTir();
        this.supprimerDesMeteorite();
        if(this.niveau==1){
            this.monFond.arreterFond1();
            this.monFond=null;
            this.sonsJeu.stop();
            this.sonsJeu=null;
        }
        else{
            this.monFond.arreterFond2();
            this.monFond=null;
            this.sonsJeu.stop();
            this.sonsJeu=null;
        }
        this.supprimerCompteurVie();
        this.supprimerPointage();

    }
}