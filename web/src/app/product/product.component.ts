import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { Constants } from '../app.constants';
import { ProductsService } from '../services/products.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  providers: [ProductsService]
})

export class ProductComponent implements OnInit {

  productId: any;
  product: any = {};
  cant: any = 1;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    // public toastr: ToastsManager,
    // public vcr: ViewContainerRef,
    public productService: ProductsService,
    private route: ActivatedRoute
  ) {
    this.productId = this.route.snapshot.paramMap.get('productId');
    console.log('ID PRODUCTO', this.productId)

    this.getProduct();
  }

  ngOnInit() {
  }

  goToCarrito() {
    let user = localStorage.getItem(Constants.STORAGE.user)
    if (this.cant > 0 && this.cant != null) {
      let shopping = {
        product: this.product,
        amount: this.cant
      }
      Constants.SHOOPING.push(shopping);
      this.router.navigate(["/home"]);
    } else {
      // this.toastr.warning('Debe seleccionar una cantidad valida', 'toast-warning');
      alert('La cantidad debe ser mayor a 0')
    }
  }

  getProduct() {
    this.productService.getAll({ _id: this.productId }).then(res => {
      this.product = res[0];
      console.log('producto', this.product)
    })
  }

  getImageSrc(image) {
    let srcImage = environment.filesUrl + '/' + image;
    return srcImage;
  }
}
