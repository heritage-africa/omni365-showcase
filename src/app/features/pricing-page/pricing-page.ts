import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Feature, PricingPlan } from './PricingPlan.model';
import { PricingService } from '../../core/services/pricing.service';

@Component({
  selector: 'app-pricing-page',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './pricing-page.html',
  styleUrls: ['./pricing-page.css']
})
export class PricingPage implements OnInit {
  isYearly = false;
  selectedPlan: string | null = null;

  plans: PricingPlan[] = [];
  detailedFeatures: Feature[] = [];


  constructor(private readonly pricingService: PricingService) { }

  ngOnInit(): void {
    this.plans = this.pricingService.getPlans();
    this.detailedFeatures = this.pricingService.getDetailedFeatures();
  }

  toggleBilling(): void { this.isYearly = !this.isYearly; }
  selectPlan(planId: string): void { this.selectedPlan = planId; }
  startTrial(plan: PricingPlan): void { console.log('Démarrage essai gratuit pour:', plan.name); }
  contactSales(): void { console.log('Contact équipe commerciale'); }

  getPlanPrice(plan: PricingPlan): number { return plan.enterprise ? 0 : (this.isYearly ? plan.price.yearly : plan.price.monthly); }
  getOriginalPrice(plan: PricingPlan): number | null { if (!plan.originalPrice || plan.enterprise) return null; return this.isYearly ? plan.originalPrice.yearly : plan.originalPrice.monthly; }
  calculateSavings(plan: PricingPlan): number { const original = this.getOriginalPrice(plan); if (!original) return 0; return Math.round(((original - this.getPlanPrice(plan)) / original) * 100); }

  getFeatureValue(feature: any, plan: string): any { return feature[plan]; }
  isFeatureIncluded(value: any): boolean { return value === true || (typeof value === 'string' && value !== 'false'); }

  getColorClasses(color: string) {
    const colors: { [key: string]: any } = {
      blue: { bg: 'bg-gradient-to-br from-blue-500 to-blue-600', text: 'text-blue-600', border: 'border-blue-200', accent: 'bg-blue-50' },
      purple: { bg: 'bg-gradient-to-br from-purple-500 to-purple-600', text: 'text-purple-600', border: 'border-purple-200', accent: 'bg-purple-50' },
      green: { bg: 'bg-gradient-to-br from-green-500 to-green-600', text: 'text-green-600', border: 'border-green-200', accent: 'bg-green-50' }
    };
    return colors[color] || colors['blue'];
  }
}
