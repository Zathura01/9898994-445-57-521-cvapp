import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StoredNewCVDataService } from '../../../service/stored-new-cvdata/stored-new-cvdata';
import { CVSubmitService } from '../../../service/submit/submit';
import { UIservices } from '../../../service/uiservices/uiservices';
import { TemplateOne } from '../all-templates/template-one';

interface CVGeneratePayload {
  cvid: string | null;
  sequence: string[];
  applyFor: string;
  image: string | ArrayBuffer | null;
  font: string;
  templateIndex: number;
}


@Component({
  selector: 'app-template-editor',
  imports: [CommonModule, FormsModule],
  templateUrl: './template-editor.html',
  styleUrl: './template-editor.css'
})
export class TemplateEditor {
  constructor(public cvstorage: StoredNewCVDataService, private submitService: CVSubmitService, public serviceUI: UIservices) { }


  editorView = [
    'Personal Details', 'Education History', 'Work History', 'Expertise', 'Summary', 'Interests', 'Projects', 'Awards and Certificates', 'Socials'
  ]
  editorData = [
    'personal', 'education', 'work', 'skill', 'summary', 'interest', 'project', 'award', 'social'
  ]
  fonts = ["Helvetica", "Calibri", "Cambria", "Garamond", "Georgia", "Times New Roman", "Arial", "Verdana", "Lato", "Roboto", "Open Sans", "PT Sans", "Source Sans Pro", "Trebuchet MS", "Ubuntu"];



  applyingFor = ''
  selectedFont = ''


  dragStartIndex: number | null = null;
  imageIfElse = false
  imagePreview: string | ArrayBuffer | null = null;

  deleteItem(index: number) {
    this.editorView.splice(index, 1);
    this.editorData.splice(index, 1)

  }

  onImageSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imageIfElse = true
        this.imagePreview = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }


  onDragStart(event: DragEvent, index: number) {
    this.dragStartIndex = index;
    event.dataTransfer?.setData('text/plain', index.toString());
  }

  onDragOver(event: DragEvent) {
    event.preventDefault(); // Necessary to allow drop
  }

  onDrop(event: DragEvent, dropIndex: number) {
    event.preventDefault();

    const dragIndexData = event.dataTransfer?.getData('text/plain');
    if (!dragIndexData) return;

    const dragIndex = parseInt(dragIndexData, 10);
    if (dragIndex === dropIndex) return;

    // Swap
    const temp = this.editorView[dragIndex];
    this.editorView[dragIndex] = this.editorView[dropIndex];
    this.editorView[dropIndex] = temp;

    const temptwo = this.editorData[dragIndex];
    this.editorData[dragIndex] = this.editorData[dropIndex];
    this.editorData[dropIndex] = temptwo;

    // Reset
    this.dragStartIndex = null;
  }


  sendToBackendToGenerate: CVGeneratePayload = {
    cvid: null,
    sequence: [],
    applyFor: '',
    image: null,
    font: '',
    templateIndex: 0
  };


  handleGenerate() {
    this.sendToBackendToGenerate = {
      cvid: this.cvstorage.cvData['cvId'],  // OR this.cvstorage.cvData.cvId
      sequence: [...this.editorData],      // spread to avoid mutating original
      applyFor: this.applyingFor,
      image: this.imagePreview,
      font: this.selectedFont,
      templateIndex: this.cvstorage.templateIndex
    };

    this.submitService.generateCV(this.sendToBackendToGenerate)
      .subscribe(
        {
          next: (resp) => {
            this.serviceUI.setUI(resp.message, resp.flag, false);
            setTimeout(() => {
              this.serviceUI.setUI('', false, true);
            }, 1500);




            // Assume resp.data contains your `pdfData` object
            const pdfData = resp.data;
            const htmlCnt = TemplateOne.returnOne(pdfData);
             
            const win = window.open('', '_blank');
            if (win) {
              win.document.open();
              win.document.write(htmlCnt);
              win.document.close();
            } else {
              console.error('Failed to open new tab. It may have been blocked by a popup blocker.');
            }
          },
          error: (error) => { console.log(error) }
        }
      )


  }

}
