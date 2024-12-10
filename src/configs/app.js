import express, { json, urlencoded } from "express";
import morgan from 'morgan';
import engine from 'express-edge';
import path from 'path';
import module from '../modules/index.js';
import * as ErrorHandler from '../middlewares/errorHandler.js';

export const app = express();
const __dirname = path.resolve();

app.use(engine);
app.set('views', `${__dirname}/src/views`);

app.use(json());
app.use(urlencoded({ extended: false }));
app.use(morgan('dev'));

module(app);

app.use(ErrorHandler.handleNotFound);
app.use(ErrorHandler.handleOther);