import {Component, Input, OnInit} from '@angular/core';
import {Project} from '../../projects.model';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.css']
})
export class ProjectItemComponent implements OnInit {
  @Input()
  name: string;
  @Input()
  desc: string;
  @Input()
  img: string;
  constructor() {
  }

  ngOnInit() {
  }

}
