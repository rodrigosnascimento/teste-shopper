import { Request, Response } from "express"
import { ProductBusiness } from "../business/ProductBusiness"
import { Product } from "../types"

export class ProductController {
    public editProduct = async (req: Request, res: Response): Promise<void> => {
        try {
            const uploadedFile = req.file as Express.Multer.File
            const productBusiness = new ProductBusiness()
            const result: Product[] = await productBusiness.findProductByCode(uploadedFile)
            res.status(200).send(result)

        } catch (error: any) {
            res.status(400).send(error.message)
        }
    }
}