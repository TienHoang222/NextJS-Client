// import axios from "axios";
// import React, { useState } from "react";
// import { useRouter } from "next/router";

// export default function Home() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const mainDivStyle = {
//     padding: "1em",
//   };

//   const router = useRouter();

//   const formStyle = {
//     display: "flex",
//     flexDirection: "column",
//     maxWidth: "560px",
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const credentials = { username, password };

//     const user = await axios.post("/api/auth/login", credentials);
//     if (user.status === 201) {
//       router.push("/dashboard");
//     }
//     // if (user.status === 300) {
//     //   router.push("/");
//     // }
//     console.log(user);
//   };

//   const handleLogOut = async () => {
//     const user = await axios.get("/api/auth/logout");

//     console.log(user);
//   };

//   return (
//     <div style={mainDivStyle}>
//       <form style={formStyle} onSubmit={(e) => handleSubmit(e)}>
//         <label htmlFor="username"> Username </label>
//         <input
//           type="text"
//           name="username"
//           id="username"
//           onChange={(e) => setUsername(e.target.value)}
//         />

//         <label htmlFor="password"> Username </label>
//         <input
//           type="text"
//           name="password"
//           id="password"
//           onChange={(e) => setPassword(e.target.value)}
//         />

//         <button> Log in </button>
//       </form>

//       {/* <button onClick={() => handleGetUser()}> User </button> */}

//       <button onClick={() => handleLogOut()}> Logout </button>
//     </div>
//   );
// }

import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import axios from "axios";
import React, { useState } from "react";
import { useRouter } from "next/router";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const mainDivStyle = {
    padding: "1em",
  };

  const router = useRouter();

  const formStyle = {
    display: "flex",
    flexDirection: "column",
    maxWidth: "560px",
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const credentials = { username, password };

    const user = await axios.post("/api/auth/login", credentials);
    if (user.status === 201) {
      router.push("/dashboard");
    }
    // if (user.status === 300) {
    //   router.push("/");
    // }
    console.log(user);
  };
  return (
    <div className="login">
      <div className="login-form">
        <h4 className="login-form__title">SOIOT SYSTEM</h4>
        <form name="myForm" onSubmit={(e) => handleSubmit(e)}>
          <div className="login-form__info">
            <input
              type="text"
              name="Uname"
              className="login-form__input"
              placeholder="user name"
              onChange={(e) => setUsername(e.target.value)}
            ></input>
            <input
              type="password"
              name="Pass"
              className="login-form__input"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            <div className="login-form__alert" id="login-form__alert"></div>
          </div>
          <div className="login-form__action">
            <input
              className="login-form__button"
              type="submit"
              name="log"
              id="logButton"
              value="LOGIN"
              style={{ cursor: "pointer" }}
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
