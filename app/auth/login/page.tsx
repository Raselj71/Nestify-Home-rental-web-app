import { LoginForm } from "@/components/login-form"
import Link from "next/link"
import Image from "next/image"
import nestify from '@/public/nestify.png'

export default function Page() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <div className="mb-4 flex justify-center">
           <Link href={"/"}>
            <Image src={nestify} width={200} height={100} alt="Nestify"/>
           </Link>
        </div>
        <LoginForm />
      </div>
    </div>
  )
}
