import { Component, OnInit } from '@angular/core';
import { RepositoryService } from './../../shared/services/repository.service';
import { Owner } from './../../_interfaces/owner.model';
import { ErrorHandlerService } from './../../shared/services/error-handler.service';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-owner-list',
  templateUrl: './owner-list.component.html',
  styleUrls: ['./owner-list.component.css']
})
export class OwnerListComponent implements OnInit {

  public owners: Owner[];
  public errorMessage = '';
  ownersa: any;

  constructor(private http: HttpClient, private repository: RepositoryService, private errorHandler: ErrorHandlerService,
    private router: Router) { }

  ngOnInit() {
    // tslint:disable-next-line:prefer-const
    let token = localStorage.getItem('jwt');
    this.http.get('http://localhost:5000/api/owner', {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/json'
      })
    }).subscribe(response => {
      this.ownersa = response;
    }, err => {
      console.log(err);
    });
    this.getAllOwners();
  }

  public getAllOwners() {
    // tslint:disable-next-line:prefer-const
    let apiAddress = 'api/owner';
    this.repository.getData(apiAddress).subscribe(res => {
      this.owners = res as Owner[];
    },
    (error) => {
      this.errorHandler.handleError(error);
      this.errorMessage = this.errorHandler.errorMessage;
    });
  }

  public getOwnerDetails(id) {
    // tslint:disable-next-line:prefer-const
    let detailsUrl = `/owner/details/${id}`;
    this.router.navigate([detailsUrl]);
  }

  public redirectToUpdatePage(id) {
    // tslint:disable-next-line:prefer-const
    let updateUrl = `/owner/update/${id}`;
    this.router.navigate([updateUrl]);
  }

  public redirectToDeletePage(id) {
    // tslint:disable-next-line:prefer-const
    let updateUrl = `/owner/delete/${id}`;
    this.router.navigate([updateUrl]);
  }

}
