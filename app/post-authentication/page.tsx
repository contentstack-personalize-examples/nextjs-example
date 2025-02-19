'use client';

import { useEffect } from 'react';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import { usePersonalize } from '@/components/context/PersonalizeContext';

function PostAuthentication() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const personalizeSdk = usePersonalize();

  useEffect(() => {
    async function runEffect() {
      if (status === 'authenticated' && !!personalizeSdk) {
        if (session.user?.email !== personalizeSdk?.getUserId()) {
          await personalizeSdk?.setUserId(session.user?.email as string, {
            preserveUserAttributes: true,
          });
        }
      } else {
        localStorage.removeItem('isSubscribed');
      }
    }

    runEffect();
    setTimeout(() => {
      router.push('/');
    }, 1000);
  }, [status, session, personalizeSdk]);

  return (
    <div>
      Redirecting back to home page...
    </div>
  );
}

export default PostAuthentication;
