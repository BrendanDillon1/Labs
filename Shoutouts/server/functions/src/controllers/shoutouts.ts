import establishConnection from "../establishConnection";
import Shoutout from "../models/shoutouts";
import { Request, Response } from "express";

export interface ReqRes {
  (req: Request, res: Response): Promise<void>;
}
// CREATE

export const postShoutout: ReqRes = async (req, res) => {
  try {
    await establishConnection();
    const { to, from, message } = req.body;
    const newShoutout = new Shoutout({ to, from, message });
    await newShoutout.save();
    res.status(201).json(newShoutout);
  } catch (error) {
    res.status(400).json();
  }
};

// READ

export const getShoutouts: ReqRes = async (req, res) => {
  try {
    await establishConnection();
    const shoutouts = await Shoutout.find();
    res.status(200).json(shoutouts);
  } catch (error) {
    res.status(500).json("server error");
  }
};

export const getShoutout: ReqRes = async (req, res) => {
  try {
    await establishConnection();
    const shoutout = await Shoutout.findById(req.params.id);
    if (!shoutout) {
       res.status(404).json({ message: "Shoutout not found" });
    }return;
    res.status(200).json(shoutout);
  } catch (error) {
    res.status(500).json("server error");
  }
};

// UPDATE
export const putShoutout: ReqRes = async (req, res) => {
  try {
    await establishConnection();
    const updatedShoutout = await Shoutout.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedShoutout) {
        res.status(404).json({ message: "Shoutout not found" });
    } return;
    res.status(200).json(updatedShoutout);
  } catch (error) {
    res.status(400).json();
  }
};

// DESTROY

export const deleteShoutout: ReqRes = async (req, res) => {
  try {
    await establishConnection();
    const shoutout = await Shoutout.findByIdAndDelete(req.params.id);
    if (!shoutout) {
       res.status(404).json("Shoutout not found");
    }   return;
    res.status(204).json("Shoutout deleted");
  } catch (error) {
    res.status(500).json("server error");
  }
};
