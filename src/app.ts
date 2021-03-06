import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import 'reflect-metadata';
import createConnection from './database';
import { AppError } from './errors/appErrors';
import { router } from './routes';

createConnection();
const app = express();

app.use(express.json());
app.use(router);

// Handle errors
app.use(
	(err: Error, request: Request, response: Response, _next: NextFunction) => {
		if (err instanceof AppError) {
			return response.status(err.statusCode).json({
				message: err.message,
			});
		}
		return response.status(500).json({
			status: 'Error',
			message: 'Internal server error ${err.message}',
		});
		_next();
	}
);

export { app };

