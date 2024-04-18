import 'dotenv/config';
import express, {Request, Response} from "express";
import bodyParser from 'body-parser';
import path from 'path';
import cors from "cors";


//TODO: handlers will be refactored later
import { getGif, getImage, getVideo } from './handlers/media';

//Free Space
const post = {
    "id": 1,
    "title" : "They sap Mana",
    "alt": "an warmly painted image of a tomato",
    "path" : "mana_sapper.png",
    "description" : "A painting made when I learning painting",
    "date" : "18/04/2024",
    "nsfw": false
}

//Express app
const app = express();

//env
const PORT = process.env.PORT || 3000;
const DIR = process.env.DIR as string;
const frontend = process.env.FRONT_END_DOMAIN as string;

//adding necessary middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({origin: frontend, credentials: true}));
app.use(express.static(path.join(DIR, 'public')));

//Defining routes

//Media handlers TODO: remember to put sanitization middleware on these routes
app.get('/image/:filename', getImage);
app.get('/gif/:filename', getGif);
app.get("/video/:filename", getVideo);

app.get("/post/:id", (req: Request, res: Response) => {
    try{
        const logTime = new Date().toString();
        console.log("📤 Successfully Processed Post Request : " + logTime);
        return res.status(200).json(post);
    } catch (error: any){
        console.log(error);
        res.status(500).json("some ting wong!");
    }
});

app.get('/hello', (req: Request, res: Response) => {
    return res.status(200).send("Hello World!");
})

//Starting the server
app.listen(PORT, () => {
    console.log(`Server is running on port 🚢 ${PORT} \n`);
});