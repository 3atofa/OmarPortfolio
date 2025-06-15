import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as Aos from 'aos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  ngOnInit(): void {
    Aos.init({
      duration: 1000,
      once: true, // Only animate once
    });
  }

  constructor(private router: Router) {
  this.router.events.subscribe(() => {
    Aos.refresh();
  });
  }

  email:string = "omaratef.212109@gmail.com" 
}
