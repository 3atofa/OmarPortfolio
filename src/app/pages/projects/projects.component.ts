import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
  tags: string[];
  featured?: boolean;
  hasDetails?: boolean;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  constructor(public router: Router) {}

  projects: Project[] = [
    {
      id: 'law-firm',
      title: 'Al Hasswa Law Firm',
      description: 'Comprehensive law firm management system with client portal and appointment booking',
      image: '/assets/img/Law Firm/Law Firm hero image.png',
      link: 'https://alhasswalawfirm.com',
      tags: ['Angular', 'Node.js', 'PostgreSQL', 'TypeScript', 'Full Stack'],
      featured: true,
      hasDetails: true
    },
    {
      id: 'physiotech-clinic',
      title: 'PhysioTech Clinic',
      description: 'Advanced clinic management system for physiotherapy practices with patient management, scheduling, and financial tracking',
      image: '/assets/img/physiotech clinic/hero page.png',
      link: 'https://physiotechclinic.com',
      tags: ['Angular', 'Node.js', 'PostgreSQL', 'TypeScript', 'Full Stack'],
      featured: true,
      hasDetails: true
    },
    {
      id: 'ecommerce',
      title: 'E-commerce Website',
      description: 'A modern, responsive e-commerce website built with Angular 16, designed to offer a seamless shopping experience. Features multi-language support (Arabic and English), Tailwind CSS for responsive UI, and Stripe integration for secure payments.',
      image: '/assets/img/Frech-Cart-E-comerce.png',
      link: 'https://frechcart-omar-atef.netlify.app',
      tags: ['Angular', 'TypeScript', 'Tailwind CSS', 'Stripe', 'E-commerce'],
      featured: true,
      hasDetails: false
    },
    {
      id: 'portfolio',
      title: 'Personal Portfolio Website',
      description: 'A responsive, modern portfolio website designed to showcase skills and projects. Built with Bootstrap for clean, professional presentation.',
      image: '/assets/img/portfolio-project.png',
      link: 'https://3atofa.github.io/Portfolio-Website/',
      tags: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
      hasDetails: false
    },
    {
      id: 'restaurant',
      title: 'Restaurant Website - Mealify',
      description: 'An elegant restaurant landing page showcasing gourmet dining experiences, professional chef profiles, and a stunning food gallery with responsive design.',
      image: '/assets/img/Melfiy.png',
      link: 'https://3atofa.github.io/Restaurant-website/',
      tags: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
      hasDetails: false
    },
    {
      id: 'bakery',
      title: 'Bakery Website',
      description: 'A responsive, modern bakery website featuring product showcases, online ordering capabilities, and elegant design patterns for food presentation.',
      image: '/assets/img/Backery.png',
      link: 'https://3atofa.github.io/Bakery-website/',
      tags: ['HTML', 'CSS', 'JavaScript', 'UI/UX'],
      hasDetails: false
    },
    {
      id: 'tourism',
      title: 'Tourism Management Dashboard',
      description: 'A robust internal platform built for a tourism company to efficiently manage tours, hotel bookings, and destination details — streamlining operations and improving client service delivery.',
      image: '/assets/img/gradient.png',
      link: '#',
      tags: ['Angular', 'Dashboard', 'Admin Panel', 'Tailwind CSS'],
      hasDetails: false
    },
    {
      id: 'factory',
      title: 'Apparel Factory Management',
      description: 'A comprehensive internal system for a clothing factory enabling product and category management. Supports multiple product sizes and variations, streamlining inventory control and catalog organization.',
      image: '/assets/img/gradient.png',
      link: '#',
      tags: ['Angular', 'TypeScript', 'Management System', 'Tailwind CSS'],
      hasDetails: false
    }
  ];

  filteredProjects: Project[] = [...this.projects];
  activeFilter: string = 'all';

  filterProjects(tag: string): void {
    this.activeFilter = tag;
    if (tag === 'all') {
      this.filteredProjects = [...this.projects];
    } else {
      this.filteredProjects = this.projects.filter(project => 
        project.tags.some(t => t.toLowerCase().includes(tag.toLowerCase()))
      );
    }
  }

  get availableTags(): string[] {
    const tags = new Set<string>();
    this.projects.forEach(project => {
      project.tags.forEach(tag => tags.add(tag));
    });
    return Array.from(tags);
  }
}
