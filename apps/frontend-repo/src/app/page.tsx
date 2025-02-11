import { getTokens, Tokens } from "next-firebase-auth-edge";
import { cookies } from "next/headers";
import { authConfig } from "@/lib/config";
import { notFound } from "next/navigation";
import UserDetail from "@/components/UserDetail";
import { AuthUser } from "./auth/AuthContext";
import { filterStandardClaims } from "next-firebase-auth-edge/auth/claims";
import { AuthProvider } from "./auth/AuthProvider";

export const metadata = {
  title: "FireTurbo | Template",
};

const toUser = ({ decodedToken }: Tokens): AuthUser => {
  const {
    uid,
    email,
    picture: photoURL,
    email_verified: emailVerified,
    phone_number: phoneNumber,
    name: displayName,
    source_sign_in_provider: signInProvider,
  } = decodedToken;

  const customClaims = filterStandardClaims(decodedToken);

  return {
    uid,
    email: email ?? null,
    displayName: displayName ?? null,
    photoURL: photoURL ?? null,
    phoneNumber: phoneNumber ?? null,
    emailVerified: emailVerified ?? false,
    providerId: signInProvider,
    customClaims,
  };
};

export default async function Home() {
  const tokens = await getTokens(await cookies(), authConfig);

  if (!tokens) {
    notFound();
  }

  const authUser = toUser(tokens)

  return (
    <div className="container">
      <AuthProvider user={authUser} >
        <UserDetail />
      </AuthProvider>
    </div>
  );
}
