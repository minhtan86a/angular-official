import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy     {
    @Input() userName = '';

    @ViewChild('wrapper') wrapper!: ElementRef;
    @ContentChild('contentWrapper') content!: ElementRef;

    constructor() { }

    ngOnInit(): void {
        console.log('ngOnInit from the child component');
    }

    ngOnChanges(changes: SimpleChanges) {
        console.log('ngOnChanges triggered', changes);

        if (!changes['userName'].isFirstChange()) {
            if (changes['userName'].currentValue === "Bob") {
              this.userName = 'Hello ' + this.userName
            } else {
              this.userName = changes['userName'].previousValue
            }
        }
    }

    ngDoCheck() {
        console.log('ngDoCheck triggered');
    }

    ngAfterContentInit() {
        console.log('ngAfterContentInit - wrapper', this.wrapper);
        console.log('ngAfterContentInit - contentWrapper', this.content);
    }

    ngAfterContentChecked(): void {
        console.log('ngAfterContentChecked triggered');
    }

    ngAfterViewInit(): void {
        console.log('ngAfterViewInit - wrapper', this.wrapper);
    }

    ngAfterViewChecked(): void {
        console.log('ngAfterViewChecked triggered');
    }

    ngOnDestroy(): void {
        console.log('ngOnDestroy triggered: Child component is destroyed! ');
    }

}
