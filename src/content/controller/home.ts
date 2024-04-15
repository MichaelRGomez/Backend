import { Request, Response } from "express"

export const home = async (req: Request, res: Response) => {
    try{
        const posts = {
            1: {
                title: "Some Art",
                type: "png",
                path: "placeholder",
                alt: "place holder image",
                date: "05/04/2024",
                description: "words related to Media"
            }
        }

        return res.status(200).json(posts);

    } catch (error: any){
        console.log(error);
        return res.status(500).json({messsage: "server error"});
    }
}