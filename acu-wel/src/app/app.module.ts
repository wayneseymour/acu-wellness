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

@NgModule({
    declarations: [
        AppComponent,
        BackgroundInfoComponent,
        FavoritesComponent,
        SideRailComponent,
        HeaderComponent,
        TitleComponent,
        HeadshotComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
