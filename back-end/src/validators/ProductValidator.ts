import { Product } from "../types"

export class ProductValidator {
    static validateFileExists(file: Express.Multer.File): void {
        if (!file) {
            throw new Error("É necessário passar um arquivo")
        }
    }

    static validateFileExtension(file: Express.Multer.File): void {
        if (!file || !file.originalname.includes(".csv")) {
            throw new Error("O arquivo precisa ter a extensão csv")
        }
    }

    static validateProductCodeAndPrice(data: string[][]): void {
        const productCodeText = data[0][0]
        const newPriceText = data[0][1]
        if (productCodeText !== "product_code" && newPriceText !== "new_price") {
            throw new Error("É necessário que a primeira linha tenha os seguintes nomes: product_code,new_price")
        }
    }

    static validateNewPrice(newPrice: number): void {
        const isNewPriceValid = isNaN(newPrice)
        if (isNewPriceValid || newPrice < 0) {
            throw new Error("Informe um new_price válido")
        }
    }

    static validatePriceFormat(newPrice: string[]): void {
        if (newPrice.length > 2) {
            throw new Error("new_price precisa ser separado por '.'")
        }
    }

    static validateProductExistence(product: Product): void {
        if (!product) {
            throw new Error(`product_code não encontrado`)
        }
    }

    static validatePriceGreaterThanCost(newPrice: number, costPrice: number): void {
        if (costPrice > newPrice) {
            throw new Error("O preço de venda precisa ser maior que o custo do produto")
        }
    }

    static validatePriceAdjustment(newPrice: number, salesPrice: number): void {
        if (newPrice > salesPrice * 1.1 || newPrice < salesPrice * 0.9 || newPrice === salesPrice) {
            throw new Error("O reajuste de preço não pode ser maior ou menor do que 10% do valor atual")
        }
    }
}