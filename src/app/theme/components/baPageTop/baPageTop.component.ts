import {Component, ViewEncapsulation} from '@angular/core';
import {Router} from '@angular/router';

import {AppState} from '../../../app.state';
import {BaProfilePicturePipe} from '../../pipes';
import {BaMsgCenter} from '../../components/baMsgCenter';
import {BaScrollPosition} from '../../directives';
import {AuthService} from '../../../../app/auth.service';

@Component({
  selector: 'ba-page-top',
  styles: [require('./baPageTop.scss')],
  template: require('./baPageTop.html'),
  directives: [BaMsgCenter, BaScrollPosition],
  pipes: [BaProfilePicturePipe],
  encapsulation: ViewEncapsulation.None
})
export class BaPageTop {

  public isScrolled:boolean = false;
  public isMenuCollapsed:boolean = false;

  constructor(private _state:AppState, public router: Router, private authService: AuthService) {
    this._state.subscribe('menu.isCollapsed', (isCollapsed) => {
      this.isMenuCollapsed = isCollapsed;
    });
  }

  public toggleMenu() {
    this.isMenuCollapsed = !this.isMenuCollapsed;
    this._state.notifyDataChanged('menu.isCollapsed', this.isMenuCollapsed);
  }

  public scrolledChanged(isScrolled) {
    this.isScrolled = isScrolled;
  }

  signOut(){
    this.authService.logout().subscribe(() => {
    if (this.authService.isLoggedIn) {
      this.authService.logout;
    }
    });
    this.router.navigateByUrl('/login');
  }
}
