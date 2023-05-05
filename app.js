var express = require('express')
var app = express()
var port = 3000
app.listen(port,function(){
    console.log(`Listening on port ${port}`)
})


app.get('/welcome',function (req,res,next){
    res.json({
        msg:"welcome",
        data:{
            name:"sangram"
        }
    })
})

module.exports = app;