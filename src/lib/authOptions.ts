import GoogleProvider from 'next-auth/providers/google';
import { NextAuthOptions } from 'next-auth';
import { JWT } from 'next-auth/jwt';

const GOOGLE_TOKEN_ENDPOINT = 'https://oauth2.googleapis.com/token';

async function refreshAccessToken(token: JWT) {
  try {
    const res = await fetch(GOOGLE_TOKEN_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        client_id: process.env.GOOGLE_CLIENT_ID!,
        client_secret: process.env.GOOGLE_CLIENT_SECRET!,
        grant_type: 'refresh_token',
        refresh_token: token.refreshToken as string,
      }),
    });

    const refreshedTokens = await res.json();

    if (!res.ok) throw refreshedTokens;

    return {
      ...token,
      accessToken: refreshedTokens.access_token,
      accessTokenExpires: Date.now() + refreshedTokens.expires_in * 1000,
      refreshToken: refreshedTokens.refresh_token ?? token.refreshToken,
    };
  } catch (error) {
    console.error('Error refreshing access token:', error);
    return { ...token, error: 'RefreshAccessTokenError' };
  }
}

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      authorization: {
        params: {
          scope: 'https://www.googleapis.com/auth/calendar.events openid email profile',
          access_type: 'offline',
          prompt: 'consent',
        },
      },
    }),
  ],
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        return {
          ...token,
          accessToken: account.access_token,
          accessTokenExpires: Date.now() + ((account.expires_in as number) || 3600) * 1000,
          refreshToken: account.refresh_token ?? token.refreshToken,
        };
      }

      if (Date.now() < (token.accessTokenExpires as number)) {
        return token;
      }

      if (Date.now() < (token.accessTokenExpires as number)) {
        console.log('ACCESS TOKEN STILL VALID');
        return token;
      }

      console.log('ACCESS TOKEN EXPIRED, REFRESHING');

      return await refreshAccessToken(token);
    },

    async session({ session, token }) {
      session.accessToken = token.accessToken;
      session.refreshToken = token.refreshToken;
      session.error = token.error;
      return session;
    },
  },
};
