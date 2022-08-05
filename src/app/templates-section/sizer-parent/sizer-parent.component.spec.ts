import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SizerParentComponent } from './sizer-parent.component';

describe('SizerParentComponent', () => {
  let component: SizerParentComponent;
  let fixture: ComponentFixture<SizerParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SizerParentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SizerParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
