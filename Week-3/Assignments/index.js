const express = require('express');
const cookieParser = require('cookie-parser');
// const router = express.Router();
// const bodyParser = require('body-Parser');

const app = express();
app.use (express.static('public'));
app.use(cookieParser());
// app.use(bodyParser.urlencoded({extended:false}));
// app.set('view engine' ,'pug');

// Assignment 1
app.get ('/', function (req , res) {
    res.send("Hello, I'm Tanya.");
});

// Assignment 2
app.get ('/getData', function (req , res) {
    const number = req.query.number;
    if ( number > 0 ) {
        var sum = 0;
        for ( i = 1 ; i <= number ; i ++ ) {
            sum = sum + i ;
        }  
        res.send(sum.toString());
    } 
    else if ( number === undefined ){
        res.send("Lack of Parameter"); 
    } 
    else {
        res.send("Wrong Parameter");
    }
});

// Assignment 4
app.get ('/myName', function (req , res) {
    var username = req.cookies.name
    // if (!username) {
    //     res.redirect('trackname.html');
    // };

    if ( username != undefined ){
        res.send("Done");
    } else if ( username = '' ){
        res.redirect('trackname.html');
    } else {
        res.redirect('trackname.html');
    }
    // console.dir(req.cookies.name)
});

app.get ('/trackName', (req , res) => {
    var username = req.query.name ;
    res.cookie('name', username);
    res.redirect('/myName');
   
});

app.listen(3000, () => {
    console.log('running on localhost:3000')
});