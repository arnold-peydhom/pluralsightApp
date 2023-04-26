import { Component, OnDestroy, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';
import { Subscription } from 'rxjs';

@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {
  pageTitle:string="Product List";
  imageWidth:number=70;
  imageHeight:number=50;
  errorMessage:string='';
  sub!: Subscription;

  private _listFilter:string="";

  get listFilter():string{
    return this._listFilter;
  }

  set listFilter(value:string){
    this._listFilter=value;
    console.log("in setter",value);
    this.filteredProducts=this.performFilter(value);
  }

  performFilter(filterBy:string):IProduct[]{
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product:IProduct)=>
      product.productName.toLocaleLowerCase().includes(filterBy));
  }

  constructor(private productService:ProductService){}

  filteredProducts:IProduct[]=[];
  products:IProduct[]=[];

  showImages:boolean=false;

  openImage():void{
    this.showImages=!this.showImages;
  }

  ngOnInit(): void {
    this.sub = this.productService.getProducts().subscribe({
      next: products => {
        this.products = products;
        this.filteredProducts=this.products;
      },
      error:err => this.errorMessage=err
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
  onRatingCliked(message:string):void{
    this.pageTitle='Product-List: '+message;
  }

}
