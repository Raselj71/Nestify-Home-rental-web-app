'use client'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { useActionState } from "react"
import { SignupAction } from "@/action"

export function SignupForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {

   const[state,formAction,isPending]= useActionState(SignupAction, undefined)
  

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Signup</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form action={formAction}>
            <div className="flex flex-col gap-6">
            <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  type="name"
                  placeholder="rasel "
                  required
                  name="name"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  name="email"
                />
              </div>
              {state?.errors?.email && <p className="text-xs text-red-500">{state.errors.email}</p>}
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                   
                </div>
                <Input id="password" type="password" name="password" required />
                {state?.errors?.password && <p className="text-xs text-red-500">{state.errors.password}</p>}
                {state?.message && <p className="text-xs text-red-500">{state.message}</p>}
              </div>
              <Button type="submit" className="w-full bg-green-700">
                {isPending? "Loading..." :"Signup"}
              </Button>
            
            </div>
            <div className="mt-4 text-center text-sm">
              Already have an account?{" "}
              <Link className="underline underline-offset-4" href={'/auth/login'}> Login</Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
