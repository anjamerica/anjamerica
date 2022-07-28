import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useState } from "react";
import Loader from "../components/layout/Loader";
import { useAuth } from "../hooks/useAuth";
import {useAuthPageHook} from "../hooks/useRequireAuth"

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
      let  {response}  = e;
      if(e?.response?.data?.status==401)setFormError("Admin not found")
      console.log();
    }
  }

  console.log(formError);
  return (
    <div className="h-screen w-full bg-primary-green flex flex-col justify-center items-center">
      <div className="login-page text-white text-[1.4rem] font-thin tracking-wide	 uppercase">
        WELCOME
      </div>
      <div>
        <img
           src="/landing/logo.svg"
          className="w-[15rem]  xl:h-fit xl:w-[10rem] object-contain"
        />
      </div>
      <div className="w-[85%] md:w-[25%]">
        <form onSubmit={handleLogin}>
          <div className="login-input flex">
            <img
              className="w-[20px] h-[20px]"
              src="/assets/landing/login_user.svg"
            />
            <input
              type="text"
              placeholder="EMAIL"
              value={email} onChange={e => setEmail(e.target.value)}
              className="flex-1 text-white select-none outline-none bg-transparent text-sm placeholder:text-white ml-3 text-input-white"
            />
          </div>
          <div className="login-input flex mt-4">
            <img
              className="w-[20px] h-[20px]"
              src="/assets/landing/user_password.svg"
            />
            <input
              type="password"
              placeholder="PASSWORD"
              value={password} onChange={e => setPassword(e.target.value)}
              className="flex-1 text-white select-none outline-none bg-transparent text-sm placeholder:text-white ml-3 text-input-white"
            />
          </div>
          <p className="text-xs text-red-600">{formError}</p> 
          <button className="w-full rounded bg-white px-3 py-3 uppercase text-sm text-primary-green mt-8">
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
    return <Loader />
  }
  
  return (
    <>
      {
        children
      }
    </>
  )
}
