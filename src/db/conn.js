const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/eatmate",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
   
}).then(()=>{
    console.log(`connection with db is successfull`)
})
.catch((err)=>
{
    console.log(err)
})