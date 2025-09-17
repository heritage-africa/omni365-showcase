import { Component } from '@angular/core';
import { Header } from "../../../shared/components/header/header";
import { RouterOutlet } from '@angular/router';
import { Footer } from "../../../shared/components/footer/footer";

@Component({
  selector: 'app-landing-page',
  imports: [],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.css'
})
export class LandingPage {
  faqs = [
    {
      question: "Qu'est-ce qui différencie Omni365 des autres suites comme Microsoft 365 ?",
      answer: "Omni365 se distingue par sa philosophie open source, garantissant une transparence totale et votre souveraineté sur les données. Contrairement aux solutions propriétaires, vos informations restent hébergées en Europe selon les standards RGPD, sans exploitation commerciale. Vous bénéficiez également d'économies substantielles tout en conservant toutes les fonctionnalités professionnelles attendues d'une suite collaborative moderne.",
      isOpen: false
    },
    {
      question: "La migration depuis Microsoft 365 ou Google Workspace est-elle compliquée ?",
      answer: "Pas du tout ! Notre équipe vous accompagne gratuitement dans votre migration. Nous proposons des outils automatisés pour transférer vos emails, calendriers, contacts et documents. La compatibilité avec les formats Office garantit que vos fichiers existants fonctionnent parfaitement. La plupart des migrations sont terminées en moins de 48h avec un impact minimal sur votre activité.",
      isOpen: false
    },
    {
      question: "Mes données sont-elles vraiment sécurisées avec Omni365 ?",
      answer: "Absolument. Omni365 utilise un chiffrement AES-256 bout en bout, l'authentification à deux facteurs obligatoire, et respecte les normes ISO 27001. Vos données sont hébergées exclusivement en Europe dans des datacenters certifiés RGPD. Nous ne scannons jamais vos contenus à des fins commerciales et vous gardez un contrôle total sur vos informations.",
      isOpen: false
    },
    {
      question: "Puis-je personnaliser Omni365 selon les besoins de mon entreprise ?",
      answer: "Oui, c'est l'un des grands avantages d'Omni365. Étant basé sur des technologies open source, la solution est entièrement personnalisable. Vous pouvez adapter l'interface, intégrer vos outils métier existants, configurer des workflows spécifiques, et même développer des extensions sur mesure. Notre équipe vous accompagne dans ces personnalisations selon vos besoins.",
      isOpen: false
    },
    {
      question: "Quel type de support proposez-vous ?",
      answer: "Nous proposons un support multicanal en français : email, chat en direct, téléphone et base de connaissances complète. Les clients Business bénéficient d'un support prioritaire avec des temps de réponse garantis. Les clients Enterprise ont accès à un responsable de compte dédié et au support 24/7. Nous organisons également des webinaires de formation réguliers pour optimiser votre utilisation d'Omni365.",
      isOpen: false
    },
    {
      question: "Y a-t-il des limites sur le nombre d'utilisateurs ou le stockage ?",
      answer: "Cela dépend de votre plan. Le plan Starter est limité à 25 utilisateurs avec 50GB par utilisateur. Le plan Business supporte jusqu'à 500 utilisateurs avec 200GB chacun. Le plan Enterprise offre utilisateurs et stockage illimités. Contrairement à nos concurrents, nous ne bridons jamais les fonctionnalités par utilisateur et ne facturons pas d'extras cachés.",
      isOpen: false
    }
  ];

  toggleFaq(index: number) {
    this.faqs[index].isOpen = !this.faqs[index].isOpen;
  }
}
