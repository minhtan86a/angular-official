import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
    userName = 'John';
    isChildDestroyed = false;

    constructor() { }

    ngOnInit(): void {
        console.log('ngOnInit from the parent component');
    }

    updateUser() {
        this.userName = 'Bob';
    }

    destroy() {
        this.isChildDestroyed = true;
     }
}
