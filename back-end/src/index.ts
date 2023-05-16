import express, { Express } from "express"
import cors from "cors"
import { productRouter } from "./router/productRouter"
import { packRouter } from "./router/packRouter"

const app: Express = express()
app.use(cors())
app.use(express.json())

app.listen(3003, () => {
    console.log(`Servidor rodando na porta 3003`)
})

app.use("/product", productRouter)
app.use("/pack", packRouter)