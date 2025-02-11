import { createContext, useContext } from 'react';
import { UserInfo } from 'firebase/auth';
import { Claims } from 'next-firebase-auth-edge/lib/auth/claims';

export interface AuthUser extends UserInfo {
  emailVerified: boolean;
  customClaims: Claims;
}

export interface AuthContextValue {
  user: AuthUser | null;
}

export const AuthContext = createContext<AuthContextValue>({
  user: null
});

export const useAuth = () => useContext(AuthContext);