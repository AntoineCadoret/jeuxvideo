define(["require", "exports", "./Xwing", "./Tie_fighter", "./Meteorite", "./CompteurVie", "./TirXwing", "./Pointage", "./Intro", "./Instruction", "./Niveau1", "./Niveau2", "./Fond1", "./Fond2", "./Decor1", "./Decor2", "./Victoire", "./Defaite"], function (require, exports, Xwing_1, Tie_fighter_1, Meteorite_1, CompteurVie_1, TirXwing_1, Pointage_1, Intro_1, Instruction_1, Niveau1_1, Niveau2_1, Fond1_1, Fond2_1, Decor1_1, Decor2_1, Victoire_1, Defaite_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Jeu = (function () {
        function Jeu(refStage) {
            this.maScene = null;
            this.monXwing = null;
            this.monPointage = null;
            this.tTiefighter = new Array();
            this.tMeteorite = new Array();
            this.tTirXwing = new Array();
            this.monCompteurVie = null;
            this.monIntro = null;
            this.monFond = null;
            this.niveau = 0;
            this.monInstruction = null;
            this.monNiveau1 = null;
            this.monNiveau2 = null;
            this.monDecor1_1 = null;
            this.monDecor1_2 = null;
            this.maVictoire = null;
            this.maDefaite = null;
            this.maMinuterie = null;
            this.maMinuterieMeteorite = null;
            this.sonsJeu = null;
            this.maScene = refStage;
            this.monIntro = new Intro_1.Intro(this.maScene, 0, 0, this);
        }
        Jeu.prototype.creerNiveau1 = function () {
            this.monNiveau1 = new Niveau1_1.Niveau1(this.maScene, 0, 0, this);
            this.niveau = 1;
        };
        Jeu.prototype.creerNiveau2 = function () {
            this.monNiveau2 = new Niveau2_1.Niveau2(this.maScene, 0, 0, this);
            this.niveau = 2;
        };
        Jeu.prototype.creerInstruction = function () {
            this.monInstruction = new Instruction_1.Instruction(this.maScene, 0, 0, this);
        };
        Jeu.prototype.creerVictoire = function () {
            this.maVictoire = new Victoire_1.Victoire(this.maScene, 0, 0, this);
        };
        Jeu.prototype.creerDefaite = function () {
            createjs.Sound.play("sonsDefaite");
            var pointage = this.monPointage.retournerPointage();
            this.maDefaite = new Defaite_1.Defaite(this.maScene, 0, 0, this, pointage);
        };
        Jeu.prototype.debuterNiveau1 = function () {
            this.sonsJeu = createjs.Sound.play("sonsTrame", { loop: -1 });
            this.sonsJeu.volume = this.sonsJeu.volume * 0.5;
            this.monFond = new Fond1_1.Fond1(this.maScene, 0, 0);
            this.monDecor1_1 = new Decor1_1.Decor1(this.maScene, 20, -400);
            this.monDecor1_2 = new Decor1_1.Decor1(this.maScene, 320, -900);
            this.monCompteurVie = new CompteurVie_1.CompteurVie(this.maScene, 30, 30);
            this.monPointage = new Pointage_1.Pointage(this.maScene, 560, 30, this.niveau, this);
            this.monXwing = new Xwing_1.Xwing(this.maScene, 300, 600, this.monCompteurVie, this);
            this.maMinuterie = window.setInterval(this.creerAntagoniste.bind(this), Math.floor(Math.random() * 500) + 2000);
            this.maMinuterieMeteorite = window.setInterval(this.creerMeteorite.bind(this), Math.floor(Math.random() * 2000) + 3000);
        };
        Jeu.prototype.debuterNiveau2 = function () {
            this.monFond = new Fond2_1.Fond2(this.maScene, 0, 0);
            this.sonsJeu = createjs.Sound.play("sonsTrame", { loop: -1 });
            this.sonsJeu.volume = this.sonsJeu.volume * 0.5;
            this.monDecor1_1 = new Decor2_1.Decor2(this.maScene, 20, -400);
            this.monDecor1_2 = new Decor2_1.Decor2(this.maScene, 320, -900);
            this.monCompteurVie = new CompteurVie_1.CompteurVie(this.maScene, 30, 30);
            this.monPointage = new Pointage_1.Pointage(this.maScene, 560, 30, this.niveau, this);
            this.monXwing = new Xwing_1.Xwing(this.maScene, 300, 600, this.monCompteurVie, this);
            this.maMinuterie = window.setInterval(this.creerAntagoniste.bind(this), Math.floor(Math.random() * 200) + 1000);
            this.maMinuterieMeteorite = window.setInterval(this.creerMeteorite.bind(this), Math.floor(Math.random() * 1000) + 2000);
        };
        Jeu.prototype.creerTir = function (unX, unY) {
            this.tTirXwing.push(new TirXwing_1.TirXwing(this.maScene, unX, unY, this));
            // new TirXwing(this.maScene, posX, posY, this)
        };
        Jeu.prototype.creerAntagoniste = function (evenement) {
            var positionX = Math.floor((Math.random() * 550) + 5);
            this.tTiefighter.push(new Tie_fighter_1.Tie_fighter(this.maScene, positionX, 0, this.monXwing, this.tTirXwing, this.monPointage, this));
        };
        Jeu.prototype.creerMeteorite = function (evenement) {
            var positionX = 0;
            var departX = Math.floor((Math.random() * 2) + 1);
            var positionY = Math.floor((Math.random() * 550) + 0);
            if (departX == 1) {
                positionX = 0;
            }
            else {
                positionX = 600;
            }
            this.tMeteorite.push(new Meteorite_1.Meteorite(this.maScene, positionX, positionY, departX, this.monXwing, this));
        };
        Jeu.prototype.supprimerUnTir = function (refTir) {
            var indexTir = this.tTirXwing.indexOf(refTir);
            this.tTirXwing[indexTir].arreterTir();
            this.tTirXwing.splice(indexTir, 1);
        };
        Jeu.prototype.supprimerDesTir = function () {
            for (var intcpt = 0; intcpt < this.tTirXwing.length; intcpt++) {
                this.tTirXwing[0].arreterTir();
                this.tTirXwing.splice(0, 1);
            }
        };
        Jeu.prototype.supprimerUnTie = function (refTie) {
            console.log(refTie);
            var indexTie = this.tTiefighter.indexOf(refTie);
            this.tTiefighter[indexTie].arreterTie();
            this.tTiefighter.splice(indexTie, 1);
            refTie = null;
        };
        Jeu.prototype.supprimerDesTie = function () {
            for (var intcpt = 0; intcpt < this.tTiefighter.length; intcpt++) {
                this.tTiefighter[0].arreterTie();
                this.tTiefighter.splice(0, 1);
            }
            window.clearInterval(this.maMinuterie);
        };
        Jeu.prototype.supprimerUneMeteorite = function (refMeteorite) {
            var indexMeteorite = this.tMeteorite.indexOf(refMeteorite);
            this.tMeteorite[indexMeteorite].arreterMeteorite();
            this.tMeteorite.splice(indexMeteorite, 1);
            console.log("arreterMeteorite");
        };
        Jeu.prototype.supprimerDesMeteorite = function () {
            for (var intcpt = 0; intcpt < this.tMeteorite.length; intcpt++) {
                this.tMeteorite[0].arreterMeteorite();
                this.tMeteorite.splice(0, 1);
            }
            window.clearInterval(this.maMinuterieMeteorite);
        };
        Jeu.prototype.supprimerXwing = function () {
            this.monXwing.arreterXwing();
            this.monXwing = null;
        };
        Jeu.prototype.supprimerIntro = function () {
            this.monIntro.arreterIntro();
            this.monIntro = null;
        };
        Jeu.prototype.supprimerInstruction = function () {
            this.monInstruction.arreterInstruction();
            this.monInstruction = null;
        };
        Jeu.prototype.supprimerNiveau1 = function () {
            this.monNiveau1.arreterNiveau1();
            this.monNiveau1 = null;
        };
        Jeu.prototype.supprimerNiveau2 = function () {
            this.monNiveau2.arreterNiveau2();
            this.monNiveau2 = null;
        };
        Jeu.prototype.supprimerVictoire = function () {
            this.maVictoire.arreterVictoire();
            this.maVictoire = null;
        };
        Jeu.prototype.supprimerDefaite = function () {
            this.maVictoire.arreterVictoire();
            this.maVictoire = null;
        };
        Jeu.prototype.supprimerPointage = function () {
            this.monPointage.arreterPointage();
            this.monPointage = null;
        };
        Jeu.prototype.supprimerCompteurVie = function () {
            this.monCompteurVie.arreterCompteur();
            this.monCompteurVie = null;
        };
        Jeu.prototype.supprimerDecor1 = function () {
            this.monDecor1_1.arreterDecor1();
            this.monDecor1_1 = null;
            this.monDecor1_2.arreterDecor1();
            this.monDecor1_2 = null;
        };
        Jeu.prototype.supprimerDecor2 = function () {
            this.monDecor1_1.arreterDecor2();
            this.monDecor1_1 = null;
            this.monDecor1_2.arreterDecor2();
            this.monDecor1_2 = null;
        };
        Jeu.prototype.supprimerJeu = function () {
            console.log('supprimer jeu');
            this.supprimerXwing();
            if (this.niveau == 1) {
                this.supprimerDecor1();
            }
            else {
                this.supprimerDecor2();
            }
            this.supprimerDesTie();
            this.supprimerDesTir();
            this.supprimerDesMeteorite();
            if (this.niveau == 1) {
                this.monFond.arreterFond1();
                this.monFond = null;
                this.sonsJeu.stop();
                this.sonsJeu = null;
            }
            else {
                this.monFond.arreterFond2();
                this.monFond = null;
                this.sonsJeu.stop();
                this.sonsJeu = null;
            }
            this.supprimerCompteurVie();
            this.supprimerPointage();
        };
        return Jeu;
    }());
    exports.Jeu = Jeu;
});
//# sourceMappingURL=Jeu.js.map