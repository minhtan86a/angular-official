import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTutorialComponent } from './http-client-tutorial.component';

describe('HttpClientTutorialComponent', () => {
  let component: HttpClientTutorialComponent;
  let fixture: ComponentFixture<HttpClientTutorialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HttpClientTutorialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HttpClientTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
