'use server';

import { refreshCookiesWithIdToken } from 'next-firebase-auth-edge/lib/next/cookies';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { cookies, headers } from 'next/headers';
import { redirect } from 'next/navigation';
import { getFirebaseAuth } from '../auth/firebase';
import { authConfig } from '@/lib/config';

// See starter example for implementation: https://github.com/awinogrodzki/next-firebase-auth-edge/tree/main/examples/next-typescript-starter


export async function loginAction(username: string, password: string) {
  const credential = await signInWithEmailAndPassword(
    getFirebaseAuth(),
    username,
    password
  );

  const idToken = await credential.user.getIdToken();

  // Since Next.js 15, `headers` and `cookies` functions return a Promise, hence we precede the calls with `await`.
  await refreshCookiesWithIdToken(
    idToken,
    await headers(),
    await cookies(),
    authConfig
  );
  redirect('/');
}