import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-name-parent',
  templateUrl: './name-parent.component.html',
  styleUrls: ['./name-parent.component.scss']
})
export class NameParentComponent implements OnInit {
    // Displays 'Dr IQ', '<no name set>', 'Bombasto'
    names = ['Dr IQ', '   ', '  Bombasto  '];

    constructor() { }

    ngOnInit(): void {
    }

}
