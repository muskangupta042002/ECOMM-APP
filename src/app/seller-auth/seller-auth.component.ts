import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit{
  ngOnInit(): void {
      
  }

  signUp(data:object):void{
    console.warn(data)
  }
}
///home/akshay/new_proj/ecomm_proj/db.json