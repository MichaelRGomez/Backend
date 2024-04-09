import express, {Request, Response, Router } from 'express';

const router: Router = express.Router();

//Defining routes
router.get('/content', (req: Request, res: Response) => {
    res.send('<p>Goal</p>');
});

export default router;