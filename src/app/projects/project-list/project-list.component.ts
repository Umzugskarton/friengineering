import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Project} from '../projects.model';


@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  @Output() projectCreated = new EventEmitter<Project>();
  @Input() projects: Project[];
  newProjectName = 'Sample Project';
  newProjectDesc = 'Sample Description';
  newProjectImg = 'https://www.electronicdesign.com/sites/electronicdesign.com' +
    '/files/styles/article_featured_standard/public/Hansen_Report_Lead.jpg?itok=u4UfwxKO';

  onCreateProject() {
    this.projectCreated.emit(new Project(this.newProjectName, this.newProjectDesc, this.newProjectImg));
  }

  ngOnInit() {
  }

}
