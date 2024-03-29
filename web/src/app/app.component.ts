import { Component, ViewContainerRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { ToastsManager } from '../../node_modules/ng2-toastr';
import { Constants } from './app.constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Disfren';
  isLoggedIn: boolean = true;
  public viewContainerRef: ViewContainerRef;

  constructor(
    private router: Router,
    public toastr: ToastsManager,
    public vcr: ViewContainerRef
  ) {
    let user = localStorage.getItem(Constants.STORAGE.user)
    console.log(' app user ', user)
    // if (user) {
    //   console.log('is logged')
    //   this.isLoggedIn = false;
    //   console.log('this.isLoggedIn ', this.isLoggedIn)
      this.router.navigate(['/home']);
    // } else {
    //   this.isLoggedIn = true;
    //   this.router.navigate(['/login']);
    // }

    this.toastr.setRootViewContainerRef(vcr);
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        (<any>window).ga('set', 'page', event.urlAfterRedirects);
        (<any>window).ga('send', 'pageview');
      }
      if (!(event instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }

}
