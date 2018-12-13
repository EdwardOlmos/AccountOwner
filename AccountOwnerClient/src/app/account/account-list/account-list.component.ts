import { Component, OnInit } from '@angular/core';
import { RepositoryService } from './../../shared/services/repository.service';
import { Account } from './../../_interfaces/account.model';
import { ErrorHandlerService } from './../../shared/services/error-handler.service';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent implements OnInit {

  public accounts: Account[];
  public errorMessage = '';
  accountsa: any;

  constructor(private repository: RepositoryService, private errorHandler: ErrorHandlerService,
    private router: Router, private http: HttpClient) { }

  ngOnInit() {
    // tslint:disable-next-line:prefer-const
    let token = localStorage.getItem('jwt');
    this.http.get('http://localhost:5000/api/account', {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/json'
      })
    }).subscribe(response => {
      this.accountsa = response;
    }, err => {
      console.log(err);
    });
    this.getAllAccounts();
  }

  public getAllAccounts() {
    // tslint:disable-next-line:prefer-const
    let apiAddress = 'api/account';
    this.repository.getData(apiAddress).subscribe(res => {
      this.accounts = res as Account[];
    },
    (error) => {
      this.errorHandler.handleError(error);
      this.errorMessage = this.errorHandler.errorMessage;
    });
  }

  public redirectToUpdatePage(id) {
    // tslint:disable-next-line:prefer-const
    let updateUrl = `/account/update/${id}`;
    this.router.navigate([updateUrl]);
  }

  public redirectToDeletePage(id) {
    // tslint:disable-next-line:prefer-const
    let updateUrl = `/account/delete/${id}`;
    this.router.navigate([updateUrl]);
  }
}
