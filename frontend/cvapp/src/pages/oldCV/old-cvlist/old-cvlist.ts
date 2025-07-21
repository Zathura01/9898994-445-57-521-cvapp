import { ChangeDetectorRef, Component, computed, effect, signal, WritableSignal } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { CVSubmitService } from '../../../service/submit/submit';
import { CommonModule } from '@angular/common';
import { StoredNewCVDataService } from '../../../service/stored-new-cvdata/stored-new-cvdata';
import { Triggers } from '../../../service/triggers/triggers';
import { Subscription } from 'rxjs';
import { UIservices } from '../../../service/uiservices/uiservices';
import { v4 as uuidv4 } from 'uuid';



@Component({
  selector: 'app-old-cvlist',
  imports: [CommonModule],
  templateUrl: './old-cvlist.html',
  styleUrl: './old-cvlist.css'
})
export class OldCVList {

  private rawData = signal<any[]>([]);
  setData = computed(() => this.rawData());
  constructor(public serviceUI: UIservices,private cdr: ChangeDetectorRef,private router: Router, private fetchService: CVSubmitService, private cvData: StoredNewCVDataService, private trigger: Triggers)
  {
    effect(()=>{
      const count = this.trigger.trigger()
      console.log(count)
      this.fetchAllOldCVs()
    })
  }
  
  

  //setData = signal<any[]>([]);
  //setData: WritableSignal<any[]> = signal([])
  sub: Subscription | undefined;


  ngOnInit(){
   this.fetchAllOldCVs()
  }

  ngOnDestroy(): void {
    if (this.sub) this.sub.unsubscribe();
  }

  goToNewCV(){
    this.router.navigate(['/']);
    this.cvData.cvData['cvId'] = uuidv4()
  }

  fetchAllOldCVs(){
    this.sub = this.fetchService.fetchCV()
    .subscribe(
      {
        next: (resp: any)=> {
          
          this.rawData.set(resp.data);
          this.serviceUI.setUI(resp.message, true, false)
          setTimeout(() => {
             this.serviceUI.setUI('',false, false)
          }, 300);
          //this.setData = resp.data ?? []
          //this.setData.set(resp.data);
        },
        error: (error)=>{
          console.log(error)
        }
      }
    )
  }

clickToOpen(index: number){
  const selected = this.setData()[index];
  //const selected = this.setData()[index]
  console.log(selected)
  this.cvData.saveData('cvId', selected.cvId);
  this.cvData.saveData('cvName', selected.cvName);
  this.cvData.saveData('work', selected.work);
  this.cvData.saveData('education', selected.education);
  this.cvData.saveData('skill', selected.skill);
  this.cvData.saveData('project', selected.project);
  this.cvData.saveData('award', selected.award);
  this.cvData.saveData('interest', selected.interest);
  this.cvData.saveData('social', selected.social);
  this.cvData.saveData('summary', selected.summary);
  this.cvData.saveData('personal', selected.personal)
  this.router.navigate(['/']);
}

clickToDelete(index: number, cvId: number){
  this.sub = this.fetchService.deleteCV(index)
  .subscribe({
    next: (resp: any)=>{
      this.fetchAllOldCVs()
      this.serviceUI.setUI(resp.message, true, false )
      setTimeout(() => {
        this.serviceUI.setUI('',false,false)
      }, 300);
    },
    error: (error) =>{
      console.log('error ', error)
    }
  })
}


  }


