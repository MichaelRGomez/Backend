import dotenv from 'dotenv';
import express, {Request, Response} from "express";
import bodyParser from 'body-parser';
import fs from 'fs';

//🤓 figuring out to serve files to the front end

//Loading environment variables
dotenv.config();

//Express app
const app = express();
const PORT = process.env.PORT || 3000;

//adding necessary middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Defining routes
app.get('/home', (req: Request, res: Response) => {
    try{
        const fileStream = fs.createReadStream('./file-server/funny.mp4');
        fileStream.pipe(res);
    
        return res.status(200);
    } catch (error: any){
        console.log(error);
    }
});

//Starting the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log("READY! 👍");
});