
"use client"

import { signIn } from "next-auth/react"
import {googleBoxIcon} from "@progress/kendo-svg-icons";
import { Button } from "@progress/kendo-react-buttons";
 
export default function SignIn() {
  return (
    <Button onClick={() => signIn("google")} svgIcon={googleBoxIcon} fillMode="flat" type="button">
      Sign in with Google
    </Button>
  )
}
