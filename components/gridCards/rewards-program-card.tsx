'use client';
import { useRouter } from 'next/navigation';

import { MarketingProgram } from '@/lib/types';
import { cn } from '@/lib/utils';

import {
  InfoCard,
  InfoCardButton,
  InfoCardTitle,
} from '../info-card';

interface RewardsProgramCardProps {
  rewardsProgram: MarketingProgram;
}

const RewardsProgramCard = ({ rewardsProgram }: RewardsProgramCardProps) => {
  const router = useRouter();
  const isRewardMember = rewardsProgram.cta.title !== 'Learn More';

  const handleGoToSubscriptionPage = () => {
    router.push(`${rewardsProgram.cta.href}`);
  };

  return (
    <InfoCard
      className={cn(
        isRewardMember ? 'bg-emerald-500' : 'bg-blue-500',
        'rounded-lg text-background'
      )}
    >
      <InfoCardTitle>{rewardsProgram.heading}</InfoCardTitle>
      <InfoCardButton onClick={handleGoToSubscriptionPage}
      >{rewardsProgram.cta.title}
      </InfoCardButton>
    </InfoCard>
  );
};

export default RewardsProgramCard;