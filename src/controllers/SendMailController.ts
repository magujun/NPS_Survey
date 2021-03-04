import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { SurveysRepository } from '../repositories/SurveysRepository';
import { SurveysUsersRepository } from '../repositories/SurveysUsersRepository';
import { UsersRepository } from '../repositories/UsersRepository';
import sendMailService from '../services/SendMailService';
import { resolve } from 'path';
import { AppError } from '../errors/appErrors';

class SendMailController {
	async execute(request: Request, response: Response) {
		const { email, survey_id } = request.body;

		const usersRepository = getCustomRepository(UsersRepository);
		const surveysRepository = getCustomRepository(SurveysRepository);
		const surveysUsersRepository = getCustomRepository(SurveysUsersRepository);

		const user = await usersRepository.findOne({ email });

		if (!user) {
			throw new AppError('User does not exist!');
			// return response.status(400).json({
			//   error: "User does not exist!",
			// });
		}
		const survey = await surveysRepository.findOne({
			id: survey_id,
		});
    
		if (!survey) {
			throw new AppError('Survey does not exist!');
			// return response.status(400).json({
			//   error: "Survey does not exist!",
			// });
		}

		const npsPath = resolve(__dirname, '..', 'views', 'emails', 'npsMail.hbs');

		const surveyUserAlreadyExists = await surveysUsersRepository.findOne({
			// Condiçao de OR
			// where: [{ user_id: user.id }, { value: null }],
			// Condiçao de AND
			where: { user_id: user.id, value: null },
			relations: ['user', 'survey'],
		});

		const variables = {
			name: user.name,
			title: survey.title,
			description: survey.description,
			// user_id: user.id,
			id: '',
			link: process.env.URL_MAIL,
		};

		if (surveyUserAlreadyExists) {
			variables.id = surveyUserAlreadyExists.id;
			await sendMailService.execute(email, survey.title, variables, npsPath);
			return response.json(surveyUserAlreadyExists);
		}

		// Salvar as informaçoes na tabela surveyUser
		const surveyUser = surveysUsersRepository.create({
			user_id: user.id,
			survey_id,
		});
		await surveysUsersRepository.save(surveyUser);

		// Enviar email para o usuário
		variables.id = surveyUser.id;
		await sendMailService.execute(email, survey.title, variables, npsPath);

		return response.json(surveyUser);
	}
}

export { SendMailController };
