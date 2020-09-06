import { Component } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { BaseService } from '../services/base.service';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  providers: [UserService]
})
export class UserComponent extends BaseComponent {

  formObject: any;

  constructor(
    public router: Router,
    public formBuilder: FormBuilder,
    public route: ActivatedRoute,
    public toastr: ToastrService,
    public userService: UserService
  ) {
    super(router, formBuilder, route, toastr, <BaseService>userService);

  }

  getBaseURI() {
    return '/users';
  }
  getBasesURI() {
    return '/users'
  }
  getFormNew() {
    return this.formBuilder.group({
      id: [null],
      name: [null, Validators.required],
      user: [null, Validators.required],
      city: [null],
      address: [null],
      cuit: [null],
      phone: [null],
      social: [null],
      password: [null, Validators.required],
    })
  }

  getFormEdit(item) {

    return this.formBuilder.group({
      id: [item.id],
      name: [item.name],
      city: [item.city],
      address: [item.address],
      cuit: [item.cuit],
      phone: [item.phone],
      social: [item.social],
      user: [item.user],
      password: [item.password]
    });
  }

  logForm(values) {

    super.logForm(values);

  }

}

