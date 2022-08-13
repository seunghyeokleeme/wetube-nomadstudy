import express from "express";
import {
  comments,
  deleteVideo,
  edit,
  see,
  upload,
} from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get("/upload", upload);
videoRouter.get("/:id", see);
videoRouter.get("/:id/edit", edit);
videoRouter.get("/:id/delete", deleteVideo);
videoRouter.get("/:id/comments", comments);

export default videoRouter;
