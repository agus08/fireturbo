import express, { type Express } from "express";
import morgan from "morgan";
import cors from "cors";

export const createServer = (): Express => {
  const app = express();
  app
    .use(morgan("dev"))
    .use(cors())

  return app;
};