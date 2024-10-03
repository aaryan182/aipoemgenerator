import { SignIn } from "@clerk/nextjs";
import Image from "next/image";

export default function Page() {
  return (
    <div className="grid gird-cols-1 md:grid-cols-2">
      <div>
        <Image src={"/login.webp"} alt="login logo" width={200} height={200} />
      </div>
      <div className="flex justify-center items-center h-screen order-first md:order-last">
        <SignIn />
      </div>
    </div>
  );
}
