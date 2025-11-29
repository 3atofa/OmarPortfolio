import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import * as Aos from 'aos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit, OnDestroy {
  private _splineObserver: IntersectionObserver | null = null;
  email: string = "omaratef.212109@gmail.com";

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      Aos.refresh();
    });
  }

  ngOnInit(): void {
    // AOS is initialized in app component
    Aos.refresh();
  }

  ngAfterViewInit(): void {
    // Lazy load spline viewers
    const placeholders = Array.from(document.querySelectorAll('.spline-placeholder')) as HTMLElement[];
    if (!placeholders.length) {
      return;
    }

    const onIntersect: IntersectionObserverCallback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement;
          const url = target.getAttribute('data-url');
          const classList = target.getAttribute('class') || '';

          if (url) {
            const spline = document.createElement('spline-viewer');
            spline.setAttribute('url', url);
            const preserved = classList.split(' ').filter(c => c !== 'spline-placeholder').join(' ');
            if (preserved) spline.setAttribute('class', preserved);
            target.replaceWith(spline);
          }

          observer.unobserve(entry.target);
        }
      });
    };

    this._splineObserver = new IntersectionObserver(onIntersect, { 
      root: null, 
      rootMargin: '200px', 
      threshold: 0.01 
    });
    placeholders.forEach(p => this._splineObserver?.observe(p));
  }

  ngOnDestroy(): void {
    if (this._splineObserver) {
      this._splineObserver.disconnect();
      this._splineObserver = null;
    }
  }
}
