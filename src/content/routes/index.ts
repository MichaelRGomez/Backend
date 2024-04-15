import express, {Request, Response, Router } from 'express';
import { home } from '../controller/home';

const router: Router = express.Router();

//Defining routes
router.get('/content', (req: Request, res: Response) => {
    res.send('<p>Goal</p>');
});

router.get('/home', home)

export default router;