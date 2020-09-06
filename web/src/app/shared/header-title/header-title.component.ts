import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header-title',
  templateUrl: './header-title.component.html',
  styleUrls: ['./header-title.component.scss']
})
export class HeaderTitleComponent implements OnInit {

  @Input() title = '';

  constructor() { }

  // preaprobation
  // checkout
  // policies

  ngOnInit() {

    console.log(this.title);
  }

}
