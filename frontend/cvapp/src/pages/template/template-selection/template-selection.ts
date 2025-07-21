import { Component, computed } from '@angular/core';
import { UIservices } from '../../../service/uiservices/uiservices';
import { CommonModule } from '@angular/common';
import { TemplateEditor } from '../template-editor/template-editor';
import { StoredNewCVDataService } from '../../../service/stored-new-cvdata/stored-new-cvdata';


@Component({
  selector: 'app-template-selection',
  imports: [CommonModule, TemplateEditor],
  templateUrl: './template-selection.html',
  styleUrl: './template-selection.css'
})
export class TemplateSelection {

  showMeEditor = false

templateSelected(arg: number) {
  this.showMeEditor = true;
  this.cvstorage.templateIndex = arg
}

  handleTemplateClosing() {
   this.serviceUI.setUI('Back to Editing',true,false)
   setTimeout(() => {
    this.serviceUI.setUI('',false,false)
   }, 500);
}

templateFlag = computed(()=> this.serviceUI.getUI().template());
  constructor(public serviceUI: UIservices, private cvstorage: StoredNewCVDataService){}




}
