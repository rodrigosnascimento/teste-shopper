import { Pack } from "../types";

export class PackValidator {
    static validatePackExistence(pack: Pack[]) {
        if (pack.length === 0) {
            throw new Error("pack_id não encontrado")
        }
    }

    static validatePackItem(data: string[][]): void {
        const packIdText = data[0][0]
        const productCodeText = data[0][1]
        const newPriceText = data[0][2]
        if (packIdText !== "pack_code" && productCodeText !== "product_code" && newPriceText !== "new_price") {
            throw new Error("É necessário que a primeira linha tenha os seguintes nomes: pack_code,product_code,new_price")
        }
    }

    static validateNewPrice(newPrice: number): void {
        const isNewPriceValid = isNaN(newPrice)
        if (isNewPriceValid || newPrice < 0) {
            throw new Error("Informe um new_price válido")
        }
    }

    static validatePriceFormat(newPrice: string[]): void {
        if (newPrice.length > 3) {
            throw new Error("new_price precisa ser separado por '.'")
        }
    }
}