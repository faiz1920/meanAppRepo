import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerSitesListComponent } from './customer-sites-list.component';

describe('CustomerSitesListComponent', () => {
  let component: CustomerSitesListComponent;
  let fixture: ComponentFixture<CustomerSitesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerSitesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerSitesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
