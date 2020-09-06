import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { Constants } from '../app.constants';
import { AutonumericService } from '../services/autonumeric.service';
import { BuyService } from '../services/buy.service';

@Component({
  selector: 'app-congrats',
  templateUrl: './congrats.component.html',
  styleUrls: ['./congrats.component.scss'],
  providers: [BuyService]
})

export class CongratsComponent implements OnInit {

  userId: any;
  buyId: any;
  order: any = [];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    public buyService: BuyService
  ) {
    this.userId = localStorage.getItem(Constants.STORAGE.user_id);
    this.buyId = this.route.snapshot.paramMap.get('buyId');
  }

  ngOnInit() {
    console.log('LSITA BORRADA', Constants.SHOOPING)
    this.getOrder();
  }

  goToLogin() {
    this.router.navigate(["/login"])
  }

  getOrder() {
    this.buyService.getById(this.buyId).then((data: any) => {
      console.log('data', data)
      this.order = data.order;
    })
  }


  goToHome() {
    this.router.navigate(["/home"])
  }


}
