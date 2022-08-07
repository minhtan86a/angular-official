import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-object-tutorial',
  templateUrl: './object-tutorial.component.html',
  styleUrls: ['./object-tutorial.component.scss']
})
export class ObjectTutorialComponent implements OnInit {
    objSample: string = `
        employee: Employee = {
            firstName: 'John',
            lastName: 'Doe',
            age: 25,
            jobTitle: 'Web Developer',
            isAvailable: true,
        };
    `
    output: string[] = [];

    //Sample
    employee: Employee = {
        firstName: 'John',
        lastName: 'Doe',
        age: 25,
        jobTitle: 'Web Developer',
        isAvailable: true,
    };

    constructor() {}

    ngOnInit(): void {
        //Create a object
        //this.createObj();

        //Get an array with all key of object
        this.createArrayKeyObj();

        //Get an array with all value of object
        this.createArrayValueObj();

        //create an nested array with key/value of an Object
        this.objEntries();

        //một method dùng để sao chép những giá trị từ một object này sang một object khác.
        this.objAssign();

        //dùng để ngăn chặn một hành vi sửa đổi thuộc tính giá trị của một object, ngoài ra cũng có thể ngăn chặn một hành vi như xoá or add thêm thuộc tính.
        this.objFreeze();

        //dùng để ngăn chặn hành vi add thêm một new properties nhưng lại cho phép modification những thuộc tính đã tồn tại trước đó
        this.objSeal();
    }

    showOutput(output: string){
        this.output.push(output);
    }

    //Object.create(): Create a object
    createObj() {
        const abc = Object.create(this.employee);
        abc.firstName = 'abc';
        abc.address = "10 Street";
        abc.isAvailable = false;
        console.log(abc);
    }

    //Object.keys(): Get an array with all key of object
    createArrayKeyObj() {
        const keys  = Object.keys(this.employee);
        //console.log(keys);
        const output = `['firstName', 'lastName', 'age', 'jobTitle', 'isAvailable']`;
        this.showOutput(output);

        // Iterate through the keys
        keys.forEach(key => {

            //option 1: used keyof typeof to get a union type of the object's keys.
            //let value = this.employee[key as keyof typeof this.employee];

            //option 2: working with a type directly, use keyof [MyType] to get a union of the object's keys.
            //Notice that we used keyof Person and not keyof typeof Person, because Person is a type, and not an object.
            let value = this.employee[key as keyof Employee];

            //console.log(`${key}: ${value}`);
        });
    }

    //Object.values(): Get an array with all value of object
    createArrayValueObj(){
        const values = Object.values(this.employee);
        //console.log(values);
        const output = `['John', 'Doe', 25, 'Web Developer', true]`;
        this.showOutput(output);
    }

    //Object.entries() create an nested array with key/value of an Object
    objEntries(){
        const entries = Object.entries(this.employee);
        //console.log(entries);
        const output = `
            [
                ['firstName', 'John']
                ['lastName', 'Doe']
                ['age', 25]
                ['jobTitle', 'Web Developer']
                ['isAvailable', true]
            ]
        `;
        this.showOutput(output);
    }

    objAssign(){
        // Initialize an object
        const name = {
            firstName: 'Philip',
            lastName: 'Fry'
        };

        // Initialize another object
        const details = {
            job: 'Delivery Boy',
            employer: 'Planet Express'
        };

        // option1: Merge the objects with assign method
        //const character = Object.assign(name, details);

        // option2: Merge the object with the spread operator
        const character = {...name, ...details}

        //console.log(character);
        const output = `
            {
                firstName: 'Philip',
                lastName: 'Fry'
            }
            {
                job: 'Delivery Boy',
                employer: 'Planet Express'
            }

            Merge two objects:
            {
                employer: "Planet Express"
                firstName: "Philip"
                job: "Delivery Boy"
                lastName: "Fry"
            }
        `;
        this.showOutput(output);
    }

    objFreeze(){
        // Initialize an object
        const user = {
            username: 'AzureDiamond',
            password: 'hunter2'
        };

        // Freeze the object
        const newUser = Object.freeze(user);

        //Error readonly property
        //newUser.password = '*******';
        //newUser.active = true;

        //console.log(newUser);

        const output = `
            const user = {
                username: 'AzureDiamond',
                password: 'hunter2'
            };

            const newUser = Object.freeze(user);

            newUser.password = '*******';
            newUser.active = true;

            output: {username: "AzureDiamond", password: "hunter2"}
        `
        this.showOutput(output);
    }

    objSeal(){
        // Initialize an object
        const user = {
            username: 'AzureDiamond',
            password: 'hunter2'
        };

        // Seal the object
        const newUser = Object.seal(user);

        newUser.password = '*******';
        newUser.username = 'abc';

        //console.log(newUser);
        const output = `
            const user = {
                username: 'AzureDiamond',
                password: 'hunter2'
            };

            const newUser = Object.seal(user);

            newUser.password = '*******';
            newUser.username = 'abc';

            output: {username: 'abc', password: '*******'}
        `;
        this.showOutput(output);

    }


}

