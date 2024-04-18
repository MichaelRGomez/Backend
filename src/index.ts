import 'dotenv/config';
import express, {Request, Response} from "express";
import bodyParser from 'body-parser';
import fs from 'fs';
import path from 'path';
import { getGif, getImage, getVideo } from './handlers/media';


//Express app
const app = express();
//env
const PORT = process.env.PORT || 3000;
const DIR = process.env.DIR as string;

//adding necessary middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(DIR as string, 'public')));

//Defining routes


//🤓 figuring out to serve files to the front end


//Media handlers TODO: remember to put sanitization middleware on these routes
app.get('/image/:filename', getImage);
app.get('/gif/:filename', getGif);
app.get("/video/:filename", getVideo);

app.get('/hello', (req: Request, res: Response) => {
    return res.status(200).send("Hello World!");
})

//Starting the server
app.listen(PORT, () => {
    console.log(`Server is running on port 🚢 ${PORT} \n`);
});