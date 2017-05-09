import {Component, NgZone} from '@angular/core';
import { NavController} from 'ionic-angular';

declare let OCRAD:any;

@Component({
  selector: 'page-ocrad',
  templateUrl: 'ocrad.html'
})
export class OcradPage {
  displayText: string;


  constructor(public navCtrl: NavController, private ngZone: NgZone) {

  }



  readImage(image: any){

    let canvas = document.createElement('canvas');
    canvas.width  = image.naturalWidth;
    canvas.height = image.naturalHeight;
    canvas.getContext('2d').drawImage(image, 0, 0);
    this.displayText =  OCRAD(canvas);

  }




}
