import { Component, OnInit } from '@angular/core';
import { Account } from '../../../../models/account.model';
import { AccountserviceService } from '../../../../models/accountservice.service';
import { AccountRepo } from '../../../../models/account.repo';
import { Router } from '@angular/router';
import { AppRoutingModule } from '../../../app-routing.module';

@Component({
  selector: 'app-account-display',
  templateUrl: './account-display.component.html',
  styleUrl: './account-display.component.css'
})
export class AccountDisplayComponent implements OnInit {
  public account:Account[]=[];
  constructor(private accountService: AccountserviceService, private router: Router ){}
  ngOnInit(){
    console.log("loaded");
    this.getAccount();
  }



  
  getAccount(){
    this.accountService.getAccount().subscribe(data=>{

     console.log(data);
     console.log("asdfghjkl");
     
     this.account=data;
     console.log(this.account);
     console.log("asdfghjkl");
   })

}

editItem(id: number) {
  this.router.navigate(['/updateaccount', id]);
}
}