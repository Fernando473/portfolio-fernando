import { Component } from '@angular/core';

@Component({
  selector: 'theme-switcher',
  templateUrl: './theme-switcher.component.html',
  styleUrls: ['./theme-switcher.component.css']
})
export class ThemeSwitcherComponent {

  isDarkTheme: boolean = false;

  images = {
    light: '/assets/moon.png',
    dark: '/assets/sun.png'
  }

  switchTheme() {
    this.isDarkTheme = !this.isDarkTheme;
  }
  getCurrentTheme() {
    return this.isDarkTheme ? this.images.dark : this.images.light;
  }

}
