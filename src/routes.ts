import express, { Request, Response, NextFunction, Router } from 'express';
import { UserController } from './controllers/UserController';
import { SurveyController } from './controllers/SurveyController';
import { SendMailController } from './controllers/SendMailController';
import { AnswerController } from './controllers/AnswerController';
import { NpsController } from './controllers/NpsController';
import cors from 'cors';

const router = Router();

const userController = new UserController();
const surveyController = new SurveyController();
const sendMailController = new SendMailController();
const answerController = new AnswerController();
const npsController = new NpsController();

const app = express();

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

// Enable pre-flight across-the-board
app.options('*', cors()); // include before other routes

router.post('/users', userController.create);
router.post('/surveys', surveyController.create);
router.get('/surveys', surveyController.show);
router.post('/sendMail', sendMailController.execute);
router.get('/answers/:value', answerController.execute);
router.get('/nps/:survey_id', npsController.execute);

export { router };
