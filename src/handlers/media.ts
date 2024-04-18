import { Request, Response } from "express";
import fs from "fs";
import path from "path";
import 'dotenv/config';

const DIR = process.env.DIR as string;


//Returns a Image File
export const getImage = async (req: Request, res: Response) => {
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

        const logTime = new Date().toString();
        console.log("📤 Successfully Processed Image Request : " + logTime);
        return res;
    } catch (error: any){
        console.log(error);
        return res.status(500).json({message: "some ting wong!"});
    }
}

//Returns a Gif File
export const getGif = async (req: Request, res: Response) => {
    try{
        //TODO: Doing it this will definitely require some good input sanitization
        const gifPath : string = path.join(DIR, 'public', 'gifs', req.params.filename);

        const file = fs.readFileSync(gifPath);
        
        res.setHeader('Content-type', 'image/gif');
        res.send(file);

        const logTime = new Date().toString();
        console.log("📤 Successfully Processed Gif Request : " + logTime);
    } catch(error:any) {
        console.log(error);
        return res.status(500).json({message: "some ting wong!"});
    }
}

//Returns a Video File
export const getVideo = async (req: Request, res: Response) => {
    try {
        const videoPath = path.join( DIR, 'public', 'videos', req.params.filename);

        const file = fs.readFileSync(videoPath);

        res.setHeader('Content-type', 'video/mp4');
        res.send(file);

        const logTime = new Date().toString();
        console.log("📤 Successfully Processed Video Request : " + logTime);

    } catch(error:any) {
        console.log(error);
        return res.status(500).json({message: "some ting wong!"});
    }
}