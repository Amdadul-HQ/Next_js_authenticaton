import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import Image from "next/image";

const DashboardPage = async () => {
  const session = await getServerSession(authOptions);

  return (
    <div>
      {
        session?.user && (<>
        <h1 className="text-4xl text-center mt-10">Welcome To {session?.user?.name}</h1>
        <p>Log in user email {session?.user?.email}</p>
        <div>
          <Image alt={session?.user?.name || 'profile'} width={100} height={100} className="mx-auto rounded-full" src={session?.user?.image}/>
        </div>
        </>)
      }
    </div>
  );
};

export default DashboardPage;
