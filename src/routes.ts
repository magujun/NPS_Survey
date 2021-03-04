import express, { Router } from 'express';
import { UserController } from './controllers/UserController';
import { SurveyController } from './controllers/SurveyController';
import { SendMailController } from './controllers/SendMailController';
import { AnswerController } from './controllers/AnswerController';
import { NpsController } from './controllers/NpsController';

const router = Router();

const userController = new UserController();
const surveyController = new SurveyController();
const sendMailController = new SendMailController();
const answerController = new AnswerController();
const npsController = new NpsController();

const app = express();

// Enable CORS
app.use(function (res, req, next) {
	res.header('Access-Control-Allow-Origin', 'localhost'); // match the domain you will make the request from
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept'
	);
	next();
});

router.post('/users', userController.create);
router.post('/surveys', surveyController.create);
router.get('/surveys', surveyController.show);
router.post('/sendMail', sendMailController.execute);
router.get('/answers/:value', answerController.execute);
router.get('/nps/:survey_id', npsController.execute);
export { router };
