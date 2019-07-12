import {Component, OnInit} from '@angular/core';
import {Activity, PrioritiesEnum, StatusEnum} from '../shared/activity.model';

@Component({
  selector: 'app-active',
  templateUrl: './active.component.html',
  styleUrls: ['./active.component.css']
})
export class ActiveComponent implements OnInit {
  activities: Activity[] = [
    new Activity('Implement Sample', PrioritiesEnum.major, StatusEnum.inprogress)
  ];
  constructor() { }

  ngOnInit() {
  }

}
