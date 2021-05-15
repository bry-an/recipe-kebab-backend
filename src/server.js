import express from 'express'
import cors from "cors"
import helmet from "helmet"
const app = express()
app.use(helmet())
app.use(cors())
import {getPairings} from "./scraper.js"

app.get('/', (req, res) => {
    res.json({status: 'very healthy'})
})

app.get('/pairings/', async (req, res) => {
    const ingredient = req.query.ingredient
    const pairings = await getPairings(ingredient)
    return res.json({ pairings })
})


export default app