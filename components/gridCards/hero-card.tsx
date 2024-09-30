import React from 'react';

import Link from 'next/link';

import { HeroBlock } from '@/lib/types';
import { cn } from '@/lib/utils';

import {
  InfoCard,
  InfoCardDescription,
  InfoCardTitle,
} from '../info-card';
import { ReadMoreButton } from '../read-more-button';

interface HeroCardProps {
  heroBlock: HeroBlock;
}

const HeroCard = ({ heroBlock }: HeroCardProps) => {
  const isPioneerTitle = heroBlock.title.includes('Pioneering');

  return (
    <InfoCard
      className={cn(
        !isPioneerTitle ? 'bg-teal-500' : 'bg-stone-600',
        'p-8 col-span-4 row-span-2 rounded-lg text-white items-start'
      )}
    >
      <InfoCardTitle className="text-left">{heroBlock.title}</InfoCardTitle>
      <InfoCardDescription className="mt-1 mb-3">{heroBlock.description}</InfoCardDescription>
      <Link href={`/article/${heroBlock.cta.href}`}>
        <ReadMoreButton title={heroBlock.cta.title} />
      </Link>
    </InfoCard>
  );
};

export default HeroCard;
