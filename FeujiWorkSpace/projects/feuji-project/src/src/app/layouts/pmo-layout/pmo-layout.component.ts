import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pmo-layout',
  templateUrl: './pmo-layout.component.html',
  styleUrl: './pmo-layout.component.css'
})
export class PmoLayoutComponent {

  @Input() showDashboard: boolean = false;
  menuOptions: string[] = [];

  updateMenuOptions(options: string[]) {
    this.menuOptions = options;
  }

  toggleSubmenu(submenuClass: string) {
    const submenu = document.querySelector(`.${submenuClass}`);
    if (submenu) {
      submenu.classList.toggle('show');
    }
  }

}
