import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { ProductsService } from '../services/products.service';
import { BaseService } from '../services/base.service';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from '../services/category.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  providers: [ProductsService]
})
export class ProductComponent extends BaseComponent {

  categories: any;
  category = 1;
  categorySelected: any;
  thumb: any;
  filesUrl: string = environment.filesUrl;

  afuConfigThumb = {
    formatsAllowed: ".jpg,.jpeg,.png",
    maxSize: "30",
    multiple: true,
    uploadAPI: {
      // url:"http://34.95.164.216:3071/api/files/upload"
      url: environment.serverUrl + "/files/upload"
    },
    replaceTexts: {
      selectFileBtn: 'Seleccionar Archivo',
      // resetBtn: 'Borrar',
      uploadBtn: 'Subir imagen',
      dragNDropBox: 'Arrastrar',
      attachPinBtn: 'Añadir archivos...',
      afterUploadMsg_success: 'Imágen cargada con éxito!',
      afterUploadMsg_error: 'Ha ocurrido un error'
    }
  };

  constructor(
    public router: Router,
    public formBuilder: FormBuilder,
    public route: ActivatedRoute,
    public productsService: ProductsService,
    public toastr: ToastrService,
    public categoryService: CategoryService
  ) {
    super(router, formBuilder, route, toastr, <BaseService>productsService);
    this.getCategories();
  }

  getBasesURI() {
    return '/products';
  }

  getFormNew() {
    return this.formBuilder.group({
      id: [null],
      name: [null, Validators.required],
      brand: [null,Validators.required],
      modelProduct: [null],
      position: [null],
      price: [null],
      description: [null,Validators.required],
      category: [null],
      code: [null]
    })
  }

  
  getFormEdit(item) {

    this.thumb = item.image
    return this.formBuilder.group({
      id: [item.id],
      name: [item.name],
      brand: [item.brand],
      modelProduct: [item.modelProduct],
      user: [item.user],
      price: [item.price],
      position: [item.position],
      description: [item.description],
      category: [item.category],
      code: [item.code]
    });
  }

  changeCategory(event) {
    this.categorySelected = event;
  }

  gethtmlImage(){
    if(this.thumb){
      let url = this.filesUrl + "/" + this.thumb[0]
      return url
    } else{
       return 'assets/no-product.png';
    }
  }

  getAllImages(image) {
    let url = this.filesUrl + "/" + image;
    return url;
  }

  deleteImage(image) {
    const index = this.thumb.indexOf(image);
    if (index > -1) {
      this.thumb.splice(index, 1);
    }
  }

  responseImageThumb(event) { //// ---- thumbnail
    this.thumb = JSON.parse(event.response).files;
    this.gethtmlImage()
  } 

  getCategories() {
    this.categoryService.getAll({}).then(res => {
      this.categories = res;
    })
  }
  
  logForm(values) {
    values.image = this.thumb;
    super.logForm(values);
  }
  
}
