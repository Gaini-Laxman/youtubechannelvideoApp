import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlCourseComponent } from './html-course.component';

describe('HtmlCourseComponent', () => {
  let component: HtmlCourseComponent;
  let fixture: ComponentFixture<HtmlCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HtmlCourseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HtmlCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
