import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadshotComponent } from './headshot.component';

describe('HeadshotComponent', () => {
  let component: HeadshotComponent;
  let fixture: ComponentFixture<HeadshotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadshotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadshotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
