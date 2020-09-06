import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { BasesComponent } from '../bases/bases.component';
import { Router } from '@angular/router';
import { BaseService } from '../services/base.service';
import { ToastrService } from 'ngx-toastr';
import { Constants } from '../app.constants';
import { CategoryService } from '../services/category.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  providers: [ProductsService, CategoryService]
})
export class ProductsComponent extends BasesComponent {
  items: any;
  userId: string;
  filesUrl: string = environment.filesUrl;

  constructor(
    public router: Router,
    public toastr: ToastrService,
    public productsService: ProductsService,
    public categoryService: CategoryService
  ) { 
    super(router, <BaseService>productsService, toastr);

    let user = localStorage.getItem(Constants.STORAGE.user);
    console.log(user)
  }

  getBaseURI() {
    return '/products';
  }

  getPopulates() {
    return ['category']
  }

  getImage(image) {
    let src;
    // console.log('image ', image)
    if (image) {
      src = this.filesUrl + '/' + image;
      // console.log('src ', src)
    } else {
      src = 'assets/no-product.png';
    }
    return src;
  }
  
}
