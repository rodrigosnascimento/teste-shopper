import express from "express"
import { ProductController } from "../controller/ProductController"
import multer from "multer"

export const productRouter = express.Router()
const productController = new ProductController()
const upload = multer({ dest: "productUpload/"})

productRouter.put("/update", upload.single("file"), productController.editProduct)