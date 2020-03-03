import { Component, OnInit, Input } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.page.html',
  styleUrls: ['./add-item.page.scss'],
})
export class AddItemPage implements OnInit {
  @Input() params:  any;
  fields: Array<any> = [];
  constructor(private navParams: NavParams, public modalController: ModalController) { }

  ngOnInit() {
    console.log(this.navParams.get('fields'));
    this.fields = this.navParams.get('fields');
  }

  ionViewDidLoad(){
    console.log(this.navParams.get('fields'));
  }

  dismiss() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  getSelectFields(data: any){
    
  }


}
