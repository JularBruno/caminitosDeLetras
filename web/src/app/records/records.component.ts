import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { Constants } from '../app.constants';
import { BuyService } from '../services/buy.service';

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.scss'],
  providers: [BuyService]
})

export class RecordsComponent implements OnInit {

  userId: any;
  records: any;
  products: any = [];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    public buyService: BuyService
  ) {
    this.userId = localStorage.getItem(Constants.STORAGE.user_id);
    this.getBuys(this.userId);
  }

  ngOnInit() {
  }

  getBuys(userId) {
    this.buyService.getAll({ user: userId }).then((record: any) => {
      this.records = record;
      console.log('this.records', this.records)
    })
  }

  goToDetail(buyId) {
    this.router.navigate(["/record", { buyId: buyId }])
  }

  goToCongratsBuy() {
    this.router.navigate(["/congrats"])
  }

}
