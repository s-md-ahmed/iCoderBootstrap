const express = require("express");
const path = require("path");
const app = express();
const port = 105;
app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')) // Set the views directory 
// ENDPOINTS
app.get('/', (req, res)=>{
    res.status(200).render('neweb.pug');
})
app.get('/about', (req, res)=>{
    res.status(200).render('about.pug');
})
app.get('/contact', (req, res)=>{
    res.status(200).render('contact.pug');
})
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
})
