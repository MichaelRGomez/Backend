import express, {Request, Response, Router } from 'express';
import { login } from '../controller/security';

const router: Router = express.Router();

//Defining routes
router.post('/login', login);

export default router;