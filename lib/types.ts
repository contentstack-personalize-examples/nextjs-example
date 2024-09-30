interface MarketingProgram {
  heading: string;
  cta: {
    title: string;
    href: string;
  };
}

interface MarketingProgramGroup {
  marketing_program_group: MarketingProgram[];
}

interface HeroBlock {
  title: string;
  description: string;
  cta: {
    title: string;
    href: string;
  };
}

interface HeroImageBlock {
  image: {
    uid: string;
    filename: string;
    title: string;
    url: string;
  };
  subtext: string;
}

interface ProductUpsell {
  title: string;
  cta: {
    title: string;
    href: string;
  };
}

interface ModularBlock {
  marketing_program?: MarketingProgramGroup;
  hero_block?: HeroBlock;
  hero_image?: HeroImageBlock;
  product_upsell?: ProductUpsell;
}

export type {
  HeroBlock,
  MarketingProgram,
  MarketingProgramGroup,
  ModularBlock,
  ProductUpsell,
};
