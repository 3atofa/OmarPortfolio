import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

interface ProjectDetail {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  technologies: string[];
  features: string[];
  images: string[];
  link: string;
  category: string;
}

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {
  project: ProjectDetail | null = null;
  currentImageIndex: number = 0;

  projects: ProjectDetail[] = [
    {
      id: 'law-firm',
      title: 'Al Hasswa Law Firm',
      description: 'Comprehensive law firm management system with client portal and appointment booking',
      fullDescription: 'A full-stack web application built for Al Hasswa Law Firm featuring a complete dashboard for managing clients, appointments, articles, and working hours. The system includes a public-facing website where clients can book appointments and read legal articles.',
      technologies: ['Angular', 'Node.js', 'Express', 'PostgreSQL', 'Tailwind CSS', 'TypeScript'],
      features: [
        'Client appointment booking system',
        'Admin dashboard for managing appointments and clients',
        'Article/Blog management system',
        'Working hours and availability management',
        'Responsive design for all devices',
        'Real-time notifications',
        'Secure authentication and authorization'
      ],
      images: [
        '/assets/img/Law Firm/Law Firm hero image.png',
        '/assets/img/Law Firm/dashboard.png',
        '/assets/img/Law Firm/clients booking appointment page.png',
        '/assets/img/Law Firm/articles page.png',
        '/assets/img/Law Firm/creat article page.png',
        '/assets/img/Law Firm/working hours.png'
      ],
      link: 'https://alhasswalawfirm.com',
      category: 'Full Stack'
    },
    {
      id: 'physiotech-clinic',
      title: 'PhysioTech Clinic',
      description: 'Advanced clinic management system for physiotherapy practices',
      fullDescription: 'A comprehensive full-stack application for PhysioTech Clinic featuring patient management, appointment scheduling, session tracking, financial management, and staff coordination. Built with modern technologies for optimal performance and user experience.',
      technologies: ['Angular', 'Node.js', 'Express', 'PostgreSQL', 'Tailwind CSS', 'TypeScript', 'Chart.js'],
      features: [
        'Public appointment booking system',
        'Patient management and medical records',
        'Session and assessment creation',
        'Schedule management for staff',
        'Room and pricing management',
        'Financial tracking and reporting',
        'Staff and administrator management',
        'Real-time dashboard analytics',
        'Mobile-responsive interface'
      ],
      images: [
        '/assets/img/physiotech clinic/hero page.png',
        '/assets/img/physiotech clinic/dashboard schedule managment page.png',
        '/assets/img/physiotech clinic/book appointment page for public users.png',
        '/assets/img/physiotech clinic/patient detials page in dashboard.png',
        '/assets/img/physiotech clinic/create session modal.png',
        '/assets/img/physiotech clinic/create assessment for pateint.png',
        '/assets/img/physiotech clinic/staff managment page.png',
        '/assets/img/physiotech clinic/Adminstrators page.png',
        '/assets/img/physiotech clinic/manage rooms and pricing page.png',
        '/assets/img/physiotech clinic/finance page.png'
      ],
      link: 'https://physiotechclinic.com',
      category: 'Full Stack'
    },
    {
      id: 'ecommerce',
      title: 'E-commerce Website',
      description: 'Modern e-commerce platform with multi-language support',
      fullDescription: 'A modern, responsive e-commerce website built with Angular 16, designed to offer a seamless shopping experience. Features multi-language support (Arabic and English), Tailwind CSS for responsive UI, and Stripe integration for secure payments.',
      technologies: ['Angular', 'TypeScript', 'Tailwind CSS', 'Stripe API', 'REST API'],
      features: [
        'Multi-language support (Arabic/English)',
        'Stripe payment integration',
        'Shopping cart functionality',
        'Product catalog management',
        'Responsive design',
        'User authentication'
      ],
      images: ['/assets/img/Frech-Cart-E-comerce.png'],
      link: 'https://frechcart-omar-atef.netlify.app',
      category: 'Frontend'
    }
  ];

  constructor(
    private route: ActivatedRoute,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const projectId = params['id'];
      this.project = this.projects.find(p => p.id === projectId) || null;
      
      if (!this.project) {
        this.router.navigate(['/projects']);
      }
    });
  }

  nextImage(): void {
    if (this.project) {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.project.images.length;
    }
  }

  previousImage(): void {
    if (this.project) {
      this.currentImageIndex = (this.currentImageIndex - 1 + this.project.images.length) % this.project.images.length;
    }
  }

  goToImage(index: number): void {
    this.currentImageIndex = index;
  }
}
