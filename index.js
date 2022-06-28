const express = require('express')

const app = express()


app.use(express.urlencoded({extended: false}))

app.get('/', (req,res)=> {
    return res.json({
        success: true,
        massage: 'Backend is running well'
    })
})

app.use('/', require('./src/routes'))

app.use('*', (req, res)=> {
    return res.status(404).json({
        success: false,
        massage: 'resource not found'
    })
})

app.listen(3333, ()=> {
    console.log(`app is running on port 3333`);
})