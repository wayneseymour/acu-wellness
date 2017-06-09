import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideRailComponent } from './side-rail.component';

describe('SideRailComponent', () => {
  let component: SideRailComponent;
  let fixture: ComponentFixture<SideRailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideRailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideRailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
