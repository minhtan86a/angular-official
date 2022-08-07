import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectTutorialComponent } from './object-tutorial.component';

describe('ObjectTutorialComponent', () => {
  let component: ObjectTutorialComponent;
  let fixture: ComponentFixture<ObjectTutorialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObjectTutorialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObjectTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
