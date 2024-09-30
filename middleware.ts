import {
  NextRequest,
  NextResponse,
} from 'next/server';

import Personalize from '@contentstack/personalize-edge-sdk';

export default async function middleware(req: NextRequest) {
  const projectUid = process.env.NEXT_PUBLIC_CONTENTSTACK_PERSONALIZE_PROJECT_UID as string;

  if (process.env.NEXT_PUBLIC_CONTENTSTACK_PERSONALIZE_EDGE_API_URL) {
    Personalize.setEdgeApiUrl(process.env.NEXT_PUBLIC_CONTENTSTACK_PERSONALIZE_EDGE_API_URL);
  }

  Personalize.reset();
  await Personalize.init(projectUid, {
    request: req,
  });

  const variantParam = Personalize.getVariantParam();
  const parsedUrl = new URL(req.url);
  parsedUrl.searchParams.set(Personalize.VARIANT_QUERY_PARAM, variantParam);

  const response = NextResponse.rewrite(parsedUrl);

  await Personalize.addStateToResponse(response);

  return response;
}
