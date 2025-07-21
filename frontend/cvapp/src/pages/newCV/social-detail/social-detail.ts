import { Component, EventEmitter, Output } from '@angular/core';
import { StoredNewCVDataService } from '../../../service/stored-new-cvdata/stored-new-cvdata';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-social-detail',
  imports: [FormsModule, CommonModule],
  templateUrl: './social-detail.html',
  styleUrl: './social-detail.css'
})
export class SocialDetail {
@Output() socialRedirect = new EventEmitter<string>();

  socialData: any[] = [];
  newSocialItem: any = {
    name: '',
    link: ''
  };

  constructor(public cvStorage: StoredNewCVDataService) {}

  ngOnInit() {
    this.socialData = this.cvStorage.loadData('social')
  }

  newAdded() {
    this.socialData.push({ ...this.newSocialItem }); // Use spread to push a copy
    this.newSocialItem = { // Clear the form
      name: '',
      link: ''
    };
    this.ngOnInit()
  }

  remove(index: number){
    this.cvStorage.removeFromArrays(index, 'social')
    this.ngOnInit()
  }

  resetData() {
    this.socialData = [];
    this.cvStorage.resetData('social');
    this.ngOnInit()
  }

  saveData(section: string) {
    this.cvStorage.saveData('social', this.socialData);
  }

  loadNextComponent() {
     this.saveData('social')
    this.socialRedirect.emit('personal')
  }
}
