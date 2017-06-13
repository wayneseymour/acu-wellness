import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {BackgroundInfoComponent} from './background-info/background-info.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { SideRailComponent } from './side-rail/side-rail.component';
import { HeaderComponent } from './header/header.component';
import { TitleComponent } from './title/title.component';
import { HeadshotComponent } from './headshot/headshot.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { InsuranceFeesComponent } from './insurance-fees/insurance-fees.component';
import { EmailComponent } from './email/email.component';
import appRoutes from "./app.routes";
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
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
        EmailComponent,
        HomeComponent,
        ContactComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        appRoutes,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {
}
