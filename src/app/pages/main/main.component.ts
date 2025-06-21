import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  email = "omaratef.212109@gmail.com"
  contactForm: FormGroup;
  isSubmitting = false;
  submitSuccess = false;
  submitError = false;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
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
}
