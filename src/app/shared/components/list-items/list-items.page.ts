import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.page.html',
  styleUrls: ['./list-items.page.scss'],
})
export class ListItemsPage implements OnInit {
  @Input() params:  any;
  constructor() { }

  ngOnInit() {
    console.log(this.params);
  }

}
