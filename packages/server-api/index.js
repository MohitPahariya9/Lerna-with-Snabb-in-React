const express =  require("express");
const port =  process.env.PORT || 5000;
const app = express();

app.get('/',(req,res)=>{
    res.send("I am backend");
})

app.listen(port , (err)=> {
    if(err){
        console.log(`Error: ${err.message}`);
    }else{
        console.log(`Listening on port ${port}`);
    }
    })