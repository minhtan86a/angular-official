import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterTutorialComponent } from './router-tutorial.component';

describe('RouterTutorialComponent', () => {
  let component: RouterTutorialComponent;
  let fixture: ComponentFixture<RouterTutorialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouterTutorialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RouterTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
