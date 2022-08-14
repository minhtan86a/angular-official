import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialUiTutorialComponent } from './material-ui-tutorial.component';

describe('MaterialUiTutorialComponent', () => {
  let component: MaterialUiTutorialComponent;
  let fixture: ComponentFixture<MaterialUiTutorialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialUiTutorialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialUiTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
