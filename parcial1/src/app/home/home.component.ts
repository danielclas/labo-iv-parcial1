import { AnimateGallery } from './../animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faArrowRight, IconDefinition} from '@fortawesome/free-solid-svg-icons';

interface ListItem{
  label: string,
  link: string
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [AnimateGallery]
})

export class HomeComponent implements OnInit {

  icon: IconDefinition = faArrowRight;
  listItems: ListItem[] = [
    {label: 'Alta actor', link: '/alta-actor'},
    {label: 'Listado de actores/películas', link: '/listado-actores'},
    {label: 'Alta de peliculas', link: '/alta-peliculas'}
  ]

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onClick(item: ListItem){
    this.router.navigateByUrl(item.link);
  }

}
