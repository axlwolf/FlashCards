import { Component, Output, EventEmitter } from '@angular/core';
import {NavigationService} from "../../../../shared/services/navigation.service";

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {

  constructor(public navigationService: NavigationService) { }

}
