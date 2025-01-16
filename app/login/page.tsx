import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import AuthButtons from "@/components/AuthButtons";

const Login = () => {
  return (
    <div className="h-[60vh] mx-auto flex items-center justify-center">
      <div className="">
        <div className="flex flex-col space-y-2 text-center my-4">
          <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">Welcome to Envoice!</h1>
          <p className="text-sm text-muted-foreground">
            Sign in to your account to continue
          </p>
        </div>
        <Card className="max-w-md mx-auto">
          <CardHeader>
            <CardTitle>Choose a sign in method</CardTitle>
            <CardDescription>
              Use your Google or GitHub account to continue
            </CardDescription>
          </CardHeader>
          <CardContent>
            <AuthButtons />
          </CardContent>
        </Card></div>
    </div>
  );
};

export default Login;
