import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise-tutorial',
  templateUrl: './promise-tutorial.component.html',
  styleUrls: ['./promise-tutorial.component.scss']
})
export class PromiseTutorialComponent implements OnInit {
    code: string = `
        //Promise
        doAsyncTask() {
            let promise = new Promise((resolve, reject) => {
                setTimeout(() => {
                    console.log("Async Work Complete");
                    let error = true;

                    //Any values we pass to the resolve and reject functions are passed along to the error and success handlers
                    if (error) {
                        reject('error'); //pass value
                    } else {
                        resolve('done'); //pass value
                    }
                }, 1000);
            });
            return promise;
        }

        //promise
        this.doAsyncTask().then(
            (val) => console.log(val), //success - val is pass from resolve
            (err) => console.log(err), //error - err is pass from reject
        );
    `

    constructor() { }

    ngOnInit(): void {
        //Callback
        //this.doAsyncTask(() => console.log("Callback Called"));

        //promise
        this.doAsyncTask().then(
            (val) => console.log(val), //success - val is pass from resolve
            (err) => console.log(err), //error - err is pass from reject
        );

        //create an immediately resolved Promise
        let promise = Promise.resolve('test');
        //let promise = Promise.reject('fail');
        promise.then((val) => console.log(val)); // 'done'

        //Chaining
        Promise.resolve("done")
            .then(
                (val) => {
                console.log(val);
                return 'done2'; //done2 is passed to next then
                },
                (err) => console.error(err)
            )
            .then(
                (val) => console.log(val), //done 2
                (err) => console.error(err)
            );

        // throw an exception from our promise function or one of the success handlers, the promise gets rejected and the error handler is called
        Promise.resolve('done')
            .then((val) => {
                throw new Error("fail"); //stop here
            })
            .then(
                (val) => console.log(val),
                (err) => console.error(err) //show error here
            );
        // [Error: fail]

        //Catch
        Promise.resolve('abc')
            .then((val) => {throw new Error("fail 1")})
            .then((val) => console.log(val))
            .catch((err: Error) => console.error(err)); //catch error here

        //then only take a function
        Promise.resolve(1)
            .then(() => 2)
            // hoặc như thế này, mặc dù hơi dư thừa
            //.then(() => Promise.resolve(2))
            .then(console.log) // 2


    }

    //using Callback
    // doAsyncTask(cb: () => any) {
    //     setTimeout(() => {
    //         console.log("Async Task Calling Callback");
    //         cb();
    //     }, 1000);
    // }

    //Promise
    doAsyncTask() {
        let promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log("Async Work Complete");
                let error = true;

                //Any values we pass to the resolve and reject functions are passed along to the error and success handlers
                if (error) {
                    reject('error'); //pass value
                } else {
                    resolve('done'); //pass value
                }
            }, 1000);
        });
        return promise;
    }
}
