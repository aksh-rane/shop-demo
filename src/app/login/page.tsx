// import SignIn from "../home/_layout/SignIn";
"use client";
import { signIn, useSession } from "next-auth/react"
import {googleBoxIcon} from "@progress/kendo-svg-icons";
import { Button } from "@progress/kendo-react-buttons";
import { useRouter } from "next/navigation";

export default function LoginPage() {

  const session = useSession();
  const router = useRouter();

  if (session.status === "authenticated") {
    router.push("/home");
  }
  return (
    <main>
      <h1>Login</h1>
      <p>Please log in to access this page.</p>
      <Button onClick={() => signIn("google")} svgIcon={googleBoxIcon} fillMode="flat" type="button">
            Sign in with Google
          </Button>
    </main>
  )
}