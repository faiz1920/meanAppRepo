import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PrgDynamicContentLoaderComponent } from './prg-dynamic-content-loader.component';


describe('PrgDynamicContentLoaderComponent', () => {
  let component: PrgDynamicContentLoaderComponent;
  let fixture: ComponentFixture<PrgDynamicContentLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrgDynamicContentLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrgDynamicContentLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
