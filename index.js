import express from 'express';
import '@babel/polyfill';
import bodyParser from 'body-parser';

const app = express();


app.get('/', (req,res) => {
  res.send({message:'hi'})
})

app.get('/404', (res,send) => {
  res.status(500).end('error')
})


app.listen(8000,() => console.log('listening'))
