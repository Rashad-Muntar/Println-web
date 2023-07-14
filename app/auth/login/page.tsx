// import Login from "@/app/components/auth/login";

import { useRouter } from 'next/navigation'
import Login from '@/src/components/auth/login';

const Page = async () => {
  
  return (
    <div className="overflow-hiden h-full">
      <Login />
    </div>
  );
};

export default Page;