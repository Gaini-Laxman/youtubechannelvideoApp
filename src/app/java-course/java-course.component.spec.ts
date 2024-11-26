import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavaCourseComponent } from './java-course.component';

describe('JavaCourseComponent', () => {
  let component: JavaCourseComponent;
  let fixture: ComponentFixture<JavaCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JavaCourseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JavaCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
