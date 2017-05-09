import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  selectedColor: string;

  constructor(public navCtrl: NavController) {

  }

  changeColor(color: string){
    this.selectedColor = color;
  }

}
