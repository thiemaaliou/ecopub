import { Component, OnInit, Input, SimpleChange } from '@angular/core';
import { GeneralService } from 'src/app/services/general.service';
import { UtilsService } from 'src/app/services/utils.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.page.html',
  styleUrls: ['./list-items.page.scss'],
})
export class ListItemsPage implements OnInit {
  @Input() params:  any;
  dataItems: Array<{}> = [];
  constructor(private generalService: GeneralService, public alertController: AlertController,
              private utilsService: UtilsService, private route: Router, private nativeStorage: NativeStorage,
              public platform: Platform) { }

  ngOnInit() {
    this.getList();
  }

  ngOnChanges(changes: SimpleChange) {
    this.getList();
  }

  getList(){
    this.generalService.getSelectList(this.params).subscribe((resp) => {
      if(resp['code'] == 200)
        this.dataItems = resp['data'];
    })
  }

  showMoreInfos(item){
    console.log(this.params);
    item.url = this.params.url;
    item.component = this.params.component;
    this.generalService.getDetailsItem(item).subscribe((resp) =>{
      if(resp['code'] == 200){
          item.data = resp['data'];
          this.utilsService.passDataToComponent(item);
          localStorage.setItem('currentItemEC', JSON.stringify(item));
          this.route.navigate(['/item-details', item.id]);
      }
    });
  }

  setNativeStorage(item){
    console.log(this.platform);
    if(this.platform.is('ios') || this.platform.is('android') || this.platform.is('mobile') || this.platform.is('phablet') || this.platform.is('tablet')){
        this.nativeStorage.setItem('currentItemEC', item)
            .then(
              () => this.route.navigate(['/item-details', item.id]),
              error => console.error('Error storing item', error)
            );

          this.nativeStorage.getItem('myitem')
            .then(
              data => console.log(data),
              error => console.error(error)
            );
      }else{
        console.log('here');
      }
  }

}
