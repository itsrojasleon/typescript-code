import express from 'express';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';
import { router } from './routes/loginRoutes';
import { router as controllerRouter } from './controllers/decorators/controller';
import './controllers/LoginController';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['alsdasxxcxcrtrtggvvv'] }));
app.use(router);
app.use(controllerRouter);

app.listen(3000, () => {
  console.log('Listening on Port 3000');
});
