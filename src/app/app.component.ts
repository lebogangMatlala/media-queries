import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import Typewriter from 't-writer.js'

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'mdb-angular-ui-kit-free';
  optionsSelect: Array<any>;
  //carousal
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    autoplay: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

  slides = [
    { id: 1, img: "../assets/046-Viktor-Miller-Gausa.jpg" },
    { id: 2, img: "../assets/Auntie Mo Mo.jpg" },
    { id: 3, img: "../assets/Janelle.jpg" },
    { id: 4, img: "../assets/Josh.jpg" },
    { id: 5, img: "../assets/046-Viktor-Miller-Gausa.jpg" },
    { id: 6, img: "../assets/Auntie Mo Mo.jpg" },
    { id: 6, img: "../assets/Janelle.jpg" }
  ];

  ngOnInit(): void {
    const target = document.querySelector('.tw');
    const options = {
      loop: false
    }

    const writer = new Typewriter(target, {
      loop: false,
       typeColor: 'Ocean Blue'
    })

    writer
      .type('Looking forward to connecting with you.')
      .rest(800)
      .changeCursorColor('#17a0ce')
      .start()

  }

}



