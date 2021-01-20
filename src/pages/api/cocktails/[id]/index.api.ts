import { readFileSync } from "fs";
import path from "path";
import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";

import cocktailsJSON from "data/cocktails.json";

type Cocktail = typeof cocktailsJSON[number];

const cocktailsFile = path.resolve("data/cocktails.json");

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    res.status(404).send("Not found");
    return;
  }

  const token = req.headers.authorization?.replace("Bearer ", "");

  try {
    jwt.verify(token || "", process.env.TOKEN_SECRET as string);
  } catch (err) {
    res.status(401).send("Invalid token");
    return;
  }

  const cocktails = JSON.parse(
    readFileSync(cocktailsFile, {
      encoding: "utf-8",
    })
  );

  res.status(200).json({
    cocktail: cocktails.find(
      (cocktail: Cocktail) => cocktail.id === req.query.id
    ),
  });
}
