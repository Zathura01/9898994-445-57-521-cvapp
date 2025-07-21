import { Component, EventEmitter, Output } from '@angular/core';
import { StoredNewCVDataService } from '../../../service/stored-new-cvdata/stored-new-cvdata';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-award-detail',
  imports: [FormsModule, CommonModule],
  templateUrl: './award-detail.html',
  styleUrl: './award-detail.css'
})
export class AwardDetail {
@Output() awardRedirect = new EventEmitter<string>();


/* awards and certificates
-title
-issuer
-date
-crediti id/url
-description */


  awardData: any[] = [];
  newAwardItem: any = {
   title:'',
   issuer:'',
   date: null,
   credential: '',
   misc: ''
  };

  constructor(public cvStorage: StoredNewCVDataService) {}

  ngOnInit() {
    this.awardData = this.cvStorage.loadData('award')
  }

  newAdded() {
    this.awardData.push({ ...this.newAwardItem }); // Use spread to push a copy
    this.newAwardItem = { // Clear the form
   title:'',
   issuer:'',
   date: null,
   credential: '',
   misc: ''
    };
  }

  remove(index: number){
    this.cvStorage.removeFromArrays(index, 'award')
    this.ngOnInit()
  }

  resetData() {
    this.awardData = [];
    this.cvStorage.resetData('award');
    this.ngOnInit()
  }

  saveData(section: string) {
    this.cvStorage.saveData('award', this.awardData);
  }

  loadNextComponent() {
     this.saveData('award')
    this.awardRedirect.emit('social')
    console.log('nextawad')
  }

}
