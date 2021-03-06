import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { SkillsecComponent } from './skillsec/skillsec.component';
import { InterestComponent } from './interest/interest.component';
@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HeaderComponent,
    SkillsecComponent,
    InterestComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
