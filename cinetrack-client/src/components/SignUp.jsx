'use client';
import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { FormInput } from './ui/formInput';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import usersServices from '@/services/users';
import { useNavigate } from 'react-router-dom';

const SignUp = ({ setUser }) => {
  const navigate = useNavigate();
  const [error, setError] = useState(''); // State for independent error message
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

  const onSubmit = async (values) => {
    try {
      await usersServices.addUser(values);

      console.log('logging in with: ', values);
      const response = await usersServices.login(values);
      console.log(response);
      window.localStorage.setItem('user', JSON.stringify(response));
      navigate('/search');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col space-y-2"
      >
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <div className="space-y-1">
                <FormLabel>username</FormLabel>
                <FormControl>
                  <FormInput
                    type="text"
                    // placeholder="Enter username"
                    {...field}
                    autoComplete="current-username"
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
            <FormItem className="">
              <div className="space-y-1">
                <FormLabel>password</FormLabel>
                <FormControl>
                  <FormInput
                    type="password"
                    // placeholder="Enter password"
                    {...field}
                    autoComplete="current-password"
                  />
                </FormControl>
                <FormMessage />
              </div>
            </FormItem>
          )}
        />
        {error && <div className="text-red-500 text-sm">{error}</div>}
        <Button className="mt-4" type="submit">
          Sign up!
        </Button>
      </form>
    </Form>
  );
};

export default SignUp;
