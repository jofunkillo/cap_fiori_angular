import { Component, OnInit, Input } from '@angular/core';
import {Account} from './models/Account';
import {Center} from './models/Center';
import { MasterDataService } from './services/master-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angular';
  centers: Center[];
  accounts: Account[];
  constructor(private masterdataService: MasterDataService) {
    
  }

  ngOnInit(): void {
    
    this.masterdataService.getCenters().subscribe(result => {
      this.centers = result.value;
    }); 
    this.masterdataService.getAccounts().subscribe(result => {
      this.accounts = result.value;
    });      
  }
}
