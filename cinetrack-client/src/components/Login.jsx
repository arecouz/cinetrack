'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const LogIn = () => {
  // Updated schema to include password
  const formSchema = z.object({
    username: z
      .string()
      .min(1, {
        message: 'Username is required.',
      })
      .max(20, {
        message: 'Username cannot exceed 20 characters.',
      }),
    password: z
      .string()
      .min(6, {
        message: 'Password must be at least 6 characters.',
      })
      .max(50, {
        message: 'Password cannot exceed 50 characters.',
      }),
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      password: '',
    },
  });

  const onSubmit = (values) => {
    console.log(values);
    // Add your login logic here
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col space-y-2 w-full"
      >
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <div className="space-y-1">
                <FormLabel>username</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    // placeholder="Enter username"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </div>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className=''>
              <div className="space-y-1">
                <FormLabel>password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    // placeholder="Enter password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </div>
            </FormItem>
          )}
        />
        <p></p>
        <Button className='mt-4' type="submit">Login</Button>
      </form>
    </Form>
  );
};

export default LogIn;
