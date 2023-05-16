import { Request, Response } from "express"
import { PackBusiness } from "../business/PackBusiness"

export class PackController {
    public editPack = async (req: Request, res: Response): Promise<void> => {
        try {
            const uploadedFile = req.file as Express.Multer.File
            const packBusiness = new PackBusiness()
            const result = await packBusiness.findPackById(uploadedFile)
            res.status(200).send(result)

        } catch (error: any) {
            res.status(400).send(error.message)
        }
    }
}