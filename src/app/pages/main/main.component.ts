import { Component, inject, AfterViewInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import emailjs from '@emailjs/browser';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements AfterViewInit, OnDestroy {
  private spinner =  inject(NgxSpinnerService);

  showLoading() {
    this.spinner.show();

    // Hide after operation completes
    this.spinner.hide();
  }




  email = "omaratef.212109@gmail.com"
  contactForm: FormGroup;
  isSubmitting = false;
  submitSuccess = false;
  submitError = false;

  constructor(private fb: FormBuilder, private router: Router) {
    this.contactForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  private _splineObserver: IntersectionObserver | null = null;

  ngAfterViewInit(): void {
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
            // preserve classes except the placeholder identifier
            const preserved = classList.split(' ').filter(c => c !== 'spline-placeholder').join(' ');
            if (preserved) spline.setAttribute('class', preserved);
            // try to set a reasonable height if the placeholder had inline height classes
            spline.style.width = '100%';
            // replace placeholder with actual spline element
            target.replaceWith(spline);
          }

          observer.unobserve(entry.target);
        }
      });
    };

    // Use a generous rootMargin so the viewer starts loading slightly before entering viewport
    this._splineObserver = new IntersectionObserver(onIntersect, { root: null, rootMargin: '300px', threshold: 0.01 });
    placeholders.forEach(p => this._splineObserver?.observe(p));
  }

  ngOnDestroy(): void {
    if (this._splineObserver) {
      this._splineObserver.disconnect();
      this._splineObserver = null;
    }
  }

  async onSubmit() {
    if (this.contactForm.valid) {
      this.isSubmitting = true;

      try {
        await emailjs.send(
          'service_n19y22c',      // Replace with your actual service ID
          'template_95adv1a',    // Replace with your actual template ID
          {
            to_email: 'omaratef.212109@gmail.com',
            from_name: `${this.contactForm.value.firstName} ${this.contactForm.value.lastName}`,
            from_email: this.contactForm.value.email,
            message: this.contactForm.value.message
          },
          '1KS5QZEppCn2oU70K'      // Replace with your actual public key
        );

        this.submitSuccess = true;
        this.contactForm.reset();
      } catch (error) {
        console.error('Failed to send email:', error);
        this.submitError = true;
      } finally {
        this.isSubmitting = false;
      }
    }
  }

  scrollTo(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }

  navigateToProjectDetails(projectId: string): void {
    this.router.navigate(['/projects', projectId]);
  }
}
