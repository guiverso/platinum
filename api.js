const express = require('express');
const app = express();
const port = 80;

const path = require('path');
const public = path.join(__dirname,'./public');
app.use(express.static(path.join(public)));

app.get('/',(req, res) => {
    let index = path.join(__dirname,"./public/views/index.html");
    res.status(200).sendFile(index);
})

app.listen(port,()=>{
    console.log("servidor rodando na porta: "+port)
})