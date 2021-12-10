const express = require('express');
const Short = require('../models/URLModel');
const validUrl = require('valid-url');
const router = express.Router();




//Shortener route
router.get('/new/:url(*)', (req, res) => {
    
  const inputURL = req.params.url;
  const outputURL = Math.floor(Math.random() * 10000).toString();
  
  const data = new Short({
    originalUrl: inputURL,
    shortUrl: outputURL
  });
  
  

  
  if (validUrl.isUri(inputURL)) {
    data.save( err => {
        if (err) {
          res.send('Error saving to DB'); 
        }
      });
  } else {
    res.json({ error: 'Not a valid URL' }); 
  }
  
  res.json(data);
  
});

router.get('/get/:short',async (req, res) => {
  
  const forward = req.params.short;
  
 const data = await Short.findOne({ shortUrl: forward })
 const regex = new RegExp('^(http|https)://', 'i');
    const originalURL = data.originalUrl;

    if (regex.test(originalURL)) {
      res.redirect(301, data.originalUrl);
    } else {
      res.redirect(301, `http://${data.originalUrl}`); 
    }
    
  
});

module.exports = router;