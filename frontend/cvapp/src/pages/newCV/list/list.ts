import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StoredNewCVDataService } from '../../../service/stored-new-cvdata/stored-new-cvdata';
import { CVSubmitService } from '../../../service/submit/submit';
import { UIservices } from '../../../service/uiservices/uiservices';
import { Router } from '@angular/router';
import { Triggers } from '../../../service/triggers/triggers';



@Component({
  selector: 'app-list',
  imports: [FormsModule, CommonModule],
  templateUrl: './list.html',
  styleUrl: './list.css'
})
export class List {

  @Output() selectedFromList = new EventEmitter<string>();

  cvName:string = '';
  listSelection(selection: string){
    this.selectedFromList.emit(selection)
  }

  constructor(public cvMaker: StoredNewCVDataService, private submitService: CVSubmitService, private serviceUI: UIservices, public router: Router, private trigger: Triggers){};
 
  handleChange(){
    this.cvMaker.cvData['cvName'] = this.cvName;
  }

  submitForward(){
     this.submitService.submitCV(this.cvMaker.cvData)
     .subscribe(
      {
        next: (resp) =>{ 
        this.serviceUI.setUI(resp.message, resp.flag, false);
        setTimeout(() => {
        this.serviceUI.setUI('',false, true);
        }, 1000);
        },
        error: (error) =>{ console.log(error) }
      }
     )

  }

  goToAbout() {
  this.cvMaker.resetData('personal')
  this.cvMaker.resetData('education')
  this.cvMaker.resetData('work')
  this.cvMaker.resetData('skill')
  this.cvMaker.resetData('summary')
  this.cvMaker.resetData('interest')
  this.cvMaker.resetData('project')
  this.cvMaker.resetData('award')
  this.cvMaker.resetData('social')
  this.cvMaker.resetData('cvName')
  this.cvMaker.resetData('cvId')
  
  this.trigger.fireTrigger()
  this.router.navigate(['/oldcv']);

}



}
