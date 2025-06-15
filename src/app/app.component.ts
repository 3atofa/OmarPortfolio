import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as AOS from 'aos';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'OmarAtefPortfolio';
  
  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      AOS.refresh();
    });
  }
  
  
  ngOnInit(): void {
    AOS.init({
      duration: 1000,
      once: true, // Only animate once
    });
  }
}
