import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sharing-data',
  templateUrl: './sharing-data.component.html',
  styleUrls: ['./sharing-data.component.scss']
})
export class SharingDataComponent implements OnInit {
    currentItem = 'Television';

    constructor() { }

    ngOnInit(): void {
    }

    items = ['item1', 'item2', 'item3', 'item4'];

    addItem(newItem: string) {
        this.items.push(newItem);
    }

}
