import { createContext } from 'react';

import Personalize from '@contentstack/personalize-edge-sdk';

Personalize.setEdgeApiUrl(process.env.NEXT_PUBLIC_CONTENTSTACK_PERSONALIZE_EDGE_API_URL as string);
Personalize.init(process.env.NEXT_PUBLIC_CONTENTSTACK_PERSONALIZE_PROJECT_UID as string);

export const PersonalizeContext = createContext(Personalize);