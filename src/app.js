import express from 'express';
import db from './config/dbConnect.js';
import routes from './routes/index.js';
import handlerErrors from './middlewares/handlerErrors.js';
import handle404 from './middlewares/handle404.js';

db.on('error', console.log.bind(console, 'error de conexão'));
db.once('open', () => {
	console.log('conexão com o banco feita com sucesso');
});


const app = express();
app.use(express.json());
routes(app);

app.use(handle404);

app.use(handlerErrors);

export default app;