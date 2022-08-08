import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromiseTutorialComponent } from './promise-tutorial.component';

describe('PromiseTutorialComponent', () => {
  let component: PromiseTutorialComponent;
  let fixture: ComponentFixture<PromiseTutorialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromiseTutorialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PromiseTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
