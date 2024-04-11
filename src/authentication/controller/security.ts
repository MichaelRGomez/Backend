import { Request, Response } from "express";

export const login = (req: Request, res: Response) => {
    try {
        
        // get the username and password from the request body
        const { username, password } = req.body;

        // // get the ip address of the user
        // const ip_address = getClientIP(req);

        // // authenticate the request and get the session
        // const session = await Authentication.login( username, password, ip_address );
        
        // // if a session was created means the user is authenticated else return an error (400)
        // if ( !session ) { return res.status(400).json({message: 'Wrong Credentials! Try again.'}) }

        // // set the cookie with the token
        // res.cookie( AUTH_COOKIE_NAME, session.refresh_token, {
        //     expires: new Date( Date.now() + ( +(process.env.JWT_REFRESH_EXPIRES || 3600000) )),
        //     httpOnly: true,
        //     secure: !!process.env.HTTP
        // })
        
        // return res.status(200).json(session);
        return res.status(200).json({message: "Logged In" });

    } catch (error: any) {

        console.log(error)
        return res.status(500).json({message: "There was an error"})
    }
}