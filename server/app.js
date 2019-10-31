const express = require('express')
const path = require('path')

const app = express()

app.use(express.static(path.join(__dirname, '/../client/build')))

app.get('/api/getName', (req,res) => {
    res.json({ name: 'Erwan' })
})

if (process.env.NODE_ENV === 'production') {
    app.get('*', (req,res) =>{
        res.sendFile(path.join(__dirname + '/../client/build/index.html'))
    })
}

const port = process.env.PORT || 5000
app.listen(port)