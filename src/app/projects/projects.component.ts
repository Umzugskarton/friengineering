import {Component, Input, OnInit} from '@angular/core';
import {Project} from './projects.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: Project[] =   [
    new Project('Trace Lab', 'Project Desription', 'https://www.electronicdesign.com/sites/electronicdesign.com' +
      '/files/styles/article_featured_standard/public/Hansen_Report_Lead.jpg?itok=u4UfwxKO'),
    new Project('ESO ', 'Project Desription', 'https://www.electronicdesign.com/sites/electronicdesign.com' +
      '/files/styles/article_featured_standard/public/Hansen_Report_Lead.jpg?itok=u4UfwxKO')
  ];

  onProjectCreated(projectData: Project) {
    this.projects.push(projectData);
  }

  constructor() { }



  ngOnInit() {
  }

}
