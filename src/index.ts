import express from "express"

const app = express()

app.get('/ts', (req,res) => {
    res.send('Hello from ts')
})

app.listen(3000, () => {
    console.log('running 3000')
})