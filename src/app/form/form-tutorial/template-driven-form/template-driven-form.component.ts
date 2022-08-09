import { Contact } from './contact';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.scss']
})
export class TemplateDrivenFormComponent implements OnInit {
    //If we have data to bind template. oneway binding [ngModel] and twoway binding ([ngModel])
    // contact = {
    //     "name": {
    //         "firstName": "Tan",
    //         "lastName": "Nguyen"
    //     },
    //     "email": "abc@deg.com",
    //     "facebook": "facebook.com",
    //     "website": "tiepphan.com",
    //     "tel": "0906906280"
    // }

    //contact!: Contact;

    constructor() { }

    ngOnInit(): void {
    }

    contact(f: Contact){
        console.log(f);
        console.log(f.name.firstName);
        //send data to api
    }
}
