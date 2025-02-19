'use client';

import { useEffect } from 'react';

import { usePersonalize } from './context/PersonalizeContext';

export const Impressions = ({ experienceShortUids }: { experienceShortUids: string[] }) => {
  const personalizeSdk = usePersonalize();
  useEffect(() => {
    async function runEffect() {
      experienceShortUids
        .forEach(async (experienceShortUid) => {
          await personalizeSdk?.triggerImpression(experienceShortUid);
        });
    }
    runEffect();
  }, [personalizeSdk]);

  return <></>;
}