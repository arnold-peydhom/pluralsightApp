import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from './product';

@Component({
  selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  pageTitle:string = 'Product Details Number';
  produit:IProduct | undefined;

  constructor(private route: ActivatedRoute, private router:Router){}

  ngOnInit():void{
    const id:undefined|number =Number(this.route.snapshot.paramMap.get ('productId'));
    console.log(id);
    this.pageTitle += ` ${id}`;

    this.produit = {
      "productId":id,
      "imageUrl":"../assets/images/img6.jpg",
      "titleImage":"pizza",
      "productName":"tomate",
      "productCode":"ghr742j",
      "productAvailable":"january 09,2023",
      "productPrice":95.99,
      "productStar":3.5
    };
  }

  onBack():void{
    this.router.navigate(['/product-list'])
  }
}
