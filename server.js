const express=require('express');
const bodyParser=require('body-parser');
const app =express();//생성자
const port=5000;//서버의 포트는 5000번으로

app.get('/api/customers',(req,res)=>{
    res.send([{
        'id': 1,
        'image':'https://placeimg.com/64/64/1',
        'name':'홍길동',
        'birthday':'324',
        'gender':'남자',
        'job':'프로그래머'
      },{
        'id': 2,
        'image':'https://placeimg.com/64/64/2',
        'name':'김또또',
        'birthday':'323244',
        'gender':'중성화',
        'job':'강아지'
      },{
        'id': 3,
        'image':'https://placeimg.com/64/64/3',
        'name':'손예진',
        'birthday':'324222',
        'gender':'남자',
        'job':'학생'
      }]);
});
app.listen(port,()=>console.log(`Listening on port${port}`));