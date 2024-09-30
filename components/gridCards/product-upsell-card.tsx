import React from 'react';

import { ProductUpsell } from '@/lib/types';

import {
  InfoCard,
  InfoCardLink,
  InfoCardTitle,
} from '../info-card';

interface ProductUpsellCardProps{
    productUpsell: ProductUpsell
}

const ProductUpsellCard = ({productUpsell}: ProductUpsellCardProps) => {
  return (
    <InfoCard
      className='bg-red-400 col-span-6 rounded-lg text-white'
    >
      <InfoCardTitle>{productUpsell.title}</InfoCardTitle>
      <InfoCardLink href={productUpsell.cta.href}>
        {productUpsell.cta.title}
      </InfoCardLink>
    </InfoCard>
  );
}

export default ProductUpsellCard