let mongoose = require('mongoose');


let validator = require('validator')

const server = '127.0.0.1:27017'; // REPLACE WITH YOUR DB SERVER
const database = 'mydb';      // REPLACE WITH YOUR DB NAME

class Database {
  constructor() {
    this._connect()
  }
  
_connect() {
     mongoose.connect(`mongodb://${server}/${database}`)
       .then(() => {
         console.log('Database connection successful')
       })
       .catch(err => {
         console.error('Database connection error')
       })
  }
}


module.exports = new Database()


///Going to create new schema for login

let loginSchema=new mongoose.Schema({

    username:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
        unique:true,
    }
})

module.exports=mongoose.model('LoginSchema', loginSchema)