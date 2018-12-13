import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from './../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

import { OwnerListComponent } from './owner-list/owner-list.component';
import { OwnerDetailsComponent } from './owner-details/owner-details.component';
import { OwnerCreateComponent } from './owner-create/owner-create.component';
import { OwnerUpdateComponent } from './owner-update/owner-update.component';
import { OwnerDeleteComponent } from './owner-delete/owner-delete.component';
import { AuthGuardService } from '../shared/services/auth-guard.service';

@NgModule({
  declarations: [OwnerListComponent, OwnerDetailsComponent, OwnerCreateComponent, OwnerUpdateComponent, OwnerDeleteComponent],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: 'list', component: OwnerListComponent, canActivate: [AuthGuardService] },
      { path: 'details/:id', component: OwnerDetailsComponent, canActivate: [AuthGuardService] },
      { path: 'create', component: OwnerCreateComponent, canActivate: [AuthGuardService] },
      { path: 'update/:id', component: OwnerUpdateComponent, canActivate: [AuthGuardService] },
      { path: 'delete/:id', component: OwnerDeleteComponent, canActivate: [AuthGuardService] }
    ])
  ]
})
export class OwnerModule { }
