import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { Constants } from '../app.constants';
import { UserService } from '../services/user.service';
import { UpdateHeaderService } from '../services/update-header.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [UserService, UpdateHeaderService]
})

export class LoginComponent implements OnInit {

  formObject: any = { value: null };

  isMobileResolution: boolean;

  form: any = { value: null };
  isLoggedIn: Boolean;

  modalRef: BsModalRef;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    public userService: UserService,
    public sharedData: UpdateHeaderService,
    private modalService: BsModalService,
  ) {

    if (window.innerWidth < 768) {
      this.isMobileResolution = true;
    } else {
      this.isMobileResolution = false;
    }

    this.formObject = this.formBuilder.group({
      user: [null, Validators.compose([Validators.required])],
      password: [null, Validators.compose([Validators.required])],
    });
    

    this.form = this.formBuilder.group({
      user: [null, Validators.compose([Validators.required])],
      password: [null, Validators.compose([Validators.required])],
      name: [null, Validators.compose([Validators.required])],
      address: [null, Validators.compose([Validators.required])],
      city: [null, Validators.compose([Validators.required])],
      phone: [null, Validators.compose([Validators.required])],
      cuit: [null, Validators.compose([Validators.required])],
      social: [null, Validators.compose([Validators.required])]
    });
  }

  ngOnInit() {
  }

  logForm(values) {
    console.log(JSON.stringify(values));
    const service = this.userService;

    service.login(values).then(data => {
      let response: any;
      response = data.json();
      console.log('DATA LOGIN', response);
      if (!response.errors) {
        console.log('USER ID', response.user.id)
        localStorage.setItem(Constants.STORAGE.user_id, response.user.id);
        localStorage.setItem(Constants.STORAGE.user, response.user.user);
        this.sharedData.changeIsLogin(true);
        console.log(this.isLoggedIn, "sharedData")

        const self = this;
        
        let url: string = "/";
        window.open(url, '_self')
      } else {
        alert('Error en sus datos')
        // console.log('error ', response.errors[0].message);
      }
    })
    .catch(err => {
      alert(JSON.parse(err._body).message)
    })
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  back() {
    this.modalRef.hide();
    this.router.navigate(["/login"])
  }

  registerUser(values) {
    console.log('registerUser')
    const service = this.userService;
    service.create(values).then(data => {
      let loginValues = {
        "user": data.user,
        "password": values.password
      }
      this.logForm(loginValues);
      this.modalRef.hide();
  
    })
    .catch(err => {
      alert(JSON.parse(err._body).message)
    })
  }

}
