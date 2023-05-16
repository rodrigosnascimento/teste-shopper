import express from "express"
import multer from "multer"
import { PackController } from "../controller/PackController"

export const packRouter = express.Router()
const packController = new PackController()
const upload = multer({ dest: "packUpload/"})

packRouter.put("/update", upload.single("file"), packController.editPack)