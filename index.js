const express = require('express')

const app = express()


app.use(express.urlencoded({extended: false}))

app.get('/', (req,res)=> {
    return res.json({
        success: true,
        massage: 'Backend is running well'
    })
})

app.post('/', (req,res)=> {
    console.log(req.body)
    return res.json({
        success: true,
        massage: 'posted data success to send'
    })
})

app.listen(3333, ()=> {
    console.log(`app is running on port 3333`);
})