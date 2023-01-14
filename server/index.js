const express = require('express');
const app = express();
const path = require('path');
const port = process.env.port || 4000;

app.use(express.json());
const cors = require('cors');
app.use(cors());

app.use(express.static(path.join(__dirname, '../client/build')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`);
// });

const mysql = require('mysql');

// sql 연동
const db = mysql.createConnection({
  user: 'root',
  host: 'localhost',
  password: '0909',
  database: 'bbs',
});

// 잘 연동 되었는지 확인
db.connect(function (err) {
  if (err) throw err;
  console.log('DB is Connected!');
});

categoryQuery = 'SELECT * FROM category';
let category = [];

db.query(categoryQuery, function (err, results, fields) {
  // testQuery 실행
  if (err) {
    console.log(err);
  }
  category = results;
});

app.get('/category', (req, res) => {
  res.send(category);
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});
