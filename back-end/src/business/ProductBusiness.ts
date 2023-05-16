import { ProductDatabase } from "../database/ProductDatabase"
import { Product } from "../types"
import fs from "fs"
import { ProductValidator } from "../validators/ProductValidator"

export class ProductBusiness {
    public findProductByCode = async (file: Express.Multer.File) => {
        const productDatabase = new ProductDatabase()

        ProductValidator.validateFileExists(file)
        ProductValidator.validateFileExtension(file)

        const filePath = file.path

        const matches = fs.readFileSync(filePath, {
            encoding: "utf-8"
        }).split("\n").map((row) => {
            return row.split(",").map((value) => value.trim())
        })

        let products: Product[] = []
        let productsToResponse: any[] = []
        
        for (let i = 1; i < matches.length; i++) {
            const newPrice = Number(matches[i][1])
            const productCode = Number(matches[i][0])

            ProductValidator.validateProductCodeAndPrice(matches)
            ProductValidator.validateNewPrice(newPrice)
            ProductValidator.validatePriceFormat(matches[i])

            const product = await productDatabase.findProductByCode(productCode)

            ProductValidator.validateProductExistence(product)

            const salesPrice = Number(product.sales_price)
            const costPrice = Number(product.cost_price)

            ProductValidator.validatePriceGreaterThanCost(newPrice, costPrice)
            ProductValidator.validatePriceAdjustment(newPrice, salesPrice, product)

            products.push({ code: product.code, name: product.name, cost_price: costPrice, sales_price: newPrice })
            productsToResponse.push({code: product.code, name: product.name, current_price: product.sales_price, new_price: newPrice})
        }
        await productDatabase.updateProduct(products)

        return productsToResponse
    }
}
