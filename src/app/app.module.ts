import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ThemeService } from './theme.service';
import { ThemeSwitcherComponent } from './theme-switcher/theme-switcher.component';
import { ComponentWithCustomColorComponent } from './component-with-custom-color/component-with-custom-color.component';

@NgModule({
  declarations: [
    AppComponent,
    ThemeSwitcherComponent,
    ComponentWithCustomColorComponent
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
