const express = require('express');
const mysql = require('mysql');
const app = express();
app.use (express.static('public'));

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'assignment'
});

db.connect((err) => {
    if(err){
        throw err;
    };
    console.log('Mysql connected.');
});

app.get('/signup',(req, res) => {
    const email = req.query.email;
    const pw = req.query.password;

    let sql = `SELECT * FROM assignment.user WHERE email = '${email}'`;
    let query = db.query(sql, (err,result) => {
        if (err) throw err;
        if (result = ''){
            let post = {email: email, password: pw};
            let sql = 'INSERT INTO user SET ?';
            let query = db.query(sql, post, (err,result) => {
             if (err) throw err;
             res.redirect('member.html');
            });
        } else {
            res.redirect('index.html');
            res.send("same email exists."); 
        }
        xhr.send();
    });

});

// app.get('/createdb',(req, res) => {
//     let sql = 'CREATE DATABASE assignment';
//     db.query(sql, (err,result) => {
//         if (err) throw err;
//         console.log(result);
//         res.send('Database created.');
//     });
// });

// app.get('/createpostable',(req, res) => {
//     let sql = 'CREATE TABLE user (id int AUTO_INCREMENT, email VARCHAR(255), password VARCHAR(255), PRIMARY KEY (id))';
//     db.query(sql, (err,result) => {
//         if (err) throw err
//         console.log(result);
//         res.send('User table created.');
//     });
// });

app.listen(3000, () => {
    console.log('Sever started on port 3000');
})