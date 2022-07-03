const mongoose = require('mongoose')

URI=('mongodb+srv://User2:DWZkdzNIiVrY6umC@cluster0.13sgv.mongodb.net/employe?retryWrites=true&w=majority')
//DWZkdzNIiVrY6umC

mongoose.connect(URI,{
   useNewUrlParser: true, 
   useUnifiedTopology:true,
})
.then(db=>console.log('Base de Datos Conectada',db.connection.name))
.catch(error => console.log(error))

module.exports = mongoose


/*
const assert = require('assert');
const mongoose = require('mongoose');
mongoose.set('debug', true);

const GITHUB_ISSUE = `gh8058`;
const connectionString = `mongodb://localhost:27017/${ GITHUB_ISSUE }`;
const { Schema } = mongoose;

run().then(() => console.log('done')).catch(error => console.error(error.stack));

async function run() {
  await mongoose.connect(connectionString, { useNewUrlParser: true });
  await mongoose.connection.dropDatabase();
  
  const schema = mongoose.Schema(
    { 
      name: { 
        type: String,
        trim: true
      },
      roles: {
        type: [{
          type: String,
          enum: ['admin', 'super-admin']
        }],
        default: ['user']
      }
    });

  const User = mongoose.model('User', schema);

  await User.create({ name: 'test', roles: ['admin'] });
  const doc = await User.findOne({ roles: 'admin' });
  console.log(doc);
}
*/