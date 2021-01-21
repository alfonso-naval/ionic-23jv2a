import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  styleUrls: ['home.css']
})
export class HomePage {
  feet: number;
  fttoinch: number;
  inches: number;
  robinsons: number;
  miller: number;
  hamwi: number;
  devine: number;
  sex: string;
  pmessage: string;
    
    constructor(public navCtrl: NavController) {}
      
    calculatedesired() {
      if (this.sex === "m"){
      this.fttoinch = (this.feet - 5) * 12;
      this.rdesired = Math.round(52 + 1.9 *(this.fttoinch)+ 1.9 * this.inches);
      this.mdesired = Math.round(56.2 + 1.41 *(this.fttoinch)+ 1.41 * this.inches);
      this.hdesired = Math.round(48 + 2.7 *(this.fttoinch)+ 2.7 * this.inches);
      this.ddesired = Math.round(50 + 2.3 *(this.fttoinch)+ 2.3 * this.inches);
      this.pmessage = "kg.";
    }
    else if (this.sex === "f") {
      this.fttoinch = (this.feet - 5) * 12;
      this.rdesired = Math.round(49 + 1.7 *(this.fttoinch)+ 1.7 * this.inches);
      this.mdesired = Math.round(53.1 + 1.36 *(this.fttoinch)+ 1.36 * this.inches);
      this.hdesired = Math.round(45.5 + 2.2 *(this.fttoinch)+ 2.2 * this.inches);
      this.ddesired = Math.round(45.5 + 2.3 *(this.fttoinch)+ 2.3 * this.inches);
      this.pmessage = "kg.";
    }
    else{
    }
  }
}
