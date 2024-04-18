import {Request, Response} from "express";

//static data
enum mediaTypeEnum {
    png = ".png",
    jpg = ".jpg",
    jpeg = ".jpeg",
    gif = ".gif",
    mp4 = ".mp4",
}

const post_1 = {
    "id": 1,
    "type": mediaTypeEnum.png,
    "title" : "They sap Mana",
    "alt": "an warmly painted image of a tomato",
    "path" : "images/mana_sapper.png",
    "description" : "A painting made when I learning painting",
    "date" : "18/04/2024",
    "nsfw": false
}

const post_2 = {
    "id": 2,
    "type": mediaTypeEnum.png,
    "title" : "Placeholder",
    "alt": "a place holder image",
    "path" : "images/placeholder.png",
    "description" : "A place holder image",
    "date" : "18/04/2024",
    "nsfw": false
}


//handler
export const getPost = async (req: Request, res: Response) => {
    try{

        let post = null

        if(req.params.id == "1") {
            post = post_1;
        } else if (req.params.id == "2") {
            post = post_2;
        } else {
            return res.status(404).json({message: "no post"});
        }

        const logTime = new Date().toString();
        console.log("📤 Successfully Processed Post Request : " + logTime);
        return res.status(200).json(post);
    } catch (error: any){
        console.log(error);
        res.status(500).json({message: "some ting wong!"});
    }
}