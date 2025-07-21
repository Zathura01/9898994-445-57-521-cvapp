import { Component, Output, EventEmitter } from '@angular/core';
import { StoredNewCVDataService } from '../../../service/stored-new-cvdata/stored-new-cvdata';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-work-detail',
  imports: [FormsModule, CommonModule],
  templateUrl: './work-detail.html',
  styleUrl: './work-detail.css'
})
export class WorkDetail {
  @Output() workRedirect = new EventEmitter<string>()

/* -job title
-company name
-location
-start, end month,year
-key responsibility */

  workData: any[] = [];
  newWorkItem: any = {
    jobTitle:'',
    companyName:'',
    location:'',
    start: null,
    end: null,
    misc: ''
  };

  constructor(public cvStorage: StoredNewCVDataService) { }

  ngOnInit() {
    this.workData = this.cvStorage.loadData('work')
  }

  newAdded() {
    this.workData.push({ ...this.newWorkItem }); // Use spread to push a copy
    this.newWorkItem = { 
jobTitle:'',
    companyName:'',
    location:'',
    start: null,
    end: null,
    misc: ''
    };
  }

  remove(index: number) {
    this.cvStorage.removeFromArrays(index, 'work')
    this.ngOnInit()
  }

  resetData() {
    this.workData = [];
    this.cvStorage.resetData('work');
    this.ngOnInit()
  }

  saveData(section: string) {
    this.cvStorage.saveData(section, this.workData);
  }

  loadNextComponent() {
    this.saveData('work')
    this.workRedirect.emit('skill')
  }

}
