import { Component, OnInit } from '@angular/core';
import {ThemeService} from "../theme.service";

@Component({
  selector: 'app-theme-switcher',
  templateUrl: './theme-switcher.component.html',
  styleUrls: ['./theme-switcher.component.sass']
})
export class ThemeSwitcherComponent implements OnInit {

  constructor(private theme: ThemeService) { }

  ngOnInit(): void {
  }

  public currentTheme(): string {
    return this.theme.current;
  }

  public selectTheme(value: string): void {
    this.theme.current = value;
  }

}
