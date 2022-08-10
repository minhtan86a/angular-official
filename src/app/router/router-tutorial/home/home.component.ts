import { ArticleService } from './../services/article.service';
import { Observable, of } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Article } from '../models/article';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {}

}
