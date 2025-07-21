import { Routes } from '@angular/router';
import { Home } from '../home/home';
import { RouterModule, ExtraOptions } from '@angular/router';
import { NgModule } from '@angular/core';
import { OldCVList } from '../pages/oldCV/old-cvlist/old-cvlist';


const routerOptions: ExtraOptions = {
  onSameUrlNavigation: 'reload',  // ← THIS is the key
};


export const routes: Routes = [
    {path:'', component: Home},
    {path:'oldcv', component: OldCVList}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
