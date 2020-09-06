import { Component, OnInit, ViewChild, ElementRef, TemplateRef, Input } from '@angular/core';
import { Constants } from '../../app.constants';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent implements OnInit {
  @Input() pageTitle: string = '';

  @Input() showTitle = 'true';
  @Input() secondShowTitle = 'true';

  @Input() advance = '1';

  shower = true;
  secondShower = true;

  mobile = false;

  type: any;
  amount: any;
  enterprise: any;
  cost: any;
  expenditure: any;

  @ViewChild('wspbtn') wspbtn: ElementRef;
  modalRef: BsModalRef;

  constructor(
    private modalService: BsModalService,
    
  ) {

  }

  ngOnInit() {

    console.log("progress ", window)

    this.resize();
    window.onresize = () => {this.resize(); console.log('ismobile: ',this.mobile); };

    console.warn('Constant', Constants.PROGRESS);
    this.type = Constants.PROGRESS.type;
    this.amount = Constants.PROGRESS.amount;
    this.enterprise = Constants.PROGRESS.enterprise;
    this.cost = Constants.PROGRESS.cost;
    this.expenditure = Constants.PROGRESS.expenditure;

    console.log("this.showTitle " + this.showTitle);

    this.shower = JSON.parse(this.showTitle);
    this.secondShower = JSON.parse(this.secondShowTitle);

    console.log(this.advance);

  }

  resize() {
    if (window.screen.width <= 576) {
      this.mobile = true;
    } else {
      this.mobile = false;
    }
    console.log('ismobile: ',this.mobile); 
    console.log('ismobile: ',window.screen.width); 
  }

  openModal(template: TemplateRef<any>) {
    console.warn('type', this.type);
    this.modalRef = this.modalService.show(template);
  }
}
