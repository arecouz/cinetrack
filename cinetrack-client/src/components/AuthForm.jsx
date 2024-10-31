import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import LogIn from './Login';
import SignUp from './SignUp';

const AuthForm = (setUser) => {
  return (
    <div className="flex items-center justify-center h-screen flex-col">
      <div>
        <div className="font-bebas text-8xl">cinetrack</div>
      </div>

      <br></br>
      <Tabs defaultValue="logIn">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="logIn">log in</TabsTrigger>
          <TabsTrigger value="signUp">sign up</TabsTrigger>
        </TabsList>
        <TabsContent value="logIn">
          <Card>
            <CardHeader>
              <CardTitle>Log in</CardTitle>
            </CardHeader>
            <CardContent className="mr-8 ml-8">
              <LogIn setUser={setUser} />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="signUp">
          <Card>
            <CardHeader>
              <CardTitle>sign up</CardTitle>
            </CardHeader>
            <CardContent className="mr-8 ml-8">
              <SignUp setUser={setUser} />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AuthForm;
