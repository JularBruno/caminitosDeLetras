import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { Constants } from '../app.constants';
import { ProductsService } from '../services/products.service';
import { UserService } from '../services/user.service';
import { BuyService } from '../services/buy.service';
import { AutonumericService } from '../services/autonumeric.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss'],
  providers: [ProductsService, UserService, BuyService, AutonumericService]
})

export class CarritoComponent implements OnInit {


  userId: any;
  products: any = [];
  subtotal: any;
  total: any;
  list: any = [];
  isMobileResolution: boolean;
  formObject: any;
  fullTotal: any = 0;

  checkBill: Boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    public router: Router,
    public userService: UserService,
    public buyService: BuyService,
    public productsService: ProductsService,
    public automericService: AutonumericService
  ) {

    if (window.innerWidth < 768) {
      this.isMobileResolution = true;
    } else {
      this.isMobileResolution = false;
    }

    this.formObject = this.formBuilder.group({
      user: [null, Validators.compose([Validators.required])],
      name: [null, Validators.compose([Validators.required])],
      cuit: [null, Validators.compose([Validators.required])],
      phone: [null, Validators.compose([Validators.required])],
      social: [null, Validators.compose([Validators.required])],
      bill: [null],
    });

    this.userId = localStorage.getItem(Constants.STORAGE.user_id)
    this.getUser(this.userId);
  }

  ngOnInit() {
    this.list = Constants.SHOOPING;
    this.list.forEach(element => {
      let item = {
        product: element.product,
        amount: element.amount,
        price: element.amount * element.product.price
      }
      this.products.push(item)
    });
    console.log('LISTA', this.list)
  }

  getUser(userId) {
    if(this.userId) {
      this.userService.getAll({ _id: userId }).then((res: any) => {
        if (res) {
          console.log('res ', res)

          this.formObject.controls['user'].setValue(res[0].user);
          this.formObject.controls['name'].setValue(res[0].name);
          this.formObject.controls['cuit'].setValue(res[0].cuit);
          this.formObject.controls['phone'].setValue(res[0].phone);
          this.formObject.controls['social'].setValue(res[0].social);
          this.formObject.controls['bill'].setValue(res[0].bill);

        }
      })
    }
  }

  billChecked(event) {
    this.checkBill = event;
  }

  removeItem(item) {
    for (let index = 0; index < this.list.length; index++) {
      const element = this.list[index];
      if (element.product.id == item) {
        this.list.splice(index, 1)
      }
    }
  }

  goToCongratsBuy() {
    if(this.userId) {
      this.bought()
    } else {
      alert('Inicie sesión o registrese para poder realizar la compra!')
    }

  }

  bought() {
    this.automericService.getAll({}).then(data => {
      console.log('data', data)
      let buy = {
        user: this.userId,
        bill: this.checkBill,
        products: this.products,
        total: this.getTotal(),
        order: data
      }
      this.buyService.create(buy).then((res: any) => {
        this.router.navigate(["/congrats", { buyId: res.id }])
        console.log('se creo la compra', res);
      })
      this.list.forEach(element => {
        Constants.SHOOPING.splice(element)
      });
    })
  }

  getTotal() {
    let total = 0
    this.list.forEach(element => {
      total += element.product.price * element.amount
    })
    return total
  }

}
