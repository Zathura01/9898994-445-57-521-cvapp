import { Component, EventEmitter, Output } from '@angular/core';
import { StoredNewCVDataService } from '../../../service/stored-new-cvdata/stored-new-cvdata';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-personal-detail',
  imports: [FormsModule],
  templateUrl: './personal-detail.html',
  styleUrl: './personal-detail.css'
})
export class PersonalDetail {
  @Output() personalRedirect = new EventEmitter<string>()

  personalData: any = {};

  constructor(public cvStorage: StoredNewCVDataService) { }

  ngOnInit() {
    this.personalData = this.cvStorage.loadData('personal')
  }

  resetData(section: string) {
    this.cvStorage.resetData('personal')
    this.ngOnInit()
  }

  saveData(section: string) {
    this.cvStorage.saveData('personal', this.personalData)
  }

  loadNextComponent(section: string) {
    this.saveData('personal')
    this.personalRedirect.emit('education')

  }


}
