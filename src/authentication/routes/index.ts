import express, {Request, Response, Router } from 'express';
import { login } from '../controller/security';
import { loginJoiSchema } from '../middleware/validations/login';
import { joiValidationGenerator } from '../middleware/utility/validation-generator';

const router: Router = express.Router();

//Defining routes
router.post('/login', joiValidationGenerator(loginJoiSchema),login);

export default router;