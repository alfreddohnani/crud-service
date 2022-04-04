import path from "path";

import { config } from "dotenv";

function getEnvVar(key: string) {
  if (process.env[key] === undefined) {
    throw new Error(`Env variable ${key} is required`);
  }
  return process.env[key] || "";
}

export const NODE_ENV = getEnvVar("NODE_ENV");

export const isDevEnv = NODE_ENV === "development";
export const isProdEnv = NODE_ENV === "production";

config({
  path: isDevEnv
    ? path.resolve(process.cwd(), ".env.development.local")
    : path.resolve(process.cwd(), ".env.production.local"),
});

export const DATABASE_URI = getEnvVar("DATABASE_URI");
export const SESSION_SECRET = getEnvVar("SESSION_SECRET");
