import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ThemeService } from './theme.service';
import { ThemeSwitcherComponent } from './theme-switcher/theme-switcher.component';

@NgModule({
  declarations: [
    AppComponent,
    ThemeSwitcherComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
  	ThemeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
