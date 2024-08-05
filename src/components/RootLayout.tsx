'use client';

import Link from 'next/link';

import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import { Footer } from '@/components/Footer';
import { GridPattern } from '@/components/GridPattern';
import Logo from './Logo';

function Header() {
  return (
    <Container>
      <div className="flex items-center justify-between">
        <Link href="/" aria-label="Home">
          <Logo />
        </Link>
        <Button href="/contact">Contact us</Button>
      </div>
    </Container>
  );
}

export function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-brand-200">
      <header className="absolute left-0 right-0 top-16 z-40">
        <Header />
      </header>

      <div
        style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}
        className="relative flex flex-auto overflow-hidden bg-brand-800"
      >
        <div className="relative isolate flex w-full flex-col pt-9">
          <GridPattern
            className="absolute inset-x-0 -top-14 -z-10 h-[1000px] w-full fill-brand-700 stroke-brand-50/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
            yOffset={-96}
            interactive
          />

          <main className="w-full flex-auto">{children}</main>

          <Footer />
        </div>
      </div>
    </div>
  );
}
