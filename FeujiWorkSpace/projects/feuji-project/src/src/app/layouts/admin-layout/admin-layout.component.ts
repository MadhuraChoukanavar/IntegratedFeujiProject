import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrl: './admin-layout.component.css'
})
export class AdminLayoutComponent {

  @Input() showDashboard: boolean = false;
  menuOptions: string[] = [];
  isArrowRotated1: boolean = false;
  isArrowRotated2: boolean = false;
  
  updateMenuOptions(options: string[]) {
    this.menuOptions = options;
  }
  
  toggleSubmenu(submenuClass: string) {
    const submenu = document.querySelector(`.${submenuClass}`);
    if (submenu) {
      submenu.classList.toggle('show');
    }
  }
  rotateArrow(arrowVariable: string) {
    (this as any)[arrowVariable] = !(this as any)[arrowVariable];
  


}
}
