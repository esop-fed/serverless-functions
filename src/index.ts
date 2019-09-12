import * as express from 'express';
import * as bodyParser from 'body-parser';
import message from '../api/src/message';

const app = express();
const port = process.env.PORT || 3040;
const host = process.env.HOST || 'localhost';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/message', message);
app.post('/message', message);

app.listen(Number(port), host, () => {
    console.log(`本地：http://${host}:${port}`);
});
