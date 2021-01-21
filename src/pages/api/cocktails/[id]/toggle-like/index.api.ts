import { readFileSync, writeFileSync } from "fs";
import path from "path";
import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";

import cocktailsJSON from "data/cocktails.json";

type Cocktail = typeof cocktailsJSON[number];

const cocktailsFile = path.resolve("data/cocktails.json");

type TokenDecrypted = {
  id: string;
  email: string;
  password: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "PATCH") {
    res.status(404).send("Not found");
    return;
  }

  const token = req.headers.authorization?.replace("Bearer ", "");

  let tokenDecrypted;

  try {
    tokenDecrypted = jwt.verify(
      token || "",
      process.env.TOKEN_SECRET as string
    ) as TokenDecrypted;
  } catch (err) {
    res.status(401).send("Invalid token");
    return;
  }

  const userId = tokenDecrypted.id;

  const cocktails = JSON.parse(
    readFileSync(cocktailsFile, {
      encoding: "utf-8",
    })
  );

  const cocktailIndex = cocktails.findIndex(
    (cocktail: Cocktail) => cocktail.id === req.query.id
  );

  const cocktail = cocktails[cocktailIndex];
  const cocktailUpdated = {
    ...cocktail,
    likes:
      cocktail.likes && cocktail.likes.includes(userId)
        ? (cocktail.likes as string[]).filter((like) => like !== userId)
        : [...(cocktail.likes || []), userId],
  };

  writeFileSync(
    cocktailsFile,
    JSON.stringify(
      [
        ...cocktails.slice(0, cocktailIndex),
        cocktailUpdated,
        ...cocktails.slice(cocktailIndex + 1),
      ],
      undefined,
      2
    ),
    {
      encoding: "utf-8",
    }
  );

  res.status(200).json({
    cocktail: {
      ...cocktailUpdated,
      liked: cocktailUpdated.likes && cocktailUpdated.likes.includes(userId),
    },
  });
}
