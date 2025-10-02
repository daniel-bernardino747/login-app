import LoginForm from "./LoginForm";

export default function SignInPage() {
  return (
    <div className="w-full h-full py-6 px-1">
      <h1 className="text-2xl font-bold">Sign In Page</h1>
    <p>
          Please sign in to access the application.
        </p>
      <LoginForm />
    </div>
  );
}