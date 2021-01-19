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

  const search = typeof req.query.search === "string" ? req.query.search : "";

  const filteredCocktails = !search
    ? cocktails
    : cocktails.filter((cocktail: Cocktail) =>
        cocktail.ingredients.some((ingredient) =>
          ingredient.name.toLowerCase().includes(search.toLowerCase())
        )
      );

  res.status(200).json({ cocktails: filteredCocktails });
}
