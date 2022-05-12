import express from 'express';
import bodyParser from 'body-parser';
import { AppRouter } from './appRouter';
import './controllers/WapController';
const dotenv = require('dotenv');
dotenv.config();
const app = express();
app.use(bodyParser.urlencoded({extended: true}))
app.use(AppRouter.getInstance());

app.listen(4001, () => {
    console.log("listening of port 4001");
})