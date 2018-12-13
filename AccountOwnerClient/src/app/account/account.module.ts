import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from './../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

import { AccountListComponent } from './account-list/account-list.component';

import { AuthGuardService } from './../shared/services/auth-guard.service';


@NgModule({
  declarations: [
      AccountListComponent
    ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild([
        { path: 'list', component: AccountListComponent, canActivate: [AuthGuardService] }
    ])
  ]
})
export class AccountModule { }
