const express = require('express');
// const router = express.Router();
// const bodyParser = require('body-Parser');
// const cookieParser = require('cookie-Parser');

const app = express();
// app.use(bodyParser.urlencoded({extended:false}));
// app.use(cookieParser());


// app.set('view engine' ,'pug');

// Assignment 1
app.get ('/', (req , res) => {
    res.send("Hello, I'm Tanya.");
});

// Assignment 2
app.get ('/getData', function (req , res) {
    const number = req.query.number
    if (number === 'xyz'){
        res.send("Wrong Parameter");
    } else if ( number > 0 ) {
        var msg = "1";
        for ( i = 2 ; i <= number ; i ++ ) {
            msg += "+" + i ;
        }
        res.send(msg);
    } else {
        res.send("Lack of Parameter");
    }
});

// app.get ('/getData', (req , res) => {
//     res.redirect(`/?number=${}`);
// });



// app.get ('/myName', (req , res) => {
//     res.send({ name : req.cookies.username});
// });

// app.post ('/myName', (req , res) => {
//     res.cookie('username', req.body.username);
//     res.send({ name : req.body.username});
// });

app.listen(3000, () => {
    console.log('running on localhost:3000')
});