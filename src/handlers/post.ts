import {Request, Response} from "express";

//static data
enum mediaTypeEnum {
    png = ".png",
    jpg = ".jpg",
    jpeg = ".jpeg",
    gif = ".gif",
    mp4 = ".mp4",
}

const post = {
    "id": 1,
    "type": mediaTypeEnum.png,
    "title" : "They sap Mana",
    "alt": "an warmly painted image of a tomato",
    "path" : "images/mana_sapper.png",
    "description" : "A painting made when I learning painting",
    "date" : "18/04/2024",
    "nsfw": false
}


//handler
export const getPost = async (req: Request, res: Response) => {
    try{
        const logTime = new Date().toString();
        console.log("📤 Successfully Processed Post Request : " + logTime);
        return res.status(200).json(post);
    } catch (error: any){
        console.log(error);
        res.status(500).json({message: "some ting wong!"});
    }
}