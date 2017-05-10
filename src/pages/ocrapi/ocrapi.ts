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



  readImage(img: any){

    let canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;

    // Copy the image contents to the canvas
    let ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);

    let dataURL = canvas.toDataURL("image/png");


    this.isLoading = 'Reading';
    this.start();
    this.ocr.postToOCR(dataURL).subscribe(response => {
      this.displayText = response.ParsedResults[0].ParsedText;
      this.isLoading = 'Done! Below is the output.';
      console.log(response);
      this.stop();
    })
  }






}
