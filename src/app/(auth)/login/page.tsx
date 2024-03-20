"use client";
import "../../../style/login.css";
import Link from "next/link";
import React, { useRef } from "react";
import { signIn } from "next-auth/react";

type props = {
  callbackUrl?: string;
};

const LoginPage = (props: props) => {
  const email = useRef("");
  const password = useRef("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await signIn("credentials", {
      email: email.current,
      password: password.current,
      redirect: true,
      callbackUrl: props.callbackUrl ?? "http://localhost:3000",
    });
  };
  return (
    <div className="container">
      <form action="#" onSubmit={onSubmit}>
        <div className="">
          <h1>Connexion</h1>
          <p>Connectez votre compte</p>
        </div>
        <div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="your@mail.com"
              onChange={(e) => (email.current = e.target.value)}
            />
            <input
              type="password"
              name="password"
              placeholder="********"
              onChange={(e) => (password.current = e.target.value)}
            />
          </div>
          <button>Connectez vous</button>
          <Link href="/">Annuler</Link>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
