import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-builder-form',
  templateUrl: './builder-form.component.html',
  styleUrls: ['./builder-form.component.scss']
})
export class BuilderFormComponent implements OnInit {
    profileForm = this.fb.group({
        firstName: [
            '',
            [
                Validators.required,
                Validators.maxLength(15),
            ]
        ],
        lastName: [
            '',
            [
                Validators.required,
                Validators.maxLength(15)
            ]
        ],
        address: this.fb.group({
            street: ['', Validators.required,],
            city:   ['', Validators.required,],
            state:  ['', Validators.required,],
            zip:    ['', Validators.required,]
        }),
        aliases: this.fb.array([
            this.fb.control('') //populated with a single control
        ])
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

    //Access the FormArray control
    get aliases() {
        return this.profileForm.get('aliases') as FormArray;
      }

    constructor(
        private fb: FormBuilder
    ) { }

    ngOnInit(): void {
    }

    onSubmit() {
        console.warn(this.profileForm.value);
        //Send data to api
    }

    //Form Array
    addAlias() {
        this.aliases.push(this.fb.control(''));
    }
    removeTel(index: number) {
        this.aliases.removeAt(index);
    }

}
