import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent implements OnInit {
    @Input() item = ''; // decorate the property with @Input()
    @Output() newItemEvent = new EventEmitter<string>();

    addNewItem(value: string) {
        this.newItemEvent.emit(value);
    }

    constructor() { }

    ngOnInit(): void {
    }

}
