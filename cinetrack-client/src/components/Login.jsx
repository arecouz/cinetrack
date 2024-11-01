import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { useState } from 'react'; // Import useState to manage independent error messages
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { FormInput } from './ui/FormInput';
import usersServices from '@/services/users';

const LogIn = ({ setUser }) => {
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
      .min(1, {
        message: 'Password is required.',
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
    console.log(values);
    setError(''); // Clear any existing error
    try {
      console.log('logging in with: ', values);
      const response = await usersServices.login(values);
      setUser(response)
      window.localStorage.setItem('user', JSON.stringify(response));
    } catch (error) {
      console.error(error);
      if (error.response.data.error) {
        setError(error.response.data.error);
      } else {
        setError('An error occurred. Please try again later.');
      }
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
              <div className="space-y-1 ">
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <FormInput
                    type="text"
                    {...field}
                    autoComplete="current-username"
                  />
                </FormControl>
                <FormMessage>
                  {form.formState.errors.username?.message}
                </FormMessage>
              </div>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <div className="space-y-1">
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <FormInput
                    type="password"
                    {...field}
                    autoComplete="current-password"
                  />
                </FormControl>
                <FormMessage>
                  {form.formState.errors.password?.message}
                </FormMessage>
              </div>
            </FormItem>
          )}
        />

        {error && <div className="text-red-500 text-sm">{error}</div>}

        <Button className="mt-4" type="submit">
          Log In
        </Button>
      </form>
    </Form>
  );
};

export default LogIn;
