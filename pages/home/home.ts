import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  styleUrls: ['home.css']
})
export class HomePage {
  feet: number;
  inches: number;
  exinches: number;
  robinson: number;
  miller: number;
  hamwi: number;
  devine: number;
  sex: string;
  pmessage: string;
    
    constructor(public navCtrl: NavController) {}
      
    calculatedesweight() {
      if (this.sex === "m"){
      this.exinches = (this.feet - 5) * 12;
      this.robinson = Math.round(52 + (1.9*this.exinches) + (1.9*this.inches));
      this.miller = Math.round(56.2 + (1.41*this.exinches) + (1.41*this.inches));
      this.hamwi = Math.round(48 + (2.7*this.exinches) + (2.7*this.inches));
      this.devine = Math.round(50 + (2.3*this.exinches) + (2.3*this.inches));
      this.pmessage = "Kilograms";
    }
    else if (this.sex === "f") {
      this.exinches = (this.feet - 5) * 12;
      this.robinson = Math.round(49 + (1.7*this.exinches) + (1.7*this.inches));
      this.miller = Math.round(53.1 + (1.136*this.exinches) + (1.36*this.inches));
      this.hamwi = Math.round(45.5 + (2.2*this.exinches) + (2.2*this.inches));
      this.devine = Math.round(45.5 + (2.3*this.exinches) + (2.3*this.inches));
      this.pmessage = "Kilograms";
    }
    else{
    }
  }
}
