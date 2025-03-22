'use client';

import { SessionProvider } from 'next-auth/react';
import { ReactNode } from 'react';

type SessionProviderWrapperProps = { children: ReactNode };

const SessionProviderWrapper = ({ children }: SessionProviderWrapperProps) => (
  <SessionProvider>{children}</SessionProvider>
);

export default SessionProviderWrapper;
