const express =require('express');
const app = express()
const port = 8000
const connectDB = require("./db/db.js");
const User =require("./db/user.js");
const cors = require('cors'); 

// Middleware
app.use(express.json());
app.use(cors()); // Use cors middleware if needed

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.post("/contact",async(req,res)=>{
   try{
    const{
        name,
        email,
        contact,
        address,
        message
    }=req.body;

    const Users = new User({
      name,
      email,
      contact,
      address,
      message,
    });
    await Users.save();
      res.status(200).json({ message: "successfully" });

   }catch(error){
        res.status(500).json({ message: "Server Error" });
   } 
})
connectDB();

app.listen(port,()=>{
    console.log(`Succesfully connect ${port}`);
})