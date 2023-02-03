import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="login">
      <div className="login-form">
        <h4 className="login-form__title">SOIOT SYSTEM</h4>
        <form name="myForm" method="post">
          <div className="login-form__info">
            <input
              type="text"
              name="Uname"
              className="login-form__input"
              placeholder="user name"
            ></input>
            <input
              type="password"
              name="Pass"
              className="login-form__input"
              placeholder="password"
            ></input>
            <div className="login-form__alert" id="login-form__alert"></div>
          </div>
          <div className="login-form__action">
            <input
              className="login-form__button"
              type="button"
              name="log"
              id="logButton"
              value="LOGIN"
              onclick="Login()"
            ></input>
            <a className="login-form__sign-up-link" href="#">
              or create new account
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
