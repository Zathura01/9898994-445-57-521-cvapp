import { Component, EventEmitter, Output } from '@angular/core';
import { StoredNewCVDataService } from '../../../service/stored-new-cvdata/stored-new-cvdata';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-detail',
  imports: [FormsModule, CommonModule],
  templateUrl: './project-detail.html',
  styleUrl: './project-detail.css'
})
export class ProjectDetail {
/* Projects
-title
-role/position
-techno stack
-duration
-description
-features/achieve
-url */

 @Output() projectRedirect = new EventEmitter<string>();

  projectData: any[] = [];
  newProjectItem: any = {
   title: '',
   role: '',
   tech: '',
   duration: '',
   features: '',
   url: '',
   misc: ''
  };

  constructor(public cvStorage: StoredNewCVDataService) {}

  ngOnInit() {
    this.projectData = this.cvStorage.loadData('project')
  }

  newAdded() {
    this.projectData.push({ ...this.newProjectItem }); // Use spread to push a copy
    this.newProjectItem = { // Clear the form
   title: '',
   role: '',
   tech: '',
   duration: '',
   features: '',
   url: '',
   misc: ''
    };
  }

  remove(index: number){
    this.cvStorage.removeFromArrays(index, 'project')
    this.ngOnInit()
  }

  resetData() {
    this.projectData = [];
    this.cvStorage.resetData('project');
    this.ngOnInit()
  }

  saveData(section: string) {
    this.cvStorage.saveData('project', this.projectData);
  }

  loadNextComponent() {
     this.saveData('project')
    this.projectRedirect.emit('personal')
  }


}
