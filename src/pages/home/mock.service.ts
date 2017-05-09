import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map'

@Injectable()
export class DatabaseService{

  constructor(private http: Http) {

  }

  usersList: any;

  private dbUrl = 'https://jsonplaceholder.typicode.com/comments?postId=';


  getTasks(source: string) {
    // this function returns the data from database and creates an observable
    // you will subscribe in the file you need the data to use it
    return this.http.get(this.dbUrl + source)
      .map(response => response.json());
  }




}
