import express from "express"
import cors from "cors"

import { client } from "./src/connectDb.js"
import { addMenuItem, getAllMenuItems } from "./src/menu.js"

const app = express()
app.use(cors())
app.use(express.json())
app.get("/menu", getAllMenuItems)
app.post("/menu", addMenuItem)

// add some routes
app.get("/", (req ,res) => {
    res.send('hello')
})



const port = 3000;
app.listen(port, () =>console.log(`Listening on port ${port}`))
