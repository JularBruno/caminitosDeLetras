import { Component, OnInit } from '@angular/core';
import { BasesComponent } from '../bases/bases.component';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { BaseService } from '../services/base.service';
import { BuyService } from '../services/buy.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-buys',
  templateUrl: './buys.component.html',
  styleUrls: ['./buys.component.scss'],
  providers: [ BuyService ]
})
export class BuysComponent extends BasesComponent {

  itemSelected: any;
  closeResult: string;
  total: any;
  items: any = [];

  constructor(
    public router: Router,
    public formBuilder: FormBuilder,
    public toastr: ToastrService,
    public buyService: BuyService,
    public productsService: ProductsService,
    private modalService: NgbModal,
  ) {
    super(router, <BaseService>buyService, toastr);
  }

  getBaseURI() {
    return '/buys';
  }

  ngOnInit() {
    this.getAllBuys();
  }

  getAllBuys() {
    this.buyService.getAllAndPopulate({}, ['user']).then(res => {
      res.forEach((element: any) => {
        for(let i of element.products) {
          
          // THIS MAY NOT WORK, LOOK PROPERLY
          this.productsService.getById(i.product).then( res => {
            i.product = res;
          })
        }
        this.items.push(element);
      });
      this.loading = false;
      console.log('this.items ', this.items)
    })
  }

  getAllBuys2() {
    this.buyService.getAllAndPopulate({}, ['user','product.products']).then(res => {
      res.forEach((element: any) => {
        let total = 0;
        for(let i of element.products) {
          total += i.price * i.amount;
        }
        element.total = total;
        this.items.push(element);
      });
      this.loading = false;
      console.log('this.items ', this.items)
    })
  }

  open(content, item, itemId?) {
    this.itemSelected = item;
    this.modalService.open(content, { size: 'lg' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
