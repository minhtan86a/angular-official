import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayTutorialComponent } from './array-tutorial.component';

describe('ArrayTutorialComponent', () => {
  let component: ArrayTutorialComponent;
  let fixture: ComponentFixture<ArrayTutorialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArrayTutorialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArrayTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
