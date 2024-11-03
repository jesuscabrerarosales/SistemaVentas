import { Component } from '@angular/core';
import { SideBarItemComponent } from '../side-bar-item/side-bar-item.component';

@Component({
  selector: 'app-side-bar-panel',
  standalone: true,
  imports: [SideBarItemComponent],
  templateUrl: './side-bar-panel.component.html',
  styleUrl: './side-bar-panel.component.css'
})
export class SideBarPanelComponent {

}
