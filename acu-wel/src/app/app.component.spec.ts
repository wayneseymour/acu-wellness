import {TestBed, async} from '@angular/core/testing';

import {AppComponent} from './app.component';
import {BackgroundInfoComponent} from "./background-info/background-info.component";
import {FavoritesComponent} from "./favorites/favorites.component";
import {SideRailComponent} from "./side-rail/side-rail.component";
import {HeaderComponent} from "./header/header.component";
import {TitleComponent} from "./title/title.component";
import {HeadshotComponent} from "./headshot/headshot.component";
import {TestimonialComponent} from "./testimonial/testimonial.component";
import {InsuranceFeesComponent} from "./insurance-fees/insurance-fees.component";

describe('AppComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent,
                BackgroundInfoComponent,
                FavoritesComponent,
                SideRailComponent,
                HeaderComponent,
                TitleComponent,
                HeadshotComponent,
                TestimonialComponent,
                InsuranceFeesComponent,
            ],
        }).compileComponents();
    }));

    it('should create the app', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));

});
