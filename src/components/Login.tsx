'use client';

import { signIn, signOut, useSession } from 'next-auth/react';

export default function LoginButton() {
  const { data: session } = useSession();

  return session ? (
    <div>
      <p className="mt-4">Welcome, {session.user?.name}!</p>
      <button
        className="mt-4 rounded bg-orange-500 px-4 py-2 text-white"
        onClick={() => signOut()}
      >
        Sign out
      </button>
    </div>
  ) : (
    <button onClick={() => signIn('google')}>Sign in with Google</button>
  );
}
