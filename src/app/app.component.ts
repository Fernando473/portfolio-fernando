import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title :string = 'Fernando Sangopanta | Portfolio Personal';
  isVisible :boolean = false;
  navItems = [
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'About Me', href: '#about-me' },
  ];
  public constructor(private titleService : Title){
    this.titleService.setTitle(this.title);
  }

  toggleMenu(){
    this.isVisible = !this.isVisible;
  }

}
