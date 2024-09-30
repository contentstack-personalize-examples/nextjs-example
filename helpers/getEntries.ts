import { cache } from 'react';

import contentstack from '@contentstack/delivery-sdk';
import Personalize from '@contentstack/personalize-edge-sdk';

const _getEntries = async (contentType: string, query: Record<string, any>, variantParam?: string | undefined) => {
  if (!process.env.NEXT_PUBLIC_CONTENTSTACK_API_KEY) {
    throw Error('CONTENTSTACK_API_KEY is missing');
  }

  if (!process.env.NEXT_PUBLIC_CONTENTSTACK_DELIVERY_TOKEN) {
    throw Error('CONTENTSTACK_DELIVERY_TOKEN is missing');
  }

  if (!process.env.NEXT_PUBLIC_CONTENTSTACK_ENVIRONMENT) {
    throw Error('CONTENTSTACK_DELIVERY_TOKEN is missing');
  }

  if (!process.env.NEXT_PUBLIC_CONTENTSTACK_HOMEPAGE_CONTENTTYPE_UID) {
    throw Error('CONTENTSTACK_HOMEPAGE_CONTENTTYPE_UID is missing');
  }

  try {
    const stack = contentstack.stack({
      apiKey: process.env.NEXT_PUBLIC_CONTENTSTACK_API_KEY,
      deliveryToken: process.env.NEXT_PUBLIC_CONTENTSTACK_DELIVERY_TOKEN,
      environment: process.env.NEXT_PUBLIC_CONTENTSTACK_ENVIRONMENT,
      host: process.env.CONTENTSTACK_DELIVERY_API_HOST,
    });
    const entriesCall = stack
      .contentType(contentType)
      .entry()

    let entries;
    if (variantParam) {
      const variantAlias = Personalize.variantParamToVariantAliases(variantParam).join(',');
      entries = await entriesCall.variants(variantAlias).query(query).find();
    } else {
      entries = await entriesCall.query(query).find();
    }

    return entries.entries;
  } catch (error) {
    throw error;
  }
};

export const getEntries = cache(_getEntries);
