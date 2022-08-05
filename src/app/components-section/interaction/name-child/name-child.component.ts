import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-name-child',
  templateUrl: './name-child.component.html',
  styleUrls: ['./name-child.component.scss']
})
export class NameChildComponent implements OnInit {
    //use get set
    @Input()
    get name(): string { return this._name; }
    set name(name: string) {
      this._name = (name && name.trim()) || '<no name set>';
    }
    private _name = '';

    constructor() { }

    ngOnInit(): void {
    }

}
