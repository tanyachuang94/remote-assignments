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
    const number = req.query.number
    if (number === 'xyz'){
        res.send("Wrong Parameter");
    } else if ( number > 0 ) {
        var sum = 0;
        for ( i = 1 ; i <= number ; i ++ ) {
            sum = sum + i ;
        }
        res.send(sum.toString());
    } else {
        res.send("Lack of Parameter");
    }
});

// Assignment 4

app.get ('/myName', function (req , res) {
    
    //  var username = req.query.username ;
    // if (username == ''){
        console.log('Cookies: ', req.cookies);
        // return res.redirect('trackname.html');
    // } else {
    //     res.cookie('username', req.body.username);
    //     console.log('Cookies: ', req.cookies);
    // }
});

app.post ('/trackName', (req , res) => {
    res.cookie('name', req.body.username);
    res.send( 'myName' , {name : req.cookies.username} );
});

app.listen(3000, () => {
    console.log('running on localhost:3000')
});