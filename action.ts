'use server'

import { redirect } from "next/navigation"
import { FormState, SignupFormSchema } from "./lib/Schema"
import { supabaseServerClient } from "./utils/supabase/ServerClient"

export const loginAction=async(state: FormState, formData: FormData)=>{
   const supabase= await supabaseServerClient()
    const email=formData.get('email') as string
    const password=formData.get('password') as string

    const validatedFields = SignupFormSchema.safeParse({
    
        email,
        password
      })
     
      // If any form fields are invalid, return early
      if (!validatedFields.success) {
        return {
          errors: validatedFields.error.flatten().fieldErrors,
        }
      }

      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })
      
      if(error){
        return{
          message: error.message
        }
      }

      redirect('/')
      

}