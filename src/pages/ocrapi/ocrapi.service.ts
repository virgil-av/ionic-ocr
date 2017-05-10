import { Injectable } from '@angular/core';
import {Http,Headers} from "@angular/http";
import 'rxjs/add/operator/map'

@Injectable()
export class OcrService{

  private ocrUrl = 'https://api.ocr.space/parse/image';
  private ocrKey = '?apikey=a8797cfb0a88957&';

  constructor(private http: Http) {

  }


  postToOCR(imageBase64: string) {
    // this function returns the data from database and creates an observable
    // you will subscribe in the file you need the data to use it

    let body = new FormData();
    body.append('apikey','a8797cfb0a88957');
    body.append('base64Image', imageBase64);

    return this.http.post(this.ocrUrl,body)
      .map(response => response.json());
  }




}
