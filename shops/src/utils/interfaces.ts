import { Request, Response } from "express";

export type reqRes = (req: Request, res: Response) => Promise<void>;
