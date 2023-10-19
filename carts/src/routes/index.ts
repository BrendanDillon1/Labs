import express from "express";
import { videoGames } from "../models/games";

const routes = express.Router();

routes.get("/", (req, res) => {
  res.json("Welcome to the store!");
});

routes.get("/cart-items", (req, res) => {
  res.json(videoGames);
});

routes.get("/cart-items/:id", (req, res) => {
  const itemId = parseInt(req.params.id);
  const item = videoGames.find((game) => game.id === itemId);
  if (item) res.status(200).json(item);
  res.json(videoGames);
});

routes.post("/cart-items", (req, res) => {
  const newItem = req.body;
  videoGames.push(newItem);
  res.status(201).json(newItem);
  res.json(videoGames);
});

routes.delete("/cart-items/:id", (req, res) => {
  const delId = +req.params.id;
  const deleteIndex = videoGames.findIndex((item) => item.id === delId);
  const deletedItem = videoGames.splice(deleteIndex, 1);
  if (deletedItem.length === 1) {
    res.sendStatus(204);
  } else {
    res.status(404).send("ID Not Found");
  }
});
export default routes;
