import express, {Request, Response, Router } from 'express';

const router: Router = express.Router();

//Defining routes
router.get('/bouncer/login', (req: Request, res: Response) => {
    res.send('<p>Reached</p>');
});

export default router;