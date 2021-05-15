import axios from 'axios'
import cheerio from "cheerio"

const getIngredientHtml = async (ingredient) => axios.get(`http://www.foodguts.com/?ingredient=${ingredient}`, {
    headers: {
        'Content-Type': ' text/html; charset=UTF-8'
    }
})

async function getPairings (ingredient) {
    const html = await getIngredientHtml(ingredient)
    const $ = cheerio.load(html.data)
    const goesWellWithListItems = $('.goeswell li').get()
    const items = goesWellWithListItems.map((item) => $(item).text())
    return items.filter((e) => !e.includes('\n'))
}

export {getPairings}

