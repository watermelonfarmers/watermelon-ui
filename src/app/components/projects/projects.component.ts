import { Component, OnInit, ViewChild } from '@angular/core';

export interface Project {
  id: number;
  title: string;
}

@Component({
  selector: 'app-project',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  public projects: Array<Project> = [
    { id: 1, title: 'Watermelon' },
    { id: 2, title: 'Mango' },
    { id: 3, title: 'Apple' },
    { id: 4, title: 'Bananas' }
  ];

  public newProject: string;
  public currentProject: Project;

  constructor() { }

  ngOnInit() {
    if (sessionStorage.getItem('project')) {
      this.currentProject = JSON.parse(sessionStorage.getItem('project'));
    } else {
      this.setProject(this.projects[0]);
    }
  }

  setProject(project: Project)   {
    sessionStorage.setItem('project', JSON.stringify(project));
    this.currentProject = project
    this.closeNav();
  }


  isActiveProject(project: Project) {
    return this.currentProject.title === project.title;
  }

  addProject() {
    if (this.newProject === undefined || this.newProject === '') {return;}
    console.log(this.newProject);

    let project: Project = {id: 12, title: this.newProject}
    this.projects.push(project)
    this.newProject = '';
  }

  openNav() {
    document.getElementById("side-bar").style.width = "300px";
  }

  closeNav() {
    document.getElementById("side-bar").style.width = "0";
  }

}
