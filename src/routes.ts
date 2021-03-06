import cors from 'cors';
import { Router } from 'express';
import { AnswerController } from './controllers/AnswerController';
import { NpsController } from './controllers/NpsController';
import { SendMailController } from './controllers/SendMailController';
import { SurveyController } from './controllers/SurveyController';
import { UserController } from './controllers/UserController';

const router = Router();

const userController = new UserController();
const surveyController = new SurveyController();
const sendMailController = new SendMailController();
const answerController = new AnswerController();
const npsController = new NpsController();

router.post('/users', cors(), userController.create);
router.post('/surveys', cors(), surveyController.create);
router.get('/surveys', cors(), surveyController.show);
router.post('/sendMail', cors(), sendMailController.execute);
router.get('/answers/:value', cors(), answerController.execute);
router.get('/nps/:survey_id', cors(), npsController.execute);

export { router };

