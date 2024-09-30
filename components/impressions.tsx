'use client';

import {
  useContext,
  useEffect,
} from 'react';

import { PersonalizeContext } from './context/PersonalizeContext';

export const Impressions = ({ experienceShortUids }: { experienceShortUids: string[] }) => {
  const Personalize = useContext(PersonalizeContext);
  useEffect(() => {
    async function runEffect() {
      experienceShortUids
        .forEach(async (experienceShortUid) => {
          await Personalize.triggerImpression(experienceShortUid);
        });
    }
    runEffect();
  }, []);

  return <></>;
}