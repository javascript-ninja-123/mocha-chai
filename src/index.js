import express from 'express';
import '@babel/polyfill';
import bodyParser from 'body-parser';

const app = express();


app.get('/', (req,res) => {
  res.send({message:'hi'})
})

app.get('/404', (req,res) => {
  res.status(500).end('error')
})


app.listen(8080,() => console.log('listening'))
