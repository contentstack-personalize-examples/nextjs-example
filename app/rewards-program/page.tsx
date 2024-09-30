import Navbar from '@/components/navbar';
import { extractNavbarProps } from '@/helpers/extractHomepageProps';
import { getEntries } from '@/helpers/getEntries';

import { PageContent } from './page-content';

const SubscriptionCardEntry = async () => {
  let [homepageEntry] = await getEntries(
    process.env.NEXT_PUBLIC_CONTENTSTACK_HOMEPAGE_CONTENTTYPE_UID as string,
    {},
  ) as any[];
  let navbarProps = extractNavbarProps(homepageEntry);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar navLinks={navbarProps} />
      <PageContent></PageContent>
    </div>
  );
};

export default SubscriptionCardEntry;
