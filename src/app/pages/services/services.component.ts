import { Component } from '@angular/core';

interface Service {
  icon: string;
  title: string;
  description: string;
  features: string[];
  gradient: string;
}

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  services: Service[] = [
    {
      icon: 'bi-globe',
      title: 'Web Application Development',
      description: 'Full-stack web applications built with Angular, featuring modern UI/UX, API integrations, and scalable architecture.',
      features: [
        'Custom Angular Applications',
        'RESTful API Integration',
        'Real-time Data Solutions',
        'Progressive Web Apps (PWA)',
        'Responsive Design'
      ],
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: 'bi-phone',
      title: 'Landing Pages',
      description: 'High-converting, responsive landing pages designed to capture leads and showcase your products or services effectively.',
      features: [
        'Modern, Clean Design',
        'SEO Optimized',
        'Fast Loading Speed',
        'Mobile-First Approach',
        'Lead Generation Forms'
      ],
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: 'bi-speedometer2',
      title: 'Admin Dashboards',
      description: 'Powerful admin panels and dashboards with data visualization, user management, and business intelligence features.',
      features: [
        'Data Visualization',
        'User Role Management',
        'Analytics & Reports',
        'CRUD Operations',
        'Real-time Updates'
      ],
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: 'bi-cart-check',
      title: 'E-commerce Solutions',
      description: 'Complete e-commerce platforms with shopping carts, payment gateways, inventory management, and order tracking.',
      features: [
        'Shopping Cart Systems',
        'Payment Integration',
        'Product Management',
        'Order Tracking',
        'Multi-language Support'
      ],
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: 'bi-palette',
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive user interfaces crafted with attention to detail, ensuring excellent user experience.',
      features: [
        'Custom Design Systems',
        'Prototyping',
        'User Research',
        'Accessibility Standards',
        'Brand Consistency'
      ],
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      icon: 'bi-rocket-takeoff',
      title: 'Performance Optimization',
      description: 'Speed up your existing websites and applications with code optimization, lazy loading, and best practices.',
      features: [
        'Code Splitting',
        'Lazy Loading',
        'Image Optimization',
        'Caching Strategies',
        'SEO Enhancement'
      ],
      gradient: 'from-yellow-500 to-orange-500'
    }
  ];

  technologies = [
    { name: 'Angular', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'Tailwind CSS', level: 90 },
    { name: 'JavaScript', level: 88 },
    { name: 'HTML/CSS', level: 95 },
    { name: 'Bootstrap', level: 85 },
    { name: 'REST APIs', level: 80 },
    { name: 'Git/GitHub', level: 85 }
  ];
}
