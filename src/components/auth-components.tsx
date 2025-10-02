import { signIn, signOut } from "@/lib/auth"
import { Button } from "./ui/button"

export function SignIn({
  provider,
  children = "Sign In",
  ...props
}: { provider?: string } & React.ComponentPropsWithRef<typeof Button>) {
  return (
    <form
      action={async () => {
        "use server"
        await signIn(provider)
      }}
    >
      <Button size="sm" {...props}>{children}</Button>
    </form>
  )
}

export function SignOut(props: React.ComponentPropsWithRef<typeof Button>) {
  return (
    <form
      action={async () => {
        "use server"
        await signOut()
      }}
      className="w-full"
    >
      <Button size="sm" variant="ghost" className="w-full" {...props}>
        Sign Out
      </Button>
    </form>
  )
}