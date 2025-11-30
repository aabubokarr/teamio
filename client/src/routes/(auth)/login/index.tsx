import { createFileRoute } from "@tanstack/react-router";
import { Logo } from "@/components/icons/logo";
import { MailIcon } from "@/components/icons/mail";
import { KeyIcon } from "@/components/icons/key";
import { EyeIcon } from "@/components/icons/eye";
import { GoogleIcon } from "@/components/icons/google";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export const Route = createFileRoute("/_auth/login")({
  component: RouteComponent,
});

function RouteComponent() {
  const [showPass, setShowPass] = useState(false);

  return (
    <div className="text-center px-16 py-11 rounded-4xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-2xl font-lufga">
      <Logo small className="m-auto"></Logo>
      <div className="text-2xl font-lufga-medium">Welcome Back</div>
      <p className="text-sm text-gray">
        It Great to See you 👋 <br />
        Log in to your account below.
      </p>
      <form action="" method="post" className="my-5 w-72">
        <div className="flex gap-1.5 items-center bg-[#F9F9F9] mb-2.5 px-3 rounded-lg">
          <MailIcon></MailIcon>
          <input
            type="email"
            placeholder="heyy.shyed@gmail.com"
            className="w-full h-10 outline-none"
          />
        </div>

        <div className="flex justify-between items-center bg-[#F9F9F9] mb-2.5 px-3 rounded-lg">
          <div className="flex gap-1.5 items-center">
            <KeyIcon></KeyIcon>
            <input
              type={showPass ? "text" : "password"}
              placeholder="type your password"
              className="w-full h-10 rounded-lg outline-none"
            />
          </div>
          <div onClick={() => setShowPass((prev) => !prev)}>
            <EyeIcon className="cursor-pointer"></EyeIcon>
          </div>
        </div>

        <Button className={{ base: "w-full h-10 font-lufga-medium" }}>
          Continue with email
        </Button>
        <p className="text-gray">
          Don't have an account?
          <span className="text-green-light cursor-pointer"> Signup</span>
        </p>
        <div className="w-4/5 h-px bg-[#D9D9D9] m-auto mt-7 mb-3"></div>
        <u className="text-green-light mb-7">Forgot password?</u>
        <Button className={{ base: "w-full h-10 bg-[#F1FFE8] border-0 mt-6" }}>
          <span className="text-black font-lufga-medium flex items-center gap-2">
            <GoogleIcon></GoogleIcon>Continue with Gmail
          </span>
        </Button>
        <p className="text-[9px] mt-24 text-gray">
          By signing up, you agree to the{" "}
          <span className="text-green-dark font-lufga-medium">
            Terms of Service
          </span>{" "}
          and{" "}
          <span className="text-green-dark font-lufga-medium">
            Privacy Policy
          </span>
        </p>
      </form>
    </div>
  );
}
