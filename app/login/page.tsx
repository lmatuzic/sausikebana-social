"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const { data: session } = useSession();

  const handleSignOut = async () => {
    await signOut({ redirect: false });
    router.push("/");
  };

  return (
    <div>
      {session ? (
        <>
          <button type="button" onClick={handleSignOut}>
            Sign out of Google
          </button>

          <div>
            <div>User Info:</div>
            <div>{session.user?.name}</div>
            <div>{session.user?.email}</div>
          </div>
        </>
      ) : (
        <button type="button" onClick={() => signIn()}>
          Sign in with Google
        </button>
      )}
    </div>
  );
}
