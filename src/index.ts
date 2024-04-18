import 'dotenv/config';
import express, {Request, Response} from "express";
import bodyParser from 'body-parser';
import path from 'path';
import cors from "cors";


//TODO: handlers will be refactored later
import { getGif, getImage, getVideo } from './handlers/media';
import { getPost } from './handlers/post';

//Free Space

//Express app
const app = express();

//env
const PORT = process.env.PORT || 3000;
const DIR = process.env.DIR as string;
const frontend = process.env.FRONT_END_DOMAIN;

//adding necessary middleware
app.use(cors({origin: frontend}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/media', express.static(path.join(DIR, 'public'))); //this needs a middleware to sanatize the request TODO::

//Defining routes

//Media handlers TODO: remember to put sanitization middleware on these routes
app.get("/post/:id", getPost);

app.get('/hello', (req: Request, res: Response) => {
    return res.status(200).send("Hello World!");
})

//Starting the server
app.listen(PORT, () => {
    console.log(`Server is running on port 🚢 ${PORT} \n`);
});