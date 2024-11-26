import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MicroservicesCourseComponent } from './microservices-course.component';

describe('MicroservicesCourseComponent', () => {
  let component: MicroservicesCourseComponent;
  let fixture: ComponentFixture<MicroservicesCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MicroservicesCourseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MicroservicesCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
