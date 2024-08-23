const express = require('express');
require('dotenv').config();


const app = express();

app.get('/greet',  (req, res) => {
const {name} = req.query;
res.send({msg:`Welcome !!!`})
  })
            
   


