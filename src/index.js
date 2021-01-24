let express=require('express')
let app=express()
let NewsPostRoutes=require('./routes/NewsPost')
let NewsPostLoginRoutes=require('./routes/signIn')
//let personRoutes=require('./routes/person')
let path=require('path')
let bodyparser=require('body-parser')

app.use(bodyparser.json())

app.get('/',(req,res)=>{
    res.send("work begins!!")
})
///middleware for logging the request
app.use((req,res,next) =>{  
 
    console.log(`${new Date().toString()}=>${req.originalUrl}`,req.body)
    next()
})

app.use(NewsPostRoutes)
app.use(NewsPostLoginRoutes)
//app.use(customerRoutes)
//app.use(express.static('public'))


///middleware for error handling status 404
app.use((req,res,next)=>{
    res.status(404).send("we think you are lost!!!")

})

//handler for 505 status
app.use((err,req,res,next)=>{
    console.error(err.stack)
    res.sendFile(path.join(__dirname,'../public/505.html'))

})



const port=process.env.PORT ||3012
app.listen(port,() => 
{
    console.log(`server is started at ${port}`)
})
