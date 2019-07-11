import { Component, OnInit } from '@angular/core';
import {Project} from '../projects.model';


@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  projects: Project[] = [
    new Project('Trace Lab', 'Project Desription', 'https://www.electronicdesign.com/sites/electronicdesign.com' +
      '/files/styles/article_featured_standard/public/Hansen_Report_Lead.jpg?itok=u4UfwxKO')
  ];

  constructor() { }

  ngOnInit() {
  }

}
