import app from './src/server.js'
const PORT = process.env.PORT || 3001

app.listen(PORT, () => console.log(`Listening on ${PORT}`))