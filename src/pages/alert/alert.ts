import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

@Component({
  templateUrl: 'alert.html'
})
export class AlertPage {

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }

  showBasicAlert() {
    let alert = this.alertCtrl.create({
        title: 'Basic Alert',
        subTitle: '기본 알림창입니다.',
        buttons: ['OK']
      });
      console.log("기본알림창");
      alert.present();
  }

  showRadioAlert() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Radio Alert');
 
    alert.addInput({
      type: 'radio',
      label: 'Blue',
      value: 'blue',
      checked: true
    });
 
    alert.addInput({
      type: 'radio',
      label: 'White',
      value: 'white',
      checked: false
    });
 
    alert.addInput({
      type: 'radio',
      label: 'Red',
      value: 'red',
      checked: false
    });
 
    alert.addButton('취소');
    alert.addButton({
      text: '저장',
      handler: data => {
          console.log('Radio data:', data);
      }
    });
    alert.present();
  }
 
  showCheckboxAlert() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Checkbox Alert');
 
    alert.addInput({
      type: 'checkbox',
      label: 'Seoul',
      value: 'Seoul',
      checked: true
    });
 
    alert.addInput({
      type: 'checkbox',
      label: 'Busan',
      value: 'Busan'
    });
 
    alert.addInput({
      type: 'checkbox',
      label: 'Gyunggi',
      value: 'Gyunggi'
    });
 
    alert.addButton('취소');
    alert.addButton({
      text: '저장',
      handler: data => {
        console.log('Checkbox data:', data);
      }
    });
    alert.present();
  }
 
  showPromptAlert() {
    let prompt = this.alertCtrl.create({
      title: 'Prompt Alert',
      message: "입력값을 받을 수 있는 알림창입니다.",
      inputs: [
        {
          name: 'ID', 
          placeholder: 'ID를 입력해주세요.'
        },
      ],
      buttons: [
        {
          text: '취소',
          handler: data => {
            console.log('취소 clicked');
          }
        },
        {
          text: '저장',
          handler: data => {
            console.log('저장 clicked');
          }
        }
      ]
    });
    prompt.present();
  }

  showConfirmAlert() {
    let confirm = this.alertCtrl.create({
      title: 'Confirm Alert',
      message: '확인 및 취소 값을 입력받을 수 있는 알림창입니다.',
      buttons: [
        {
          text: '동의안함',
          handler: () => {
            console.log('동의안함 clicked');
          }
        },
        {
          text: '동의',
          handler: () => {
            console.log('동의 clicked');
          }
        }
      ]
    });
    confirm.present();
  }
  
  
 
}
