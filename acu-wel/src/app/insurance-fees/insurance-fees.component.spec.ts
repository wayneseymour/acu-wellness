import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceFeesComponent } from './insurance-fees.component';

describe('InsuranceFeesComponent', () => {
  let component: InsuranceFeesComponent;
  let fixture: ComponentFixture<InsuranceFeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsuranceFeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsuranceFeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
