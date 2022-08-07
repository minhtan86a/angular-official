import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-array-tutorial',
  templateUrl: './array-tutorial.component.html',
  styleUrls: ['./array-tutorial.component.scss']
})
export class ArrayTutorialComponent implements OnInit {
    output: string[] = [];

    constructor() { }

    showOutput(output:string){
        this.output.push(output);
    }

    ngOnInit(): void {
        //forEach
        this.jsForeach();

        //include
        this.jsInclude();

        //filter
        this.jsFilter();

        //map
        this.jsMap();

        //reduce
        this.jsReduce();

        //some
        this.jsSome();
    }

    //forEach
    jsForeach(){
        const arr = [1, 2, 3, 4, 5, 6];

        arr.forEach(item => {
            console.log(item); // output: 1 2 3 4 5 6
        });
        const output = `
            arr = [1, 2, 3, 4, 5, 6]
            1 2 3 4 5 6
        `;
        this.showOutput(output);
    }

    //include
    jsInclude(){
        const arr = ['Nam', 2, 3, 4, 5, 6];

        console.log(arr.includes('Nam')); // output: true
        console.log(arr.includes(7)); // output: false

        const output = `
            const arr = ['Nam', 2, 3, 4, 5, 6];
            console.log(arr.includes('Nam')); // output: true
            console.log(arr.includes(7)); // output: false
        `;
        this.showOutput(output);
    }

    jsFilter(){
        const arr = [1, 2, 3, 4, 5, 6];

        // giá trị > 2 thì lấy ra
        const filtered = arr.filter(num => num > 2);
        console.log(filtered);

        const output = `
            const arr = [1, 2, 3, 4, 5, 6];

            // giá trị > 2 thì lấy ra
            const filtered = arr.filter(num => num > 2);
            console.log(filtered);
            // output: [3, 4, 5, 6]
        `;
        this.showOutput(output);
    }

    jsMap(){
        const arr = [1, 2, 3, 4, 5, 6];

        //Create a new array after handle values
        const oneAdded = arr.map(num => num + 1);
        console.log(oneAdded); // output [2, 3, 4, 5, 6, 7]
        console.log(arr); // output: [1, 2, 3, 4, 5, 6]

        const output = `
            const arr = [1, 2, 3, 4, 5, 6];

            //Create a new array after handle values
            const oneAdded = arr.map(num => num + 1);
            console.log(oneAdded); // output [2, 3, 4, 5, 6, 7]
            console.log(arr); // output: [1, 2, 3, 4, 5, 6]
        `;
        this.showOutput(output);
    }

    jsReduce(){
        const array1 = [1, 2, 3, 4];

        // 0 + 1 + 2 + 3 + 4
        const initialValue = 0;
        const sumWithInitial = array1.reduce(
        (previousValue, currentValue) => previousValue + currentValue,
        initialValue
        );

        console.log(sumWithInitial);
        // expected output: 10

        const objects = [{ x: 1 }, { x: 2 }, { x: 3 }];
        const sum = objects.reduce(
            (previousValue, currentValue) => previousValue + currentValue.x,
        0,
        );

        console.log(sum); // logs 6

        const output = `
            //Example 1
            const array1 = [1, 2, 3, 4];

            // 0 + 1 + 2 + 3 + 4
            const initialValue = 0;
            const sumWithInitial = array1.reduce(
                (previousValue, currentValue) => previousValue + currentValue,
                initialValue
            );

            console.log(sumWithInitial);
            // expected output: 10

            //Example 2
            const objects = [{ x: 1 }, { x: 2 }, { x: 3 }];
            const sum = objects.reduce(
                (previousValue, currentValue) => previousValue + currentValue.x, 0,
            );

            console.log(sum); // logs 6
        `;
        this.showOutput(output);
    }

    jsSome() {
        const arr = [3, 9, 7, 6];

        //check xem có số nào nhỏ hơn 5 ko, ko cần chạy hết array
        const result = arr.some(num => num < 5);
        console.log(result); // output: true

        const output = `
            const arr = [3, 9, 7, 6];

            //check xem có số nào nhỏ hơn 5 ko, ko cần chạy hết array
            const result = arr.some(num => num < 5);
            console.log(result); // output: true
        `;
        this.showOutput(output);
    }

}
