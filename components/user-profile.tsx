'use client';

import {
  signIn,
  signOut,
  useSession,
} from 'next-auth/react';

const Profile = () => {
  const { status, data } = useSession();

  if (status === 'authenticated') {
    return (
      <button id='sign-out'
        className='text-sm bg-slate-900 text-background font-semibold px-3 py-2 rounded-lg'
        onClick={async () => {
          await signOut({ callbackUrl: '/post-authentication' });
        }}
      >
        Logout
      </button>
    );
  }

  return (
    <button
      className='text-sm bg-slate-900 text-background font-semibold px-3 py-2 rounded-lg'
      onClick={() => {
        signIn(undefined, { callbackUrl: '/post-authentication' })
      }
      }
    >
      Login
    </button>
  );
};

export default Profile;
