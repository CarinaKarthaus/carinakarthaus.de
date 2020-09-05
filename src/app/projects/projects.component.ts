import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects = [
    { 
      title: 'El Pollo Loco', 
      details: 'A JavaScript-based jump-and-run-game.', 
      app_link: 'http://carina-karthaus.developerakademie.com/el_pollo_loco/', 
      github_link: 'https://github.com/CarinaKarthaus/el_pollo_loco', 
      img: 'el_pollo_loco.png',
      img_mobile: ''
    },
    {
      title: 'JOIN - The Task Manager', 
      details: 'An app to create, assign and manage tasks using Eisenhower\'s urgent-important-principle.', 
      app_link: 'http://carina-karthaus.developerakademie.com/task-management/', 
      github_link: 'https://github.com/CarinaKarthaus/task-management', 
      img: 'join.png',
      img_mobile: 'join_mobile.png'
    }    
  ]

 
  constructor() { }

  ngOnInit(): void {
  }

}
