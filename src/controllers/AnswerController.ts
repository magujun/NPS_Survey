import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { AppError } from "../errors/appErrors";
import { SurveysUsersRepository } from "../repositories/SurveysUsersRepository";

class AnswerController {
  async execute(request: Request, response: Response) {
    const { value } = request.params;
    const { u } = request.query;

    //   http://localhost:3333/answers/${nota}?u={id_usuario}
    /**
     *
     Route/Request params => Parametros que compoem a rota, obrigatorios
     routes.get("/answers/:value")
     
     Query Params => Busca, paginaçao, nao obrigatorios
     ?chave=valor
     
     */

    const surveysUsersRepository = getCustomRepository(SurveysUsersRepository);
    const surveyUser = await surveysUsersRepository.findOne({
      id: String(u),
    });

    if (!surveyUser) {
      throw new AppError("Survey User does not exist!");
      // throw new Error(); // Standard
      // return response.status(400).json({
      //   error: "Survey User does not exist!",
      // });
    }

    surveyUser.value = Number(value);

    await surveysUsersRepository.save(surveyUser);
    return response.json(surveyUser);
  }
}

export { AnswerController };
