import { Component, OnInit } from '@angular/core';

import { AccountserviceService } from '../../../../models/accountservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'update-account',
  templateUrl: './update-account.component.html',
  styleUrl: './update-account.component.css'
})
export class UpdateAccountComponent  implements OnInit {
  constructor(private ref:ActivatedRoute,private accountService :AccountserviceService){}
      public accountid:number=0;
 
  public acc:any;
   ngOnInit(): void {
    this.accountid =+this.ref.snapshot.paramMap.get('id')!;
    this.send(this.accountid);
    this.acc = [];
   }
  
   send(accountid:any){
     // alert(categoryName)
     this.accountService.getById(this.accountid).subscribe(
     (items)=>{
     this.acc=items;
     }
   
   )
   }
  
}
