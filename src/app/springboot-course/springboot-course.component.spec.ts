import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpringbootCourseComponent } from './springboot-course.component';

describe('SpringbootCourseComponent', () => {
  let component: SpringbootCourseComponent;
  let fixture: ComponentFixture<SpringbootCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SpringbootCourseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpringbootCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
