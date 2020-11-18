import { Component } from '@angular/core';
import {faGithub } from '@fortawesome/free-brands-svg-icons';
import { AnimateGallery } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [AnimateGallery]
})
export class AppComponent {
  icon = faGithub;
  title = 'parcial1';
}
