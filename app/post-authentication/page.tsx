'use client';

import {
  useContext,
  useEffect,
} from 'react';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import { PersonalizeContext } from '@/components/context/PersonalizeContext';

function PostAuthentication() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const Personalize = useContext(PersonalizeContext);

  useEffect(() => {
    async function runEffect() {
      if (status === 'authenticated') {
        if (session.user?.email !== Personalize.getUserId()) {
          await Personalize.setUserId(session.user?.email as string, {
            preserveUserAttributes: true,
          });
        }
      } else {
        localStorage.removeItem('isSubscribed');
        Personalize.reset();
      }
    }

    runEffect();
    setTimeout(() => {
      router.push('/');
    }, 1000);
  }, [status, session]);

  return (
    <div>
      Redirecting back to home page...
    </div>
  );
}

export default PostAuthentication;
