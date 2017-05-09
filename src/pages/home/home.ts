import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {DatabaseService} from "./mock.service";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers:[DatabaseService]
})
export class HomePage {
  dataAPI: any;
  dataSource: string;

  constructor(public navCtrl: NavController, private db: DatabaseService) {

  }

  getData(source: string){
    this.db.getTasks(source).subscribe(response => {
      this.dataAPI = response;
      console.log(response);
      this.dataSource = source;
    })
  }



}
