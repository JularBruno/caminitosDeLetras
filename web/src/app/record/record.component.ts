import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { Constants } from '../app.constants';
import { BuyService } from '../services/buy.service';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.scss'],
  providers: [BuyService]
})

export class RecordComponent implements OnInit {

  buyId: any;
  products: any;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    public buyService: BuyService
  ) {
    this.buyId = this.route.snapshot.paramMap.get('buyId');
    this.getProducts();
  }

  ngOnInit() {
  }

  getProducts() {
    this.buyService.getById(this.buyId).then(buy => {
      this.products = buy.products;
      console.log('products', this.products)
    })
  }

  goToCongratsBuy() {
    this.router.navigate(["/congrats"])
  }


}
