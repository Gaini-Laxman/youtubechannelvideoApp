import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpringCourseComponent } from './spring-course.component';

describe('SpringCourseComponent', () => {
  let component: SpringCourseComponent;
  let fixture: ComponentFixture<SpringCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SpringCourseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpringCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
