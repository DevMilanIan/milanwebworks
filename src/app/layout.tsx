import { RootLayout } from '@/components/RootLayout';
import { type Metadata } from 'next';
import Head from 'next/head';

import '@/styles/tailwind.css';

export const metadata: Metadata = {
  title: {
    template: '%s | Milan Webworks',
    default: 'Milan Webworks | Online Presence',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full bg-brand-700 text-base antialiased">
      <Head>
        <link rel="icon" type="image/png" sizes="192x192" href="/icons/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/icons/android-chrome-512x512.png" />
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
        <link rel="icon" href="/icons/favicon.ico" type="image/x-icon" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <body className="flex min-h-full flex-col">
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  );
}
