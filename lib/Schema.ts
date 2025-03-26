import { z } from "zod";

export const LoginFormSchema = z.object({
 
  email: z.string().email({ message: "Please enter a valid email." }).trim(),
  password: z
    .string({message:'Please enter your password'})
    .trim(),
});


export const SignupFormSchema = z.object({
  name:z.string({message:'Please enter your name'}).trim(),
  email: z.string().email({ message: "Please enter a valid email." }).trim(),
  password: z
    .string()
    .min(5, { message: "Be at least 5 characters long" })
   
    .trim(),
});

export type LoginFormState =
  | {
      errors?: {
        email?: string[];
        password?: string[];
      };
      message?: string;
    }
  | undefined;

  export type SingupFormState =
  | {
      errors?: {
        name?: string[];
        email?: string[];
        password?: string[];
      };
      message?: string;
    }
  | undefined;  
