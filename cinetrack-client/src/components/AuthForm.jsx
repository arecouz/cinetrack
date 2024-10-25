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

const AuthForm = () => {
  return (
    <div className="border-9 flex items-center justify-center h-screen">
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
            <CardContent>
              <LogIn />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="signUp">
          <Card>
            <CardHeader>
              <CardTitle>sign up</CardTitle>
            </CardHeader>
            <CardContent>
              <SignUp />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AuthForm;
