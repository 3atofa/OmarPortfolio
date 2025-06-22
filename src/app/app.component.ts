import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as AOS from 'aos';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'OmarAtefPortfolio';
  
  constructor(private router: Router, private spinner: NgxSpinnerService) {
    this.router.events.subscribe(() => {
      AOS.refresh();
    });
  }
  
  
  ngOnInit(): void {
    this.spinner.show();

    setTimeout(() => {
      this.spinner.hide();
    }, 2300);


    AOS.init({
      duration: 1000,
      once: true, // Only animate once
    });
  }
}
