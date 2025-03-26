'use server'

import { FormState, SignupFormSchema } from "./lib/Schema"

export const loginAction=async(state: FormState, formData: FormData)=>{

    const validatedFields = SignupFormSchema.safeParse({
    
        email: formData.get('email'),
        password: formData.get('password'),
      })
     
      // If any form fields are invalid, return early
      if (!validatedFields.success) {
        return {
          errors: validatedFields.error.flatten().fieldErrors,
        }
      }

}