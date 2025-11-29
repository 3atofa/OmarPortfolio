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

    // Faster spinner hide for better UX
    setTimeout(() => {
      this.spinner.hide();
    }, 1200);

    AOS.init({
      duration: 800,
      once: true,
      offset: 50,
      delay: 0,
      easing: 'ease-in-out'
    });
  }
}
