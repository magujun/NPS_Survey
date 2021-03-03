// => app.ts
// import express from 'express';
// import 'reflect-metadata';
// import './database';
// import { router } from "./routes";

// const app = express();

// app.use(express.json());
// app.use(router);

import { app } from "./app";

app.listen(5500, () => console.log("Server is running!"));

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
