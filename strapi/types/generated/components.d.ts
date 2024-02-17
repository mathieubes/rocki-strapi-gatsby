import type { Schema, Attribute } from '@strapi/strapi';

export interface PricingPricing extends Schema.Component {
  collectionName: 'components_pricing_pricings';
  info: {
    displayName: 'Pricing';
    icon: 'priceTag';
  };
  attributes: {
    amount: Attribute.Decimal;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'pricing.pricing': PricingPricing;
    }
  }
}
