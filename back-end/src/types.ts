export interface Product {
    code: number,
    name: string,
    cost_price: number,
    sales_price: number
}

export interface Pack{
    id: number,
    pack_id: number,
    product_id: number,
    qty: number
}