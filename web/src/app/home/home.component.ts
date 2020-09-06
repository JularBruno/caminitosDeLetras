import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { Constants } from '../app.constants';
import { CategoryService } from '../services/category.service';
import { ProductsService } from '../services/products.service';
import { environment } from '../../environments/environment';
import { forEach } from '@angular/router/src/utils/collection';
import { reduce } from 'rxjs/operator/reduce';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [CategoryService, ProductsService]
})

export class HomeComponent implements OnInit {

  isMobileResolution: boolean;

  imageViewImage="";
  imageViewHidden=true;

  slides = [
    {image: '../../assets/img/talleristas/AMICA.png'},
    {image: '../../assets/img/talleristas/LERARIO.png'},
    {image: '../../assets/img/talleristas/PAVONI.png'},
  ];
 

  constructor(
    private formBuilder: FormBuilder,
    public categoryService: CategoryService,
    public productService: ProductsService,
    private router: Router
  ) {
    if (window.innerWidth < 768) {
      this.isMobileResolution = true;
    } else {
      this.isMobileResolution = false;
    }
    
  }

  ngOnInit() {
  }

  interactImage(clickedImage) {
    this.imageViewHidden = !this.imageViewHidden;
    this.imageViewImage = clickedImage;

  }

}
