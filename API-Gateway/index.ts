import express from 'express';
import { createProxyMiddleware, Filter, Options, RequestHandler } from 'http-proxy-middleware';
import bodyParser from 'body-parser';
const app = express();

app.post('/crypto/sma', createProxyMiddleware({ target: process.env.CRYPTO_URL, changeOrigin: true }));
app.get('/stocks/vwap', createProxyMiddleware({ target: process.env.STOCKS_URL, changeOrigin: true }))
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: true}))
app.listen(3999, () => {
    console.log("listening of port 3999");
})