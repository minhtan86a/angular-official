import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleDetailEditComponent } from './article-detail-edit.component';

describe('ArticleDetailEditComponent', () => {
  let component: ArticleDetailEditComponent;
  let fixture: ComponentFixture<ArticleDetailEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleDetailEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticleDetailEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
