import { CommonModule } from '@angular/common';
import { Component, TemplateRef } from '@angular/core';
import {
  NgbOffcanvas,
  NgbOffcanvasModule,
  OffcanvasDismissReasons,
} from '@ng-bootstrap/ng-bootstrap';
import { NavItems } from '../../core/datas/nav-items';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [CommonModule],
  providers: [NgbOffcanvasModule],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.scss',
})
export class TopbarComponent {
  navItems = NavItems;
  closeResult = '';

  constructor(public offcanvas: NgbOffcanvas) {}

  open(content: TemplateRef<any>) {
    this.offcanvas
      .open(content, {
        ariaLabelledBy: 'offcanvas-basic-title',
        position: 'end',
        panelClass: 'offcanvas',
      })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  private getDismissReason(reason: any): string {
    switch (reason) {
      case OffcanvasDismissReasons.ESC:
        return 'by pressing ESC';
      case OffcanvasDismissReasons.BACKDROP_CLICK:
        return 'by clicking on the backdrop';
      default:
        return `with: ${reason}`;
    }
  }
}
