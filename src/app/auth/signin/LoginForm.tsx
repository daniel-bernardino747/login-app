import { SignIn } from "@/components/auth-components";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function AccountsSection() {
  return (
    <Card className="flex flex-col gap-2 p-2 py-4 pt-3 bg-gray-100 rounded-sm w-full">
      <p className="text-sm text-gray-600">
        Choose a social login provider.
      </p>
      <div className="inline-flex gap-2">
      <SignIn provider="github">
        Sign in with GitHub
      </SignIn> 
      <SignIn provider="google" className="bg-[#E44331]">
        Sign in with Google
      </SignIn> 
      </div>
  </Card>
  )
}

function CredentialsSection() {
  return (
    <Card className="flex flex-col gap-2 p-2 py-4 bg-gray-100 rounded-sm w-full">
      <Label htmlFor="email">
        Email
      </Label>
      <Input 
        type="email"
        id="email"
        name="email"
        aria-label="Email"
        placeholder="Enter your email"
      />
<p id="email-description" className="sr-only">
              Enter the email address associated with your account.
            </p>

            <Label htmlFor="password">
        Password
      </Label>
      <Input 
        type="password"
        id="password"
        name="password"
        aria-label="Password"
        placeholder="Enter your password"
      />
<p id="password-description" className="sr-only">
              Enter the password associated with your account.
            </p>
    </Card>
  )
}

export default function LoginForm() {
  return (
    <div className="flex flex-col items-start gap-4 mt-2 w-full md:w-1/2">
      <AccountsSection />
      <CredentialsSection />
      <Button className="w-full md:w-1/3" size="sm">Sign in</Button>
    </div>
  )
}