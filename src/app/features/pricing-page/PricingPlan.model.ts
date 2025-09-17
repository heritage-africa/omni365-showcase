export interface PricingPlan {
    id: string;
    name: string;
    description: string;
    price: {
        monthly: number;
        yearly: number;
    };
    originalPrice?: {
        monthly: number;
        yearly: number;
    };
    popular?: boolean;
    enterprise?: boolean;
    features: string[];
    limitations?: string[];
    highlight: string;
    color: string;
    icon: string;
    cta: string;
    maxUsers: string;
    storage: string;
    support: string;
}

export interface Feature {
    category: string;
    items: {
        name: string;
        starter: boolean | string;
        business: boolean | string;
        enterprise: boolean | string;
        tooltip?: string;
    }[];
}