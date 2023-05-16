import { PackDatabase } from "../database/PackDatabase"
import { ProductDatabase } from "../database/ProductDatabase"
import fs from "fs"
import { PackValidator } from "../validators/PackValidator"
import { ProductValidator } from "../validators/ProductValidator"
import { Pack, Product } from "../types"

export class PackBusiness{
    public findPackById = async (file: Express.Multer.File) => {
        const packDatabase = new PackDatabase()
        const productDatabase = new ProductDatabase()
        const filePath = file.path

        const matches = fs.readFileSync(filePath, {
            encoding: "utf-8"
        }).split("\n").map((row) => {
            return row.split(",").map((value) => value.trim())
        })

        let productsToUpdate: Product[] = []
        let packs: any[] = []

        for(let i = 1; i < matches.length; i++){
            const newPrice = Number(matches[i][2])
            const packId = Number(matches[i][0])
            const productCode = Number(matches[i][1])
            const pack = await packDatabase.findPackById(packId)

            PackValidator.validatePackExistence(pack)
            PackValidator.validatePackItem(matches)
            PackValidator.validateNewPrice(newPrice)
            PackValidator.validatePriceFormat(matches[i])

            const product = await productDatabase.findProductByCode(productCode)

            ProductValidator.validateProductExistence(product)

            const productSalesPrice = Number(product.sales_price)
            const productCostPrice = Number(product.cost_price)
            
            ProductValidator.validatePriceGreaterThanCost(newPrice, productCostPrice)
            ProductValidator.validatePriceAdjustment(newPrice, productSalesPrice)

            productsToUpdate.push({code: product.code, name: product.name, cost_price: productCostPrice, sales_price: newPrice})
            packs.push({pack_code: packId, product_code: productCode, name: product.name, cost_price: productCostPrice, sales_price: newPrice})
        }
        
        await productDatabase.updateProduct(productsToUpdate)
        return packs
    }
}