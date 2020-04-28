const dotenv = require("dotenv");
dotenv.config();

const { GITHUB_USER, GITHUB_PASSWORD } = process.env;

console.log(GITHUB_USER);
console.log(GITHUB_PASSWORD);
