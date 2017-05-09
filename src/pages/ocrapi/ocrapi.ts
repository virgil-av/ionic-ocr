import {Component, NgZone} from '@angular/core';
import { NavController } from 'ionic-angular';
import {OcrService} from "./ocrapi.service";


@Component({
  selector: 'page-ocrapi',
  templateUrl: 'ocrapi.html',
  providers: [OcrService]
})
export class OcrapiPage {
  displayText: string;
  isLoading: string = 'Ready to read!';

  currentT: number = 0 ;
  displayTimer:any;


  constructor(public navCtrl: NavController, private ngZone: NgZone, private ocr: OcrService) {

  }

  start(){
    this.currentT = new Date().getTime();
  }

  stop(){
    let nowTime = new Date().getTime();
    this.displayTimer = (nowTime - this.currentT) / 1000;
  }



  readImage(image: any){
    console.log(image);
    this.isLoading = 'Reading';
    this.ocr.postToOCR(image).subscribe(response => {
      this.displayText = response;
      this.isLoading = 'Done! Below is the output.';
      console.log(response);
    })
  }






}
