const express = require('express')
const app = express()
const axios = require('axios')
const bodyParser = require('body-parser')
app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }))

app.get("/",(req,res,next)=>{
    res.render("index.ejs");
})
app.post('/form-submit',(req,res,next)=>{
    axios.post("https://hooks.slack.com/services/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",{
        text:`Name:${req.body.name} Email:${req.body.email}`
    }).then(()=>{
        res.send("form submitted")
    })
    .catch(err=>{
        res.send("An error occured")
    })
})
app.listen(3000)
