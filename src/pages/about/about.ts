import {Component, NgZone} from '@angular/core';
import { NavController } from 'ionic-angular';
import * as Tesseract from 'tesseract.js';


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  displayText: string;
  isLoading: string = 'Ready to read!';

  currentT: number = 0 ;
  displayTimer:any;


  constructor(public navCtrl: NavController, private ngZone: NgZone) {

  }

  ionViewDidLoad(){
    this.preloadTesseract()
  }

  start(){
    this.currentT = new Date().getTime();
  }

  stop(){
    let nowTime = new Date().getTime();
    this.displayTimer = (nowTime - this.currentT) / 1000;
  }

  preloadTesseract(){
    let job1 = Tesseract.recognize('../../assets/images/1x1.png', {
      lang: 'eng',
    });

  }



  readImage(image: any){

    let job1 = Tesseract.recognize(image, {
      lang: 'eng',
    });

    this.isLoading = 'Reading';
    this.start();


    // job1.progress(message => console.log(message));

    // job1.catch(err => console.error(err));

    job1.then(result => {
      this.ngZone.run(() => {
        // http://stackoverflow.com/questions/35105374/how-to-force-a-components-re-rendering-in-angular-2
        // http://stackoverflow.com/questions/28538913/crop-an-image-displayed-in-a-canvas
        this.isLoading = 'Done! Below is the output.';
        this.displayText = result.text;
        this.stop();
      })
    });

  }






}
