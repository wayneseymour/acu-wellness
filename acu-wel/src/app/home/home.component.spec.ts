import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import {TitleComponent} from "../title/title.component";
import {HeadshotComponent} from "../headshot/headshot.component";
import {InsuranceFeesComponent} from "../insurance-fees/insurance-fees.component";
import {EmailComponent} from "../email/email.component";
import {TestimonialComponent} from "../testimonial/testimonial.component";
import {BackgroundInfoComponent} from "../background-info/background-info.component";
import {FavoritesComponent} from "../favorites/favorites.component";

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
          HomeComponent,
          TitleComponent,
          HeadshotComponent,
          InsuranceFeesComponent,
          EmailComponent,
          TestimonialComponent,
          BackgroundInfoComponent,
          FavoritesComponent,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
