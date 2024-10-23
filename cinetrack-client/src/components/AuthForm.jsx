import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import LogIn from './Login';

const AuthForm = () => {
  return (
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
            <LogIn />
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export default AuthForm;
