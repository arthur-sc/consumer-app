import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FirebaseServiceProvider } from '../../providers/firebase-service/firebase-service';

/**
 * Generated class for the EditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit',
  templateUrl: 'edit.html',
})
export class EditPage {

  private course;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public dbService: FirebaseServiceProvider) {
    this.course = this.navParams.get('data');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditPage');
  }

  deleteData()
  {
    const confirm = this.alertCtrl.create({
      title: 'Use this lightsaber?',
      message: 'Do you agree to use this lightsaber to do good across the intergalactic galaxy?',
      buttons: [
        {
          text: 'Disagree',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Agree',
          handler: () => {
            
          }
        }
      ]
    });
    confirm.present();
  }

}
