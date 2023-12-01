import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-landy',
  templateUrl: './landy.page.html',
  styleUrls: ['./landy.page.scss'],
})
export class LandyPage {

  constructor(private navCtrl: NavController) {}

  ngOnInit() {
    setTimeout(() => {
      this.navCtrl.navigateRoot('/login');
    }, 4700);
  }
}
