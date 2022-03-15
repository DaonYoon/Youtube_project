import express from "express";
import { watch, getEdit,deleteVideo, postEdit, getUpload, postUpload } from "../controllers/videoController";

const videoRouter = express.Router();


videoRouter.get("/:id(\\d+)", watch);
videoRouter.route("/:id(\\d+)/edit").get(getEdit).post(postEdit)
videoRouter.get("/:id(\\d+)/edit", deleteVideo)
videoRouter.route("/upload").get(getUpload).post(postUpload)

export default videoRouter;