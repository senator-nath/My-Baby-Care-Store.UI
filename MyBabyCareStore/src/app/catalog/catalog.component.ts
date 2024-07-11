import { Component, OnInit } from '@angular/core';
import { IProduct } from './product.model';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  public product:IProduct
  constructor() {

    this.product={
      id:2,
      description:"A quality velvet jacket for girls",
      name:"velvet jacket",
      imageName:"Girls denim plus velvet jacket.jpeg",
      category: "Girls wears",
      price:945 ,
      discount:0.2 
    };
   }

  ngOnInit(): void {
  }
 getImageUrl(product:IProduct){
   return '/assets/images/Girls denim plus velvet jacket.jpeg/'
 }
}
