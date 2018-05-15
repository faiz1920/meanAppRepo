import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatingGenericDashboardComponent } from './floating-generic-dashboard.component';

describe('FloatingGenericDashboardComponent', () => {
  let component: FloatingGenericDashboardComponent;
  let fixture: ComponentFixture<FloatingGenericDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FloatingGenericDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FloatingGenericDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
