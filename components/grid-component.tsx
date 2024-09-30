import React from 'react';

import {
  MarketingProgramGroup,
  ModularBlock,
} from '@/lib/types';

import CompetitveShippingCard from './gridCards/competitive-shipping-card';
import HeroCard from './gridCards/hero-card';
import ProductUpsellCard from './gridCards/product-upsell-card';
import RewardsProgramCard from './gridCards/rewards-program-card';
import HeroImage from './hero-img';

interface GridComponentProps {
  modularBlocks: ModularBlock[];
}

const GridComponent = ({ modularBlocks }: GridComponentProps) => {
  return (
    <div className='grid grid-cols-6 grid-rows-4 flex-grow gap-2 min-h-[120vh]'>
      {modularBlocks.map((block, index) => {
        if (block.marketing_program) {
          return (
            <MarketingProgramBlock
              key={index}
              marketing_program_group={
                block.marketing_program.marketing_program_group
              }
            />
          );
        }
        if (block.hero_block) {
          return <HeroCard key={index} heroBlock={block.hero_block} />;
        }
        if (block.hero_image) {
          return (
            <HeroImage
              key={index}
              imageUrl={block.hero_image.image.url}
              imageCaption={block.hero_image.subtext}
              className='bg-blue-200 col-span-2 row-span-2 rounded-lg overflow-hidden'
            />
          );
        }
        if (block.product_upsell) {
          return (
            <ProductUpsellCard
              key={index}
              productUpsell={block.product_upsell}
            />
          );
        }
      })}
    </div>
  );
};

const MarketingProgramBlock = ({
  marketing_program_group
}: MarketingProgramGroup) => {
  const rewards_program = marketing_program_group[0];
  const competitive_shipping = marketing_program_group[1];
  return (
    <div className='col-span-6 rounded-lg grid grid-cols-2 gap-2'>
      <RewardsProgramCard rewardsProgram={rewards_program} />
      <CompetitveShippingCard competitiveShipping={competitive_shipping}/>
    </div>
  );
};

export default GridComponent;
