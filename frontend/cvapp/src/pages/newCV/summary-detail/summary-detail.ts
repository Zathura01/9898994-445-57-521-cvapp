import { Component, Output, EventEmitter } from '@angular/core';
import { StoredNewCVDataService } from '../../../service/stored-new-cvdata/stored-new-cvdata';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-summary-detail',
  imports: [FormsModule, CommonModule],
  templateUrl: './summary-detail.html',
  styleUrl: './summary-detail.css'
})
export class SummaryDetail {
 @Output() summaryRedirect = new EventEmitter<string>();

  summaryData: any = {};
  
    constructor(public cvStorage: StoredNewCVDataService) { }
  
    ngOnInit() {
      this.summaryData = this.cvStorage.loadData('summary')
    }
  
    resetData(section: string) {
      this.cvStorage.resetData('summary')
      this.ngOnInit()
    }
  
    saveData(section: string) {
      this.cvStorage.saveData('summary', this.summaryData)
    }
  
    loadNextComponent(section: string) {
      this.saveData('summary')
      this.summaryRedirect.emit('interest')
  
    }
}
