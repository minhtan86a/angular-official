import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpAngularComponent } from './http-angular.component';

describe('HttpAngularComponent', () => {
  let component: HttpAngularComponent;
  let fixture: ComponentFixture<HttpAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HttpAngularComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HttpAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
