// not-found.component.ts
import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './not-found-page.html',
  styleUrl: './not-found-page.css'
})
export class NotFoundPage implements OnInit, OnDestroy {

  isVisible = false;
  particles: Array<{ x: number, y: number, vx: number, vy: number, opacity: number }> = [];
  animationId?: number;

  popularPages = [
    {
      title: 'Accueil',
      description: 'Découvrez la suite Omni365',
      route: '/',
      icon: 'home',
      color: 'blue'
    },
    {
      title: 'Fonctions',
      description: 'Explorez nos solutions',
      route: '/fonctions',
      icon: 'features',
      color: 'purple'
    },
    {
      title: 'Tarifs',
      description: 'Choisissez votre plan',
      route: '/tarifs',
      icon: 'pricing',
      color: 'green'
    },
    {
      title: 'Contact',
      description: 'Contactez notre équipe',
      route: '/contact',
      icon: 'contact',
      color: 'orange'
    }
  ];

  // Messages d'erreur amusants
  funnyMessages = [
    "🚀 Oups ! Cette page s'est envolée vers l'espace...",
    "🔍 Page introuvable ! Nos robots la cherchent encore...",
    "🌟 Cette page est partie en vacances !",
    "🎯 404 : La page que vous cherchez joue à cache-cache !",
    "🛠️ Page en maintenance dans une dimension parallèle..."
  ];

  currentMessage = '';
  countdownSeconds = 10;
  countdownInterval?: any;

  constructor(
    private readonly router: Router,
    private readonly location: Location
  ) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.isVisible = true;
    }, 100);

    this.currentMessage = this.funnyMessages[Math.floor(Math.random() * this.funnyMessages.length)];

    this.initParticles();
    this.animateParticles();

    // Démarrer le countdown pour la redirection automatique
    this.startCountdown();
  }

  ngOnDestroy(): void {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
    if (this.countdownInterval) {
      clearInterval(this.countdownInterval);
    }
  }

  private initParticles(): void {
    for (let i = 0; i < 50; i++) {
      this.particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        opacity: Math.random() * 0.5 + 0.2
      });
    }
  }

  private animateParticles(): void {
    const animate = () => {
      this.particles.forEach(particle => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x <= 0 || particle.x >= window.innerWidth) {
          particle.vx *= -1;
        }
        if (particle.y <= 0 || particle.y >= window.innerHeight) {
          particle.vy *= -1;
        }

        particle.x = Math.max(0, Math.min(window.innerWidth, particle.x));
        particle.y = Math.max(0, Math.min(window.innerHeight, particle.y));
      });

      this.animationId = requestAnimationFrame(animate);
    };
    animate();
  }

  private startCountdown(): void {
    this.countdownInterval = setInterval(() => {
      this.countdownSeconds--;
      if (this.countdownSeconds <= 0) {
        this.goHome();
      }
    }, 1000);
  }

  stopCountdown(): void {
    if (this.countdownInterval) {
      clearInterval(this.countdownInterval);
      this.countdownInterval = null;
    }
  }

  goBack(): void {
    this.stopCountdown();
    this.location.back();
  }

  goHome(): void {
    this.stopCountdown();
    this.router.navigate(['/']);
  }

  navigateToPage(route: string): void {
    this.stopCountdown();
    this.router.navigate([route]);
  }

  refreshPage(): void {
    this.stopCountdown();
    window.location.reload();
  }

  searchSite(): void {
    // Logique pour ouvrir une recherche sur le site
    console.log('Ouvrir la recherche site');
  }

  reportIssue(): void {
    // Logique pour signaler un problème
    console.log('Signaler un problème');
  }

  getIconSvg(icon: string): string {
    const icons: { [key: string]: string } = {
      'home': 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
      'features': 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10',
      'pricing': 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
      'contact': 'M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
    };
    return icons[icon] || icons['home'];
  }

  getColorClass(color: string): string {
    const colorClasses: { [key: string]: string } = {
      'blue': 'from-blue-500 to-blue-600',
      'purple': 'from-purple-500 to-purple-600',
      'green': 'from-green-500 to-green-600',
      'orange': 'from-orange-500 to-orange-600'
    };
    return colorClasses[color] || colorClasses['blue'];
  }
}