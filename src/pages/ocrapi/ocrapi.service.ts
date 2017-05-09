import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map'

@Injectable()
export class OcrService{

  private ocrUrl = 'https://api.ocr.space/parse/imageurl';
  private ocrKey = '?apikey=a8797cfb0a88957&';

  constructor(private http: Http) {

  }


  postToOCR(imgLink: string) {
    // this function returns the data from database and creates an observable
    // you will subscribe in the file you need the data to use it

    // let headers = new Headers();
    // headers.append('Content-Type','application/json');
    return this.http.get(this.ocrUrl + this.ocrKey)
      .map(response => response.json());
  }




}
