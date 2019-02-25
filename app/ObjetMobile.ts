import {ObjetVisible} from "./ObjetVisible";
import {Jeu} from "./Jeu";
import {Xwing} from "./Xwing";
export abstract class ObjetMobile extends ObjetVisible{
    protected monJeu:Jeu = null;
    protected vitesse = null;

    protected sensX = null;
    protected sensY = null;
    public constructor(refScene, unX, unY, refJeu){
        super(refScene, unX, unY);
        this.monJeu = refJeu;

    }
    protected abstract dessiner();
    protected avancer(evenement){
        let estMort:boolean=false;

        this.x= this.x +(evenement.delta/1000)*(this.vitesse*this.sensX);
        this.y= this.y +(evenement.delta/1000)*(this.vitesse*this.sensY);
        estMort = this.gererFinDeScene();
        if(estMort==true)
        {
            this.envoyerArreter();
        }
    }

    protected abstract gererFinDeScene();
    protected abstract envoyerArreter();
    public arreterObjMobile(){
        this.arreterObjVisible();
    }
}
