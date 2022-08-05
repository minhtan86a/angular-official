import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../hero';


@Component({
  selector: 'app-hero-child',
  templateUrl: './hero-child.component.html',
  styleUrls: ['./hero-child.component.scss']
})
export class HeroChildComponent implements OnInit {
    @Input('hero') hero!: Hero;
    @Input('master') masterName = '';

    constructor() { }

    ngOnInit(): void {
    }

}
