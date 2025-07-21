import { Component, EventEmitter, Output } from '@angular/core';
import { StoredNewCVDataService } from '../../../service/stored-new-cvdata/stored-new-cvdata';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-interest-detail',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './interest-detail.html',
  styleUrl: './interest-detail.css'
})
export class InterestDetail {
  @Output() interestRedirect = new EventEmitter<string>();

  interestData: string[] = [];
  newInterestItem: string = '';

  constructor(public cvStorage: StoredNewCVDataService) {}

  ngOnInit() {
    this.interestData = this.cvStorage.loadData('interest') || [];
  }

  newAdded() {
    if (this.newInterestItem.trim()) {
      this.interestData.push(this.newInterestItem.trim());
      this.newInterestItem = '';
    }
  }

  remove(index: number) {
    this.interestData.splice(index, 1);
    
  }

  resetData() {
    this.interestData = [];
    this.cvStorage.resetData('interest');
  }

  saveData() {
    this.cvStorage.saveData('interest', this.interestData);
  }

  loadNextComponent() {
    this.saveData();
    this.interestRedirect.emit('project');
  }
}
