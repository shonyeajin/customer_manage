const express=require('express');
const bodyParser=require('body-parser');
const app =express();//생성자
const port=process.env.PORT || 5000;//서버의 포트는 5000번으로

app.get('/api/hello',(req,res)=>{
    res.send({message:'Hello Express!'});
});
app.listen(port,()=>console.log(`Listening on port${port}`));