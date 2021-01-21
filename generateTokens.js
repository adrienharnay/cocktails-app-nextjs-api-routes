const crypto = require("crypto");
const fs = require('fs');

fs.writeFile('.env.development', `TOKEN_SECRET=${crypto.randomBytes(64).toString("hex")}`, {encoding: 'utf-8'}, () => {});
fs.writeFile('.env.production', `TOKEN_SECRET=${crypto.randomBytes(64).toString("hex")}`, {encoding: 'utf-8'}, () => {});
