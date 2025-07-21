import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { StoredNewCVDataService } from '../../../service/stored-new-cvdata/stored-new-cvdata';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-education-detail',
  imports: [FormsModule, CommonModule],
  templateUrl: './education-detail.html',
  styleUrls: ['./education-detail.css'] // fixed typo
})
export class EducationDetail implements OnInit {
  @Output() educationRedirect = new EventEmitter<string>();

  educationData: any[] = [];
  newEducationItem: any = {
    degree: '',
    course: '',
    university: '',
    institute: '',
    start: null,
    end: null,
    grade: '',
    location: '',
    misc: ''
  };

  constructor(public cvStorage: StoredNewCVDataService) {}

  ngOnInit() {
    this.educationData = this.cvStorage.loadData('education')
  }

  newAdded() {
    this.educationData.push(this.newEducationItem ); // Use spread to push a copy
    this.newEducationItem = { // Clear the form
      degree: '',
      course: '',
      university: '',
      institute: '',
      start: null,
      end: null,
      grade: '',
      location: '',
      misc: ''
    };
  }

  remove(index: number){
    this.cvStorage.removeFromArrays(index, 'education')
    this.ngOnInit()
  }

  resetData() {
    this.educationData = [];
    this.cvStorage.resetData('education');
    this.ngOnInit()
  }

  saveData(section: string) {
    this.cvStorage.saveData(section, this.educationData);
  }

  loadNextComponent() {
     this.saveData('education')
    this.educationRedirect.emit('personal')
  }
}
