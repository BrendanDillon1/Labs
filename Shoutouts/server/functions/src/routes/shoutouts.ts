import { Router } from "express";
import { getShoutouts, getShoutout, postShoutout, putShoutout, deleteShoutout } from "../controllers/shoutouts";

const router = Router();

router.post("/", postShoutout);
router.get("/", getShoutouts);
router.get("/:id", getShoutout);
router.put("/:id", putShoutout);
router.delete("/:id", deleteShoutout);

export default router;
