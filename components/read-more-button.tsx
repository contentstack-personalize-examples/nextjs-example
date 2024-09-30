'use client';

import { useContext } from 'react';

import { PersonalizeContext } from './context/PersonalizeContext';
import { InfoCardButton } from './info-card';

export const ReadMoreButton = ({ title }: { title: string }) => {
  const Personalize = useContext(PersonalizeContext);

  const handleOnClick = async () => {
    await Personalize.triggerEvent('readMoreButtonClick');
  };

  return (
    <InfoCardButton id="read-more" onClick={handleOnClick}>
      {title}
    </InfoCardButton>
  );
}