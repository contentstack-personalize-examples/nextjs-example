import Navbar from '@/components/navbar';
import { extractNavbarProps } from '@/helpers/extractHomepageProps';
import { getEntries } from '@/helpers/getEntries';
import Personalize from '@contentstack/personalize-edge-sdk';

interface Article {
  title: string;
  description: string;
  content: string;
}

const ArticlePage = async ({
  params,
  searchParams,
}: {
  params: { articleId: string };
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

  let articleId = params.articleId;
  let articleEntry: Article = (await getEntries(
    process.env.NEXT_PUBLIC_CONTENTSTACK_ARTICLE_CONTENTTYPE_UID as string,
    { articleid: articleId },
    variantParam,
  ))?.at(0) as Article;

  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar navLinks={navbarProps} />
      <div className='container flex-grow max-w-[800px] mx-auto py-10'>
        <h2 className='text-3xl font-bold mb-8'>{articleEntry.title}</h2>
        <div className=''>
          {articleEntry.content.split('\n\n').map((paragraph, index) => (
            <p key={index} className='mt-6'>
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;
