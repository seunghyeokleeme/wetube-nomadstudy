import express from "express";
import {
  comments,
  deleteVideo,
  edit,
  see,
  upload,
} from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get("/:id(\\d+)", see);
videoRouter.get("/:id(\\d+)/edit", edit);
videoRouter.get("/:id(\\d+)/delete", deleteVideo);
videoRouter.get("/:id(\\d+)/comments", comments);
videoRouter.get("/upload", upload);

export default videoRouter;
