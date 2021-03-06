import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import {OcrapiPage} from "../ocrapi/ocrapi";
import {OcradPage} from "../ocrad/ocrad";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = OcrapiPage;
  tab5Root = OcradPage;

  constructor() {

  }
}
