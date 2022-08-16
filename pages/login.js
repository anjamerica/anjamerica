import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useState } from "react";
import Loader from "../components/layout/Loader";
import { useAuth } from "../hooks/useAuth";
import { useAuthPageHook } from "../hooks/useRequireAuth";

export default function Login() {
  //form states
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [formError, setFormError] = useState("");
  let [loginLoading, setLoginLoading] = useState(false);

  // router
  let router = useRouter();

  // auth context
  const { login } = useAuth();

  async function handleLogin(e) {
    e.preventDefault();
    if (!email || !password) {
      return setFormError("fileds could not be empty!");
    }
    setFormError("");
    try {
      setLoginLoading(true);
      let response = await login(email, password);

      // setLoginLoading(false)
      if (response.status === 200) {
        router.push("/home");
      }
    } catch (e) {
      setLoginLoading(false);
      let { response } = e;
      if (e?.response?.data?.status == 401) setFormError("Admin not found");
      console.log();
    }
  }

  console.log(formError);
  return (
    <div className="h-screen w-full bg-white flex flex-col justify-center items-center">
      <div className="login-page text-primary-blue text-[1.4rem] font-thin tracking-wide	 uppercase">
        WELCOME
      </div>
      <div>
        <img
          alt="logo image"
          src="/assets/landing/anj_logo.svg"
          className="w-[10rem] my-8  xl:h-fit xl:w-[10rem] object-contain"
        />
      </div>
      <div className="w-[85%] md:w-[25%]">
        <form onSubmit={handleLogin}>
          <div className="login-input flex">
            <img
              alt="user icon"
              className="w-[20px] h-[20px]"
              src="/assets/landing/user_login.svg"
            />
            <input
              type="text"
              placeholder="EMAIL"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 text-primary-blue select-none outline-none bg-transparent text-sm placeholder:text-[#214ED1] ml-3 text-input-primary-blue"
            />
          </div>
          <div className="login-input flex mt-4">
            <img
              alt="password icon"
              className="w-[20px] h-[20px]"
              src="/assets/landing/password_user.svg"
            />
            <input
              type="password"
              placeholder="PASSWORD"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="flex-1 text-primary-blue select-none outline-none bg-transparent text-sm placeholder:text-[#214ED1] ml-3 text-input-primary-blue"
            />
          </div>
          <p className="text-xs text-red-600">{formError}</p>
          <button className="w-full rounded bg-[#214ED1] px-3 py-3  text-sm text-white uppercase font-[600] mt-8">
            LOGIN
          </button>
        </form>
      </div>
    </div>
  );
}

Login.getLayout = function LoginLayout({ children }) {
  let { isAuthenticated, loading } = useAuthPageHook();

  if (!isAuthenticated === null || loading) {
    return <Loader />;
  }

  return <>{children}</>;
};
