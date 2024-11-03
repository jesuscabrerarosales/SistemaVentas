import { Component } from '@angular/core';
import { SideBarPanelComponent } from '../../Shared/components/side-bar-panel/side-bar-panel.component';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [SideBarPanelComponent],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponentAdmin {

}
