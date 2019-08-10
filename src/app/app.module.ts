import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PostsComponent} from './pages/posts/posts.component';
import {PlaceholderService} from './services/placeholder.service';
import {HttpClientModule} from '@angular/common/http';
import {TitleCasePipe} from '@angular/common';
import { NavbarComponent } from './shared/navbar/navbar.component';


@NgModule({
    declarations: [
        AppComponent,
        PostsComponent,
        NavbarComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule
    ],
    providers: [PlaceholderService, TitleCasePipe],
    bootstrap: [AppComponent]
})
export class AppModule {
}
