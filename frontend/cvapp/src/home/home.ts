import { ChangeDetectorRef, Component, computed, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { List } from "../pages/newCV/list/list";
import { PersonalDetail } from "../pages/newCV/personal-detail/personal-detail";
import { EducationDetail } from "../pages/newCV/education-detail/education-detail";
import { WorkDetail } from '../pages/newCV/work-detail/work-detail';
import { SkillDetail } from '../pages/newCV/skill-detail/skill-detail';
import { InterestDetail } from '../pages/newCV/interest-detail/interest-detail';
import { AwardDetail } from '../pages/newCV/award-detail/award-detail';
import { ProjectDetail } from '../pages/newCV/project-detail/project-detail';
import { SocialDetail } from '../pages/newCV/social-detail/social-detail';
import { SummaryDetail } from '../pages/newCV/summary-detail/summary-detail';
import { StoredNewCVDataService } from '../service/stored-new-cvdata/stored-new-cvdata';
import { TemplateSelection } from "../pages/template/template-selection/template-selection";
import { UIservices } from '../service/uiservices/uiservices';

@Component({
  selector: 'app-home',
  imports: [
    CommonModule, List, PersonalDetail, EducationDetail, WorkDetail,
    SkillDetail, InterestDetail, AwardDetail, ProjectDetail, SocialDetail, SummaryDetail,
    TemplateSelection
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {
  msg = false;
  formToShow = 'personal';
  templateFlag = computed(() => this.serviceUI.getUI().template());

  constructor(
    public cvStorage: StoredNewCVDataService,
    public serviceUI: UIservices

  ) { }

  ngOnInit() {

  }

  onSelectedFromList(section: string) {
    this.formToShow = section;
  }
}
