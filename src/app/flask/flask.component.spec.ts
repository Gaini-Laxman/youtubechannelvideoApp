import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlaskComponent } from './flask.component';

describe('FlaskComponent', () => {
  let component: FlaskComponent;
  let fixture: ComponentFixture<FlaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FlaskComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
