import { readFileSync, writeFileSync } from "fs";
import path from "path";
import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";
import { v4 as uuid } from "uuid";

const accountsFile = path.resolve("src/pages/api/accounts.json");

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

  if (accounts[body.email]) {
    res.status(500).json({
      statusCode: 500,
      message: "There is already an email associated to this email",
    });
    return;
  }

  const token = jwt.sign(
    { id: uuid(), ...body },
    process.env.TOKEN_SECRET as string
  );

  writeFileSync(
    accountsFile,
    JSON.stringify(
      {
        ...accounts,
        [body.email]: token,
      },
      undefined,
      2
    ),
    { encoding: "utf-8" }
  );

  res.status(200).json({ token });
}
