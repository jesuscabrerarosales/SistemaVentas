import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-side-bar-item',
  standalone: true,
  imports: [],
  templateUrl: './side-bar-item.component.html',
  styleUrl: './side-bar-item.component.css'
})
export class SideBarItemComponent {
  @Input() label: string = '';
  @Input() icon: string = '';  // Puedes usar iconos de Font Awesome o similar
  @Input() route: string = '';
}
