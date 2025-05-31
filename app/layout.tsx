import './globals.css';

import type { Metadata } from 'next';
import { getServerSession } from 'next-auth';
import { Inter } from 'next/font/google';

import LyticsProvider from '@/components/context/LyticsProvider';
import { PersonalizeProvider } from '@/components/context/PersonalizeContext';
import SessionProvider from '@/components/providers/SessionProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Personalize Demo',
  description: 'Powered by Personalize',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession();

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <PersonalizeProvider>
          <LyticsProvider>
            <SessionProvider session={session}>{children}</SessionProvider>
          </LyticsProvider>
        </PersonalizeProvider>
      </body>
    </html>
  );
}
