import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharingDataComponent } from './sharing-data.component';

describe('SharingDataComponent', () => {
  let component: SharingDataComponent;
  let fixture: ComponentFixture<SharingDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharingDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SharingDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
