import { Component, Input ,OnInit} from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit{
 
@Input() product={

  "createdAt":"",
  "name":"",
  "image":"",
  "rate":0,
  "count":0,
  "description":"",
  "price":"",
  "reviews":[
     "",
     "",
     ""
  ],
  "id":""

}

constructor(private router:Router){

}


ngOnInit(): void {


}


show(id:string){
this.router.navigate(['./details',this.product.id])

}






}
