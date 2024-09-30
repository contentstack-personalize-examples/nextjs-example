'use client';

import React, { useContext } from 'react';

import { MarketingProgram } from '@/lib/types';

import { PersonalizeContext } from '../context/PersonalizeContext';
import {
  InfoCard,
  InfoCardLink,
  InfoCardTitle,
} from '../info-card';

interface CompetitveShippingCardProps {
  competitiveShipping: MarketingProgram
}

const CompetitveShippingCard = ({ competitiveShipping }: CompetitveShippingCardProps) => {
  const Personalize = useContext(PersonalizeContext);
  const onClickLearnMore = async (e: any) => {
    e.preventDefault();
    await Personalize.triggerEvent('competitveShippinglearnMoreClick');
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

export default CompetitveShippingCard