let express = require('express');
let app = express();
app.listen(3000,()=>{
    console.log("listening at port 3000");
});
app.use(express.static('mypublic'));
app.use(express.json({limit:'1mb'}));
app.post('/api',(req,res)=>{
    console.log('I got a request');
    console.log(req.body);
    const mydata=req.body;
    const fname=mydata.firstName;
    const lname=mydata.lastName;
  /* res.json({
        message:"Thank you"
    }); 
    */
   res.send(`Thank you for sending the info: ${fname} ${lname}`);
    res.end();
}); 

