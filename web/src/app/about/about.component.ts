import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { Constants } from '../app.constants';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})

export class AboutComponent implements OnInit {

 

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) {

  }

  ngOnInit() {
  }

 goToCongratsBuy() {
  this.router.navigate(["/congrats"])
 }


}
