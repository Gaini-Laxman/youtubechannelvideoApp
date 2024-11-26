import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssCourseComponent } from './css-course.component';

describe('CssCourseComponent', () => {
  let component: CssCourseComponent;
  let fixture: ComponentFixture<CssCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CssCourseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CssCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
