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

const post_3 = {
    "id": 2,
    "type": mediaTypeEnum.gif,
    "title" : "The World Spinning",
    "alt": "a gif very pixelated of the world spinning with stars in the background",
    "path" : "gifs/world.gif",
    "description" : "A place holder image",
    "date" : "18/04/2024",
    "nsfw": false
}

const post_4 = {
    "id": 2,
    "type": mediaTypeEnum.mp4,
    "title" : "Clove's Voice",
    "alt": "A TikTok reacting to Clove from Valorant's voice being scottish",
    "path" : "videos/funny.mp4",
    "description" : "A place holder image",
    "date" : "18/04/2024",
    "nsfw": false
}


//handler
export const getPost = async (req: Request, res: Response) => {
    try{

        let post = null

        const id = parseInt(req.params.id);

        switch(id){
            case 1:
                post = post_1; break;
            case 2:
                post = post_2; break;
            case 3:
                post = post_3; break;
            case 4:
                post = post_4; break;
            default:
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