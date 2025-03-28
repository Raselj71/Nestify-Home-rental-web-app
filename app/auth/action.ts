'use server'

import { redirect } from "next/navigation"
import { LoginFormState, LoginFormSchema, SingupFormState, SignupFormSchema } from "../../lib/Schema"
import { supabaseServerClient } from "../../utils/supabase/ServerClient"
import { prisma } from "../../config/Prisma"
import { revalidatePath } from "next/cache"

export const LoginAction=async(state: LoginFormState, formData: FormData)=>{
   const supabase= await supabaseServerClient()
    const email=formData.get('email') as string
    const password=formData.get('password') as string

    const validatedFields = LoginFormSchema.safeParse({
    
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

export const SignupAction=async(state: SingupFormState, formData: FormData)=>{
  const supabase= await supabaseServerClient()
   const email=formData.get('email') as string
   const password=formData.get('password') as string
   const name= formData.get('name') as string

   const validatedFields = SignupFormSchema.safeParse({
       name,
       email,
       password
     })
    
     // If any form fields are invalid, return early
     if (!validatedFields.success) {
       return {
         errors: validatedFields.error.flatten().fieldErrors,
       }
     }

     const {data:{user:supaUser},error}=await supabase.auth.signUp({email,password})
     console.log(supaUser)
     if(error){
      return {
        message:error.message
      }
     }

    if(supaUser){
      const User= await prisma.users.create({
        data:{
          id:supaUser.id,
          email,
          fullName:name
        }
       })
    }

    redirect('/auth/login')

     

}

export const logout=async()=>{

  const supabase=await supabaseServerClient()
  const {error}=await supabase.auth.signOut()
  if(error){
    throw new Error(error.message)
  }
  revalidatePath('/','page')
  redirect('/auth/login')

}