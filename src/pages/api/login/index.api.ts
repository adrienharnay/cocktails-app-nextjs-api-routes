import { readFileSync } from "fs";
import path from "path";
import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";

const accountsFile = path.resolve("src/pages/api/accounts.json");

type TokenDecrypted = {
  id: string;
  email: string;
  password: string;
};

/*
 ** DO NOT implement in production, this code is naive only for demonstration
 */

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.status(404).send("Not found");
    return;
  }

  const accounts = JSON.parse(
    readFileSync(accountsFile, {
      encoding: "utf-8",
    })
  );

  const body = JSON.parse(req.body);

  const token = accounts[body.email];

  if (!token) {
    res.status(500).json({
      statusCode: 500,
      message: "There is no account associated to this email",
    });
    return;
  }

  const tokenDecrypted = jwt.verify(
    token,
    process.env.TOKEN_SECRET as string
  ) as TokenDecrypted;

  if (tokenDecrypted.password !== body.password) {
    res.status(500).json({
      statusCode: 500,
      message: "The password is incorrect",
    });
    return;
  }

  res.status(200).json({ token });
}
