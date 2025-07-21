import { Component, computed } from '@angular/core';
import { UIservices } from '../../service/uiservices/uiservices'
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loadings',
  templateUrl: './loadings.html',
  styleUrls: ['./loadings.css'],
  imports: [FormsModule, CommonModule]
})
export class Loadings {
  whatMsgToShow = computed(() => this.serviceUI.getUI().message());
  msgFlag = computed(() => this.serviceUI.getUI().flag());

  constructor(public serviceUI: UIservices) { }

}
