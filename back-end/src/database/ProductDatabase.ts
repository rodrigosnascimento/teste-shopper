import { Product } from "../types";
import { BaseDatabase } from "./BaseDatabase";

export class ProductDatabase extends BaseDatabase {
    public async findProductByCode(code: number): Promise<Product> {
        const [productDB]: Product[] = await BaseDatabase.connection("products").where({code})
        return productDB
    }

    public async updateProduct(products: Product[]): Promise<void>{
        for(const product of products){
            await BaseDatabase.connection("products").where({code: product.code}).update({sales_price: product.sales_price})
        }
    }
}