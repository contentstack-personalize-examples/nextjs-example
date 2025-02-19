'use client';

import { usePersonalize } from './context/PersonalizeContext';
import { InfoCardButton } from './info-card';

export const ReadMoreButton = ({ title }: { title: string }) => {
  const personalizeSdk = usePersonalize();

  const handleOnClick = async () => {
    await personalizeSdk?.triggerEvent('readMoreButtonClick');
  };

  return (
    <InfoCardButton id="read-more" onClick={handleOnClick}>
      {title}
    </InfoCardButton>
  );
}