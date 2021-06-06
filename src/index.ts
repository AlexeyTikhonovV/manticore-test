import express from "express";
import api from './api';

const app = express();
const port = 8080;

app.use('/api', api);
app.listen(port, () => {
	// tslint:disable-next-line:no-console
	console.log(`server started at http://localhost:${ port }`);
});
