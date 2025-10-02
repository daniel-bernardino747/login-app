import { SignIn, SignOut } from "@/components/auth-components";
import { auth } from "@/lib/auth";

export async function Header() {
  const session = await auth();
  console.log(session);
  return (
    <header className="text-gray-950 w-full h-12 p-1 text-center border-b border-gray-900 inline-flex justify-between items-center">
      <h1 className="text-xl font-bold">My Login App</h1>
        {!!session?.user?.name ? (
      <div className="flex gap-4 items-center">
          <span className="whitespace-nowrap">{session?.user?.name}</span>
          <SignOut />
          
      </div>
        ) : (
<SignIn />
        )}
    </header>
  );
}