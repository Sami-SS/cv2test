import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'aboutme',
        loadChildren: '../aboutme/aboutme.module#AboutmePageModule'
      },
      {
        path: 'cv',
        loadChildren: '../cv/cv.module#CvPageModule'
      },
      {
        path: 'projects',
        loadChildren: '../projects/projects.module#ProjectsPageModule'
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes), // Adding the tabs routing
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
