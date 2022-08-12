import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsTutorialComponent } from './rxjs-tutorial.component';

describe('RxjsTutorialComponent', () => {
  let component: RxjsTutorialComponent;
  let fixture: ComponentFixture<RxjsTutorialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxjsTutorialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RxjsTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
