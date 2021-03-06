// => app.ts

// import 'reflect-metadata';
// import './database';
// import { router } from "./routes";

// const app = express();

// app.use(express.json());
// app.use(router);

import cors from 'cors';
import { NextFunction, Request, Response } from 'express';
import { app } from './app';

const PORT = 8000;
  
app.use(cors());

// Enable CORS
app.use((request: Request, response: Response, _next: NextFunction) => {
	response.header('Access-Control-Allow-Origin', 'localhost'); // match the domain you will make the request from
	response.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept'
	);
	_next();
});

app.listen(PORT, () => console.log('⚡️ Node server is running at port:',PORT,'⚡️'));

// /**
//  * GET => Busca
//  * POST => Salvar
//  * PUT => Alterar
//  * DELETE => Deletar
//  * PATCH => Alteraçao específica
//  */

//  http://localhost:3333/users

// app.get("/users", (request, response) => {
//   return response.send("Hello World - NLW04");
//   return response.json({message: "Hello World - NLW04"});
//});

// 1 param => Rota(Recurso API)
// 2 param => request, response

// app.get("/", (request, response) => {
//        return response.json({message: "Hello World - NLW04"});
// });
// app.post("/", (request, response)=> {
//     // Recebeu os dados para salvar
//     return response.json({message: "Os dados foram salvos com sucesso!"});
// });