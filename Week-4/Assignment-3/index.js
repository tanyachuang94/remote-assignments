const express = require('express');
const mysql = require('mysql');

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

const app = express();

app.get('/createdb',(req, res) => {
    let sql = 'Create Database assignment';
    db.query(sql, (err,result) => {
        if (err) throw err;
        console.log(result);
        res.send('Database created.');
    });
});

app.get('/createpostable',(req, res) => {
    let sql = 'CREATE TABLE user (id int AUTO_INCREMENT, email VARCHAR(255), password VARCHAR(255), PRIMARY KEY (id))';
    db.query(sql, (err,result) => {
        if (err) throw err
        console.log(result);
        res.send('User table created.');
    });
});

app.listen('3000', () => {
    console.log('Sever started on port 3000');
});