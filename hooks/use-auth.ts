import { prisma } from "@/config/Prisma";
import { createClient } from "@/utils/supabase/client";
import { User } from "@supabase/supabase-js";
import { useQuery } from "@tanstack/react-query";

type MergedUser = User ;

export function useAuth() {
  const supabase = createClient();

  const { data: user, isLoading } = useQuery<MergedUser | null>({
    queryKey: ["auth-user"],
    queryFn: async () => {
      const { data: authData, error: authError } =
        await supabase.auth.getUser();

        console.log("authUser:", authData)

      if (authError || !authData.user) {
        return null;
      }
     
    

      
      return { ...authData.user };
    },
  });

  return { user, loading: isLoading };
}
