import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer implements OnInit{

  currentYear = new Date().getFullYear();
  private intervalId: any;

  socialLinks = [
    { name: 'Twitter', icon: 'twitter', url: '#', color: 'hover:text-blue-400' },
    { name: 'LinkedIn', icon: 'linkedin', url: '#', color: 'hover:text-blue-600' },
    { name: 'GitHub', icon: 'github', url: '#', color: 'hover:text-gray-600' },
    { name: 'Discord', icon: 'discord', url: '#', color: 'hover:text-indigo-500' }
  ];

  solutions = [
    { name: 'Nextcloud', url: '/solutions/nextcloud' },
    { name: 'Mailcow', url: '/solutions/mailcow' },
    { name: 'Calendar', url: '/solutions/calendar' },
    { name: 'Talk', url: '/solutions/talk' },
    { name: 'OnlyOffice', url: '/solutions/onlyoffice' }
  ];

  company = [
    { name: 'À propos', url: '/a-propos' },
    { name: 'Équipe', url: '/equipe' },
    { name: 'Carrières', url: '/carrieres' },
    { name: 'Blog', url: '/blog' },
    { name: 'Presse', url: '/presse' }
  ];

  resources = [
    { name: 'Documentation', url: '/docs' },
    { name: 'API', url: '/api-docs' },
    { name: 'Support', url: '/support' },
    { name: 'Communauté', url: '/communaute' },
    { name: 'Statut', url: '/status' }
  ];

  legal = [
    { name: 'Confidentialité', url: '/confidentialite' },
    { name: 'Conditions', url: '/conditions' },
    { name: 'Cookies', url: '/cookies' },
    { name: 'RGPD', url: '/rgpd' }
  ];

  ngOnInit(): void {
    // Initialisation du composant
  }

  onNewsletterSubmit(event: Event): void {
    event.preventDefault();
    // Logique d'inscription à la newsletter
    console.log('Newsletter subscription submitted');
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

}