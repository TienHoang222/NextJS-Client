import { sign } from "jsonwebtoken";
import { serialize } from "cookie";
import { useRouter } from "next/router";

const secret = process.env.SECRET;

export default async function (req, res) {
  const { username, password } = req.body;

  if (username === "admin" && password === "1234") {
    const token = sign(
      {
        exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30, // 30 days
        username: username,
      },
      secret
    );

    const serialised = serialize("OursiteJWT", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      sameSite: "strict",
      maxAge: 60 * 60 * 24 * 30,
      path: "/",
    });

    res.setHeader("Set-Cookie", serialised);
    res.status(201).json({ message: "Success!" });
  } else {
    res.json({ message: "Invalid credentials!" });
  }
}
