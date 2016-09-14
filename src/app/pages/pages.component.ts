import {Component, ViewEncapsulation} from '@angular/core';
import {BaPageTop, BaContentTop, BaSidebar, BaBackTop} from '../theme/components';

@Component({
  selector: 'pages',
  encapsulation: ViewEncapsulation.None,
  styles: [],
  directives: [BaPageTop, BaSidebar, BaContentTop, BaBackTop],
  template: `
    <ba-sidebar></ba-sidebar>
    <ba-page-top></ba-page-top>
    <div class="al-main">
      <div class="al-content">
        <!-- <ba-content-top></ba-content-top>-->
        <br>
        <br>
        <router-outlet></router-outlet>
      </div>
    </div>
    <footer class="al-footer clearfix">
      <div class="al-footer-right">Created with <i class="ion-social-angular"></i></div>
      <div class="al-footer-main clearfix">
        <div class="al-copy">&copy; <a href="http://girtmobile.com">GirtMobile</a>2016</div>
        <ul class="al-share clearfix">
          <li><i class="socicon socicon-facebook"></i></li>
          <li><i class="socicon socicon-twitter"></i></li>
          <li><i class="socicon socicon-google"></i></li>
          <li><i class="socicon socicon-github"></i></li>
           <li><i class="socicon socicon-stackoverflow"></i></li>
           <li><i class="socicon socicon-dribble"></i></li>
           <li><i class="socicon socicon-behace"></i></li>
        </ul>
      </div>
    </footer>
    <ba-back-top position="200"></ba-back-top>
    `
})
export class Pages {

  constructor() {

  }

  ngOnInit() {
  }

  ngOnDestroy(){
      
  }
}
