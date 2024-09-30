import Footer from '@/components/footer';
import GridComponent from '@/components/grid-component';
import { Impressions } from '@/components/impressions';
import Navbar from '@/components/navbar';
import {
  extractFooterProps,
  extractGridComponentProps,
  extractNavbarProps,
} from '@/helpers/extractHomepageProps';
import { getEntries } from '@/helpers/getEntries';
import Personalize from '@contentstack/personalize-edge-sdk';

const Page = async ({
  searchParams,
}: {
  searchParams: Record<string, string>;
}) => {
  let variantParam = decodeURIComponent(
    searchParams[Personalize.VARIANT_QUERY_PARAM]
  );

  let [homepageEntry] = await getEntries(
    process.env.NEXT_PUBLIC_CONTENTSTACK_HOMEPAGE_CONTENTTYPE_UID as string,
    {},
    variantParam,
  ) as any[];
  let navbarProps = extractNavbarProps(homepageEntry);
  let footerProps = extractFooterProps(homepageEntry);
  let gridComponentProps = extractGridComponentProps(homepageEntry);
  const experienceShortUids = (process.env.NEXT_PUBLIC_CONTENTSTACK_HOMEPAGE_EXPERIENCES as string)
    .split(',');

  return (
    <>
      <Impressions experienceShortUids={experienceShortUids} />
      <Navbar navLinks={navbarProps} />
      <div className='container flex-grow py-4 flex flex-col'>
        <GridComponent modularBlocks={gridComponentProps} />
      </div>
      <Footer footerText={footerProps} />
    </>
  );
};

export default Page;
