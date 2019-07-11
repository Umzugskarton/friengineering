import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProjectsComponent } from './projects/projects.component';
import { SamplesComponent } from './samples/samples.component';
import { ProjectListComponent } from './projects/project-list/project-list.component';
import { ProjectDetailsComponent } from './projects/project-details/project-details.component';
import { ProjectItemComponent } from './projects/project-list/project-item/project-item.component';
import { SamplesEditComponent } from './samples/samples-edit/samples-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProjectsComponent,
    SamplesComponent,
    ProjectListComponent,
    ProjectDetailsComponent,
    ProjectItemComponent,
    SamplesEditComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
