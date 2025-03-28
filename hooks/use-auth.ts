import { prisma } from "@/config/Prisma";
import { supabaseBrowserClient } from "@/utils/supabase/client";
import { useQuery } from "@tanstack/react-query";
import React from "react";

 function useAuth() {
  const supabase = supabaseBrowserClient();
  const {data,isLoading} = useQuery({
    queryKey: ["auth-data"],
    queryFn: async () => {
      

      const{data:authData,error:AuthError}=   await supabase.auth.getUser()

     

      if(AuthError){
        return null
      }

      console.log('supabase auth user:',authData)

      const {data:User,error}=await supabase.from('Users').select().eq('email',authData.user.email).single()

      console.log("prisma User:",User)

      
      if(!User || error){
        return null
      }

      return{...authData,...User}
    },
  });

  return{
    data, loading:isLoading

  }
}

export default useAuth;
