import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ChildOneComponent }  from './child1/index';
import { ChildTwoComponent }  from './child2/index';
import { Ngxs } from './ngxs/index';
import { NoFind }    from './noFind/index';

const appRoutes: Routes = [
  {
    path: 'child1',
    component: ChildOneComponent,
  },
  {
    path: 'child2',
    component: ChildTwoComponent,
  },
  {
    path: 'ngxs',
    component: Ngxs,
  },
  { path: '',   redirectTo: '/child1', pathMatch: 'full' },
  { path: '**', component: NoFind }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
