const express = require('express');
const multer = require('multer');
const app = express();
const uploadFile = require("./src/services/storage.service");


app.use(express.json());
const upload = multer({ storage: multer.memoryStorage() });

const post = {}

//post (creating post)
app.post("/create-post", upload.single("image"), async (req,res)=>{
    const result = await uploadFile(req.file.buffer);
    
})


module.exports = app;