let NewsPostModel=require('../models/NewsPost.models')
let express=require('express')
//const customerModel = require('../models/customer.model')
let router=express.Router()

//crud operations starting here

//create
router.post('/NewsPost',(req,res)=>{
    if(!req.body)
    {
        return res.status(404).send('request body is missing!!!')
    }
    let model=new NewsPostModel(req.body)

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

})

//Read
router.get('/NewsPost',(req,res)=>{

    if(!req.query.created_by)
    {
        return res.status(400).send("missing url parameter created_by");
    }

    NewsPostModel.findOne({ 
        
        created_by: req.query.created_by
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

//update
router.put('/NewsPost',(req,res)=>{

    if(!req.query.created_by)
    {
        return res.status(400).send("missing url parameter created_by");
    }

    NewsPostModel.findOneAndUpdate({ 
        
        created_by: req.query.created_by
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
router.delete('/NewsPost',(req,res)=>{

    if(!req.query.created_by)
    {
        return res.status(400).send("missing url parameter created_by");
    }

    NewsPostModel.findOneAndRemove({ 
        
        created_by: req.query.created_by
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
router.get('/NewsPostall',(req,res)=>{

    // if(!req.query.created_by)
    // {
    //     return res.status(400).send("missing url parameter created_by");
    // }

    NewsPostModel.find({ 
        
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


module.exports=router