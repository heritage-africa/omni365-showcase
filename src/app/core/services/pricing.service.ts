import { Injectable } from '@angular/core';
import { Feature, PricingPlan } from '../../features/pricing-page/PricingPlan.model';

@Injectable({
    providedIn: 'root'
})
export class PricingService {

    private readonly plans: PricingPlan[] = [
        {
            id: 'starter',
            name: 'Starter',
            description: 'Parfait pour les petites équipes qui démarrent',
            price: { monthly: 9, yearly: 89 },
            originalPrice: { monthly: 12, yearly: 120 },
            features: [
                'Jusqu\'à 5 utilisateurs',
                '100 GB de stockage',
                'Email et calendrier',
                'Nextcloud Files',
                'Support par email',
                'SSL inclus',
                'Sauvegardes quotidiennes'
            ],
            highlight: 'Idéal pour débuter',
            color: 'blue',
            icon: 'rocket',
            cta: 'Commencer maintenant',
            maxUsers: '5 utilisateurs',
            storage: '100 GB',
            support: 'Email'
        },
        {
            id: 'business',
            name: 'Business',
            description: 'La solution complète pour les entreprises en croissance',
            price: { monthly: 25, yearly: 250 },
            originalPrice: { monthly: 35, yearly: 350 },
            popular: true,
            features: [
                'Jusqu\'à 50 utilisateurs',
                '1 TB de stockage',
                'Suite complète Omni365',
                'Talk & Visioconférence',
                'OnlyOffice intégré',
                'Domaine personnalisé',
                'Support prioritaire 24/7',
                'Intégrations avancées',
                'Rapports d\'activité',
                'Gestion des permissions'
            ],
            highlight: 'Le plus populaire',
            color: 'purple',
            icon: 'trending-up',
            cta: 'Choisir Business',
            maxUsers: '50 utilisateurs',
            storage: '1 TB',
            support: '24/7 prioritaire'
        },
        {
            id: 'enterprise',
            name: 'Enterprise',
            description: 'Pour les grandes organisations avec des besoins spécifiques',
            price: { monthly: 0, yearly: 0 },
            enterprise: true,
            features: [
                'Utilisateurs illimités',
                'Stockage illimité',
                'Déploiement on-premise',
                'Support dédié',
                'Formation incluse',
                'Intégration LDAP/AD',
                'Conformité RGPD avancée',
                'SLA personnalisé',
                'Développement sur mesure',
                'Migration assistée'
            ],
            highlight: 'Solution sur mesure',
            color: 'green',
            icon: 'shield-check',
            cta: 'Nous contacter',
            maxUsers: 'Illimité',
            storage: 'Illimité',
            support: 'Dédié'
        }
    ];

    private readonly detailedFeatures: Feature[] = [
        {
            category: 'Utilisateurs & Stockage',
            items: [
                { name: 'Nombre d\'utilisateurs', starter: '5 max', business: '50 max', enterprise: 'Illimité' },
                { name: 'Espace de stockage', starter: '100 GB', business: '1 TB', enterprise: 'Illimité' },
                { name: 'Stockage par utilisateur', starter: '20 GB/utilisateur', business: '20 GB/utilisateur', enterprise: 'Configurable' }
            ]
        },
        {
            category: 'Applications Core',
            items: [
                { name: 'Nextcloud Files', starter: true, business: true, enterprise: true },
                { name: 'Mailcow (Email)', starter: true, business: true, enterprise: true },
                { name: 'Calendrier & Contacts', starter: true, business: true, enterprise: true },
                { name: 'Talk (Chat & Visio)', starter: 'Basique', business: 'Avancé', enterprise: 'Complet' },
                { name: 'OnlyOffice', starter: false, business: true, enterprise: true }
            ]
        },
        {
            category: 'Fonctionnalités Avancées',
            items: [
                { name: 'Domaine personnalisé', starter: false, business: true, enterprise: true },
                { name: 'Intégration LDAP/AD', starter: false, business: false, enterprise: true },
                { name: 'Single Sign-On (SSO)', starter: false, business: 'Basique', enterprise: 'Avancé' },
                { name: 'API & Webhooks', starter: 'Limitée', business: 'Complète', enterprise: 'Complète + Custom' }
            ]
        },
        {
            category: 'Sécurité & Conformité',
            items: [
                { name: 'Chiffrement end-to-end', starter: true, business: true, enterprise: true },
                { name: 'Audit logs', starter: false, business: true, enterprise: true },
                { name: 'Conformité RGPD', starter: 'Basique', business: 'Avancée', enterprise: 'Complète' },
                { name: 'Authentification 2FA', starter: true, business: true, enterprise: true }
            ]
        },
        {
            category: 'Support & Services',
            items: [
                { name: 'Support technique', starter: 'Email (48h)', business: 'Chat & Email (24h)', enterprise: 'Dédié (1h)' },
                { name: 'Formation utilisateurs', starter: 'Documentation', business: 'Webinaires', enterprise: 'Sur site' },
                { name: 'Migration assistée', starter: false, business: 'Basique', enterprise: 'Complète' },
                { name: 'SLA', starter: '99%', business: '99.5%', enterprise: '99.9%' }
            ]
        }
    ];



    getPlans(): PricingPlan[] { return this.plans; }
    getDetailedFeatures(): Feature[] { return this.detailedFeatures; }
}
