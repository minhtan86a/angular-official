import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sizer-parent',
  templateUrl: './sizer-parent.component.html',
  styleUrls: ['./sizer-parent.component.scss']
})
export class SizerParentComponent implements OnInit {
    fontSizePx = 16;
    constructor() { }

    ngOnInit(): void {
    }

}
