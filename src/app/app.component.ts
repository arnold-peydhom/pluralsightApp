import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template:`
    <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <a class="navbar-brand">{{pageTitle}}</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active text-primary" aria-current="page" [routerLink]="['/welcome']">{{home}}</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-primary" [routerLink]="['/product-list']">{{product}}</a>
              </li>
            </ul>
          </div>
        </div>
      </nav> 
        <div class="mt-5"><router-outlet></router-outlet></div>
 
  `

})
export class AppComponent {
  pageTitle:string = "Arnold Product Management";
  home:string = "Home";
  product:string = "Product List";
}