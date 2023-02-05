const express = require('express');
const app = express();
const path = require('path');
const port = process.env.port || 4000;
const cors = require('cors');

const corsOption = {
  origin: 'http://localhost:3000',
  credential: true,
  optionSuccessStatus: 200,
};

app.use(express.json());
app.use(cors(corsOption));

app.use(express.static(path.join(__dirname, '../client/build')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

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

app.get('/api/category', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  const categoryQuery = 'SELECT * FROM category';
  db.query(categoryQuery, (err, result) => {
    res.send(result);
    // console.log(result);
  });
});

app.get('/api/list', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  // const boardQuery = 'SELECT * FROM board';
  const boardQuery =
    'SELECT board.*, category.category_name FROM board INNER JOIN category ON board.category_id = category.id ORDER BY id DESC';
  db.query(boardQuery, (err, result) => {
    res.send(result);
    // console.log(result);
  });
});

app.get(`/api/post/:id`, (req, res) => {
  const id = req.params.id;
  const postQuary = `SELECT board.*, category.category_name FROM board INNER JOIN category ON board.category_id = category.id WHERE board.id = ${id}`;
  // const postQuary = `SELECT board.*, category.category_name FROM board INNER JOIN category ON board.category_id = category.id WHERE board.id=1`;
  db.query(postQuary, (err, result) => {
    res.send(result);
    console.log(result);
  });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});
