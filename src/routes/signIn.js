let signInModel=require('../models/signIn.model')

let express=require('express')

let app= express()

let bcrypt = require('bcrypt')

let router= express.Router()

//crud for login 

//create
router.post('/NewsPost/Login',async (req,res)=>{

   try{
       const salt=await bcrypt.genSalt()

       const hasedPassword= await bcrypt.hash(req.body.password, salt)
       console.log(salt)
       console.log(hasedPassword)


    if(!req.body)
    {
        return res.status(404).send('request body is missing!!!')
    }
    let model=new signInModel({username:req.body.username,password:hasedPassword})

    model.save()
    .then(doc=>{
        if(!doc||doc.length===0)
        {
            return res.status(500).send(doc)
        }
        res.status(200).send(doc)
    })
    .catch(err=>{
        res.status(500).json(err)
    })
   }
   catch{
       res.status(500).send()
   }
})

//Read
router.get('/NewsPost/Login',async (req,res)=>{

    if(!req.query.username)
    {
        return res.status(400).send("missing url parameter username");
    }

    signInModel.findOne({ 
        
        username: req.query.username,
        
    })
    
    
    .then(doc=>{
        if(!doc||doc.length===0)
        {
            return res.status(500).send(doc)
        }
        res.status(200).send(doc)
    })
    .catch(err=>{
        res.status(500).json(err)
    })

    // if(user==null){
    //            return res.status(400).send('cannot find user')
    // }
    // try{
    //   if(await bcrypt.compare({username:req.body.password,password:hasedPassword}))
    //   {
    //       res.send("successful login")
    //   }
    //   else{
    //       res.send("not allowed")
    //   }
    // }
    // catch{
    //     res.status(500).send()
    // }

})

//update
router.put('/NewsPost/Login',(req,res)=>{

    if(!req.query.username)
    {
        return res.status(400).send("missing url parameter username");
    }

    signInModel.findOneAndUpdate({ 
        
        username: req.query.username
    },req.body,{
        new: true
    })

    .then(doc=>{
        if(!doc||doc.length===0)
        {
            return res.status(500).send(doc)
        }
        res.status(200).send(doc)
    })
    .catch(err=>{
        res.status(500).json(err)
    })

})

//Delete
router.delete('/NewsPost/Login',(req,res)=>{

    if(!req.query.username)
    {
        return res.status(400).send("missing url parameter username");
    }

    signInModel.findOneAndRemove({ 
        
        username: req.query.username
    })

    .then(doc=>{
        if(!doc||doc.length===0)
        {
            return res.status(500).send(doc)
        }
        res.status(200).send(doc)
    })
    .catch(err=>{
        res.status(500).json(err)
    })

})

//Read for all news post
router.get('/NewsPost/LoginAll',(req,res)=>{

    // if(!req.query.created_by)
    // {
    //     return res.status(400).send("missing url parameter created_by");
    // }

    signInModel.find({ 
        
        // created_by: req.query.created_by
    })

    .then(doc=>{
        if(!doc||doc.length===0)
        {
            return res.status(500).send(doc)
        }
        res.status(200).send(doc)
    })
    .catch(err=>{
        res.status(500).json(err)
    })

})

router.post('/NewsPost/VerifyLogin',async (req,res)=>{

    


    
})


module.exports=router