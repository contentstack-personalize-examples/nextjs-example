'use client';

import React from 'react';

import { MarketingProgram } from '@/lib/types';

import { usePersonalize } from '../context/PersonalizeContext';
import {
  InfoCard,
  InfoCardLink,
  InfoCardTitle,
} from '../info-card';

interface CompetitiveShippingCardProps {
  competitiveShipping: MarketingProgram
}

const CompetitiveShippingCard = ({ competitiveShipping }: CompetitiveShippingCardProps) => {
  const personalizeSdk = usePersonalize();
  const onClickLearnMore = async (e: any) => {
    e.preventDefault();
    await personalizeSdk?.triggerEvent('competitveShippinglearnMoreClick');
  }

  return (
    <InfoCard className={'rounded-lg text-white bg-gray-700'}>
      <InfoCardTitle>{competitiveShipping.heading}</InfoCardTitle>
      <InfoCardLink href={competitiveShipping.cta.href} onClick={onClickLearnMore}>
        {competitiveShipping.cta.title}
      </InfoCardLink>
    </InfoCard>
  );
}

export default CompetitiveShippingCard