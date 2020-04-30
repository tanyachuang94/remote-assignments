const express = require('express');
const app = express();
// const router = express.Router();
// const bodyParser = require('body-Parser');
// const cookieParser = require('cookie-Parser');

app.use ( express.static('public'));
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
        var sum = 0;
        for ( i = 1 ; i <= number ; i ++ ) {
            sum = sum + i ;
        }
        res.send(sum.toString());
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