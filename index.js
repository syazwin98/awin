const express = require('express'); 
const app = express(); 
require('dotenv').config();
       
const port = process.env.PORT;
const api = process.env.API_URL;                  

app.get('/', (req, res) => {        
    res.sendFile('index.html', {root: __dirname});      
});

app.listen(port, () => {            
    console.log(`Now listening on port ${port}`); 
});
