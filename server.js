const express=require('express');
const bodyParser=require('body-parser');
const app =express();//생성자
const port=5000;//서버의 포트는 5000번으로
const fs=require('fs');



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//mysql 연동 부분
const data=fs.readFileSync('./database.json');
const conf=JSON.parse(data);
const mysql=require('mysql2');

const connection=mysql.createConnection({
    host:conf.host,
    user:conf.user,
    password:conf.password,
    port:conf.port,
    database:conf.database
})

connection.connect();

//파일이 포함된것을 업로드 하려면 다음 라이브러리를 활용한 작업이 팔요함.
//npm install --save multer
const multer=require('multer');
const upload=multer({dest:'./upload'});//업로드가 되는 위치 설정, 여기서는 루트폴더의 upload파일


app.get('/api/customers',(req,res)=>{
    connection.query('select * from customer',(err,rows,fields)=>{
        if (err) throw err;
        res.send(rows);  
    })
})

app.use('/image',express.static('./upload'));//사용자는 image라는 경로로 접근하는데 사실은 그게 upload경로에 접근하는거.그리고 express.static은 정적 자사이 포함된 디렉토리 이름을 넣어주면 이를 미들웨어 함수에 전달하여 파일의 직접적인 제공을 시작할 수 있음


// app.get('/api/customers',(req,res)=>{
//     res.send();
// });

app.post('/api/customers',upload.single('image'),(req,res)=>{
    let sql='insert into customer values (null,?,?,?,?,?)';
    let image='/image/'+req.file.filename;//multer가 알아서 안 겹치게 넣어줌
    let name=req.body.name;
    let birthday=req.body.birthday;
    let gender=req.body.gender;
    let job=req.body.job;
    let params=[image, name, birthday, gender, job];
    connection.query(sql, params, (err, rows, fields)=>{
        if (err) throw err;
        res.send(rows);
    })
})
app.listen(port,()=>console.log(`Listening on port${port}`));