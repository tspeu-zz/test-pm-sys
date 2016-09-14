/**
 * Created by Tareq Boulakjar. from angulartypescript.com
 */
import {Component} from '@angular/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from '@angular/common';
import {Slide} from './slide.component';
import {Carousel} from './carrusel.component';


/*Angular 2 Carousel - Gallery*/
@Component({
    selector: 'carrusel-example',
    template:`
                    <div class="row" class="carousel">
                      <div class="col-md-12">
                        <carousel [interval]="NextPhotoInterval" [noWrap]="noLoopSlides">
                          <slide *ngFor=" let slidez of slides; let index=index"
                                 [active]="slidez.active">
                            <img [src]="slidez.image" style="margin:auto;">

                            <div class="carousel-caption">
                              <h3 style="background-color: transparent;color: white;">Slide {{index + 1}}</h3>
                              <p  style="background-color: transparent;color: white;">{{slidez.text}}</p>
                            </div>
                          </slide>
                        </carousel>
                      </div>

                      <div class="col-md-12">
                        <button type="button" class="btn btn-info"
                                (click)="removeLastSlide()">Remove Last Slide
                        </button>
                      </div>
                    </div>

             `,
    styles: [`
.carousel{
    overflow:hidden;
    width:100%;
}
.slides{
    list-style:none;
    position:relative;
    width:500%; /* Number of panes * 100% */
    overflow:hidden; /* Clear floats */
        /* Slide effect Animations*/
    -moz-animation:carousel 30s infinite;
    -webkit-animation:carousel 30s infinite;
    animation:carousel 30s infinite;
}
.slides > li{
    position:relative;
    float:left;
    width: 20%; /* 100 / number of panes */
}
.carousel img{
    display:block;
    width:100%;
    max-width:100%;
    max-height: 220px;
    min-height: 100px;
    height: 300px;

}
.carousel h2{
    margin-bottom: 0;
    font-size:1em;
    padding:1.5em 0.5em 1.5em 0.5em;
    position:absolute;
    right:0px;
    bottom:0px;
    left:0px;
    text-align:center;
    color:#fff;
    background-color:rgba(0,0,0,0.75);
    text-transform: uppercase;
}

@keyframes carousel{
    0%    { left:-5%; }
    11%   { left:-5%; }
    12.5% { left:-105%; }
    23.5% { left:-105%; }
    25%   { left:-205%; }
    36%   { left:-205%; }
    37.5% { left:-305%; }
    48.5% { left:-305%; }
    50%   { left:-405%; }
    61%   { left:-405%; }
    62.5% { left:-305%; }
    73.5% { left:-305%; }
    75%   { left:-205%; }
    86%   { left:-205%; }
    87.5% { left:-105%; }
    98.5% { left:-105%; }
    100%  { left:-5%; }
}
  `],         
    directives: [Slide,Carousel, CORE_DIRECTIVES, FORM_DIRECTIVES],
})
export class Angular2Carousel  {
    //The time to show the next photo
    private NextPhotoInterval:number = 5000;
    //Looping or not
    private noLoopSlides:boolean = true;
    //Photos
    private slides:Array<any> = [];

    constructor() {
            this.addNewSlide();
    }

    private addNewSlide() {
         this.slides.push(
            {image:'http://dynamiceu.com/wp-content/uploads/2016/02/1_%E2%80%A2-Portfolio-%E2%80%93-Deckers-Showroom.jpg',text:'Store 1'},
            {image:'http://dynamiceu.com/wp-content/uploads/2016/02/2_%E2%80%A2-Services-%E2%80%93-Ted-Baker-Canada-.jpg',text:'Store 2'},
            {image:'http://dynamiceu.com/wp-content/uploads/2016/02/3_%E2%80%A2-Portfolio-%E2%80%93-Deckers-Showroom.jpg',text:'Store 3'},
            {image:'http://dynamiceu.com/wp-content/uploads/2016/02/5_%E2%80%A2-About-us-%E2%80%93-NY-Rooftop-Party.jpg',text:'Store 4'},
            {image:'http://dynamiceu.com/wp-content/uploads/2016/01/Ted-Baker-%E2%80%93-Kildare_La-VallePortolio_slide1-800x600.jpg',text:'Store 5'},
            {image:'http://dynamiceu.com/wp-content/uploads/2016/01/Ted-Baker-%E2%80%93-Sherway-Gardens2_Portolio_slide-copy-1.jpg',text:'Store 6'}
        );
    }

    private removeLastSlide() {
        this.slides.pop();
    }
}