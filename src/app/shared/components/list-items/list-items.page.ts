import { Component, OnInit, Input, SimpleChange } from '@angular/core';
import { GeneralService } from 'src/app/services/general.service';
import { UtilsService } from 'src/app/services/utils.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.page.html',
  styleUrls: ['./list-items.page.scss'],
})
export class ListItemsPage implements OnInit {
  @Input() params:  any;
  dataItems: Array<{}> = [];
  constructor(private generalService: GeneralService, public alertController: AlertController,
              private utilsService: UtilsService) { }

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

  }

}
