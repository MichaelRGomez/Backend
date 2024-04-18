import 'dotenv/config';
import express, {Request, Response} from "express";
import bodyParser from 'body-parser';
import fs from 'fs';
import path from 'path';


//Express app
const app = express();
//env
const PORT = process.env.PORT || 3000;
const DIR = process.env.DIR as string;

console.log("🚩 Path: " + process.env.DIR + "\n");

//adding necessary middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(DIR as string, 'public')));

//Defining routes


//🤓 figuring out to serve files to the front end

//Image handler example
app.get('/image/:filename', (req: Request, res: Response) => {
    try{
        //TODO: Doing it this will definitely require some good input sanitization
        const imagePath : string = path.join(DIR, 'public', 'images', req.params.filename);

        const file = fs.readFileSync(imagePath);
        const ext = path.extname(req.params.filename).toLocaleLowerCase();
        let contentType;
        
        if(ext == '.jpg' || ext === '.jpeg'){
            contentType = 'image/jpeg';
        } else (ext === '.png'); {
            contentType = 'image/png';
        }

        res.setHeader('Content-Type', contentType);
        res.send(file)


        return res;
    } catch (error: any){
        console.log(error);
        return res.status(500).json({message: "some ting wong!"});
    }
});

//Gif
app.get('/gif/:filename', (req: Request, res: Response) => {
    try{
        //TODO: Doing it this will definitely require some good input sanitization
        const gifPath : string = path.join(DIR, 'public', 'gifs', req.params.filename);

        const file = fs.readFileSync(gifPath);
        
        res.setHeader('Content-type', 'image/gif');
        res.send(file);

    } catch(error:any) {
        console.log(error);
        return res.status(500).json({message: "some ting wong!"});
    }
})

//Video
app.get("/video/:filename", (req: Request, res: Response) => {
    try {
        const videoPath = path.join( DIR, 'public', 'videos', req.params.filename);

        const file = fs.readFileSync(videoPath);

        res.setHeader('Content-type', 'video/mp4');
        res.send(file);
        
    } catch(error:any) {
        console.log(error);
        return res.status(500).json({message: "some ting wong!"});
    }
})

app.get('/hello', (req: Request, res: Response) => {
    return res.status(200).send("Hello World!");
})

//Starting the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log("READY! 👍");
});