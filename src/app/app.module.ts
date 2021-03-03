import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ContentComponent } from './content/content.component';
import { SessionsComponent } from './sessions/sessions.component';
import { HeaderComponent } from './content/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    SessionsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
