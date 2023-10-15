import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isShownMenu!: boolean;

  constructor() {}

  toggleMenu() {
    this.isShownMenu = !this.isShownMenu;
  }
}
