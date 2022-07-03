import Image from "next/image";
import { signIn, getSession } from "next-auth/react";

const Login = () => {
  return (
    <div className="grid place-items-center">
      {" "}
      <Image
        src="https://links.papareact.com/t4i"
        alt="Facebook logo"
        height={400}
        width={400}
        objectFit="contain"
      />
      <button
        onClick={signIn}
        className="p-5 bg-blue-500 rounded-full text-white text-center cursor-pointer"
      >
        Login with Facebook
      </button>
    </div>
  );
};

export default Login;
