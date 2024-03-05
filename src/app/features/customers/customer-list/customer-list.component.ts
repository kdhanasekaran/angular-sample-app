import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { NGXLogger } from 'ngx-logger';
import { Title } from '@angular/platform-browser';
import { NotificationService } from 'src/app/core/services/notification.service';
import { IElement } from './../../../shared/models/element.model';
import { ElementService } from '../../../core/services/element.service';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<IElement>();

  constructor(
    private logger: NGXLogger,
    private notificationService: NotificationService,
    private titleService: Title,
    private elementService: ElementService
  ) { }

  ngOnInit() {
    this.getElementList();
  }

 public getElementList() {
 
   this.elementService.getElements().subscribe(
     response => {
       this.dataSource.data = response;
       this.titleService.setTitle('angular-material-template - Customers');
       this.logger.log('Customers loaded');
       this.notificationService.openSnackBar('Customers loaded');     
    },
     error => {
      this.logger.log('Customer API Failed' + error);
     }
   );
 }

}
