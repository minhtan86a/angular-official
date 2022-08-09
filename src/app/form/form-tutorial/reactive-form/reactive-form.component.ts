import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NoWhitespaceValidator } from '../custom_validate/validate_whitespace';


@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
    //name = new FormControl('');

    // updateName() {
    //     this.name.setValue('Nancy');
    // }

    profileForm = new FormGroup({
        firstName:  new FormControl(
            '',
            [
                Validators.required,
                Validators.maxLength(15),
                NoWhitespaceValidator() //custom validate
            ]
        ),
        lastName:   new FormControl(
            '',
            [
                Validators.required,
                Validators.maxLength(15),
                NoWhitespaceValidator()
            ]
            ),
        address: new FormGroup({
            street:     new FormControl('', Validators.required),
            city:       new FormControl('', Validators.required),
            state:      new FormControl('', Validators.required),
            zip:        new FormControl('', Validators.required)
        })
    });

    //getter
    get firstName() {
        return this.profileForm.get('firstName');
    }

    get lastName() {
        return this.profileForm.get('lastName');
    }

    get street() {
        return this.profileForm.get('address.street');
    }
    get city() {
        return this.profileForm.get('address.city');
    }
    get state() {
        return this.profileForm.get('address.state');
    }
    get zip() {
        return this.profileForm.get('address.zip');
    }

    constructor() { }

    ngOnInit(): void {
    }

    onSubmit() {
        console.warn(this.profileForm.value);
        //Send data to api
    }

    updateProfile() {
        //setValue: update all, can use to load data from api to input
        //patchValue: update parts of the data model
        this.profileForm.patchValue({
          firstName: 'Nancy',
          address: {
            street: '123 Drew Street'
          }
        });
    }



}
