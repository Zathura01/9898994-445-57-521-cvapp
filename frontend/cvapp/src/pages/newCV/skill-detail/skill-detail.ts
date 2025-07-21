import { Component, EventEmitter, Output } from '@angular/core';
import { StoredNewCVDataService } from '../../../service/stored-new-cvdata/stored-new-cvdata';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skill-detail',
  imports: [FormsModule, CommonModule],
  templateUrl: './skill-detail.html',
  styleUrl: './skill-detail.css'
})
export class SkillDetail {
 @Output() skillRedirect = new EventEmitter<string>();

  skillData: any[] = [];
  newSkillItem: any = {
    skill: '',
    misc: ''
  };

  constructor(public cvStorage: StoredNewCVDataService) {}

  ngOnInit() {
    this.skillData = this.cvStorage.loadData('skill')
  }

  newAdded() {
    this.skillData.push({ ...this.newSkillItem }); // Use spread to push a copy
    this.newSkillItem = { // Clear the form
      skill: '',
      misc: ''
    };
    this.ngOnInit()
  }

  remove(index: number){
    this.cvStorage.removeFromArrays(index, 'skill')
    this.ngOnInit()
  }

  resetData() {
    this.skillData = [];
    this.cvStorage.resetData('skill');
    this.ngOnInit()
  }

  saveData(section: string) {
    this.cvStorage.saveData('skill', this.skillData);
  }

  loadNextComponent() {
     this.saveData('skill')
    this.skillRedirect.emit('interest')
  }
}
