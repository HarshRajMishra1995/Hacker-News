let mongoose = require('mongoose');

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


let validator = require('validator')

let newsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
      },
      
  url: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    // validate: (value) => {
    //   return validator.(value)
    // }
  },
  created_by: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },

  point: {
    type: String,
    required: true,
    unique: true,
    
  },

  created_on: {
    type: Date,
    required: true,
    default: new Date,
    unique: true,
    
  }
})

module.exports = mongoose.model('NewsPostProject', newsSchema)